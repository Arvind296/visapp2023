import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts';
import {ChartModule} from 'primeng/chart';
import { UserHomeComponent } from '../userHome/userHome.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,ChartsModule,ChartModule
  ],
  declarations: [
    UserHomeComponent, HomeComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
