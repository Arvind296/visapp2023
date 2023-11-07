

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { NoAuthGuard, AuthGuard, ActionType, RoleAuthGuard } from '../../core';
import { BlackListComponent } from './black_list.component';
import { BlackListDialogeComponent } from './black_list.dialoge.component';
const routes: Routes = [
  {
    path: '',
    component: BlackListComponent,
  canActivate:  [RoleAuthGuard],
    data: {roles: ['SECURITY','SECURITYHEAD']}
  },
  {
    path: 'EditblackList/:blId',
    component: BlackListDialogeComponent,
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
export class BlackListRoutingModule {}
