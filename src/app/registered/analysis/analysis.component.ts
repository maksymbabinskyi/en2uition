import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Relationship } from '../../shared/api/relationship';
import { RelationshipsApiService } from '../../shared/api/relationships-api.service';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'e2-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  relationship: Relationship;
  relationshipId: string;
  img = 'avatar_default.jpg';

  constructor(private route: ActivatedRoute,
    private relationshipsApiService: RelationshipsApiService,
    private authService: AuthService) {
  }

  async ngOnInit() {
    this.relationshipId = this.route.snapshot.params.relationshipId;
    this.relationship = await this.relationshipsApiService.getRelationship(this.relationshipId).toPromise();
    if (this.authService.getUser().profile && this.authService.getUser().profile.image) {
      this.img = this.authService.getUser().profile.image.url;
    }
  }

}
