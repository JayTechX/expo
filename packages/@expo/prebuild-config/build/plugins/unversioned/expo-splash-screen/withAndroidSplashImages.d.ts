import { ConfigPlugin } from '@expo/config-plugins';
import { ExpoConfig } from '@expo/config-types';
import { AndroidSplashConfig, SplashScreenConfig } from './getAndroidSplashConfig';
export declare const withAndroidSplashImages: ConfigPlugin<AndroidSplashConfig>;
/**
 * Deletes all previous splash_screen_images and copies new one to desired drawable directory.
 * If path isn't provided then no new image is placed in drawable directories.
 * @see https://developer.android.com/training/multiscreen/screendensities
 *
 * @param androidMainPath Absolute path to the main directory containing code and resources in Android project. In general that would be `android/app/src/main`.
 */
export declare function setSplashImageDrawablesAsync(config: Pick<ExpoConfig, 'android' | 'splash'>, props: AndroidSplashConfig | null, projectRoot: string, logoWidth: number): Promise<void>;
export declare function setSplashImageDrawablesForThemeAsync(config: SplashScreenConfig | null, theme: 'dark' | 'light', projectRoot: string, logoWidth: number): Promise<void>;
