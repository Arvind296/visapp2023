import { Component, OnInit, Inject } from '@angular/core';

import { User, UserService, CommonService } from '../../core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.css']
})
export class HeaderComponent implements OnInit {
  constructor(public commonService: CommonService,
    private userService: UserService,

  ) {}

  translate = this.commonService.returnTranslate();
  currentUser: any;
  srclog:string="";
  ngOnInit() {

     var setintev =setInterval(() => {
      this.currentUser=this.commonService.GetCurrenUser();
      if(this.currentUser.Employee_name_AR){ clearInterval(setintev);}
    console.log("currentUser",this.currentUser.Employee_name_AR);
    }, 3000); 
    this.srclog=localStorage.getItem('lang')=='ar'?'../../../assets/images/xLogo.png':'../../../assets/images/Logoen.png';

  }

  /* getUserData(){
    this.localStorage.getItem("userData").subscribe(u=>{
      console.log("user",u);
      this.currentUser=u;
    });
  } */

  isShow(values:string[]){
    
    if (this.currentUser&&(values.includes('*')||(values.includes(this.currentUser.UserType))))
    {
     return true;
   }
   else{  return false;}  
  }
}
