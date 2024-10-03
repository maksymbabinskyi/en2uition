import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { UtilModule } from '../util/util.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromDialog from './';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [fromDialog.directives, fromDialog.entryComponents],
  entryComponents: [fromDialog.entryComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PortalModule,
    UtilModule,
    TranslateModule
  ],
  exports: [fromDialog.directives]
})
export class DialogModule {
}
