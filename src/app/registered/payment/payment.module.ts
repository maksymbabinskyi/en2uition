import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const ROUTES: Routes = [
  {path: '', component: PaymentComponent},
];

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    TranslateModule
  ]
})
export class PaymentModule {
}
