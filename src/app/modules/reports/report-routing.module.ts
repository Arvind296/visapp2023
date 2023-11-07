
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { SharedModule } from '../../shared';
import { NoAuthGuard, AuthGuard, ActionType, RoleAuthGuard } from '../../core';
import { ReportComponent } from './report.component';



const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    canActivate:  [RoleAuthGuard],
    data: {roles: ['SECURITY','SECURITYHEAD']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
