import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthService } from './shared/auth/auth.service';
import { JwtStorageService } from './shared/auth/jwt/jwt-storage.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

export function jwtOptionsFactory(jwtStorageService: JwtStorageService, authService: AuthService) {
  return {
    tokenGetter: () => {
      return jwtStorageService.getUnexpiredToken().catch(() => {
        authService.logout();
      });
    },
    whitelistedDomains: [environment.DOMAIN]
  };
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      // public
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: './public/home/home.module#HomeModule'},
      {path: 'how-it-works', loadChildren: './public/how-it-works/how-it-works.module#HowItWorksModule'},
      {path: 'faq', loadChildren: './public/faq/faq.module#FaqModule'},
      {path: 'pricing', loadChildren: './public/pricing/pricing.module#PricingModule'},
      {path: 'about-us', loadChildren: './public/about-us/about-us.module#AboutUsModule'},
      {path: 'contact-us', loadChildren: './public/contact-us/contact-us.module#ContactUsModule'},
      {path: 'log-in', loadChildren: './public/log-in/log-in.module#LogInModule'},
      {path: 'forgot-password', loadChildren: './public/forgot-password/forgot-password.module#ForgotPasswordModule'},
      {path: 'users/:id/resetpassword', loadChildren: './public/reset-password/reset-password.module#ResetPasswordModule'},
      {path: 'sign-up', loadChildren: './public/sign-up/sign-up.module#SignUpModule'},
      {path: 'users/:id/verify', loadChildren: './public/verify/verify.module#VerifyModule'},
      // registered
      {path: 'profile', loadChildren: './registered/profile/profile.module#ProfileModule', canActivate: [AuthGuard]},
      {path: 'relationships', loadChildren: './registered/relationships/relationships.module#RelationshipsModule', canActivate: [AuthGuard]},
      {path: 'payment', loadChildren: './registered/payment/payment.module#PaymentModule', canActivate: [AuthGuard]}
    ]
  },
  {
    path: '', component: LayoutComponent, data: {hideFooter: true}, children: [
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {scrollPositionRestoration: 'enabled', paramsInheritanceStrategy: 'always'}),
    SharedModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [JwtStorageService, AuthService]
      }
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
