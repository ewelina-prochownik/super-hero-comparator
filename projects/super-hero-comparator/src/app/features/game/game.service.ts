import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/auth/auth.service';
import { environment } from '../../../environments/environment';
import { SearchResponse } from './game.data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  public getHeroByName(name: string) {
    return this._http
      .get<SearchResponse>(`${environment.apiEndpoint}/${this._authService.getToken()}/search/${name}`)
      .pipe(
        map(result => {
          if (result.response !== 'success') {
            throw new Error('Failed data fetch');
          }
          return result;
        })
      );
  }
}
