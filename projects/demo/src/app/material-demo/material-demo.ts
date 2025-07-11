import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ThemeService } from 'ngx-mat-grayscale-theme';

@Component({
  selector: 'app-material-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatStepperModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    DragDropModule
  ],
  templateUrl: './material-demo.html',
  styleUrl: './material-demo.scss'
})
export class MaterialDemoComponent {
  dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar);
  themeService = inject(ThemeService);

  displayedColumns: string[] = ['select', 'name', 'email', 'role', 'status', 'actions'];
  dataSource = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
    { name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'active' },
    { name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'active' },
    { name: 'Diana Davis', email: 'diana@example.com', role: 'Editor', status: 'inactive' },
    { name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'active' },
    { name: 'Grace Taylor', email: 'grace@example.com', role: 'Admin', status: 'active' },
    { name: 'Henry Anderson', email: 'henry@example.com', role: 'User', status: 'active' },
    { name: 'Ivy Thomas', email: 'ivy@example.com', role: 'Moderator', status: 'inactive' }
  ];

  // Drag & Drop data
  todoList = [
    'Design system documentation',
    'Component library testing',
    'Theme customization',
    'Accessibility review'
  ];

  inProgressList = [
    'Angular 20 migration',
    'Dark theme implementation'
  ];

  doneList = [
    'Project setup',
    'Initial component creation',
    'Basic styling'
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DemoDialogComponent, {
      width: '400px',
      data: { message: 'This is a demo dialog' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Dialog closed with result: ' + result, 'Close', {
          duration: 3000
        });
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('This is a demo snackbar message', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}

@Component({
  selector: 'demo-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  template: `
    <h2 mat-dialog-title>Demo Dialog</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
      <mat-form-field>
        <mat-label>Enter something</mat-label>
        <input matInput [(ngModel)]="inputValue">
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="inputValue" cdkFocusInitial>OK</button>
    </mat-dialog-actions>
  `
})
export class DemoDialogComponent {
  inputValue = '';

  constructor(
    public dialogRef: MatDialogRef<DemoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}