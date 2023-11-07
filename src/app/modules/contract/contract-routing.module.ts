

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { NoAuthGuard, AuthGuard, ActionType, RoleAuthGuard } from '../../core';
import { ContractComponent } from './contract.component';

const routes: Routes = [
  {
    path: '',
    component: ContractComponent,
    //canActivate:  [RoleAuthGuard],
   // data: {roles: ['SECURITY','SUPERVISOR','MANAGEMENT','SECURITYHEAD']}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {}
