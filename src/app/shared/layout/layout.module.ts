import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilModule } from '../util/util.module';
import { AuthModule } from '../auth/auth.module';

import * as fromComponents from './components';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    fromComponents.components,
    fromComponents.exportedComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    UtilModule,
    TranslateModule
  ],
  exports: [
    fromComponents.exportedComponents,
  ]
})
export class LayoutModule {
}
