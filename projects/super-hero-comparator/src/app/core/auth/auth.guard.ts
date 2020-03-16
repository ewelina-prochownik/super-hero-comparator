import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = !!this._authService.getToken();
    const currentUrl = next.url[0].path;
    if (currentUrl === 'auth' && isLoggedIn) {
      this._router.navigate(['home']);
      return false;
    } else if (currentUrl !== 'auth' && !isLoggedIn) {
      this._router.navigate(['auth']);
      return false;
    } else return true;
  }
}
