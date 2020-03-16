import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'super-hero-comparator';
  public isLoggedIn$ = this._authService.isLoggedIn$;
  public isAuthorizationUrl = true;

  constructor(private _authService: AuthService, private _router: Router) {
    this.isAuthorizationUrl = this._router.url.includes('auth');
  }
}
