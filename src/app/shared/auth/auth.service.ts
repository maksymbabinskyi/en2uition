import { Injectable } from '@angular/core';
import { UsersApiService } from '../api/users-api.service';
import { JwtStorageService } from './jwt/jwt-storage.service';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { User } from '../api/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;
  private _getUser$: Subject<User> = new ReplaySubject(1);
  getUser$: Observable<User> = this._getUser$.asObservable();

  constructor(private jwtStorageService: JwtStorageService,
              private usersApiService: UsersApiService,
              private router: Router) {
  }

  async init() {
    try {
      if (this.jwtStorageService.getToken()) {
        return this.setUser(await this.loadUser());
      }

      this.setUser(null);
    } catch (e) {
    }
  }

  async signin(email: string, password: string, redirect = '/home') {
    const {token: token} = await this.usersApiService.signin(email, password).toPromise();

    this.jwtStorageService.set(token.accessToken, token.refreshToken);
    this.setUser(await this.loadUser());
    this.router.navigate([redirect])
  }

  async signup(email: string, password: string) {
    await this.usersApiService.signup(email, password).toPromise();
  }

  logout() {
    this.jwtStorageService.remove();
    this.setUser(null);
    this.router.navigate(['/']);
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
    this._getUser$.next(user);
  }

  private async loadUser() {
    return await this.usersApiService.getCurrentUser().toPromise();
  }

  verify(id: string) {
    return this.usersApiService.verify(id);
  }
}
