
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { SharedModule } from '../../shared';
import { NoAuthGuard, AuthGuard, ActionType, RoleAuthGuard } from '../../core';
import { SearchRequestComponent } from './search.request.component';
import {EditSearchComponent} from './../searchrequest/EditSearchRequest/edit-search.component';



const routes: Routes = [
  {
    path: '',
    component: SearchRequestComponent,
canActivate:  [RoleAuthGuard],
    data: {roles: ['SECURITY','SECURITYHEAD']}
  },
  {
    path: 'EditSearch/:visitId',
    component: EditSearchComponent,
    canActivate: [NoAuthGuard],
    data: {action: [ActionType.Add],animation: 'FilterPage'}
  /*   resolve: {
      article: EditableArticleResolver
    } */
  } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRequestRoutingModule {}
