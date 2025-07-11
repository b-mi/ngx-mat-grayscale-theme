import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    loadComponent: () => import('./material-demo/material-demo').then(m => m.MaterialDemoComponent),
    title: 'Material Components Demo'
  },
  {
    path: 'tokens',
    loadComponent: () => import('../../../ngx-mat-grayscale-theme/src/lib/material-tokens-showcase/material-tokens-showcase.component').then(m => m.MaterialTokensShowcaseComponent),
    title: 'Design Tokens'
  },
  {
    path: '**',
    redirectTo: '/demo'
  }
];