const tracks = [
  {
    id: "demo-neon-baarish",
    title: "Neon Baarish",
    artist: "Aarav Sethi",
    category: "Hindi",
    mood: "Romance",
    duration: "3:42",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=240&q=80",
    bpm: 86,
    synth: "triangle",
    notes: [261.63, 329.63, 392, 493.88, 440, 392, 329.63, 293.66]
  },
  {
    id: "demo-midnight-chai",
    title: "Midnight Chai",
    artist: "Kavya Rao",
    category: "Indie",
    mood: "Focus",
    duration: "4:05",
    cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=240&q=80",
    bpm: 72,
    synth: "sine",
    notes: [196, 246.94, 293.66, 329.63, 392, 329.63, 293.66, 246.94]
  },
  {
    id: "demo-metro-dhol",
    title: "Metro Dhol",
    artist: "The North Line",
    category: "Hindi",
    mood: "Party",
    duration: "2:58",
    cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=240&q=80",
    bpm: 126,
    synth: "sawtooth",
    notes: [220, 277.18, 329.63, 440, 493.88, 440, 329.63, 277.18]
  },
  {
    id: "demo-founders-unplugged",
    title: "Founders Unplugged",
    artist: "Anika Talks",
    category: "Podcast",
    mood: "Focus",
    duration: "21:18",
    cover: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=240&q=80",
    bpm: 64,
    synth: "sine",
    notes: [174.61, 196, 220, 196, 174.61, 146.83, 164.81, 196]
  },
  {
    id: "demo-skyline-sprint",
    title: "Skyline Sprint",
    artist: "DJ Reverb",
    category: "Indie",
    mood: "Workout",
    duration: "3:20",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=240&q=80",
    bpm: 138,
    synth: "square",
    notes: [246.94, 293.66, 369.99, 493.88, 554.37, 493.88, 369.99, 293.66]
  },
  {
    id: "demo-ghazal-afterglow",
    title: "Ghazal Afterglow",
    artist: "Meera Khan",
    category: "Hindi",
    mood: "Romance",
    duration: "5:11",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=240&q=80",
    bpm: 78,
    synth: "triangle",
    notes: [220, 261.63, 329.63, 392, 349.23, 329.63, 261.63, 246.94]
  }
];

const trackList = document.querySelector("#trackList");
const queueList = document.querySelector("#queueList");
const flashSongs = document.querySelector("#flashSongs");
const refreshFlash = document.querySelector("#refreshFlash");
const recommendationList = document.querySelector("#recommendationList");
const recommendationReason = document.querySelector("#recommendationReason");
const trackArea = document.querySelector(".track-area");
const trackSectionTitle = document.querySelector("#trackSectionTitle");
const searchPage = document.querySelector("#searchPage");
const libraryPage = document.querySelector("#libraryPage");
const livePage = document.querySelector("#livePage");
const playlistPage = document.querySelector("#playlistPage");
const userLoginView = document.querySelector("#userLoginView");
const userLibraryView = document.querySelector("#userLibraryView");
const librarySection = document.querySelector("#librarySection");
const liveSection = document.querySelector("#liveSection");
const libraryGrid = document.querySelector("#libraryGrid");
const showAllLibrary = document.querySelector("#showAllLibrary");
const searchInput = document.querySelector("#searchInput");
const pageSearchInput = document.querySelector("#pageSearchInput");
const searchResults = document.querySelector("#searchResults");
const playlistTitle = document.querySelector("#playlistTitle");
const playlistDescription = document.querySelector("#playlistDescription");
const playlistSongs = document.querySelector("#playlistSongs");
const backToHomeFromPlaylist = document.querySelector("#backToHomeFromPlaylist");
const playerTitle = document.querySelector("#playerTitle");
const playerArtist = document.querySelector("#playerArtist");
const playerCover = document.querySelector("#playerCover");
const playPause = document.querySelector("#playPause");
const heroPlay = document.querySelector("#heroPlay");
const progress = document.querySelector("#progress");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const previousTrack = document.querySelector("#previousTrack");
const nextTrack = document.querySelector("#nextTrack");
const listenerApp = document.querySelector("#listenerApp");
const creatorLoginView = document.querySelector("#creatorLoginView");
const creatorStudioView = document.querySelector("#creatorStudioView");
const creatorModeButton = document.querySelector("#creatorModeButton");
const listenerModeButton = document.querySelector("#listenerModeButton");
const openCreatorLogin = document.querySelector("#openCreatorLogin");
const creatorLoginForm = document.querySelector("#creatorLoginForm");
const creatorLoginName = document.querySelector("#creatorLoginName");
const creatorLoginEmail = document.querySelector("#creatorLoginEmail");
const creatorLoginPassword = document.querySelector("#creatorLoginPassword");
const authStatus = document.querySelector("#authStatus");
const authSubmitLabel = document.querySelector("#authSubmitLabel");
const authModeButtons = document.querySelectorAll("[data-auth-mode]");
const studioGreeting = document.querySelector("#studioGreeting");
const logoutCreator = document.querySelector("#logoutCreator");
const albumForm = document.querySelector("#albumForm");
const albumNameInput = document.querySelector("#albumName");
const albumMoodInput = document.querySelector("#albumMood");
const albumList = document.querySelector("#albumList");
const songMoodInput = document.querySelector("#songMood");
const songAlbumInput = document.querySelector("#songAlbum");
const creatorSongList = document.querySelector("#creatorSongList");
const uploadForm = document.querySelector("#uploadForm");
const songTitleInput = document.querySelector("#songTitle");
const songSingerInput = document.querySelector("#songSinger");
const songLyricsInput = document.querySelector("#songLyrics");
const songFileInput = document.querySelector("#songFile");
const uploadStatus = document.querySelector("#uploadStatus");
const uploadCount = document.querySelector("#uploadCount");
const dailyMixButton = document.querySelector("#dailyMixButton");
const profileButton = document.querySelector("#profileButton");
const profileInitials = document.querySelector("#profileInitials");
const userLoginForm = document.querySelector("#userLoginForm");
const userLoginName = document.querySelector("#userLoginName");
const userLoginEmail = document.querySelector("#userLoginEmail");
const userLoginPassword = document.querySelector("#userLoginPassword");
const userAuthStatus = document.querySelector("#userAuthStatus");
const userAuthSubmitLabel = document.querySelector("#userAuthSubmitLabel");
const userAuthModeButtons = document.querySelectorAll("[data-user-auth-mode]");
const userGreeting = document.querySelector("#userGreeting");
const logoutUser = document.querySelector("#logoutUser");
const favoriteSongsList = document.querySelector("#favoriteSongsList");
const historySongsList = document.querySelector("#historySongsList");

let activeCategory = "all";
let activeMood = "";
let activeTrack = 0;
let isPlaying = false;
let uploadedCount = 0;
let creatorProfile = null;
let userProfile = null;
let authMode = "login";
let userAuthMode = "login";
let favoriteSongIds = new Set();
let historySongIds = [];
let creatorAlbums = [];
let creatorSongs = [];
let audioContext;
let masterGain;
const uploadedAudio = new Audio();
let schedulerId;
let progressId;
let startedAt = 0;
let pausedAt = 0;
let nextNoteTime = 0;
let noteIndex = 0;

function mergeStoredSongs(storedSongs) {
  const existingIds = new Set(tracks.map((track) => track.id).filter(Boolean));
  const uniqueSongs = storedSongs.filter((song) => !existingIds.has(song.id));
  tracks.unshift(...uniqueSongs);
  renderTracks();
  renderQueue();
  renderFlashSongs();
  renderRecommendations();
  renderLibrary();
  renderSearchResults();
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function switchView(view, activeNav = view) {
  listenerApp.classList.toggle("active", view === "home");
  searchPage.classList.toggle("active", view === "search");
  libraryPage.classList.toggle("active", view === "library");
  livePage.classList.toggle("active", view === "live");
  playlistPage.classList.toggle("active", view === "playlist");
  userLoginView.classList.toggle("active", view === "user-login");
  userLibraryView.classList.toggle("active", view === "user-library");
  creatorLoginView.classList.toggle("active", view === "creator-login");
  creatorStudioView.classList.toggle("active", view === "creator-studio");

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === activeNav);
  });

  if (view === "creator-studio") {
    creatorModeButton.classList.add("hidden");
    listenerModeButton.classList.remove("hidden");
  } else {
    creatorModeButton.classList.remove("hidden");
    listenerModeButton.classList.add("hidden");
  }

  lucide.createIcons();
}

function setAuthStatus(message, type = "") {
  authStatus.textContent = message;
  authStatus.classList.toggle("error", type === "error");
  authStatus.classList.toggle("success", type === "success");
}

function setAuthMode(mode) {
  authMode = mode;
  authModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  creatorLoginName.required = mode === "signup";
  creatorLoginName.closest("label").style.display = mode === "signup" ? "grid" : "none";
  authSubmitLabel.textContent = mode === "signup" ? "Sign up" : "Sign in";
  setAuthStatus(mode === "signup" ? "Create your creator account." : "Sign in with your creator email.");
}

function setUserAuthStatus(message, type = "") {
  userAuthStatus.textContent = message;
  userAuthStatus.classList.toggle("error", type === "error");
  userAuthStatus.classList.toggle("success", type === "success");
}

function setUserAuthMode(mode) {
  userAuthMode = mode;
  userAuthModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.userAuthMode === mode);
  });
  userLoginName.required = mode === "signup";
  userLoginName.closest("label").style.display = mode === "signup" ? "grid" : "none";
  userAuthSubmitLabel.textContent = mode === "signup" ? "Sign up" : "Sign in";
  setUserAuthStatus(mode === "signup" ? "Create your listener account." : "Sign in to restore favorites and history.");
}

function initialsFor(nameOrEmail) {
  return String(nameOrEmail || "PK")
    .split(/[ @._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "PK";
}

function setUserProfile(user) {
  userProfile = user;
  profileInitials.textContent = user ? initialsFor(user.name || user.email) : "PK";
  userGreeting.textContent = user ? `${user.name}'s music memory` : "Your music memory";
}

async function authRequest(endpoint, body) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Authentication failed.");
  }

  return data;
}

async function loadPublicSongs() {
  try {
    const response = await fetch("/api/songs");
    const data = await response.json();
    mergeStoredSongs(data.songs || []);
  } catch {
    // The app still works with built-in demo songs when storage is unavailable.
  }
}

async function loadCreatorStorage() {
  if (!creatorProfile) return;

  try {
    const [albumsResponse, songsResponse] = await Promise.all([
      fetch("/api/albums"),
      fetch("/api/creator/songs")
    ]);
    const albumsData = await albumsResponse.json();
    const songsData = await songsResponse.json();
    creatorAlbums = albumsData.albums || [];
    creatorSongs = songsData.songs || [];
    uploadedCount = creatorSongs.length;
    mergeStoredSongs(creatorSongs);

    if (!creatorAlbums.length) {
      const response = await fetch("/api/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Creator Singles", mood: "Focus" })
      });
      const data = await response.json();
      creatorAlbums.push(data.album);
    }

    renderCreatorStudio();
  } catch {
    uploadStatus.textContent = "Storage server is not available yet.";
  }
}

async function enterCreatorStudio(user) {
  creatorProfile = user;
  setUserProfile(user);
  studioGreeting.textContent = `${creatorProfile.name}'s creator studio`;
  await loadCreatorStorage();
  switchView("creator-studio", "creator-login");
}

function trackById(songId) {
  return tracks.find((track) => track.id === songId);
}

function renderMemoryLists() {
  const favoriteTracks = [...favoriteSongIds].map(trackById).filter(Boolean);
  const historyTracks = historySongIds.map(trackById).filter(Boolean);

  favoriteSongsList.innerHTML = favoriteTracks.length
    ? favoriteTracks.map(renderMemorySong).join("")
    : '<article class="memory-song"><div><strong>No favorites yet</strong><span>Tap a heart beside any song to save it.</span></div></article>';

  historySongsList.innerHTML = historyTracks.length
    ? historyTracks.map(renderMemorySong).join("")
    : '<article class="memory-song"><div><strong>No listening history yet</strong><span>Play songs to build your history.</span></div></article>';

  lucide.createIcons();
}

function renderMemorySong(track) {
  const index = tracks.indexOf(track);
  return `
    <article class="memory-song">
      <img src="${track.cover}" alt="${track.title} cover" />
      <div>
        <strong>${track.title}</strong>
        <span>${track.artist} - ${track.mood}</span>
      </div>
      <button class="icon-button" type="button" aria-label="Play ${track.title}" data-play="${index}">
        <i data-lucide="play"></i>
      </button>
    </article>
  `;
}

async function loadListenerMemory() {
  if (!userProfile) return;

  try {
    const response = await fetch("/api/me/library");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not load listener memory.");
    favoriteSongIds = new Set(data.library?.favorites || []);
    historySongIds = data.library?.history || [];
    renderMemoryLists();
    renderTracks();
    renderFlashSongs();
    renderRecommendations();
    renderLibrary();
    renderSearchResults();
  } catch (error) {
    setUserAuthStatus(error.message, "error");
  }
}

async function enterUserLibrary(user) {
  setUserProfile(user);
  await loadListenerMemory();
  switchView("user-library", "user-login");
}

async function checkAuthSession() {
  try {
    const response = await fetch("/api/auth/session");
    const data = await response.json();
    if (data.user) {
      creatorProfile = data.user;
      setUserProfile(data.user);
      studioGreeting.textContent = `${creatorProfile.name}'s creator studio`;
      await loadCreatorStorage();
      await loadListenerMemory();
    }
  } catch {
    setAuthStatus("Login server is not available yet.", "error");
  }
}

function durationToSeconds(value) {
  const parts = value.split(":").map(Number);
  return parts.length === 2 ? parts[0] * 60 + parts[1] : 0;
}

function getTrackLength(track) {
  if (track.audioUrl && Number.isFinite(uploadedAudio.duration) && uploadedAudio.duration > 0) {
    return uploadedAudio.duration;
  }

  return durationToSeconds(track.duration);
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new AudioContext();
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.18;
    masterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function scheduleTone(frequency, startTime, length, type, gainLevel = 0.5) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainLevel, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + length);

  oscillator.connect(gain);
  gain.connect(masterGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + length + 0.03);
}

function scheduleBeat(startTime, strongBeat) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(strongBeat ? 90 : 150, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(strongBeat ? 45 : 80, startTime + 0.12);
  gain.gain.setValueAtTime(strongBeat ? 0.55 : 0.18, startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.14);

  oscillator.connect(gain);
  gain.connect(masterGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + 0.15);
}

function runScheduler() {
  const track = tracks[activeTrack];
  const beatLength = 60 / track.bpm;

  while (nextNoteTime < audioContext.currentTime + 0.25) {
    const frequency = track.notes[noteIndex % track.notes.length];
    const bassFrequency = frequency / 2;

    scheduleTone(frequency, nextNoteTime, beatLength * 0.72, track.synth, 0.34);

    if (noteIndex % 2 === 0) {
      scheduleTone(bassFrequency, nextNoteTime, beatLength * 0.9, "sine", 0.22);
    }

    if (track.category !== "Podcast") {
      scheduleBeat(nextNoteTime, noteIndex % 4 === 0);
    }

    nextNoteTime += beatLength;
    noteIndex += 1;
  }
}

function stopAudio() {
  clearInterval(schedulerId);
  clearInterval(progressId);
  uploadedAudio.pause();
  schedulerId = undefined;
  progressId = undefined;
}

function updateProgress() {
  const track = tracks[activeTrack];
  const trackLength = getTrackLength(track);
  const elapsed = track.audioUrl
    ? uploadedAudio.currentTime
    : isPlaying
      ? pausedAt + (performance.now() - startedAt) / 1000
      : pausedAt;
  const boundedElapsed = trackLength ? elapsed % trackLength : 0;

  currentTime.textContent = formatTime(boundedElapsed);
  progress.value = trackLength ? String((boundedElapsed / trackLength) * 100) : "0";
}

function playAudio() {
  stopAudio();
  isPlaying = true;
  const track = tracks[activeTrack];

  if (track.audioUrl) {
    if (uploadedAudio.src !== track.audioUrl) {
      uploadedAudio.src = track.audioUrl;
    }

    uploadedAudio.currentTime = pausedAt;
    uploadedAudio.play().catch(() => {
      isPlaying = false;
      uploadStatus.textContent = "Your browser blocked playback. Click play again to start audio.";
      playPause.innerHTML = '<i data-lucide="play"></i>';
      renderTracks();
      lucide.createIcons();
    });
  } else {
    ensureAudio();
    startedAt = performance.now();
    nextNoteTime = audioContext.currentTime + 0.05;
    schedulerId = setInterval(runScheduler, 80);
    progressId = setInterval(updateProgress, 250);
    runScheduler();
  }

  updateProgress();
}

function pauseAudio() {
  if (tracks[activeTrack].audioUrl) {
    pausedAt = uploadedAudio.currentTime;
    uploadedAudio.pause();
  } else if (isPlaying) {
    pausedAt += (performance.now() - startedAt) / 1000;
  }

  isPlaying = false;
  stopAudio();
  updateProgress();
}

function renderTracks() {
  const query = searchInput.value.trim().toLowerCase();
  trackSectionTitle.textContent = activeMood ? `${activeMood} songs` : "Top picks";

  const visibleTracks = tracks.filter((track) => {
    const matchesCategory = activeCategory === "all" || track.category === activeCategory;
    const matchesMood = !activeMood || track.mood === activeMood;
    const matchesQuery = [track.title, track.artist, track.category, track.mood]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesCategory && matchesMood && matchesQuery;
  });

  trackList.innerHTML = visibleTracks
    .map((track) => {
      const originalIndex = tracks.indexOf(track);
      return `
        <article class="track-row ${originalIndex === activeTrack ? "active" : ""}">
          <img src="${track.cover}" alt="${track.title} cover" />
          <div class="track-meta">
            <strong>${track.title}</strong>
            <span>${track.artist} - ${track.album ? `${track.album} - ` : ""}${track.category} - ${track.mood}</span>
            ${track.audioUrl ? '<span class="track-badge">Uploaded MP3</span>' : ""}
          </div>
          <span class="duration">${track.duration}</span>
          <button class="icon-button" type="button" aria-label="Play ${track.title}" data-play="${originalIndex}">
            <i data-lucide="${originalIndex === activeTrack && isPlaying ? "pause" : "play"}"></i>
          </button>
          <button class="icon-button ${favoriteSongIds.has(track.id) ? "favorite-active" : ""}" type="button" aria-label="Favorite ${track.title}" data-favorite="${originalIndex}">
            <i data-lucide="heart"></i>
          </button>
        </article>
      `;
    })
    .join("");

  if (!visibleTracks.length) {
    trackList.innerHTML = '<article class="track-row"><div class="track-meta"><strong>No tracks found</strong><span>Try another mood, category, or search.</span></div></article>';
  }

  lucide.createIcons();
}

function showSongsForMood(mood) {
  activeMood = activeMood === mood ? "" : mood;
  activeCategory = "all";
  searchInput.value = "";
  switchView("home", "home");

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "all");
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.style.outline = button.dataset.filter === activeMood ? "3px solid #18202f" : "0";
  });

  renderTracks();
  trackArea.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSongRows(items, emptyMessage) {
  return items.length
    ? items
        .map(
          ({ track, index }) => `
            <article class="track-row ${index === activeTrack ? "active" : ""}">
              <img src="${track.cover}" alt="${track.title} cover" />
              <div class="track-meta">
                <strong>${track.title}</strong>
                <span>${track.artist} - ${track.album ? `${track.album} - ` : ""}${track.category} - ${track.mood}</span>
                ${track.audioUrl ? '<span class="track-badge">Uploaded MP3</span>' : ""}
              </div>
              <span class="duration">${track.duration}</span>
              <button class="icon-button" type="button" aria-label="Play ${track.title}" data-play="${index}">
                <i data-lucide="${index === activeTrack && isPlaying ? "pause" : "play"}"></i>
              </button>
              <button class="icon-button ${favoriteSongIds.has(track.id) ? "favorite-active" : ""}" type="button" aria-label="Favorite ${track.title}" data-favorite="${index}">
                <i data-lucide="heart"></i>
              </button>
            </article>
          `
        )
        .join("")
    : `<article class="track-row"><div class="track-meta"><strong>${emptyMessage}</strong><span>Try another playlist or upload songs for this mood.</span></div></article>`;
}

function openPlaylistPage(mood) {
  const names = {
    Focus: ["Morning Focus", "Soft starts, calm beats, and creator focus uploads."],
    Party: ["Weekend Party", "High energy songs for parties and celebrations."],
    Romance: ["Love Notes", "Romantic picks and soft evening songs."],
    Workout: ["Workout Mix", "Fast tracks for active listening."]
  };
  const [title, description] = names[mood] || [`${mood} Playlist`, `Songs selected for ${mood}.`];
  const items = tracks
    .map((track, index) => ({ track, index }))
    .filter(({ track }) => track.mood === mood || track.category === mood);

  playlistTitle.textContent = title;
  playlistDescription.textContent = description;
  playlistSongs.innerHTML = renderSongRows(items, "No songs in this playlist yet");
  switchView("playlist", "home");
  lucide.createIcons();
}

function getFilteredTracks(query) {
  const normalizedQuery = query.trim().toLowerCase();
  return tracks
    .map((track, index) => ({ track, index }))
    .filter(({ track }) =>
      [track.title, track.artist, track.category, track.mood, track.album || ""]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
}

function renderSearchResults() {
  const results = getFilteredTracks(pageSearchInput.value);

  searchResults.innerHTML = results.length
    ? results
        .map(
          ({ track, index }) => `
            <article class="track-row ${index === activeTrack ? "active" : ""}">
              <img src="${track.cover}" alt="${track.title} cover" />
              <div class="track-meta">
                <strong>${track.title}</strong>
                <span>${track.artist} - ${track.album ? `${track.album} - ` : ""}${track.category} - ${track.mood}</span>
              </div>
              <span class="duration">${track.duration}</span>
              <button class="icon-button" type="button" aria-label="Play ${track.title}" data-play="${index}">
                <i data-lucide="${index === activeTrack && isPlaying ? "pause" : "play"}"></i>
              </button>
              <button class="icon-button ${favoriteSongIds.has(track.id) ? "favorite-active" : ""}" type="button" aria-label="Favorite ${track.title}" data-favorite="${index}">
                <i data-lucide="heart"></i>
              </button>
            </article>
          `
        )
        .join("")
    : '<article class="track-row"><div class="track-meta"><strong>No results found</strong><span>Try another song, album, creator, or mood.</span></div></article>';

  lucide.createIcons();
}

function renderQueue() {
  const queue = tracks
    .map((track, index) => ({ track, index }))
    .filter(({ index }) => index !== activeTrack)
    .slice(0, 4);
  queueList.innerHTML = queue
    .map(
      ({ track, index }) => `
        <button class="queue-track" type="button" data-queue="${index}" aria-label="Play ${track.title}">
          <img src="${track.cover}" alt="${track.title} cover" />
          <div>
            <strong>${track.title}</strong>
            <span>${track.artist} - ${track.mood}</span>
          </div>
        </button>
      `
    )
    .join("");
}

function renderFlashSongs() {
  const featured = tracks
    .map((track, index) => ({ track, index }))
    .filter(({ track }) => track.category !== "Podcast")
    .slice(0, 4);

  flashSongs.innerHTML = featured
    .map(
      ({ track, index }) => `
        <article class="flash-song">
          <img src="${track.cover}" alt="${track.title} cover" />
          <div class="track-meta">
            <strong>${track.title}</strong>
            <span>${track.artist} - ${track.mood}${track.album ? ` - ${track.album}` : ""}</span>
          </div>
          <button class="icon-button" type="button" aria-label="Play ${track.title}" data-play="${index}">
            <i data-lucide="${index === activeTrack && isPlaying ? "pause" : "play"}"></i>
          </button>
          <button class="icon-button ${favoriteSongIds.has(track.id) ? "favorite-active" : ""}" type="button" aria-label="Favorite ${track.title}" data-favorite="${index}">
            <i data-lucide="heart"></i>
          </button>
        </article>
      `
    )
    .join("");

  lucide.createIcons();
}

function getRecommendedTracks(limit = 6) {
  const favoriteTracks = [...favoriteSongIds].map(trackById).filter(Boolean);
  const historyTracks = historySongIds.map(trackById).filter(Boolean);
  const seedTracks = [...favoriteTracks, ...historyTracks];

  if (!seedTracks.length) {
    recommendationReason.textContent = userProfile ? "Play and favorite songs to train the algorithm" : "Sign in to personalize recommendations";
    return tracks
      .map((track, index) => ({ track, index, score: track.category === "Podcast" ? 1 : 2 }))
      .slice(0, limit);
  }

  const moodWeights = new Map();
  const categoryWeights = new Map();
  const artistWeights = new Map();
  const albumWeights = new Map();

  seedTracks.forEach((track, seedIndex) => {
    const weight = favoriteSongIds.has(track.id) ? 6 : Math.max(2, 5 - seedIndex);
    moodWeights.set(track.mood, (moodWeights.get(track.mood) || 0) + weight);
    categoryWeights.set(track.category, (categoryWeights.get(track.category) || 0) + weight);
    artistWeights.set(track.artist, (artistWeights.get(track.artist) || 0) + Math.ceil(weight / 2));
    if (track.album) {
      albumWeights.set(track.album, (albumWeights.get(track.album) || 0) + Math.ceil(weight / 2));
    }
  });

  const listened = new Set(historySongIds.slice(0, 6));
  const favorites = new Set(favoriteSongIds);
  const scored = tracks.map((track, index) => {
    let score = 0;
    score += moodWeights.get(track.mood) || 0;
    score += categoryWeights.get(track.category) || 0;
    score += artistWeights.get(track.artist) || 0;
    score += albumWeights.get(track.album) || 0;
    if (favorites.has(track.id)) score -= 5;
    if (listened.has(track.id)) score -= 2;
    if (track.category !== "Podcast") score += 1;
    return { track, index, score };
  });

  recommendationReason.textContent = "Based on favorites, history, mood, artist, and album";
  const ranked = scored
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .slice(0, limit);

  return ranked.length ? ranked : scored.slice(0, limit);
}

function renderRecommendations() {
  const recommendations = getRecommendedTracks(6);

  recommendationList.innerHTML = recommendations.length
    ? recommendations
        .map(
          ({ track, index, score }) => `
            <article class="recommendation-card">
              <img src="${track.cover}" alt="${track.title} cover" />
              <div>
                <strong>${track.title}</strong>
                <span>${track.artist} - ${track.mood} - match ${Math.max(1, Math.round(score))}</span>
                <div class="recommendation-actions">
                  <button class="icon-button" type="button" aria-label="Play ${track.title}" data-play="${index}">
                    <i data-lucide="play"></i>
                  </button>
                  <button class="icon-button ${favoriteSongIds.has(track.id) ? "favorite-active" : ""}" type="button" aria-label="Favorite ${track.title}" data-favorite="${index}">
                    <i data-lucide="heart"></i>
                  </button>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : '<article class="recommendation-card"><div><strong>No recommendations yet</strong><span>Play or favorite songs to train the algorithm.</span></div></article>';

  lucide.createIcons();
}

function renderLibrary() {
  libraryGrid.innerHTML = tracks
    .map(
      (track, index) => `
        <button class="library-card" type="button" data-play="${index}" aria-label="Play ${track.title}">
          <img src="${track.cover}" alt="${track.title} cover" />
          <strong>${track.title}</strong>
          <span>${favoriteSongIds.has(track.id) ? "Favorite - " : ""}${track.artist} - ${track.mood}</span>
        </button>
      `
    )
    .join("");
}

function renderCreatorStudio() {
  uploadCount.textContent = `${uploadedCount} creator song${uploadedCount === 1 ? "" : "s"}`;

  albumList.innerHTML = creatorAlbums.length
    ? creatorAlbums
        .map(
          (album) => `
            <article class="album-item">
              <strong>${album.name}</strong>
              <span>${album.mood} - ${album.songCount} song${album.songCount === 1 ? "" : "s"}</span>
            </article>
          `
        )
        .join("")
    : '<article class="album-item"><strong>No albums yet</strong><span>Create an album before uploading songs.</span></article>';

  songAlbumInput.innerHTML = creatorAlbums.length
    ? creatorAlbums.map((album) => `<option value="${album.id}">${album.name}</option>`).join("")
    : '<option value="">Create an album first</option>';
  songAlbumInput.disabled = !creatorAlbums.length;

  creatorSongList.innerHTML = creatorSongs.length
    ? creatorSongs
        .map(
          (song) => `
            <article class="creator-song-item">
              <strong>${song.title}</strong>
              <span>${song.album} - ${song.mood} - ${song.duration}</span>
            </article>
          `
        )
        .join("")
    : '<article class="creator-song-item"><strong>No creator songs uploaded</strong><span>Your MP3 uploads will appear here and in the listener app.</span></article>';

  lucide.createIcons();
}

function setTrack(index, shouldPlay = true) {
  stopAudio();
  activeTrack = index;
  const track = tracks[index];
  playerTitle.textContent = track.title;
  playerArtist.textContent = track.artist;
  playerCover.src = track.cover;
  duration.textContent = track.duration;
  pausedAt = 0;
  noteIndex = 0;
  progress.value = 0;
  currentTime.textContent = "0:00";
  isPlaying = false;

  if (shouldPlay) {
    playAudio();
    recordHistory(track.id);
  }

  playPause.innerHTML = `<i data-lucide="${isPlaying ? "pause" : "play"}"></i>`;
  renderTracks();
  renderQueue();
  renderFlashSongs();
  renderRecommendations();
  renderLibrary();
  renderSearchResults();
  lucide.createIcons();
}

async function toggleFavorite(index) {
  if (!userProfile) {
    setUserAuthStatus("Sign in before saving favorites.", "error");
    switchView("user-login", "user-login");
    return;
  }

  const track = tracks[index];
  const nextFavorite = !favoriteSongIds.has(track.id);

  if (nextFavorite) {
    favoriteSongIds.add(track.id);
  } else {
    favoriteSongIds.delete(track.id);
  }

  renderTracks();
  renderFlashSongs();
  renderRecommendations();
  renderLibrary();
  renderSearchResults();
  renderMemoryLists();

  try {
    const response = await fetch("/api/me/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ songId: track.id, favorite: nextFavorite })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not save favorite.");
    favoriteSongIds = new Set(data.library.favorites);
    renderMemoryLists();
    renderRecommendations();
  } catch (error) {
    if (nextFavorite) {
      favoriteSongIds.delete(track.id);
    } else {
      favoriteSongIds.add(track.id);
    }
    setUserAuthStatus(error.message, "error");
  }
}

async function recordHistory(songId) {
  if (!userProfile || !songId) return;

  historySongIds = [songId, ...historySongIds.filter((id) => id !== songId)].slice(0, 30);
  renderMemoryLists();
  renderRecommendations();

  try {
    const response = await fetch("/api/me/history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ songId })
    });
    const data = await response.json();
    if (response.ok) {
      historySongIds = data.library.history;
      renderMemoryLists();
      renderRecommendations();
    }
  } catch {
    // Keep local history visible even if the server is briefly unavailable.
  }
}

document.addEventListener("click", (event) => {
  const playButton = event.target.closest("[data-play]");
  const queueButton = event.target.closest("[data-queue]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const categoryButton = event.target.closest("[data-category]");
  const moodButton = event.target.closest("[data-filter]");
  const liveButton = event.target.closest("[data-live]");
  const navButton = event.target.closest(".nav-item");

  if (playButton) {
    const index = Number(playButton.dataset.play);
    if (activeTrack === index && isPlaying) {
      pauseAudio();
      playPause.innerHTML = '<i data-lucide="play"></i>';
      renderTracks();
      lucide.createIcons();
    } else if (activeTrack === index) {
      playAudio();
      playPause.innerHTML = '<i data-lucide="pause"></i>';
      renderTracks();
      lucide.createIcons();
    } else {
      setTrack(index, true);
    }
  }

  if (queueButton) {
    setTrack(Number(queueButton.dataset.queue), true);
  }

  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favorite));
  }

  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle("active", button === categoryButton);
    });
    renderTracks();
  }

  if (moodButton) {
    openPlaylistPage(moodButton.dataset.filter);
  }

  if (liveButton) {
    const mood = liveButton.dataset.live;
    showSongsForMood(mood);
    switchView("home", "home");
    const stationTrackIndex = tracks.findIndex((track) => track.mood === mood || track.category === mood);
    if (stationTrackIndex >= 0) {
      setTrack(stationTrackIndex, true);
    }
  }

  if (navButton) {
    if (navButton.dataset.view === "creator-login") {
      switchView(creatorProfile ? "creator-studio" : "creator-login", "creator-login");
    } else if (navButton.dataset.view === "listener") {
      switchView("home", "home");
    } else if (navButton.dataset.view === "search") {
      switchView("search", "search");
      pageSearchInput.focus();
      renderSearchResults();
    } else if (navButton.dataset.view === "library") {
      switchView("library", "library");
    } else if (navButton.dataset.view === "live") {
      switchView("live", "live");
    } else if (navButton.dataset.view === "user-login") {
      switchView(userProfile ? "user-library" : "user-login", "user-login");
    } else {
      switchView("home", navButton.dataset.view);
    }
  }
});

searchInput.addEventListener("input", renderTracks);
pageSearchInput.addEventListener("input", renderSearchResults);

authModeButtons.forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

userAuthModeButtons.forEach((button) => {
  button.addEventListener("click", () => setUserAuthMode(button.dataset.userAuthMode));
});

profileButton.addEventListener("click", () => {
  switchView(userProfile ? "user-library" : "user-login", "user-login");
});

backToHomeFromPlaylist.addEventListener("click", () => {
  switchView("home", "home");
});

playPause.addEventListener("click", () => {
  if (isPlaying) {
    pauseAudio();
    playPause.innerHTML = '<i data-lucide="play"></i>';
  } else {
    playAudio();
    playPause.innerHTML = '<i data-lucide="pause"></i>';
  }

  renderTracks();
  lucide.createIcons();
});

heroPlay.addEventListener("click", () => setTrack(0, true));

dailyMixButton.addEventListener("click", () => setTrack(0, true));

refreshFlash.addEventListener("click", () => {
  const firstTrack = tracks.shift();
  tracks.push(firstTrack);
  activeTrack = Math.max(0, tracks.findIndex((track) => track.title === playerTitle.textContent));
  renderFlashSongs();
  renderRecommendations();
  renderTracks();
  renderQueue();
  renderLibrary();
});

showAllLibrary.addEventListener("click", () => {
  activeCategory = "all";
  activeMood = "";
  searchInput.value = "";
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "all");
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.style.outline = "0";
  });
  renderTracks();
  trackArea.scrollIntoView({ behavior: "smooth", block: "start" });
});

openCreatorLogin.addEventListener("click", () => {
  switchView(creatorProfile ? "creator-studio" : "creator-login", "creator-login");
});

creatorLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAuthStatus(authMode === "signup" ? "Creating account..." : "Signing in...");

  try {
    const endpoint = authMode === "signup" ? "/api/auth/signup" : "/api/auth/login";
    const data = await authRequest(endpoint, {
      name: creatorLoginName.value.trim(),
      email: creatorLoginEmail.value.trim(),
      password: creatorLoginPassword.value
    });

    creatorLoginForm.reset();
    setAuthStatus(authMode === "signup" ? "Account created." : "Sign in successful.", "success");
    await enterCreatorStudio(data.user);
  } catch (error) {
    setAuthStatus(error.message, "error");
  }
});

logoutCreator.addEventListener("click", async () => {
  try {
    await fetch("/api/auth/logout", { method: "POST" });
  } catch {
    // The local UI can still log out even if the server is restarting.
  }
  creatorProfile = null;
  switchView("home", "home");
});

userLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setUserAuthStatus(userAuthMode === "signup" ? "Creating account..." : "Signing in...");

  try {
    const endpoint = userAuthMode === "signup" ? "/api/auth/signup" : "/api/auth/login";
    const data = await authRequest(endpoint, {
      name: userLoginName.value.trim(),
      email: userLoginEmail.value.trim(),
      password: userLoginPassword.value
    });

    userLoginForm.reset();
    setUserAuthStatus(userAuthMode === "signup" ? "Account created." : "Sign in successful.", "success");
    await enterUserLibrary(data.user);
  } catch (error) {
    setUserAuthStatus(error.message, "error");
  }
});

logoutUser.addEventListener("click", async () => {
  try {
    await fetch("/api/auth/logout", { method: "POST" });
  } catch {
    // Local UI can still reset.
  }

  setUserProfile(null);
  creatorProfile = null;
  favoriteSongIds = new Set();
  historySongIds = [];
  renderTracks();
  renderFlashSongs();
  renderRecommendations();
  renderLibrary();
  renderSearchResults();
  renderMemoryLists();
  switchView("home", "home");
});

albumForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = albumNameInput.value.trim();
  const alreadyExists = creatorAlbums.some((album) => album.name.toLowerCase() === name.toLowerCase());

  if (alreadyExists) {
    uploadStatus.textContent = "An album with that name already exists.";
    return;
  }

  try {
    const response = await fetch("/api/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mood: albumMoodInput.value })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not create album.");

    creatorAlbums.push(data.album);
    albumForm.reset();
    uploadStatus.textContent = `${name} album created.`;
    renderCreatorStudio();
  } catch (error) {
    uploadStatus.textContent = error.message;
  }
});

progress.addEventListener("input", () => {
  const trackLength = getTrackLength(tracks[activeTrack]);
  pausedAt = (Number(progress.value) / 100) * trackLength;
  startedAt = performance.now();

  if (tracks[activeTrack].audioUrl) {
    uploadedAudio.currentTime = pausedAt;
  }

  currentTime.textContent = formatTime(pausedAt);
});

previousTrack.addEventListener("click", () => {
  const index = activeTrack === 0 ? tracks.length - 1 : activeTrack - 1;
  setTrack(index, true);
});

nextTrack.addEventListener("click", () => {
  const index = activeTrack === tracks.length - 1 ? 0 : activeTrack + 1;
  setTrack(index, true);
});

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(new Error("Could not read the MP3 file."));
    reader.readAsDataURL(file);
  });
}

async function createAudioFingerprint(file) {
  const arrayBuffer = await file.arrayBuffer();
  let channel;

  try {
    const context = new OfflineAudioContext(1, 44100 * 30, 44100);
    const decoded = await context.decodeAudioData(arrayBuffer.slice(0));
    channel = decoded.getChannelData(0);
  } catch {
    const bytes = new Uint8Array(arrayBuffer);
    const byteFingerprint = [];
    const bucketCount = 128;
    const bucketSize = Math.max(1, Math.floor(bytes.length / bucketCount));

    for (let bucket = 0; bucket < bucketCount; bucket += 1) {
      const start = bucket * bucketSize;
      const end = Math.min(bytes.length, start + bucketSize);
      let total = 0;
      for (let index = start; index < end; index += 1) {
        total += bytes[index];
      }
      byteFingerprint.push(Math.round(total / Math.max(1, end - start)));
    }

    return byteFingerprint;
  }

  const bucketCount = 64;
  const bucketSize = Math.max(1, Math.floor(channel.length / bucketCount));
  const fingerprint = [];

  for (let bucket = 0; bucket < bucketCount; bucket += 1) {
    const start = bucket * bucketSize;
    const end = Math.min(channel.length, start + bucketSize);
    let energy = 0;
    let zeroCrossings = 0;
    let previous = channel[start] || 0;

    for (let index = start; index < end; index += 1) {
      const sample = channel[index] || 0;
      energy += Math.abs(sample);
      if ((sample >= 0 && previous < 0) || (sample < 0 && previous >= 0)) {
        zeroCrossings += 1;
      }
      previous = sample;
    }

    const averageEnergy = energy / Math.max(1, end - start);
    const crossingRate = zeroCrossings / Math.max(1, end - start);
    fingerprint.push(Math.min(255, Math.round(averageEnergy * 360)));
    fingerprint.push(Math.min(255, Math.round(crossingRate * 12000)));
  }

  return fingerprint;
}

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!creatorProfile) {
    uploadStatus.textContent = "Login as a creator before uploading music.";
    switchView("creator-login", "creator-login");
    return;
  }

  if (!creatorAlbums.length) {
    uploadStatus.textContent = "Create an album before uploading a song.";
    return;
  }

  const file = songFileInput.files[0];
  if (!file || (!file.type.includes("mpeg") && !file.name.toLowerCase().endsWith(".mp3"))) {
    uploadStatus.textContent = "Please choose a valid MP3 file.";
    return;
  }

  const title = songTitleInput.value.trim();
  const singer = songSingerInput.value.trim();
  const selectedAlbum = creatorAlbums.find((album) => album.id === songAlbumInput.value);
  const tempAudioUrl = URL.createObjectURL(file);
  const metadataAudio = new Audio(tempAudioUrl);

  metadataAudio.addEventListener(
    "loadedmetadata",
    async () => {
      try {
        uploadStatus.textContent = "Checking audio fingerprint for duplicates...";
        const [audioBase64, audioFingerprint] = await Promise.all([fileToBase64(file), createAudioFingerprint(file)]);
        uploadStatus.textContent = "Uploading MP3 to storage...";
        const response = await fetch("/api/songs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            singer,
            mood: songMoodInput.value,
            albumId: selectedAlbum.id,
            duration: formatTime(metadataAudio.duration || 0),
            fileName: file.name,
            audioBase64,
            audioFingerprint,
            lyrics: songLyricsInput.value.trim()
          })
        });
        const data = await response.json();
        if (!response.ok) {
          if (data.duplicate) {
            const duplicate = data.duplicate;
            throw new Error(
              `Already uploaded: ${duplicate.title} | Type: ${duplicate.type} | Singer: ${duplicate.singer} | Creator: ${duplicate.creatorName} | Match: ${duplicate.similarity}%`
            );
          }
          throw new Error(data.error || "Could not upload song.");
        }

        const song = data.song;
        tracks.unshift(song);
        creatorSongs.unshift(song);
        selectedAlbum.songCount = data.album.songCount;
        uploadedCount = creatorSongs.length;
        activeCategory = "all";
        document.querySelectorAll("[data-category]").forEach((button) => {
          button.classList.toggle("active", button.dataset.category === "all");
        });
        uploadStatus.textContent = `${title} was saved to storage and added to ${selectedAlbum.name}.`;
        uploadForm.reset();
        URL.revokeObjectURL(tempAudioUrl);
        renderCreatorStudio();
        setTrack(0, true);
      } catch (error) {
        uploadStatus.textContent = error.message;
        URL.revokeObjectURL(tempAudioUrl);
      }
    },
    { once: true }
  );

  metadataAudio.addEventListener(
    "error",
    () => {
      uploadStatus.textContent = "That MP3 could not be loaded. Try another file.";
      URL.revokeObjectURL(tempAudioUrl);
    },
    { once: true }
  );
});

uploadedAudio.addEventListener("timeupdate", updateProgress);

uploadedAudio.addEventListener("ended", () => {
  const index = activeTrack === tracks.length - 1 ? 0 : activeTrack + 1;
  setTrack(index, true);
});

setTrack(0, false);
switchView("home", "home");
setAuthMode("login");
setUserAuthMode("login");
loadPublicSongs();
checkAuthSession();
