
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { SharedModule } from '../../shared';
import { NoAuthGuard, AuthGuard, ActionType, RoleAuthGuard } from '../../core';
import { RequestApproveComponent } from './request-approve.component';
import { EditeApproveComponent } from './edite.approve.component';


const routes: Routes = [
  {
    path: '',
    component: RequestApproveComponent,
   canActivate:  [RoleAuthGuard],
    data: {roles: ['SECURITY','SECURITYHEAD']}
  },
  {
    path: 'EditRequest/:visitId',
    component: EditeApproveComponent,
    canActivate:  [RoleAuthGuard],
    data: {roles: ['SECURITY','SECURITYHEAD'],action: [ActionType.Edit]}
  /*   resolve: {
      article: EditableArticleResolver
    } */
  } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestApproveRoutingModule {}
