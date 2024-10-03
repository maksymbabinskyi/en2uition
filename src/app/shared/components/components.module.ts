import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatTabsModule } from '@angular/material';
import { UtilModule } from '../util/util.module';

import * as fromComponents from './';

const MATERIAL_MODULES = [MatExpansionModule, MatTabsModule];

@NgModule({
  declarations: [fromComponents.components],
  exports: [fromComponents.components],
  imports: [
    CommonModule,
    UtilModule,
    MATERIAL_MODULES
  ]
})
export class ComponentsModule {
}
