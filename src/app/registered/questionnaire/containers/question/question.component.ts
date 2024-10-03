import { Component, Inject, OnInit, Optional, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../../../../shared/api/question';
import { Answer } from '../../../../shared/api/answer';
import { AnswersApiService } from '../../../../shared/api/answers-api.service';
import { FormGroup } from '@angular/forms';
import { FormComponentsService } from '../../../../shared/form-components/form-components.service';
import { QUESTION_DESCRIPTIONS } from '../../questionnaire';
import { DialogService } from '../../../../shared/dialog/dialog.service';
import { QuestionsApiService } from '../../../../shared/api/questions-api.service';
import { DefinitionDialogComponent } from '../../../../shared/dialog';
import { AuthService } from '../../../../shared/auth/auth.service';
import { QuestionService } from '../../question.service';
import { MAT_DIALOG_DATA } from '@angular/material';

export type QuestionStage = 'mePast' | 'me' | 'partnerPast' | 'partner';

@Component({
  selector: 'e2-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [DialogService]
})
export class QuestionComponent implements OnInit {

  question: Question;
  answer: Answer;

  stages: QuestionStage[] = [];
  formGroup: FormGroup;

  QUESTION_DESCRIPTIONS = QUESTION_DESCRIPTIONS;

  route: ActivatedRoute;

  img = 'avatar_default.jpg';

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private answersApiSerivce: AnswersApiService,
    private formComponentsService: FormComponentsService,
    private questionsApiService: QuestionsApiService,
    private dialogService: DialogService,
    private authService: AuthService,
    @Optional() public questionService: QuestionService,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: { questionService: QuestionService }) {
    if (!this.questionService) {
      this.questionService = this.data.questionService;
    }
  }

  async ngOnInit() {
    this.route = this._route;

    while (this.route.firstChild) {
      this.route = this.route.firstChild;
    }

    const questions = await this.questionsApiService.getQuestions(this.route.snapshot.params.levelNumber).toPromise();

    if (this.authService.getUser().profile && this.authService.getUser().profile.image) {
      this.img = this.authService.getUser().profile.image.url;
    }

    this.route.params
      .subscribe(async params => {

        if (params.questionNumber === 'all') {
          return;
        }

        this.question = questions.find(q => q.questionNumber === +params.questionNumber);
        console.log(this.question);
        this.formGroup = this.formComponentsService.createFormGroup(this.question);

        this.initStages();

        try {
          this.answer = await this.answersApiSerivce.getAnswer(this.question.id, params.relationshipId).toPromise();
          this.formGroup.patchValue(this.answer.answer);
        } catch {
          this.answer = null;
        }

      });
  }

  initStages() {
    this.stages = ['me'];

    if (this.question.optional.subquestion) {
      this.stages.unshift('mePast');
    }

    if (this.question.optional.mode === 'D') {
      if (this.question.optional.subquestion) {
        this.stages.push('partnerPast');
      }
      this.stages.push('partner');
    }
  }

  getTimeTitle() {
    const title = QUESTION_DESCRIPTIONS[this.question.label] && QUESTION_DESCRIPTIONS[this.question.label].title;

    switch (this.stages[0]) {
      case 'mePast':
        return title && title.mePast || 'On the day I met my partner,';
      case 'me':
        return title && title.me || 'Today,';
      case 'partnerPast':
        return title && title.partnerPast || 'On the day I met my partner,';
      case 'partner':
        return title && title.partner || 'Today,';
    }
  }

  different() {
    this.stages.shift();
  }

  notDifferent() {
    this.formGroup.get(this.stages[1]).patchValue(this.formGroup.get(this.stages[0]).value);

    if (this.stages.length > 2) {
      this.stages.splice(0, 2);
    } else {
      this.submitAnswer();
    }
  }

  async submitAnswer() {
    const status = this.getAnswerStatus(this.formGroup.value);

    if (status === -1) {
      if (this.answer) {
        this.answersApiSerivce.deleteAnswer(this.answer.id).subscribe();
      }

      return this.next();
    }

    const userId = this.authService.getUser().id;
    const answer = {answer: this.formGroup.value, status: !!status};

    if (this.answer) {
      this.answersApiSerivce.updateAnswer(this.answer.id, this.question.id, this.route.snapshot.params.relationshipId, answer, userId).subscribe();
    } else {
      this.answersApiSerivce.addAnswer(this.question.id, this.route.snapshot.params.relationshipId, answer, userId).subscribe();
    }

    this.next();
  }

  showDefinitionDialog() {
    this.dialogService.open(DefinitionDialogComponent, {
      data: {
        definition: QUESTION_DESCRIPTIONS[this.question.label].definition
      }
    });
  }

  previous() {
    if ((this.question.questionNumber - 1) % 15 === 0) {
      this.questionService.showTopic.next(true);
    } else {
      this.router.navigate(['../', this.question.questionNumber - 1], {relativeTo: this.route});
      this.questionService.showTopic.next(false);
    }
  }

  next() {
    if (this.question.questionNumber === 60) {
      this.router.navigate(['../../../analysis'], {relativeTo: this.route});
      return;
    }

    this.router.navigate(['../', this.question.questionNumber + 1], {relativeTo: this.route});
  }

  goPartner() {
    if (this.stages[0] === 'mePast' || this.stages[0] === 'partnerPast') {
      this.notDifferent();
    } else if (this.stages.length === 1) {
      this.submitAnswer();
    } else if (this.stages[0] === 'me' && this.stages.length > 1) {
      this.stages.shift();
    }
  }

  goMe() {
    if (this.stages[0] === 'partnerPast') {
      this.stages[0] = 'mePast';
    }
  }

  // -1 means not answered
  private getAnswerStatus(answerValue): number {
    const statuses = [];

    const getStatus: Function = this.formComponentsService.getQuestionControlComponentMetadata(this.question.questionType.typeName).getStatus;

    const keys = Object.keys(answerValue);
    for (let i = 0; i < keys.length; i++) {
      const answerPart = answerValue[keys[i]];
      const status = getStatus(answerPart);

      statuses.push(status);
    }

    if (statuses.every(v => v === 1)) {
      return 1;
    }

    if (statuses.every(v => v === -1)) {
      return -1;
    }

    return 0;
  }


}
