import { Component } from '@angular/core';
import {AuthService} from './core/auth/auth.service';

@Component({
  selector: 'shc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'super-hero-comparator';
  public isLoggedIn$ = this._authService.isLoggedIn$;

  constructor(
    private _authService: AuthService
  ) {

  }
}
