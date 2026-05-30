# RaagaFlow Android APK Build Guide

The Android wrapper is in `android/`.

## Important

This app uses login, database, and MP3 upload APIs, so the APK must load a hosted URL, not `127.0.0.1`.

Before building, deploy the web app to Render and replace this value in:

`android/app/build.gradle`


## Build APK

1. Install Android Studio.
2. Open the `android/` folder in Android Studio.
3. Let Android Studio install Gradle/Android SDK if asked.
4. Change `APP_URL` to your Render URL.
5. Click `Build > Build Bundle(s) / APK(s) > Build APK(s)`.

For Play Store, use:

`Build > Generate Signed Bundle / APK > Android App Bundle`

