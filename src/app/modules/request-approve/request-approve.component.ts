import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Visit, CommonService, ActionType, ApproveRequestService } from '../../core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-request-approve-page',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.scss']
})
export class RequestApproveComponent implements OnInit {
  visit: Visit = {} as Visit;
  errors: Object = {};
  actionType:ActionType;
  modalTitle:string="";
  btnmodalTitle:string="";
  displaydl: boolean = false;
  translate = this.commonService.returnTranslate();
  requestApproveTitlePage:string=this.translate.instant('ApproveRequest.requestApproveTitlePage');
 
  source: any = [];
  constructor(
    private approveRequestService:ApproveRequestService,
    private commonService:CommonService, 

    private router: Router,private spinnerService: Ng4LoadingSpinnerService) {

    


          if(this.translate.currentLang=='ar'){
              this.settings.columns.Employee_name_AR= {
              title: this.translate.instant('ApproveRequest.Employee_name_AR'),
              type: "string", editable: false};
          }
          else{
          
              this.settings.columns.Employee_name_EN= {
                title: this.translate.instant('ApproveRequest.Employee_name_EN'),
                type: "string", editable: false};
          }
          // this.translate.currentLang=='ar'?
          // this.settings.columns.RoomAR= {
          //   title: this.translate.instant('Visit.MeetingRoom'),
          //   type: "string", editable: false}: this.settings.columns.RoomEN= {
          //     title: this.translate.instant('Visit.MeetingRoom'),
          //     type: "string", editable: false}
     }

    
  settings:any = {
    // hideSubHeader: true,
     noDataMessage: this.translate.instant('Visit.NoRequest'),
     mode: "external",
     edit: {
       editButtonContent: '<i  class="fa fa-pencil fa-lg padding_right4 padding_left4" title="Edit"> </i>',
     },
     actions: {
       position: 'right',
       add: false,
       edit:true,
       editable:false,
       columnTitle: '',
       delete:false
     },
   
 
  
     columns: {
     /*   Id: {
       show:false
       }, */
   /*     VisitID: {
         title: this.translate.instant('Visit.VisitID'),
         type: "string",
         editable: false
       }, */
    
    
       VisitDate: {
        title: this.translate.instant('Visit.VisitDate'),
        type: "string",
        editable: false
      },
      CreatedDate: {
        title: this.translate.instant('Visit.CreatedDate'),
        type: "string",
        editable: false,
         sortDirection: 'desc',
        valuePrepareFunction: (date) => {
          if (date) {
          return new DatePipe('en-US').transform(date, 'yyyy-MM-dd h:mm a')
          }
          return null;
          },
      },
     },
     attr: {
      class: 'table table-bordered'
    }
   };
   onSearch(query: string = '') {
     this.source.setFilter([
       {
         field: 'VisitID',
         search: query
       },
     
  
     ], false);
     // second parameter specifying whether to perform 'AND' or 'OR' search 
     // (meaning all columns should contain search query or at least one)
     // 'AND' by default, so changing to 'OR' by setting false here
   
 } 
  ngOnInit() {
    this.getRequests();
  }


  

  getRequests() {
    this.spinnerService.show();
    try {
      this.approveRequestService
        .get(this.commonService.GetUserId(),this.commonService.GetUserUserType()).subscribe((requests) => {
          if (requests){
        
            this.source = requests;
            this.spinnerService.hide();
          }

        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), err =>{this.commonService.showFailureToast(err);
           this.spinnerService.hide();} 
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }
 
  }



  onEdit(event) {

    this.actionType=ActionType.Edit;
    this.router.navigate(['/approveRequest/EditRequest',event.data.VisitID]);

  }










}
