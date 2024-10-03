import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { TOPIC_DESCRIPTIONS } from '../../questionnaire';
import { QuestionService } from '../../question.service';
import { AuthService } from '../../../../shared/auth/auth.service';

@Component({
  selector: 'e2-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  description: string;
  questionNumber: number;
  relationship: any;
  relationshipId;
  img = 'avatar_default.jpg';

  @Output()
  close = new EventEmitter();

  @Output() go = new EventEmitter();

  constructor(private route: ActivatedRoute,
    private questionService: QuestionService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.route.firstChild.params
      .pipe(map(p => +p.questionNumber))
      .subscribe(questionNumber => {
        this.questionNumber = questionNumber;
        this.description = TOPIC_DESCRIPTIONS[`l1q${questionNumber}t`];
      });
      this.route.params.subscribe(p => {
        this.relationshipId = p.relationshipId;
        this.questionService.loadRelationship(this.relationshipId).then(res => {
          this.relationship = this.questionService.relationship
        });
      });
      if (this.authService.getUser().profile && this.authService.getUser().profile.image) {
        this.img = this.authService.getUser().profile.image.url;
      }
  }

  goTo(direction) {
    this.go.next(direction);
  }
}
