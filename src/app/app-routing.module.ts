import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { NotFoundComponent } from './notFound/not-found.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

const routes: Routes = [
  {
/*     path: '',
    component: AppLayoutComponent,
    children: [
 { */
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  }, 
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
    ,canActivate: [AuthenticationGuard]
  }, 
  {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule'
    ,canActivate: [AuthenticationGuard]
  }, 
  {
    path: 'visit',
    loadChildren: './modules/visitRegistration/visitRegistration.module#VisitModule'
    ,canActivate: [AuthenticationGuard]
  },
  {
    path: 'approveRequest',
    loadChildren: './modules/request-approve/request-approve.module#RequestApproveModule'
    ,canActivate: [AuthenticationGuard]
  },
  {
    path: 'searchRequest',
    loadChildren: './modules/searchrequest/search.request.module#SearchRequestModule'
    ,canActivate: [AuthenticationGuard]
  },
  {
    path: 'blacklist',
    loadChildren: './modules/blacklist/black_list.module#BlackListModule'
    ,canActivate: [AuthenticationGuard]
  },
  {
    path: 'contract',
    loadChildren: './modules/contract/contract.module#ContractModule'
    ,canActivate: [AuthenticationGuard]
  },
  {
    path: 'report',
    loadChildren: './modules/reports/report.module#ReportModule'
    ,canActivate: [AuthenticationGuard]
  },
 //]},
  {
    path: '**',
    component: NotFoundComponent,
    
  } 
  
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

