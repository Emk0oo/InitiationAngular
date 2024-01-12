import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'messenger',
    loadComponent: () =>
      import('./messenger/messenger.component').then(
        (c) => c.MessengerComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'projet',
    loadComponent: () =>
      import('./projet/projet.component').then((c) => c.ProjetComponent),
  },
];
