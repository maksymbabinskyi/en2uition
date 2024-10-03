import { CookieService } from 'ngx-cookie';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersApiService } from '../../api/users-api.service';

export const TOKEN_KEY = 'EN2_ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'EN2_REFRESH_TOKEN';

// export const TRANSFER_STATE_TOKEN_KEY = makeStateKey<string>('jwt.token');
// export const TRANSFER_STATE_REFRESH_TOKEN_KEY = makeStateKey<string>('jwt.refreshToken');

@Injectable({providedIn: 'root'})
export class JwtStorageService {

  jwtHelperService: JwtHelperService = new JwtHelperService({});

  private refreshTokenPromise: Promise<string>;

  constructor(private cookieService: CookieService,
              private usersApiService: UsersApiService,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  set(token: string, refreshToken: string) {
    this.cookieService.put(TOKEN_KEY, token);
    this.cookieService.put(REFRESH_TOKEN_KEY, refreshToken);
  }

  getToken(): string {
    return this.cookieService.get(TOKEN_KEY);
  }

  getRefreshToken(): string {
    return this.cookieService.get(REFRESH_TOKEN_KEY);
  }

  public getUnexpiredToken(): Promise<string> {
    if (!this.getToken()) {
      return new Promise(resolve => resolve(null));
    }

    if (!this.jwtHelperService.isTokenExpired(this.getToken())) {
      return new Promise(resolve => resolve(this.getToken()));
    }

    if (this.refreshTokenPromise) {
      return this.refreshTokenPromise;
    }

    this.refreshTokenPromise = this.usersApiService.refreshToken(this.getRefreshToken()).toPromise()
      .then((data: any) => {
        this.refreshTokenPromise = null;

        const token = data.token;

        this.set(token.accessToken, token.refreshToken);

        return token.accessToken;
      });

    return this.refreshTokenPromise;
  }

  remove() {
    this.cookieService.remove(TOKEN_KEY);
    this.cookieService.remove(REFRESH_TOKEN_KEY);
  }
}
