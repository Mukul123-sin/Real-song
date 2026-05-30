const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const dataDir = path.join(root, "data");
const uploadsDir = path.join(root, "uploads");
const usersFile = path.join(dataDir, "users.json");
const albumsFile = path.join(dataDir, "albums.json");
const songsFile = path.join(dataDir, "songs.json");
const listenerStateFile = path.join(dataDir, "listener-state.json");
const sessions = new Map();
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".mp3": "audio/mpeg"
};

async function ensureDataStore() {
  await fsp.mkdir(dataDir, { recursive: true });
  await fsp.mkdir(uploadsDir, { recursive: true });
  for (const file of [usersFile, albumsFile, songsFile]) {
    try {
      await fsp.access(file);
    } catch {
      await fsp.writeFile(file, "[]", "utf8");
    }
  }
  try {
    await fsp.access(listenerStateFile);
  } catch {
    await fsp.writeFile(listenerStateFile, "{}", "utf8");
  }
}

async function readJson(file) {
  await ensureDataStore();
  return JSON.parse(await fsp.readFile(file, "utf8"));
}

async function writeJson(file, value) {
  await ensureDataStore();
  await fsp.writeFile(file, JSON.stringify(value, null, 2), "utf8");
}

async function readUsers() {
  return readJson(usersFile);
}

async function writeUsers(users) {
  await writeJson(usersFile, users);
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 64, "sha512").toString("hex");
  return { salt, hash };
}

function verifyPassword(password, user) {
  const { hash } = hashPassword(password, user.salt);
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(user.passwordHash, "hex"));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 25_000_000) {
        req.destroy();
        reject(new Error("Request body is too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function parseCookies(req) {
  return Object.fromEntries(
    (req.headers.cookie || "")
      .split(";")
      .map((item) => item.trim().split("="))
      .filter(([key, value]) => key && value)
  );
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}

function sendJson(res, status, body, headers = {}) {
  res.writeHead(status, { "Content-Type": "application/json", ...headers });
  res.end(JSON.stringify(body));
}

function compareFingerprints(left = [], right = []) {
  const length = Math.min(left.length, right.length);
  if (!length) return 0;

  let distance = 0;
  for (let index = 0; index < length; index += 1) {
    distance += Math.abs(Number(left[index]) - Number(right[index]));
  }

  const averageDistance = distance / length;
  return Math.max(0, 1 - averageDistance / 255);
}

function normalizeWords(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function compareWords(left = "", right = "") {
  const leftWords = new Set(normalizeWords(left));
  const rightWords = new Set(normalizeWords(right));
  if (leftWords.size < 8 || rightWords.size < 8) return 0;

  let overlap = 0;
  for (const word of leftWords) {
    if (rightWords.has(word)) overlap += 1;
  }

  return overlap / Math.max(leftWords.size, rightWords.size);
}

function findDuplicateSong(candidate, songs) {
  let bestMatch = null;

  for (const song of songs) {
    const audioSimilarity = compareFingerprints(candidate.audioFingerprint, song.audioFingerprint);
    const lyricSimilarity = compareWords(candidate.lyrics, song.lyrics);
    const similarity = Math.max(audioSimilarity, lyricSimilarity);

    if (similarity >= 0.7 && (!bestMatch || similarity > bestMatch.similarity)) {
      bestMatch = {
        song,
        similarity,
        audioSimilarity,
        lyricSimilarity
      };
    }
  }

  return bestMatch;
}

function createSession(res, user) {
  const sessionId = crypto.randomBytes(32).toString("hex");
  sessions.set(sessionId, user.id);
  res.setHeader("Set-Cookie", `rf_session=${sessionId}; HttpOnly; SameSite=Lax; Path=/; Max-Age=604800`);
}

async function getSessionUser(req) {
  const sessionId = parseCookies(req).rf_session;
  const userId = sessions.get(sessionId);
  if (!userId) return null;
  const users = await readUsers();
  return users.find((user) => user.id === userId) || null;
}

async function requireUser(req, res) {
  const user = await getSessionUser(req);
  if (!user) {
    sendJson(res, 401, { error: "Sign in before using creator storage." });
    return null;
  }

  return user;
}

async function handleAuth(req, res, url) {
  if (url.pathname === "/api/health" && req.method === "GET") {
    const songs = await readJson(songsFile);
    const users = await readUsers();
    sendJson(res, 200, {
      ok: true,
      users: users.length,
      songs: songs.length,
      storage: "local-json-and-uploads",
      time: new Date().toISOString()
    });
    return true;
  }

  if (url.pathname === "/api/auth/session" && req.method === "GET") {
    const user = await getSessionUser(req);
    sendJson(res, 200, { user: user ? publicUser(user) : null });
    return true;
  }

  if (url.pathname === "/api/auth/signup" && req.method === "POST") {
    const body = await readBody(req);
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!name || !email.includes("@") || password.length < 6) {
      sendJson(res, 400, { error: "Enter a name, valid email, and password with at least 6 characters." });
      return true;
    }

    const users = await readUsers();
    if (users.some((user) => user.email === email)) {
      sendJson(res, 409, { error: "This email already has an account. Use Login instead." });
      return true;
    }

    const { salt, hash } = hashPassword(password);
    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      salt,
      passwordHash: hash,
      createdAt: new Date().toISOString()
    };
    users.push(user);
    await writeUsers(users);
    createSession(res, user);
    sendJson(res, 201, { user: publicUser(user) });
    return true;
  }

  if (url.pathname === "/api/auth/login" && req.method === "POST") {
    const body = await readBody(req);
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    const users = await readUsers();
    const user = users.find((item) => item.email === email);

    if (!user || !verifyPassword(password, user)) {
      sendJson(res, 401, { error: "Email or password is incorrect." });
      return true;
    }

    createSession(res, user);
    sendJson(res, 200, { user: publicUser(user) });
    return true;
  }

  if (url.pathname === "/api/auth/logout" && req.method === "POST") {
    const sessionId = parseCookies(req).rf_session;
    sessions.delete(sessionId);
    sendJson(res, 200, { ok: true }, { "Set-Cookie": "rf_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0" });
    return true;
  }

  return false;
}

async function handleLibraryApi(req, res, url) {
  if (url.pathname === "/api/me/library" && req.method === "GET") {
    const user = await requireUser(req, res);
    if (!user) return true;
    const state = await readJson(listenerStateFile);
    sendJson(res, 200, { library: state[user.id] || { favorites: [], history: [] } });
    return true;
  }

  if (url.pathname === "/api/me/favorites" && req.method === "POST") {
    const user = await requireUser(req, res);
    if (!user) return true;
    const body = await readBody(req);
    const songId = String(body.songId || "").trim();
    const shouldFavorite = Boolean(body.favorite);

    if (!songId) {
      sendJson(res, 400, { error: "Song id is required." });
      return true;
    }

    const state = await readJson(listenerStateFile);
    const library = state[user.id] || { favorites: [], history: [] };
    const favoriteSet = new Set(library.favorites);
    if (shouldFavorite) {
      favoriteSet.add(songId);
    } else {
      favoriteSet.delete(songId);
    }
    library.favorites = [...favoriteSet];
    state[user.id] = library;
    await writeJson(listenerStateFile, state);
    sendJson(res, 200, { library });
    return true;
  }

  if (url.pathname === "/api/me/history" && req.method === "POST") {
    const user = await requireUser(req, res);
    if (!user) return true;
    const body = await readBody(req);
    const songId = String(body.songId || "").trim();

    if (!songId) {
      sendJson(res, 400, { error: "Song id is required." });
      return true;
    }

    const state = await readJson(listenerStateFile);
    const library = state[user.id] || { favorites: [], history: [] };
    library.history = [songId, ...library.history.filter((id) => id !== songId)].slice(0, 30);
    state[user.id] = library;
    await writeJson(listenerStateFile, state);
    sendJson(res, 200, { library });
    return true;
  }

  if (url.pathname === "/api/albums" && req.method === "GET") {
    const user = await requireUser(req, res);
    if (!user) return true;
    const albums = await readJson(albumsFile);
    sendJson(res, 200, { albums: albums.filter((album) => album.creatorId === user.id) });
    return true;
  }

  if (url.pathname === "/api/albums" && req.method === "POST") {
    const user = await requireUser(req, res);
    if (!user) return true;
    const body = await readBody(req);
    const name = String(body.name || "").trim();
    const mood = String(body.mood || "Focus").trim();

    if (!name) {
      sendJson(res, 400, { error: "Album name is required." });
      return true;
    }

    const albums = await readJson(albumsFile);
    if (albums.some((album) => album.creatorId === user.id && album.name.toLowerCase() === name.toLowerCase())) {
      sendJson(res, 409, { error: "An album with that name already exists." });
      return true;
    }

    const album = {
      id: crypto.randomUUID(),
      creatorId: user.id,
      creatorName: user.name,
      name,
      mood,
      songCount: 0,
      createdAt: new Date().toISOString()
    };
    albums.push(album);
    await writeJson(albumsFile, albums);
    sendJson(res, 201, { album });
    return true;
  }

  if (url.pathname === "/api/songs" && req.method === "GET") {
    const songs = await readJson(songsFile);
    sendJson(res, 200, { songs });
    return true;
  }

  if (url.pathname === "/api/creator/songs" && req.method === "GET") {
    const user = await requireUser(req, res);
    if (!user) return true;
    const songs = await readJson(songsFile);
    sendJson(res, 200, { songs: songs.filter((song) => song.creatorId === user.id) });
    return true;
  }

  if (url.pathname === "/api/songs" && req.method === "POST") {
    const user = await requireUser(req, res);
    if (!user) return true;
    const body = await readBody(req);
    const title = String(body.title || "").trim();
    const singer = String(body.singer || "").trim();
    const mood = String(body.mood || "").trim();
    const albumId = String(body.albumId || "").trim();
    const duration = String(body.duration || "0:00").trim();
    const fileName = String(body.fileName || "song.mp3").replace(/[^a-z0-9_.-]/gi, "_");
    const audioBase64 = String(body.audioBase64 || "");
    const audioFingerprint = Array.isArray(body.audioFingerprint) ? body.audioFingerprint.slice(0, 96).map(Number) : [];
    const lyrics = String(body.lyrics || "").trim();

    if (!title || !singer || !mood || !albumId || !audioBase64) {
      sendJson(res, 400, { error: "Song title, singer name, type, album, and MP3 file are required." });
      return true;
    }

    const albums = await readJson(albumsFile);
    const album = albums.find((item) => item.id === albumId && item.creatorId === user.id);
    if (!album) {
      sendJson(res, 404, { error: "Album was not found for this creator." });
      return true;
    }

    const songs = await readJson(songsFile);
    const duplicate = findDuplicateSong({ audioFingerprint, lyrics }, songs);
    if (duplicate) {
      sendJson(res, 409, {
        error: `Song already uploaded: "${duplicate.song.title}" by ${duplicate.song.singer || duplicate.song.artist}. Upload blocked because at least 30% must be different.`,
        duplicate: {
          title: duplicate.song.title,
          type: duplicate.song.mood || duplicate.song.category,
          singer: duplicate.song.singer || duplicate.song.artist,
          creatorName: duplicate.song.creatorName || duplicate.song.artist,
          uploadedBy: duplicate.song.artist,
          album: duplicate.song.album,
          similarity: Math.round(duplicate.similarity * 100),
          audioSimilarity: Math.round(duplicate.audioSimilarity * 100),
          lyricSimilarity: Math.round(duplicate.lyricSimilarity * 100)
        }
      });
      return true;
    }

    const audioBuffer = Buffer.from(audioBase64, "base64");
    const songId = crypto.randomUUID();
    const storedName = `${songId}-${fileName.endsWith(".mp3") ? fileName : `${fileName}.mp3`}`;
    const uploadPath = path.join(uploadsDir, storedName);
    await fsp.writeFile(uploadPath, audioBuffer);

    const song = {
      id: songId,
      creatorId: user.id,
      title,
      singer,
      artist: singer,
      creatorName: user.name,
      uploadedBy: user.name,
      category: mood,
      mood,
      album: album.name,
      albumId: album.id,
      duration,
      cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=240&q=80",
      audioUrl: `/uploads/${storedName}`,
      audioFingerprint,
      lyrics,
      createdAt: new Date().toISOString()
    };

    songs.unshift(song);
    await writeJson(songsFile, songs);

    album.songCount += 1;
    await writeJson(albumsFile, albums);

    sendJson(res, 201, { song, album });
    return true;
  }

  return false;
}

const port = process.env.PORT || 5173;
const host = process.env.PORT ? "0.0.0.0" : "127.0.0.1";

http
  .createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://127.0.0.1");
      if ((url.pathname === "/api/health" || url.pathname.startsWith("/api/auth/")) && (await handleAuth(req, res, url))) {
        return;
      }
      if (url.pathname.startsWith("/api/") && (await handleLibraryApi(req, res, url))) {
        return;
      }

      const requestPath = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
      const filePath = path.resolve(root, requestPath);

      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      fs.readFile(filePath, (error, body) => {
        if (error) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }

        res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
        res.end(body);
      });
    } catch (error) {
      sendJson(res, 500, { error: error.message || "Server error" });
    }
  })
  .listen(port, host, () => {
    console.log(`RaagaFlow server running on http://${host}:${port}`);
  });
