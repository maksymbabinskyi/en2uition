import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Level } from './level';

@Injectable({
  providedIn: 'root'
})
export class LevelsApiService {

  constructor(private apiService: ApiService) {
  }

  getLevels(): Observable<Level[]> {
    return this.apiService.get(`/levels`, {
      params: {
        $orderby: 'level'
      }
    });
  }
}
