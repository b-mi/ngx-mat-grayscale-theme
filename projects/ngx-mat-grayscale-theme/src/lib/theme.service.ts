// src/app/theme.service.ts
import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark' | 'light-high-contrast' | 'dark-high-contrast';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: Theme = 'light';

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('spartan-theme') as Theme;
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentTheme = 'dark';
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('spartan-theme', this.currentTheme);
    this.applyTheme();
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    localStorage.setItem('spartan-theme', theme);
    this.applyTheme();
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  isDark(): boolean {
    return this.currentTheme === 'dark' || this.currentTheme === 'dark-high-contrast';
  }

  isLight(): boolean {
    return this.currentTheme === 'light' || this.currentTheme === 'light-high-contrast';
  }

  isHighContrast(): boolean {
    return this.currentTheme === 'light-high-contrast' || this.currentTheme === 'dark-high-contrast';
  }

  toggleHighContrast(): void {
    switch (this.currentTheme) {
      case 'light':
        this.setTheme('light-high-contrast');
        break;
      case 'dark':
        this.setTheme('dark-high-contrast');
        break;
      case 'light-high-contrast':
        this.setTheme('light');
        break;
      case 'dark-high-contrast':
        this.setTheme('dark');
        break;
    }
  }

  getThemeLabel(): string {
    switch (this.currentTheme) {
      case 'light':
        return 'Svetlá téma';
      case 'dark':
        return 'Tmavá téma';
      case 'light-high-contrast':
        return 'Svetlá (vysoký kontrast)';
      case 'dark-high-contrast':
        return 'Tmavá (vysoký kontrast)';
      default:
        return 'Svetlá téma';
    }
  }
}