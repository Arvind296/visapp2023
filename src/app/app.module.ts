import { environment } from './../environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationGuard,MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { ChartsModule } from 'ng2-charts';



import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NotFoundComponent } from './notFound/not-found.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { NotFoundLayoutComponent } from './_layout/notfound-layout/notfound-layout.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, FooterComponent,AppLayoutComponent,NotFoundLayoutComponent, HeaderComponent,NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,ChartsModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    MsAdalAngular6Module.forRoot(environment.adalconfig),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthenticationGuard],
  exports: [TranslateModule],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
