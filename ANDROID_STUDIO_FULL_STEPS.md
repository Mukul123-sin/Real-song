# RaagaFlow Android Studio Setup

This project already contains the Android app code in the `android/` folder.

## What This Android App Does

The Android app is a WebView wrapper. It opens the hosted RaagaFlow web app inside an Android app.

This is the correct setup because RaagaFlow has:

- email login
- creator upload
- database JSON files
- MP3 storage
- favorites and history
- recommendations

Those backend features must run on a web server such as Render. The APK should open that hosted URL.

## Folder To Open In Android Studio

Open this folder:

```text
C:\Users\princ\Documents\Codex\2026-05-12\make-an-app-like-gana-app\android
```

Do not open only `android/app`. Open the full `android` folder.

## Important File To Edit

Open:

```text
android/app/build.gradle
```

Find:

```gradle
buildConfigField "String", "APP_URL", "\"https://your-raagaflow-app.onrender.com\""
```

Replace it with your real Render website link:

```gradle
buildConfigField "String", "APP_URL", "\"https://YOUR-APP-NAME.onrender.com\""
```

Example:

```gradle
buildConfigField "String", "APP_URL", "\"https://raagaflow.onrender.com\""
```

## Full Steps

1. Install Android Studio from:

```text
https://developer.android.com/studio
```

2. Open Android Studio.

3. Click `Open`.

4. Select this folder:

```text
C:\Users\princ\Documents\Codex\2026-05-12\make-an-app-like-gana-app\android
```

5. Wait for Gradle Sync to finish.

6. If Android Studio asks to install SDK, Gradle, or Build Tools, click install/accept.

7. Open:

```text
android/app/build.gradle
```

8. Replace `APP_URL` with your deployed Render URL.

9. Click `Sync Now` if Android Studio asks.

10. To test on your phone:

```text
Run > Run app
```

11. To create APK:

```text
Build > Build Bundle(s) / APK(s) > Build APK(s)
```

12. APK output will be inside:

```text
android/app/build/outputs/apk/debug/
```

## For Play Store

Use Android App Bundle, not debug APK:

```text
Build > Generate Signed Bundle / APK > Android App Bundle
```

Google Play usually wants `.aab`, not `.apk`.

## Main Android Code Files

Android entry file:

```text
android/app/src/main/java/com/raagaflow/music/MainActivity.java
```

Android permissions and app config:

```text
android/app/src/main/AndroidManifest.xml
```

App name:

```text
android/app/src/main/res/values/strings.xml
```

Android build config:

```text
android/app/build.gradle
```

## Important Note

Do not use:

```text
http://127.0.0.1:5173/
```

inside the APK.

On Android phone, `127.0.0.1` means the phone itself, not your computer.

Use your hosted Render link:

```text
https://YOUR-APP-NAME.onrender.com
```

