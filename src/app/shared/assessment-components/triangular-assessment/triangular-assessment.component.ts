import { Component, OnInit } from '@angular/core';
import { TriangularAssessment } from '../../../public/how-it-works/constants/triangular-assessments';
import { TypeOfLove } from '../../../public/how-it-works/constants/types-of-love';

@Component({
  selector: 'e2-triangular-assessment',
  templateUrl: './triangular-assessment.component.html'
})
export class TriangularAssessmentComponent implements OnInit {

  hidden = true;

  assessment: TriangularAssessment;
  yourTypeOfLove: TypeOfLove;
  partnerTypeOfLove: TypeOfLove;
  tab = 0;

  constructor() {
  }

  ngOnInit() {
  }

  set(assessment: TriangularAssessment, yourTypeOfLove: TypeOfLove, partnerTypeOfLove: TypeOfLove) {
    this.hidden = false;
    this.assessment = assessment;
    this.yourTypeOfLove = yourTypeOfLove;
    this.partnerTypeOfLove = partnerTypeOfLove;
  }

  hide() {
    this.hidden = true;
  }
}
