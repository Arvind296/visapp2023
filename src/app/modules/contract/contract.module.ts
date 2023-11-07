
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AuthGuard } from '../../core';
import { SharedModule } from '../../shared';

import { TranslateModule } from '@ngx-translate/core';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractDialogeComponent } from './contract.dialoge.component';
import { ContractComponent } from './contract.component';


@NgModule({
  imports: [SharedModule,Ng4LoadingSpinnerModule.forRoot(), ContractRoutingModule,TranslateModule],
  declarations: [ContractComponent,ContractDialogeComponent],
  providers: [ ],
  entryComponents: [ContractDialogeComponent]
})
export class ContractModule {}
