import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { QuestionsApiService } from '../../../../shared/api/questions-api.service';
import { Question } from '../../../../shared/api/question';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswersApiService } from '../../../../shared/api/answers-api.service';
import { Answer } from '../../../../shared/api/answer';
import { DialogService } from '../../../../shared/dialog/dialog.service';
import { QuestionComponent } from '../question/question.component';
import { MatDialogRef } from '@angular/material';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'e2-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
  providers: [DialogService, QuestionService]
})
export class AnswersComponent implements OnInit {

  questions: Question[];
  answers: Answer[];
  loading = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private questionsApiService: QuestionsApiService,
              private answersApiService: AnswersApiService,
              private dialogService: DialogService,
              private questionService: QuestionService) {
  }

  async ngOnInit() {
    this.questions = await this.questionsApiService.getQuestions('1').toPromise();

    this.loadAnswers();

    let answerDialogRef: MatDialogRef<any>;

    this.route.params.subscribe(params => {
      if (params.questionNumber !== 'all' && !answerDialogRef) {

        this.questionService.loadRelationship(params.relationshipId);

        answerDialogRef = this.dialogService.open(QuestionComponent, {
          data: {questionService: this.questionService}
        });
        answerDialogRef.afterClosed().subscribe(() => {
          this.loadAnswers();
          this.router.navigate(['../all'], {relativeTo: this.route});
          answerDialogRef = null;
        });
      }
    });
  }

  async loadAnswers() {
    this.answers = await this.answersApiService.getAnswers(this.route.snapshot.params.relationshipId).toPromise();
    this.loading = false;
    this.cdr.detectChanges();
  }

  getAnswer(questionId: number) {
    return this.answers && this.answers.find(answer => answer.questionId === questionId);
  }
}
