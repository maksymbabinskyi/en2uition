import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { UtilModule } from './util/util.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { DialogModule } from './dialog/dialog.module';
import { FormComponentsModule } from './form-components/form-components.module';
import { ApiModule } from './api/api.module';
import { CookieModule } from 'ngx-cookie';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssessmentComponentsModule } from './assessment-components/assessment-components.module';
import { TranslateModule } from '@ngx-translate/core';

const EXPORTED_MODULES = [
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  LayoutModule,
  ComponentsModule,
  FormComponentsModule,
  AssessmentComponentsModule,
  DialogModule,
  AuthModule,
  UtilModule,
  ApiModule,
];

const MATERIAL_MODULES = [
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CookieModule.forRoot(),
    EXPORTED_MODULES,
    MATERIAL_MODULES,
    TranslateModule
  ],
  exports: [
    EXPORTED_MODULES,
    MATERIAL_MODULES
  ]
})
export class SharedModule {
}
