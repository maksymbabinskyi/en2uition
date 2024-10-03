import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Relationship } from './relationship';
import { RelationshipAssessment } from './assessment';

@Injectable({
  providedIn: 'root'
})
export class RelationshipsApiService {

  constructor(private apiService: ApiService) {
  }

  getRelationships(): Observable<Relationship[]> {
    return this.apiService.get(`/users/relationships`);
  }

  addRelationship(relationship: { partnerName: string, aging: number }, userId: string): Observable<Relationship> {
    return this.apiService.post(`/relationships`, {
      ...relationship,
      userId
    });
  }

  getRelationship(relationshipId: string): Observable<Relationship> {
    return this.apiService.get(`/relationships/${relationshipId}`);
  }

  removeRelationship(relationshipId: string) {
    return this.apiService.delete(`/relationships/${relationshipId}`);
  }

  update(relationshipId: string, data: Relationship) {
    return this.apiService.put(`/relationships/${relationshipId}`, data);
  }

  getAssessment(relationshipId: string): Observable<RelationshipAssessment> {
    return this.apiService.get(`/relationships/${relationshipId}/assessment`);
  }

  getTriangularAssessment(relationshipId: string): Observable<RelationshipAssessment> {
    return this.apiService.get(`/relationships/${relationshipId}/triangularassessment`);
  }

  getAreas24Assessment(relationshipId: string): Observable<RelationshipAssessment> {
    return this.apiService.get(`/relationships/${relationshipId}/areas24assessment`);
  }
}
