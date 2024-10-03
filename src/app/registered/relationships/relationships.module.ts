import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RelationshipsComponent } from './relationships.component';
import { SharedModule } from '../../shared/shared.module';
import { AddRelationshipComponent } from '../add-relationship/add-relationship.component';
import { AdviceBasedOnTheTriangularTheoryComponent } from './advice-based-on-the-triangular-theory/advice-based-on-the-triangular-theory.component';
import { AdvicesComponent } from './advices/advices.component';
import { TranslateModule } from '@ngx-translate/core';

const ROUTES: Routes = [
  {
    path: '', component: RelationshipsComponent,
  },
  {
    path: 'add', component: AddRelationshipComponent,
  },
  {
    path: 'advice', component: AdviceBasedOnTheTriangularTheoryComponent,
  },
  {
    path: 'advices', component: AdvicesComponent,
  },
  {
    path: ':relationshipId', children: [
      {path: 'questionnaire', loadChildren: '../questionnaire/questionnaire.module#QuestionnaireModule'},
      {path: 'analysis', loadChildren: '../analysis/analysis.module#AnalysisModule'},
    ]
  }
];

@NgModule({
  declarations: [
    RelationshipsComponent,
    AddRelationshipComponent,
    AdviceBasedOnTheTriangularTheoryComponent,
    AdvicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    TranslateModule
  ]
})
export class RelationshipsModule {
}
