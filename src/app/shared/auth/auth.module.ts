import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '../dialog/dialog.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromDialogs from './dialogs';
import * as fromAuth from './';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [fromDialogs.dialogs, fromAuth.directives],
  exports: [fromAuth.directives],
  entryComponents: [fromDialogs.dialogs],
  imports: [
    CommonModule,
    DialogModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AuthModule {
}
