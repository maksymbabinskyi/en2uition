import { Component, OnInit, ViewChild } from '@angular/core';
import { RelationshipsApiService } from '../../../../shared/api/relationships-api.service';
import { ActivatedRoute } from '@angular/router';
import { TriangularScore } from '../../../../shared/assessment-components';
import { TRIANGULAR_ASSESSMENTS } from '../../../../public/how-it-works/constants/triangular-assessments';
import { TYPES_OF_LOVE } from '../../../../public/how-it-works/constants/types-of-love';
import { RelationshipAssessment } from '../../../../shared/api/assessment';

@Component({
  selector: 'e2-get-assessment-based-on-triangular-theory',
  templateUrl: './get-assessment-based-on-triangular-theory.component.html',
  styleUrls: ['./get-assessment-based-on-triangular-theory.component.scss']
})
export class GetAssessmentBasedOnTriangularTheoryComponent implements OnInit {

  assessment: RelationshipAssessment;

  yourScore: TriangularScore;
  partnerScore: TriangularScore;

  @ViewChild('triangularAssessment')
  triangularAssessment;

  constructor(private relationshipsApiService: RelationshipsApiService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.assessment = await this.relationshipsApiService.getTriangularAssessment(this.route.snapshot.params.relationshipId).toPromise();

    setTimeout(() => {
      this.triangularAssessment.set(this.getAssessment(), this.getTypeOfLove(this.yourScore), this.getTypeOfLove(this.partnerScore));
    });
  }

  getAssessment() {
    return TRIANGULAR_ASSESSMENTS[
      `${this.yourScore.C}_${this.yourScore.P}_${this.yourScore.I}__${this.partnerScore.C}_${this.partnerScore.P}_${this.partnerScore.I}`
      ];
  }

  getTypeOfLove(score: TriangularScore) {
    return TYPES_OF_LOVE.find(typeOfLove => typeOfLove.key === `${score.C}_${score.P}_${score.I}`);
  }

}
