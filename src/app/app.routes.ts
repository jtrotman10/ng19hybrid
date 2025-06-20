import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'one', loadComponent: () => import('./one/one.component').then(m => m.OneComponent) },
  { path: 'two', loadComponent: () => import('./two/two.component').then(m => m.TwoComponent) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
