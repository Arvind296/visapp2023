
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VisitAllDataComponent, VisitDialogeComponent,AddVisitComponent } from './allVisitData';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AuthGuard } from '../../core';
import { SharedModule } from '../../shared';
import { VisitRoutingModule } from './visitRegistration-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [SharedModule, VisitRoutingModule,TranslateModule,Ng4LoadingSpinnerModule],
  declarations: [VisitAllDataComponent,AddVisitComponent,VisitDialogeComponent],
  providers: [ ],
  entryComponents: [VisitDialogeComponent]
})
export class VisitModule {}
