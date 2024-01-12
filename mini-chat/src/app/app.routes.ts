import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'messenger',
    canActivate: [() => authGuard()],
    loadComponent: () =>
      import('./messenger/messenger.component').then(
        (c) => c.MessengerComponent
      ),
  },
  {
    path: 'home',
    canActivate: [() => authGuard()],
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'projet',
    canActivate: [() => authGuard()],
    loadComponent: () =>
      import('./projet/projet.component').then((c) => c.ProjetComponent),
  },{
    path: 'login',
    loadComponent: () =>
        import('./login/login.component').then((c) => c.LoginComponent),
  }
];
