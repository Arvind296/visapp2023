
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitAllDataComponent, AddVisitComponent } from './allVisitData';


import { SharedModule } from '../../shared';
import { NoAuthGuard, AuthGuard, ActionType } from '../../core';


const routes: Routes = [
  {
    path: '',
    component: VisitAllDataComponent,
    canActivate:  [NoAuthGuard],
    data: {animation: 'FilterPage'}
  },
  {
    path: 'allRequest/:selectedStatus',
    component: VisitAllDataComponent,
    canActivate:  [NoAuthGuard],
    data: {animation: 'FilterPage'}
  },

 {
    path: 'AddVisit',
    component: AddVisitComponent,
    canActivate: [NoAuthGuard],
    data: {action: [ActionType.Add],animation: 'FilterPage'}
  /*   resolve: {
      article: EditableArticleResolver
    } */
  } ,
  {
    path: 'EditVisit/:visitId',
    component: AddVisitComponent,
    canActivate: [NoAuthGuard],
    data: {action: [ActionType.Edit],animation: 'FilterPage'}
  
  /*   resolve: {
      article: EditableArticleResolver
    } */
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule {}
