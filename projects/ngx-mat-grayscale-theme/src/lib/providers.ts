import { Provider } from '@angular/core';
import { ThemeService } from './theme.service';

export interface GrayscaleThemeConfig {
  defaultTheme?: 'light' | 'dark' | 'light-high-contrast' | 'dark-high-contrast';
  enableHighContrast?: boolean;
  storageKey?: string;
}

export function provideGrayscaleTheme(config?: GrayscaleThemeConfig): Provider[] {
  return [
    ThemeService,
    { provide: 'GRAYSCALE_THEME_CONFIG', useValue: config || {} }
  ];
}