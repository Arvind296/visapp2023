
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionType, CommonService, Visit, VisitRegistrationService, visitor, LookUpsService } from '../../../core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { VisitDialogeComponent } from './visit.dialoge.component';
import { LocalDataSource } from 'ngx-smart-table';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Title } from '@angular/platform-browser';
import { AmazingTimePickerService } from 'amazing-time-picker';



@Component({
  selector: 'app-add-visit--page',
  templateUrl: './addvisit.component.html',
  styleUrls: ['./addvisit.component.scss']
})
export class AddVisitComponent implements OnInit {
  visit: Visit = new Visit();
  visitor:visitor;
  template: string ='<img  src="./assets/images/loading.gif" class="spinLoading"/>'

  actionType:ActionType;
  dialogeactionType:ActionType;
  modalTitle:string="";
  visitDate:Date;
  visitstartTime:any;
  visitendTime:any;
  translate = this.commonService.returnTranslate();
  metingtextLbl:string=this.translate.currentLang=="ar"?"RoomAR":"RoomEN";
  emptextLbl:string=this.translate.currentLang=="ar"?"Employee_name_AR":"Employee_name_EN";
  status:any[]=[]
  isSecurity=false;
  isSecretary=false;
  statustextLbl:string=this.translate.currentLang=="ar"?"StatusTypeAR":"StatusTypeEN";
  isParking:boolean=this.visitRegistrationService.IsShowParking();
  isShowComment:boolean=false;
  isdisabledStatus:boolean=true;
  displaydlRoom:boolean=false;
  errors: Object = {};
  metingrooms:any[]=[];
  NumberofVisitors: any[] = [];
  numbertextlbl:string= "value";
  employees:any[]=[];
  currentLang:string=this.translate.currentLang;

  public source = new LocalDataSource();
  visitId:any;
  displaydl: boolean = false;
  isSubmitting = false;
  IsEdit=false;
  description:string;
  VisitTitlePage:string="Add Visit";
  constructor(
    private visitRegistrationService: VisitRegistrationService,
    private lookUpsService:LookUpsService,private title:Title,
    private activatedRoute: ActivatedRoute,private commonService:CommonService, 
    private router: Router,private atp: AmazingTimePickerService,
    private spinnerService: Ng4LoadingSpinnerService,
    private dialog: MatDialog,
  ) {

    }
    settings = {
    //   hideSubHeader: true,
      
       noDataMessage: this.translate.instant('Visit.NoVisitor'),
       mode: "external",
       edit: {
        editButtonContent: `<i  class="fa fa-pencil fa-lg padding_right4 padding_left4" title="${this.translate.instant('Common.Edit')}"> </i>`,
      },
      delete: {
        deleteButtonContent: `<i class="fa fa-trash fa-lg" title="${this.translate.instant('Common.delete')}"> </i>`,
 
   
      },
      add: {
        addButtonContent: `<i class="fa fa-plus-circle fa-lg" title="${this.translate.instant('Common.Add')}"></i>`,
    
      },
       actions: {
         position: 'right',
         add: true,
         edit:true,
         editable:false,
         columnTitle: '',
      //   custom: [{ name: 'blackList', title: `<i class="fa fa-address-book fa-lg" title="black List"></i>` ,}]
    
       },
     
   
    
       columns: {
       /*   Id: {
         show:false
         }, */
         Name: {
           title: this.translate.instant('Visit.Name'),
           type: "string",
           editable: false, filter: false
         },
         ID: {
           title: this.translate.instant('Visit.ID'),
           type: "string",
           editable: false, filter: false
        
         },
         MobileNo: {
          title: this.translate.instant('Visit.MobileNo'),
          type: "string",
          editable: false,
           filter: false
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
 
    this.NumberofVisitors = [
      {"Id":1 , "value":"1"}
      ,{"Id":2 , "value":"2"}
      ,{"Id":3 , "value":"3"}
      ,{"Id":4 , "value":"4"}
      ,{"Id":5 , "value":"5"}
      ,{"Id":6 , "value":"6"}
      ,{"Id":7 , "value":"7"}
      ,{"Id":8 , "value":"8"}
      ,{"Id":9 , "value":"9"}
      ,{"Id":10 , "value":"10"}
      ,{"Id":11 , "value":"11"}
      ,{"Id":12 , "value":"12"}
      ,{"Id":13 , "value":"13"}
      ,{"Id":14 , "value":"14"}
      ,{"Id":15 , "value":"15"}
     ]

    this.isSecurity =this.commonService.GetUserIsSecurity();
    this.isSecretary=this.commonService.GetUserUserType()=="Secretary";
    this.getRooms();
    this.getStatus();
    this.getEmpData();
    this.visitId = this.activatedRoute.snapshot.paramMap.get("visitId");
if (this.visitId) {
  this.actionType=ActionType.Edit;
  this.IsEdit=true;
  this.isShowComment=true;
  this.getVisitById(this.visitId);
  this.VisitTitlePage=this.translate.instant('Visit.EditpageTitle');
}else{ this.actionType=ActionType.Add;
  this.visit.VisitTypeID=1;
  this.visit.RequesterType=1;
  this.visit.MeetingRoom=35;
/*   this.visitstartTime=new Date();
  this.visitendTime= new Date(); */
  this.visit.StartTime=this.commonService.returnTimeStringOnly(new Date());
  this.visit.EndTime= this.commonService.returnTimeStringOnly(new Date());

  this.visitDate=new Date();

  this.IsEdit=false;
  this.VisitTitlePage=this.translate.instant('Visit.AddpageTitle');


}

this.title.setTitle( this.VisitTitlePage);


this.source.load(this.visit.visitors);
  }
  onEdit(event) {

    this.dialogeactionType=ActionType.Edit;
    this.openDialog(event.data);


  }

  onAdd(){
    this.dialogeactionType=ActionType.Add;
   this.openDialog(null);

  }
  onDelete(event){
    this.displaydl = true;
    this.dialogeactionType=ActionType.Delete;
    this.visitor=event.data;
  }
/*   onblackList(event){
    this.dialogeactionType=ActionType.BlackList;
    this.openDialog(event.data.VisitorID);
  } */
  closedialoge(){
   // this.getVistits();
  }
  updateArticle(values: Object) {
    Object.assign(this.visit, values);
  }
  openDialog(visitordata) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='70%'
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
      
        title: 'Angular For Beginners'
    };
  
    
    
    const dialogRef = this.dialog.open(VisitDialogeComponent, dialogConfig);
    dialogRef.componentInstance.actionType=this.dialogeactionType;
    if( this.visit&&(this.visit.visitors==undefined|| this.visit.visitors==null)){
      this.visit.visitors=[];
    }
    if(this.dialogeactionType==ActionType.Add)
    {
      dialogRef.componentInstance.visitor=new visitor();
    }
    
   else{
     if(visitordata.VisitorID){
    dialogRef.componentInstance.visitor=this.visit.visitors.find(z=>z.VisitorID==visitordata.VisitorID);
     }
   else{
      dialogRef.componentInstance.visitor=this.visit.visitors.find(z=>z.ID==visitordata.ID);
       }
  }
  dialogRef.componentInstance.visitor.VisitID=this.visit.VisitID;

    dialogRef.afterClosed().subscribe(
        data =>{ 
      
        if(data){
      if(this.dialogeactionType==ActionType.Add){
        data.VisitorID=0;
        data.VisitID=this.visit.VisitID;
        this.visit.visitors.push(data);
        this.source.load(this.visit.visitors);
      }
      else if(this.dialogeactionType==ActionType.Edit){
      const index = this.visit.visitors.findIndex((e) => e.VisitorID === data.VisitorID);
      this.visit.visitors[index] = data;
      this.source.load(this.visit.visitors);
      }
    }
      }

    );    
  }
  navtovisite(){
    this.router.navigate(['/visit']);
  }

  checkValidData(){
    if(!this.visit.VisitTypeID){
      this.commonService.showFailureToast(this.translate.instant("Visit.RequiredVisitTypeID"));
      return false;
    }
    if(this.visit.RequesterType==2&&!this.visit.RequestorID){
      this.commonService.showFailureToast(this.translate.instant("Visit.RequiredRequestorID"));
      return false;
    }
    if(!this.visit.visitors||this.visit.visitors.length==0){
      this.commonService.showFailureToast(this.translate.instant("Visit.Addvisitors"));
    return false;
    }
    if(!this.visitDate){
      this.commonService.showFailureToast(this.translate.instant("Visit.RequiredDate"));
      return false;
    }
    if(!this.visit.EndTime||!this.visit.StartTime){
      this.commonService.showFailureToast(this.translate.instant("Visit.RequiredTime"));
      return false;
    }
    if(!this.visit.Description){
      this.commonService.showFailureToast(this.translate.instant("Visit.RequiredDescription"));
      return false;
    }
    return true;;
  }
  submitForm() {


if(!this.checkValidData()){
  return;
}



if(this.visitDate){
  this.visit.VisitDate=this.commonService.returnDateStringOnly(this.visitDate);
}
/* if(this.visitstartTime){
  this.visit.StartTime=this.commonService.returnTimeStringOnly(this.visitstartTime);
}
if(this.visitendTime){
  this.visit.EndTime=this.commonService.returnTimeStringOnly(this.visitendTime);
} */
 
  if(this.actionType==ActionType.Add)
  {

    if(this.visit.VisitTypeID==1 && this.visit.RequesterType!=2)
    {
 
    this.visit.RequestorID=this.commonService.GetCurrenUser().Employee_number;
    }
    this.visit.CreateBy=this.commonService.GetUserNo();
  this.Add();
}
   else{
    this.visit.UpdatedBy=this.commonService.GetUserNo();
    this.Edit();
   }
  }
  getSelectedRoom(){
    if(this.visit.MeetingRoom)
    this.visit.MeetingRoom=Number(this.visit.MeetingRoom);
    else
    this.visit.MeetingRoom=null;
  }
  getSelectedstutus(){
    this.visit.StatusId=Number(this.visit.StatusId);
  }
  getNumberOfVisitor(){
    this.visit.NumberofVisitors=Number(this.visit.NumberofVisitors);
  }
  Add() {
      this.spinnerService.show();
   
      try {
        this.visitRegistrationService
          .add(this.visit).subscribe((requests) => {
            if (requests){
           
              this.spinnerService.hide();
              this.commonService.showSuccessToast(requests.Message);
              this.navtovisite();
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
  deletefromlistbyNationalId(){

    const index = this.visit.visitors.findIndex((e) => e.ID === this.visitor.ID);
    if (index > -1) {
      this.visit.visitors.splice(index, 1);
      this.displaydl = false;
      this.source.load(this.visit.visitors);
      
   }}
deletefromlistbyid(){
  const index = this.visit.visitors.findIndex((e) => e.VisitorID === this.visitor.VisitorID);
  if (index > -1) {
    this.visit.visitors.splice(index, 1);
    this.displaydl = false;
    this.source.load(this.visit.visitors);
 }
}
  delete() {
  
    if(!this.visitor.VisitorID)
    {
      this.deletefromlistbyNationalId();
      return;
    }
    this.spinnerService.show();
    try {
      this.visitRegistrationService
        .deleteVisitor(this.visitor.VisitorID).subscribe((requests) => {
          if (requests)
          //  this.source = requests;
            this.displaydl = false;
            this.deletefromlistbyid();
      
            //this.source.load(this.visit.visitors);
            this.commonService.showSuccessToast(requests.Message);
            this.spinnerService.hide();
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), err => {this.commonService.showFailureToast(err);
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
    }
    
  }
  Edit() {
  
      this.spinnerService.show();
      try {
        this.visitRegistrationService
          .Edit(this.visit).subscribe((requests) => {
            if (requests){
              this.spinnerService.hide();
              this.commonService.showSuccessToast(requests.Message);
              this.navtovisite();
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
            this.getNumberOfVisitor();
            this.spinnerService.hide();
          }
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), err =>{ this.commonService.showFailureToast(err);
         
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }

  }
  getRooms() {
   // this.spinnerService.show();
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
  onChangeRoom(val){
 if(val.RoomID!=35)
 {
this.displaydlRoom=true;
 }
  }
  onChangeEmployee(val){
 
this.isParking= JSON.parse(val.Parking);
  }

  getempname(value){
    return value.map(function (item) {
      return {
        User_ID: item.User_ID,
        Employee_number: item.Employee_number,
        Employee_name_EN:item.office_extn+' - '+item.Employee_name_EN,
        Employee_name_AR:item.office_extn+' - '+item.Employee_name_AR,
        Department_EN:item.Department_EN,
        Department_AR:item.Department_AR,
      }
    });
  }
  getEmpData() {
    //this.spinnerService.show();
    try {
      this.visitRegistrationService
        .getEmpLookup().subscribe((requests) => {
          if (requests)
          {
            this.employees= this.getempname(requests);
           
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
   // this.spinnerService.show();
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
  opentimpkr() {
    const amazingTimePicker = this.atp.open({
        theme: 'material-blue',
    });

}

}
