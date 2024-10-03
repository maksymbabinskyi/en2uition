import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export enum ImageType {
  Relationship,
  User
}

@Injectable({
  providedIn: 'root'
})
export class ImagesApiService {

  constructor(private apiService: ApiService) {
  }

  upload(id: string, file: File, type: ImageType): Observable<any> {
    const data = new FormData();
    data.append('file', file);

    return this.apiService.post(`/images/Upload/${id}/${type === ImageType.Relationship ? 1 : 2}`, data);
  }

  delete(id: string): Observable<any> {
    return this.apiService.delete(`/images/${id}`);
  }
}
