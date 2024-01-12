import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isAuth$ = new BehaviorSubject(this.isAuth);
  router = inject(Router);	

  constructor() {
    this.isAuth$.subscribe((e) => {
      this.router.navigate(['/login']);
   });
  }
  
  login(){
    this.isAuth = true;
    this.isAuth$.next(this.isAuth);
  }

  logout(){
    this.isAuth = false;
    this.isAuth$.next(this.isAuth);
  }
}
