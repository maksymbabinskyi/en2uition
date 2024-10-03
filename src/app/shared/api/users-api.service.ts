import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private apiService: ApiService) {
  }

  getCurrentUser(): Observable<User> {
    return this.apiService.get(`/users/current`);
  }

  signin(userName: string, password: string): Observable<{ token: { accessToken: string, refreshToken: string } }> {
    return this.apiService.post(`/users/signin`, {userName, password});
  }

  signup(userName: string, password: string): Observable<any> {
    return this.apiService.post(`/users/signup`, {userName, password});
  }

  verify(id: string): Observable<any> {
    return this.apiService.get(`/users/${id}/verify`);
  }

  changePassword(profile): Observable<any> {
    return this.apiService.post(`/users/changepassword`, profile);
  }

  forgotPassword(data): Observable<any> {
    return this.apiService.post(`/users/initresetpassword`, data);
  }

  resetPassword(id, data): Observable<any> {
    return this.apiService.post(`/users/${id}/resetpassword`, data);
  }

  refreshToken(refreshToken: string): Observable<{ token: { accessToken: string, refreshToken: string } }> {
    return this.apiService.get(`/users/refreshtoken`, {
      skipInterceptors: true,
      headers: {
        refresh_token: refreshToken
      }
    });
  }
}
