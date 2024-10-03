import { Component, OnInit } from '@angular/core';
import { RelationshipsApiService } from '../../shared/api/relationships-api.service';
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'e2-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  providers: [QuestionService]
})
export class QuestionnaireComponent implements OnInit {

  relationshipId: string;
  relationship = {
    answeredQuestions: null,
    levelsCompleted: null
  };
  img = 'avatar_default.jpg';

  constructor(private relationshipApiService: RelationshipsApiService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private authService: AuthService) {
  }

  ngOnInit() {
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

  startLevel1() {
    this.relationship['answeredQuestions'] = 1
  }

  getFormattedDate(date) {
    return new Date(date).toDateString();
  }
}
