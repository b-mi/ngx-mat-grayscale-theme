// projects/demo/src/app/app.ts
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { ThemeToggleComponent, ThemeService } from 'ngx-mat-grayscale-theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    ThemeToggleComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  themeService = inject(ThemeService);
  
  displayedColumns: string[] = ['name', 'email', 'role', 'status'];
  dataSource = [
    { name: 'Ján Novák', email: 'jan@example.com', role: 'Admin', status: 'active' },
    { name: 'Mária Svobodová', email: 'maria@example.com', role: 'Editor', status: 'active' },
    { name: 'Peter Horváth', email: 'peter@example.com', role: 'User', status: 'inactive' },
    { name: 'Anna Dvořáková', email: 'anna@example.com', role: 'Moderator', status: 'active' },
    { name: 'Tomáš Kovář', email: 'tomas@example.com', role: 'User', status: 'active' }
  ];
}