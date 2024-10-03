import { Component, OnInit, ViewChild } from '@angular/core';

export interface FAQSection {
  header: string;
  template: any;
}

@Component({
  selector: 'e2-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @ViewChild('learnSection')
  learnSection;

  @ViewChild('questionnaireSection')
  questionnaireSection;

  @ViewChild('privacySection')
  privacySection;

  activeSection: FAQSection;
  sections: FAQSection[];

  constructor() {
  }

  ngOnInit() {
    this.sections = [
      {
        header: 'Learn about en2uition',
        template: this.learnSection
      },
      {
        header: '360-degree questionnaire',
        template: this.questionnaireSection
      },
      {
        header: 'Privacy and security',
        template: this.privacySection
      }
    ];

    this.activeSection = this.sections[0];
  }

}
