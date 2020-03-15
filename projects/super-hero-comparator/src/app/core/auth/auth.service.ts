import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authKey = 'access-token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private _router: Router) {
    this.isLoggedInSubject.next(!!this.getToken());
  }

  public login(accessToken: string) {
    localStorage.setItem(this.authKey, accessToken);
    this.isLoggedInSubject.next(true);
    this._router.navigateByUrl('home');
  }

  public logout() {
    localStorage.removeItem(this.authKey);
    this.isLoggedInSubject.next(false);
  }

  public getToken() {
    return localStorage.getItem(this.authKey);
  }
}
