import { Component, OnInit } from '@angular/core';
import { RelationshipsApiService } from '../../../../shared/api/relationships-api.service';
import { ActivatedRoute } from '@angular/router';
import { RelationshipAssessment } from '../../../../shared/api/assessment';

@Component({
  selector: 'e2-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {

  assessment: RelationshipAssessment;

  constructor(private relationshipsApiService: RelationshipsApiService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.assessment = await this.relationshipsApiService.getAssessment(this.route.snapshot.params.relationshipId).toPromise();
  }

}
