
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CommonService } from './common.service';

@Injectable()
export class RoleAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    public commonService: CommonService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let url: string = state.url;
    let roles = route.data["roles"] as Array<number>;
   var user= this.commonService.GetCurrenUser();
   if(user&&user.UserType){
  if ((roles.includes(user.UserType)))
  {
   return true;
 }
 else{  this.router.navigateByUrl('/'); return false;}  
}
return false;

      
 
  }
}
