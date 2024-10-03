import { Component, Input, OnInit } from '@angular/core';
import { QUESTION_DESCRIPTIONS, QuestionDescription } from '../../questionnaire';
import { Question } from '../../../../shared/api/question';
import { Answer } from '../../../../shared/api/answer';

@Component({
  selector: 'e2-answer',
  template: `
    <div class="e2-color_text-primary">
      <p class="py-0">
        {{(questionDescription.title && questionDescription.title[who]) || 'On the day I met my partner'}},
        <ng-container *ngIf="question.optional.subquestion">
          {{questionDescription.label && questionDescription.label[who + 'Past']}}
          <e2-answer-part [question]="question" [answer]="answer.answer[who + 'Past']" [stage]="who + 'Past'"></e2-answer-part>
          ; today
        </ng-container>
        {{questionDescription.label && questionDescription.label[who]}}
        <e2-answer-part [question]="question" [answer]="answer.answer[who]" [stage]="who"></e2-answer-part>
        .
      </p>
    </div>
  `
})
export class AnswerComponent implements OnInit {

  @Input()
  question: Question;

  @Input()
  answer: Answer;

  @Input()
  who: string;

  questionDescription: QuestionDescription;

  constructor() {
  }

  ngOnInit() {
    this.questionDescription = QUESTION_DESCRIPTIONS[this.question.label];
  }

}
