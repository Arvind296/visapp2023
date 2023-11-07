
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionType, CommonService, Visit, VisitRegistrationService, LookUpsService, ApproveRequestService } from '../../core';
import { LocalDataSource } from 'ngx-smart-table';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-edite-approve-page',
  templateUrl: './edite.approve.component.html',
  styleUrls: ['./edite.approve.component.scss']
})
export class EditeApproveComponent implements OnInit {
  visit: Visit = new Visit();
  visitor:any;
  actionType:ActionType;
  modalTitle:string="";
  visitDate:Date;
  visitstartTime:any;
  visitendTime:any;
  translate = this.commonService.returnTranslate();
  metingtextLbl:string=this.translate.currentLang=="ar"?"RoomAR":"RoomEN";
  statustextLbl:string=this.translate.currentLang=="ar"?"StatusTypeAR":"StatusTypeEN";
  isParking:boolean=this.visitRegistrationService.IsShowParking();
  isShowComment:boolean=false;
  isdisabledStatus:boolean=true;
  errors: Object = {};
  usertype:string="";
  metingrooms:any[]=[];
  status:any[]=[]
  public source = new LocalDataSource();
  visitId:any;
  displaydl: boolean = false;
  isSubmitting = false;
  description:string;
  VisitTitlePage:string=this.translate.instant('ApproveRequest.ShowRequest');
  constructor(
    private visitRegistrationService: VisitRegistrationService,
    private lookUpsService:LookUpsService,
    private approveRequestService:ApproveRequestService,
    private activatedRoute: ActivatedRoute,private commonService:CommonService, 
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService,
  ) {

    }
    settings = {
      // hideSubHeader: true,
   
       noDataMessage: this.translate.instant('Visit.NoVisitor'),
       mode: "external",
       edit: {
        editButtonContent: '<i  class="fa fa-pencil fa-lg padding_right4 padding_left4" title="Edit"> </i>',
      },
      delete: {
        deleteButtonContent: '<i class="fa fa-trash fa-lg" title="delete"> </i>',
 
   
      },
      add: {
        addButtonContent: '<i class="fa fa-plus-circle fa-lg" title="Add"></i>',
    
      },
       actions: {
         position: 'right',
         add: false,
         edit:false,
         delete:false,
         editable:false,
         columnTitle: '',
       },
     
   
    
       columns: {
       /*   Id: {
         show:false
         }, */
         Name: {
           title: this.translate.instant('Visit.Name'),
           type: "string",
           editable: false
         },
         ID: {
           title: this.translate.instant('Visit.ID'),
           type: "string",
           editable: false,
        
         },
         MobileNo: {
          title: this.translate.instant('Visit.MobileNo'),
          type: "string",
          editable: false,
        },
      
       },
       attr: {
        class: 'table table-bordered'
      }
     };
     onSearch(query: string = '') {
       this.source.setFilter([
         {
           field: 'Name',
           search: query
         },
         {
           field: 'MobileNo',
           search: query
         },
    
       ], false); 
       // second parameter specifying whether to perform 'AND' or 'OR' search 
       // (meaning all columns should contain search query or at least one)
       // 'AND' by default, so changing to 'OR' by setting false here
     
   } 
  ngOnInit() {
    this.getRooms();
    this.getStatus();
    this.visitId = this.activatedRoute.snapshot.paramMap.get("visitId");
    this.getVisitById(this.visitId);
this.source.load(this.visit.visitors);
this.usertype=this.commonService.GetUserUserType();
this.visit.usertype=this.usertype;
  }


  onDelete(event){
    this.displaydl = true;
    this.actionType=ActionType.Delete;
    this.visitor=event.data;
  }
  closedialoge(){
   // this.getVistits();
  }
  updateArticle(values: Object) {
    Object.assign(this.visit, values);
  }

  navtovisite(){
    this.router.navigate(['/approveRequest']);
  }
  submitForm() {
    this.visit.usertype=this.usertype;
if(this.visitDate){
  this.visit.VisitDate=this.commonService.returnDateStringOnly(this.visitDate);
}
if(this.visitstartTime){
  this.visit.StartTime=this.commonService.returnTimeStringOnly(this.visitstartTime);
}
if(this.visitendTime){
  this.visit.EndTime=this.commonService.returnTimeStringOnly(this.visitendTime);
}
if(!this.visit.SupervisorComments&&this.usertype=='SUPERVISOR')
{
this.commonService.showFailureToast(this.translate.instant("ApproveRequest.AddComment"));
}else if(!this.visit.SecurityComments&&this.usertype=='SECURITY')
{
  this.commonService.showFailureToast(this.translate.instant("ApproveRequest.AddComment"));
}else{
    this.Edit();
}
  }
  getSelectedRoom(){
    this.visit.MeetingRoom=Number(this.visit.MeetingRoom);
  }
  getSelectedstutus(){
    this.visit.StatusId=Number(this.visit.StatusId);
  }


  Edit() {
      this.spinnerService.show();
      try {
        this.approveRequestService
          .UpdateStatus(this.visit).subscribe((requests) => {
            if (requests){
            
              this.commonService.showSuccessToast(requests.Message);
              this.spinnerService.hide();
              this.navtovisite();
            }
  
          },err =>{this.commonService.showFailureToast(err.Message);
            this.spinnerService.hide();} ),
             err =>{this.commonService.showFailureToast(err);
             this.spinnerService.hide();} 
      } catch (err) {
        this.spinnerService.hide();
        this.commonService.showFailureToast(err);
        this.errors = err;
      }
   
    
  
  }
  bindDateinRequest(){
this.visitDate=this.commonService.returnDatefromDateString(this.visit.VisitDate);
this.visitendTime=this.commonService.returnDatefromTimeString(this.visit.EndTime);
this.visitstartTime=this.commonService.returnDatefromTimeString(this.visit.StartTime);


  }
  getVisitById(visitId) {
    this.spinnerService.show();
    try {
      this.visitRegistrationService
        .getById(visitId).subscribe((requests:any) => {
          if (requests&&requests.length>0)
          {
          
            this.visit=requests[0];
            this.source.load(this.visit.visitors);
            this.bindDateinRequest();
         
            this.getSelectedRoom();
            this.spinnerService.hide();
          }
        }), err =>{ this.commonService.showFailureToast(err);
         
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }

  }
  getRooms() {
    this.spinnerService.show();
    try {
      this.lookUpsService
        .getRoomLookup().subscribe((requests) => {
          if (requests)
          {
            this.metingrooms= requests;


          /*   for (let index = 0; index < requests.length; index++) {
              const element = requests[index];
              this.metingrooms.push({label:this.translate.currentLang=="ar"?element.NamAR:element.NameEn,value:element.ID})
             
            }  */
          
          }
        }, error => { this.commonService.showFailureToast(error); this.spinnerService.hide();},
        () => this.getSelectedRoom()
        
        
        ), err =>{ this.commonService.showFailureToast(err);
         
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }

  }

  getStatus() {
    this.spinnerService.show();
    try {
      this.lookUpsService
        .getStatusLookup('v').subscribe((requests) => {
          if (requests)
          {
      
            this.status= requests;
            if(this.actionType==ActionType.Add){  this.visit.StatusId=3;}
          }
        }, error => { this.commonService.showFailureToast(error); this.spinnerService.hide();},
        () => this.getSelectedstutus()
        
        
        ), err =>{ this.commonService.showFailureToast(err);
         
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }

  }


}
