import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'e2-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  host: {
    class: 'e2-rp_content e2-bg_white flex-grow-1'
  },
})
export class LevelComponent implements OnInit {

  isTopicShown = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService) {
  }

  ngOnInit() {
    this.checkTopicShown();

    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.checkTopicShown();
      }
    });
    this.questionService.showTopic.subscribe(res => {
      this.isTopicShown = res;
    });
  }

  checkTopicShown() {
    this.isTopicShown = (this.route.firstChild && this.route.firstChild.snapshot.params.questionNumber - 1) % 15 === 0;
  }

  getQuestionNumber() {
    if (!this.route.firstChild) {
      return;
    }

    return this.route.firstChild.snapshot.params.questionNumber;
  }

  goToQuestion(questionNumber: any) {
    this.router.navigate(['/relationships', this.route.snapshot.params.relationshipId, 'questionnaire', questionNumber]);
  }

  goToQuestionFromTopic(direction) {
    if (direction === 1) {
      this.isTopicShown = false;
    } else {
      this.router.navigate(['/relationships', this.route.snapshot.params.relationshipId, 'questionnaire', this.route.firstChild.snapshot.params.questionNumber - 1]);
    }
  }
}
