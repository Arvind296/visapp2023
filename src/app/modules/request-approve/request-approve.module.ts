
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AuthGuard } from '../../core';
import { SharedModule } from '../../shared';

import { TranslateModule } from '@ngx-translate/core';
import { RequestApproveRoutingModule } from './request-approve-routing.module';
import { RequestApproveComponent } from './request-approve.component';
import { EditeApproveComponent } from './edite.approve.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  imports: [SharedModule,Ng4LoadingSpinnerModule.forRoot(), RequestApproveRoutingModule,TranslateModule],
  declarations: [RequestApproveComponent,EditeApproveComponent],
  providers: [ ],
  entryComponents: []
})
export class RequestApproveModule {}
