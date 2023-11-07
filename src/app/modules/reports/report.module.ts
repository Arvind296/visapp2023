import { ReportComponent } from './report.component';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* import { ExportAsModule } from 'ngx-export-as'; */

import { AuthGuard } from '../../core';
import { SharedModule } from '../../shared';

import { TranslateModule } from '@ngx-translate/core';
import { ReportRoutingModule } from './report-routing.module';





@NgModule({
  imports: [SharedModule, ReportRoutingModule,TranslateModule],
  declarations: [ReportComponent],
  providers: [],
  entryComponents: []
})
export class ReportModule {}
