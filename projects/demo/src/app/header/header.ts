import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeToggleComponent, ThemeService } from 'ngx-mat-grayscale-theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ThemeToggleComponent
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  themeService = inject(ThemeService);
  router = inject(Router);
}