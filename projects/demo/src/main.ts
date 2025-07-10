import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideGrayscaleTheme } from 'ngx-mat-grayscale-theme';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideGrayscaleTheme({
      defaultTheme: 'light',
      enableHighContrast: true,
      storageKey: 'grayscale-theme'
    })
  ]
}).catch(err => console.error(err));