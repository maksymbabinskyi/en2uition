import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e2-relationship-assessment',
  template: `
    <div class="b-box" *ngIf="!hidden">
      <div class="b-box__content b-box__content_p_t_none">
        <div class="b-data-sections">
          <p class="b-data-sections__item"><span
          class="e2-fw_semibold pr-1">You:</span> <span class="e2-assessment_your-score">{{yourStatus}}</span></p>
          <p class="b-data-sections__item"><span class="e2-fw_semibold pr-2">Your Partner:</span> <span class="e2-assessment_partner-score">{{partnerStatus}}</span></p>
        </div>
        <p class="b-text b-text_sm" *ngFor="let paragraph of paragraphs">{{paragraph}}</p>
      </div>
    </div>
  `
})
export class RelationshipAssessmentComponent implements OnInit {

  hidden = true;

  paragraphs: string[];
  yourStatus: string;
  partnerStatus: string;

  constructor() {
  }

  ngOnInit() {
  }

  set(paragraphs, yourStatus: string, partnerStatus: string) {
    this.hidden = false;
    this.paragraphs = paragraphs;
    this.yourStatus = yourStatus;
    this.partnerStatus = partnerStatus;
  }

  hide() {
    this.hidden = true;
  }
}
