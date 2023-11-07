
import { Component, OnInit } from '@angular/core';

import { UserService, CommonService } from './core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { PreviousRouteService } from './core/services/previousRouteService';
declare var $:any ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
 
 
  translate = this.commonService.returnTranslate();
  ngOnInit() {
   this.userService.populate();
  
   this.changeLang('ar');
if( localStorage.getItem("lang")){
  this.translate.setDefaultLang(localStorage.getItem("lang"));
  this.translate.use(localStorage.getItem("lang"));
  this.commonService.defaultLanguage=localStorage.getItem("lang");
  this.Lang=localStorage.getItem("lang");
}
else{  
  localStorage.setItem("lang","en");
 this.translate.setDefaultLang('en');
 this.Lang='en'
  this.translate.use('en');
  this.commonService.defaultLanguage='en';
}
  }

 Lang = 'en';
  ltrrtl='ltr';
  template: string ='<img  src="assets/images/loading.gif" class="spinLoading"/>'
  constructor(  private previousRouteService: PreviousRouteService, private spinnerService: Ng4LoadingSpinnerService,private adalSvc: MsAdalAngular6Service,public commonService: CommonService,private userService: UserService, private router:Router ) {
  //  this.translate.addLangs(['en', 'ar']);

/*   console.log(this.adalSvc); */
  var token = this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
  console.log(token);
  });; 
  if(this.adalSvc&&this.adalSvc.LoggedInUserEmail){
  this.getUserData();
}
  
    
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
    this.translate.onLangChange.subscribe((event) => {
      this.commonService.defaultLanguage=event.lang;
      if (event.lang == 'ar') {
      this.ltrrtl = 'rtl';
      }
      else {
      this.ltrrtl = 'ltr';
      }
      document.getElementsByTagName("html")[0].setAttribute('dir', this.ltrrtl);
      document.getElementsByTagName("html")[0].setAttribute('lang', this.commonService.defaultLanguage);
      document.getElementsByTagName("body")[0].setAttribute('dir', this.ltrrtl);
      });
  }
getUserData(){

    this.spinnerService.show();
    try {
      this.userService
        .GetUserByEmail(this.adalSvc.LoggedInUserEmail).subscribe((requests:any[]) => {
          if (requests&&requests.length>0)
          {
        localStorage.setItem("userData",JSON.stringify(requests[0]));
        this.spinnerService.hide();
          }
        },err =>{
if (err) {
  this.commonService.showFailureToast(err.Message);
  this.spinnerService.hide();
}
        }), err =>{ this.commonService.showFailureToast(err);
         
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
  }
}
  changeLang(lang) {

    this.translate.setDefaultLang(lang);
     this.translate.use(lang);
     this.commonService.defaultLanguage=lang;
    localStorage.setItem("lang",lang);
  lang=="ar" ?  $("#rtlmainStyle").attr("href","./assets/styles/rtl.css"):$("#rtlmainStyle").attr("href","./assets/styles/ltr.css");
     if(this.router.url=="/"||this.router.url==""){
      this.router.navigateByUrl('/visit').then(() => {
        this.router.navigateByUrl('')
      }) ;}
     else{
     this.router.navigateByUrl('').then(() => {
  this.router.navigateByUrl(this.previousRouteService.getPreviousUrl())
}) ;}

this.Lang=localStorage.getItem("lang");
  }

/*   public getRouterOutletState(outlet) {
    
    return outlet.isActivated ?  'visit':'*';

    
  } */
}
