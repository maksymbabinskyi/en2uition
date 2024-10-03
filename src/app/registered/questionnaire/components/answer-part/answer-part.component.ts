import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormComponentsService } from '../../../../shared/form-components/form-components.service';
import { Question } from '../../../../shared/api/question';
import { QUESTION_DESCRIPTIONS } from '../../questionnaire';

@Component({
  selector: 'e2-answer-part',
  template: `
    <ng-container *ngIf="answer != null">
      <ng-container *ngFor="let answerPart of answerFormat; let last = last">
        {{answerPart.label}}
        <span class="e2-color_accent300"><b>{{answerPart?.value || '-'}}</b></span>
        <span *ngIf="!last">; </span>
      </ng-container>
    </ng-container>
  `
})
export class AnswerPartComponent implements OnInit, OnChanges {

  @Input()
  question: Question;

  @Input()
  answer: any;

  @Input()
  stage: string;

  answerFormat;

  constructor(private formComponentsService: FormComponentsService) {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (!this.question || (this.answer == null)) {
      return;
    }

    const questionDescription = QUESTION_DESCRIPTIONS[this.question.label];
    this.answerFormat = this.formComponentsService.getQuestionControlComponentMetadata(this.question.questionType.typeName).answerFormatFn(questionDescription, this.answer, this.stage);
  }

}
