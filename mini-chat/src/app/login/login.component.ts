import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isAuth = false;
  isAuth$ = new BehaviorSubject(this.isAuth);
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    this.authService.isAuth$.subscribe((e) => {
      if (e) this.router.navigate(['/']);
    });
  }

  login() {
    this.authService.login();
    this.isAuth$.next(this.isAuth);
  }
}
