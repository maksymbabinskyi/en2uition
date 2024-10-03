import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromDirectives from './directives';
import * as fromPipes from './pipes';

@NgModule({
  declarations: [fromDirectives.directives, fromPipes.pipes],
  imports: [
    CommonModule
  ],
  exports: [fromDirectives.directives, fromPipes.pipes]
})
export class UtilModule {
}
