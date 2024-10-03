import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AnalysisComponent } from './analysis.component';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { TranslateModule } from '@ngx-translate/core';

const ROUTES: Routes = [
  {path: '', component: AnalysisComponent},
  {path: 'advice', component: fromContainers.AdviceComponent},
  {path: 'get-assessment-based-on-triangular-theory', component: fromContainers.GetAssessmentBasedOnTriangularTheoryComponent},
  {path: 'your-assessment-on-24-relationship-areas', component: fromContainers.YourAssessmentOn24RelationshipAreasComponent},
  {path: 'your-assessment-on-24-relationship-areas/:number', component: fromContainers.AssessmentAreaComponent}
];

@NgModule({
  declarations: [AnalysisComponent, fromContainers.containers, fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    TranslateModule
  ]
})
export class AnalysisModule {
}
