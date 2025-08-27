import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ambep.app',
  appName: 'app-ambep',
  webDir: 'www',
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '600',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      'android-minSdkVersion': '22',
      'android-targetSdkVersion': '30',
      AndroidPersistentFileLocation: 'Compatibility',
      AllowInlineMediaPlayback: 'true',
      StatusBarOverlaysWebView: 'false',
      loadUrlTimeoutValue: '700000'
    }
  }
};

export default config;
