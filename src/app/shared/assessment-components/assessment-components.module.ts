import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import * as fromComponents from './';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [fromComponents.components],
  exports: [fromComponents.components],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    TranslateModule
  ]
})
export class AssessmentComponentsModule {
}
