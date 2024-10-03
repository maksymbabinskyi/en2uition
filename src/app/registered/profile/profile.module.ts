import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {MatGridListModule, MatTabsModule} from "@angular/material";
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from '../../shared/dialog/dialog.service';

const ROUTES: Routes = [
  {path: '', component: ProfileComponent}
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    MatTabsModule,
    MatGridListModule,
    TranslateModule
  ],
  providers: [
    DialogService
  ]
})
export class ProfileModule {
}
