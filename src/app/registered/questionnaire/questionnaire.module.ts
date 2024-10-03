import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { TranslateModule } from '@ngx-translate/core';

const ROUTES: Routes = [
  {
    path: 'answers', redirectTo: 'answers/1/all'
  },
  {
    path: 'answers/:levelNumber', redirectTo: 'answers/:levelNumber/all'
  },
  {
    path: 'answers/:levelNumber/:questionNumber', component: fromContainers.AnswersComponent
  },
  {
    path: '', component: QuestionnaireComponent, children: [
      {
        path: '', redirectTo: '1'
      },
      {
        path: ':levelNumber', component: fromContainers.LevelComponent, children: [
          {
            path: '', redirectTo: '1/topic'
          },
          {
            path: ':questionNumber', component: fromContainers.QuestionComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [QuestionnaireComponent, fromContainers.containers, fromComponents.components],
  entryComponents: [fromContainers.entryComponents],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    TranslateModule
  ]
})
export class QuestionnaireModule {
}
