import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isAuth$ = new BehaviorSubject(this.isAuth);

  constructor() { }
  login(){
    this.isAuth = true;
    this.isAuth$.next(this.isAuth);
  }
}
