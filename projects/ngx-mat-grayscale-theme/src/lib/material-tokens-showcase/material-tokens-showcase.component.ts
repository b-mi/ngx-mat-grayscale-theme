// ngx-mat-grayscale-theme/src/lib/material-tokens-showcase/material-tokens-showcase.component.ts

import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface ColorPair {
  name: string;
  backgroundVariable: string;
  textVariable: string;
  description: string;
  category: string;
  className: string;
}

interface SingleColorToken {
  name: string;
  variable: string;
  description: string;
  category: string;
}

interface TypographyToken {
  name: string;
  variable: string;
  size: string;
  weight: string;
  lineHeight: string;
  description: string;
}

@Component({
  selector: 'ngx-material-tokens-showcase',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './material-tokens-showcase.component.html',
  styleUrl: './material-tokens-showcase.component.scss'
})
export class MaterialTokensShowcaseComponent {
  searchTerm = signal('');

  constructor(private snackBar: MatSnackBar) {}

  // Color pairs - background + text combinations
  colorPairs: ColorPair[] = [
    // Background & Surface
    { 
      name: 'Background', 
      backgroundVariable: '--mat-sys-background', 
      textVariable: '--mat-sys-on-background', 
      description: 'Hlavné pozadie aplikácie', 
      category: 'Background & Surface',
      className: 'mat-sys-background'
    },
    { 
      name: 'Surface', 
      backgroundVariable: '--mat-sys-surface', 
      textVariable: '--mat-sys-on-surface', 
      description: 'Základný povrch komponentov', 
      category: 'Background & Surface',
      className: 'mat-sys-surface'
    },
    { 
      name: 'Surface Variant', 
      backgroundVariable: '--mat-sys-surface-variant', 
      textVariable: '--mat-sys-on-surface-variant', 
      description: 'Alternatívny povrch', 
      category: 'Background & Surface',
      className: 'mat-sys-surface-variant'
    },

    // Primary Colors
    { 
      name: 'Primary', 
      backgroundVariable: '--mat-sys-primary', 
      textVariable: '--mat-sys-on-primary', 
      description: 'Hlavná značková farba', 
      category: 'Primary Colors',
      className: 'mat-sys-primary'
    },
    { 
      name: 'Primary Container', 
      backgroundVariable: '--mat-sys-primary-container', 
      textVariable: '--mat-sys-on-primary-container', 
      description: 'Kontajner pre primary', 
      category: 'Primary Colors',
      className: 'mat-sys-primary-container'
    },

    // Secondary Colors
    { 
      name: 'Secondary', 
      backgroundVariable: '--mat-sys-secondary', 
      textVariable: '--mat-sys-on-secondary', 
      description: 'Sekundárna farba', 
      category: 'Secondary Colors',
      className: 'mat-sys-secondary'
    },
    { 
      name: 'Secondary Container', 
      backgroundVariable: '--mat-sys-secondary-container', 
      textVariable: '--mat-sys-on-secondary-container', 
      description: 'Kontajner pre secondary', 
      category: 'Secondary Colors',
      className: 'mat-sys-secondary-container'
    },

    // Error Colors
    { 
      name: 'Error', 
      backgroundVariable: '--mat-sys-error', 
      textVariable: '--mat-sys-on-error', 
      description: 'Chybová farba', 
      category: 'Error Colors',
      className: 'mat-sys-error'
    },
    { 
      name: 'Error Container', 
      backgroundVariable: '--mat-sys-error-container', 
      textVariable: '--mat-sys-on-error-container', 
      description: 'Kontajner pre error', 
      category: 'Error Colors',
      className: 'mat-sys-error-container'
    },

    // Inverse Colors
    { 
      name: 'Inverse Surface', 
      backgroundVariable: '--mat-sys-inverse-surface', 
      textVariable: '--mat-sys-inverse-on-surface', 
      description: 'Inverzný povrch', 
      category: 'Inverse Colors',
      className: 'mat-sys-inverse-surface'
    }
  ];

  // Single color tokens without pairs
  singleColorTokens: SingleColorToken[] = [
    // Surface Hierarchy
    { name: 'Surface Container Lowest', variable: '--mat-sys-surface-container-lowest', description: 'Najnižší - modály, dialógy', category: 'Surface Hierarchy' },
    { name: 'Surface Container Low', variable: '--mat-sys-surface-container-low', description: 'Nízky - karty, listy', category: 'Surface Hierarchy' },
    { name: 'Surface Container', variable: '--mat-sys-surface-container', description: 'Štandardný - chips, buttons', category: 'Surface Hierarchy' },
    { name: 'Surface Container High', variable: '--mat-sys-surface-container-high', description: 'Vysoký - app bars', category: 'Surface Hierarchy' },
    { name: 'Surface Container Highest', variable: '--mat-sys-surface-container-highest', description: 'Najvyšší - FAB', category: 'Surface Hierarchy' },

    // Borders & Outlines
    { name: 'Outline', variable: '--mat-sys-outline', description: 'Štandardné borders', category: 'Borders & Outlines' },
    { name: 'Outline Variant', variable: '--mat-sys-outline-variant', description: 'Jemné borders', category: 'Borders & Outlines' },
    { name: 'Scrim', variable: '--mat-sys-scrim', description: 'Overlay pozadie', category: 'Borders & Outlines' },
    { name: 'Shadow', variable: '--mat-sys-shadow', description: 'Farba tieňov', category: 'Borders & Outlines' },

    // Inverse Colors
    { name: 'Inverse Primary', variable: '--mat-sys-inverse-primary', description: 'Inverzná primary farba', category: 'Inverse Colors' }
  ];

  typographyTokens: TypographyToken[] = [
    { name: 'Display Large', variable: '--mat-sys-display-large', size: '3.562rem', weight: '400', lineHeight: '4rem', description: 'Najväčší nadpis - 57px' },
    { name: 'Display Medium', variable: '--mat-sys-display-medium', size: '2.812rem', weight: '400', lineHeight: '3.25rem', description: 'Veľký nadpis - 45px' },
    { name: 'Display Small', variable: '--mat-sys-display-small', size: '2.25rem', weight: '400', lineHeight: '2.75rem', description: 'Menší display - 36px' },
    { name: 'Headline Large', variable: '--mat-sys-headline-large', size: '2rem', weight: '400', lineHeight: '2.5rem', description: 'Veľký headline - 32px' },
    { name: 'Headline Medium', variable: '--mat-sys-headline-medium', size: '1.75rem', weight: '400', lineHeight: '2.25rem', description: 'Stredný headline - 28px' },
    { name: 'Headline Small', variable: '--mat-sys-headline-small', size: '1.5rem', weight: '400', lineHeight: '2rem', description: 'Malý headline - 24px' },
    { name: 'Title Large', variable: '--mat-sys-title-large', size: '1.375rem', weight: '400', lineHeight: '1.75rem', description: 'Veľký titulok - 22px' },
    { name: 'Title Medium', variable: '--mat-sys-title-medium', size: '1rem', weight: '500', lineHeight: '1.5rem', description: 'Stredný titulok - 16px' },
    { name: 'Title Small', variable: '--mat-sys-title-small', size: '0.875rem', weight: '500', lineHeight: '1.25rem', description: 'Malý titulok - 14px' },
    { name: 'Body Large', variable: '--mat-sys-body-large', size: '1rem', weight: '400', lineHeight: '1.5rem', description: 'Veľký telový text - 16px' },
    { name: 'Body Medium', variable: '--mat-sys-body-medium', size: '0.875rem', weight: '400', lineHeight: '1.25rem', description: 'Stredný telový text - 14px' },
    { name: 'Body Small', variable: '--mat-sys-body-small', size: '0.75rem', weight: '400', lineHeight: '1rem', description: 'Malý telový text - 12px' },
    { name: 'Label Large', variable: '--mat-sys-label-large', size: '0.875rem', weight: '500', lineHeight: '1.25rem', description: 'Veľký label - 14px - buttons' },
    { name: 'Label Medium', variable: '--mat-sys-label-medium', size: '0.75rem', weight: '500', lineHeight: '1rem', description: 'Stredný label - 12px - tabs' },
    { name: 'Label Small', variable: '--mat-sys-label-small', size: '0.688rem', weight: '500', lineHeight: '1rem', description: 'Malý label - 11px - captions' }
  ];

  elevationLevels = [
    { name: 'Level 0', variable: '--mat-sys-level0', usage: 'Žiadny tieň' },
    { name: 'Level 1', variable: '--mat-sys-level1', usage: 'Switch, najmenší tieň' },
    { name: 'Level 2', variable: '--mat-sys-level2', usage: 'Button, malý tieň' },
    { name: 'Level 3', variable: '--mat-sys-level3', usage: 'Card, stredný tieň' },
    { name: 'Level 4', variable: '--mat-sys-level4', usage: 'Navigation drawer' },
    { name: 'Level 5', variable: '--mat-sys-level5', usage: 'Modal, najväčší tieň' }
  ];

  cornerTokens = [
    { name: 'None', variable: '--mat-sys-corner-none', value: '0' },
    { name: 'Extra Small', variable: '--mat-sys-corner-extra-small', value: '4px' },
    { name: 'Small', variable: '--mat-sys-corner-small', value: '8px' },
    { name: 'Medium', variable: '--mat-sys-corner-medium', value: '12px' },
    { name: 'Large', variable: '--mat-sys-corner-large', value: '16px' },
    { name: 'Extra Large', variable: '--mat-sys-corner-extra-large', value: '28px' },
    { name: 'Full', variable: '--mat-sys-corner-full', value: '9999px' }
  ];

  filteredColorCategories = computed(() => {
    const searchLower = this.searchTerm().toLowerCase();
    
    // Group color pairs by category
    const pairsByCategory = this.groupColorPairsByCategory();
    const singlesByCategory = this.groupSingleTokensByCategory();
    
    // Combine and filter
    const allCategories = this.combineCategories(pairsByCategory, singlesByCategory);
    
    if (!searchLower) return allCategories;
    
    return allCategories.map(category => ({
      ...category,
      colorPairs: category.colorPairs.filter(pair => 
        pair.name.toLowerCase().includes(searchLower) ||
        pair.backgroundVariable.toLowerCase().includes(searchLower) ||
        pair.textVariable.toLowerCase().includes(searchLower) ||
        pair.description.toLowerCase().includes(searchLower)
      ),
      singleTokens: category.singleTokens.filter(token => 
        token.name.toLowerCase().includes(searchLower) ||
        token.variable.toLowerCase().includes(searchLower) ||
        token.description.toLowerCase().includes(searchLower)
      )
    })).filter(category => category.colorPairs.length > 0 || category.singleTokens.length > 0);
  });

  private groupColorPairsByCategory() {
    return this.colorPairs.reduce((acc, pair) => {
      if (!acc[pair.category]) {
        acc[pair.category] = [];
      }
      acc[pair.category].push(pair);
      return acc;
    }, {} as Record<string, ColorPair[]>);
  }

  private groupSingleTokensByCategory() {
    return this.singleColorTokens.reduce((acc, token) => {
      if (!acc[token.category]) {
        acc[token.category] = [];
      }
      acc[token.category].push(token);
      return acc;
    }, {} as Record<string, SingleColorToken[]>);
  }

  private combineCategories(pairs: Record<string, ColorPair[]>, singles: Record<string, SingleColorToken[]>) {
    const allCategoryNames = new Set([...Object.keys(pairs), ...Object.keys(singles)]);
    
    return Array.from(allCategoryNames).map(categoryName => ({
      name: categoryName,
      colorPairs: pairs[categoryName] || [],
      singleTokens: singles[categoryName] || []
    }));
  }

  copyColorPairClass(pair: ColorPair) {
    const cssClass = `.${pair.className} {
  background-color: var(${pair.backgroundVariable});
  color: var(${pair.textVariable});
}`;
    
    navigator.clipboard.writeText(cssClass).then(() => {
      this.snackBar.open(`Skopírovaná CSS class: .${pair.className}`, 'Zavrieť', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open(`Skopírované: ${text}`, 'Zavrieť', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
  }
}