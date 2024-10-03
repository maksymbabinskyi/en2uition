import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';

const ROUTES: Routes = [{path: '', component: LogInComponent}];

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    TranslateModule
  ]
})
export class LogInModule { }
