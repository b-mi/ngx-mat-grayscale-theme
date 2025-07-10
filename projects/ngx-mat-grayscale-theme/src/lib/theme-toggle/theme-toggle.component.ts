// src/app/theme-toggle.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService, Theme } from '../theme.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'mat-gray-theme-toggle',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule,
    MatDividerModule
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) { }

  getThemeIcon(): string {
    const theme = this.themeService.getCurrentTheme();
    switch (theme) {
      case 'light':
        return 'light_mode';
      case 'dark':
        return 'dark_mode';
      case 'light-high-contrast':
        return 'contrast';
      case 'dark-high-contrast':
        return 'contrast';
      default:
        return 'light_mode';
    }
  }

  setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }

  toggleHighContrast(): void {
    this.themeService.toggleHighContrast();
  }
}