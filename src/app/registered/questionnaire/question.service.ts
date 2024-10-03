import { Injectable } from '@angular/core';
import { RelationshipsApiService } from '../../shared/api/relationships-api.service';
import { Relationship } from '../../shared/api/relationship';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class QuestionService {

  relationship: Relationship;
  showTopic = new BehaviorSubject(false);

  constructor(private relationshipsApiService: RelationshipsApiService) {
  }

  async loadRelationship(relationshipId: string) {
    this.relationship = await this.relationshipsApiService.getRelationship(relationshipId).toPromise();
  }
}
