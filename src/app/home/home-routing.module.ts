import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { AppLayoutComponent } from '../_layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    
  /*     path: '',
      component: AppLayoutComponent,
      children: [
    { */
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    },canActivate: [AuthenticationGuard]
  }//]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
