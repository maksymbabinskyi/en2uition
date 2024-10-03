import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilesApiService {

  constructor(private apiService: ApiService) { }

  put(user) {
    return this.apiService.put(`/profiles/${user.id}`, user);
  }

  get(userId) {
    return this.apiService.get(`/profiles/${userId}`);
  }

  getAll() {
    return this.apiService.get('/profiles');
  }

  post(user) {
    return this.apiService.post(`/profiles/`, user);
  }
}
