import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { CookieBackendService, CookieService } from 'ngx-cookie';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    {provide: CookieService, useClass: CookieBackendService},
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
}
