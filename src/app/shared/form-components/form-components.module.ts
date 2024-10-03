import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromFormComponents from './';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [fromFormComponents.formComponents],
  entryComponents: [fromFormComponents.formComponents],
  exports: [fromFormComponents.formComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class FormComponentsModule {
}
