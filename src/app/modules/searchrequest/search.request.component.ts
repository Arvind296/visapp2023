import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';
import { CommonService, LookUpsService, SearchRequestService, SearchModel , ActionType } from '../../core';
import { Title } from '@angular/platform-browser';
import { CheckboxComponent } from 'src/app/shared/checkBox';
import { DatePipe , JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-request-page',
  templateUrl: './search.request.component.html',
  styleUrls: ['./search.request.component.scss']
})
export class SearchRequestComponent implements OnInit {
  actionType:ActionType;
  searchModel: SearchModel = {} as SearchModel;
  errors: Object = {};
  translate = this.commonService.returnTranslate();
  statustextLbl:string=this.translate.currentLang=="ar"?"StatusTypeAR":"StatusTypeEN";
  status:any[]=[]
  visitor:any;
  sourcebl: any = [];
  display:boolean=false;
  displayconfirmdl:boolean=false;
  source: any = [];
  SearchTitlePage:string=this.translate.instant('SearchRequest.SearchTitlePage');
  SearchblTitlePage:string=this.translate.instant('SearchRequest.SearchblTitlePage');
  SearchvisitTitlePage:string=this.translate.instant('SearchRequest.SearchvisitTitlePage');
  currentLang:string=this.translate.currentLang;

  constructor(private router: Router , private searchRequestService:SearchRequestService,
    private lookUpsService:LookUpsService,
    private title:Title, 
    private commonService:CommonService, private spinnerService: Ng4LoadingSpinnerService) { 
this.title.setTitle(this.SearchTitlePage);
      if(this.translate.currentLang=='ar'){
        this.settings.columns.VisitID= {
          title: this.translate.instant('Visit.VisitID'),
          type: "string", editable: false,  width: "7%"};

          this.settings.columns.vsStatusTypeAR= {
            title: this.translate.instant('ApproveRequest.VisitorStatus'),
            type: "string", editable: false,  width: "7%"};

        this.settings.columns.StatusTypeAR= {
          title: this.translate.instant('Visit.StatusType'),
          type: "string", editable: false,  width: "7%"};
           
          this.settings.columns.Employee_name_AR= {
          title: this.translate.instant('ApproveRequest.Employee_name_AR'),
          type: "string", editable: false , width: "7%"};

          this.settings.columns.Supervisor_Name_AR= {
            title: this.translate.instant('SearchRequest.Supervisor_Name'),
            type: "string", editable: false};
            //----------------
            this.settingsbL.columns.RequesterNameAR= {
              title: this.translate.instant('SearchRequest.RequesterName'),
              type: "string", editable: false};

              this.settingsbL.columns.NumberofVisitors = {
                title: this.translate.instant('SearchRequest.NumberofVisitors'),
                type:"int" , editableL: false
              };
              this.settings.columns.Department_AR = {
                title: this.translate.instant('SearchRequest.Department_AR'),
                type:"string" , editableL: false,width: "7%"
              };
      }
      else{

        this.settings.columns.VisitID= {
          title: this.translate.instant('Visit.VisitID'),
          type: "string", editable: false,  width: "7%"};

          this.settings.columns.vsStatusTypeEN= {
            title: this.translate.instant('ApproveRequest.VisitorStatus'),
            type: "string", editable: false,  width: "7%"};
          
          this.settings.columns.StatusTypeEN= {
          title: this.translate.instant('Visit.StatusType'),
          type: "string", editable: false,width: "7%"};
          this.settings.columns.Employee_name_EN= {
            title: this.translate.instant('ApproveRequest.Employee_name_EN'),
            type: "string", editable: false , width: "7%"};
            this.settings.columns.Supervisor_Name_EN= {
              title: this.translate.instant('SearchRequest.Supervisor_Name'),
              type: "string", editable: false};
            //----------------
            this.settingsbL.columns.RequesterNameEN= {
              title: this.translate.instant('SearchRequest.RequesterName'),
              type: "string", editable: false};

              this.settingsbL.columns.NumberofVisitors = {
                title: this.translate.instant('SearchRequest.NumberofVisitors'),
                type:"int" , editableL: false
              };
              this.settings.columns.Department_EN = {
                title: this.translate.instant('SearchRequest.Department_EN'),
                type:"string" , editableL: false,width: "7%"
              };
      }
    }

    settings:any = {
      // hideSubHeader: true,
       noDataMessage: this.translate.instant('Visit.NoRequest'),
       mode: "external",
       delete: {
        deleteButtonContent: `<i class="fa fa-sign-out fa-md" title="${this.translate.instant('SearchRequest.Exit')}"> </i>`,
      },
       edit: {
        editButtonContent: `<i  class="fa fa-sticky-note fa-lg padding_right4 padding_left4" title="${this.translate.instant('SearchRequest.AddNotes')}"> </i>`,
      },
       actions: {
         position: 'right',
         add: false,
         edit:true,
         editable:false,
         columnTitle: '',
         delete:true,
         custom: [
          { name: 'editrecord', title: '&nbsp;&nbsp;<i class="fa  fa-pencil"></i>' }
        ],
         
       },
       pager: {
        display: true,
        perPage: 5
      },
       rowClassFunction: (row) =>{
     
        if(row.data.NoteType== 2){
          return 'blRed';
        }else if(row.data.NoteType== 1) {
          return 'blOrange';
        }
        return null;
      }, 
       columns: {
        VisitID: {
          title: this.translate.instant('Visit.VisitID'),
          type: "int",
          editable: false,width: "7%"
         },
         VisitorName: {
          title: this.translate.instant('ApproveRequest.VisitorName'),
          type: "string",
          editable: false,width: "11%"
         },
         VisitorNationalID: {
          title: this.translate.instant('Visit.ID'),
          type: "string",
          editable: false
         },
         
         office_extn: {
          title: this.translate.instant('SearchRequest.office_extn'),
          type: "string",
          editable: false,width: "4%"
         },
        
        //  VisitDate: {
        //   title: this.translate.instant('Visit.VisitDate'),
        //   type: "string",
        //   editable: false,width: "11%"
        // },
        PrivateParking: {
          title: this.translate.instant('Visit.PrivateParking'),
        //  type: 'html',
          editable: false,width: "4%",
          filter: {
            type: 'checkbox',
            config: {
            true: 'true',
            false: 'false',
            resetText: 'clear',
            },
            },
            type: 'custom',
            renderComponent: CheckboxComponent
        },
        CreatedDate: {
          title: this.translate.instant('Visit.CreatedDate'),
          type: "string",width: "11%",
          editable: false,
          valuePrepareFunction: (date) => {
            if (date) {
            return new DatePipe('en-US').transform(date, 'yyyy-MM-dd')
            // h:mm a
            }
            return null;
            },
        },
        Supervisor_office_extn: {
          title: this.translate.instant('SearchRequest.Supervisor_office_extn'),
          type: "string",
          editable: false,width: "4%"
         },
         NumberofVisitors: {
          title: this.translate.instant('SearchRequest.NumberofVisitors'),
          type: "int",
          editable: false,width: "4%"
         },
       },
       attr: {
        class: 'table table-bordered'
      }
     };
   
  settingsbL:any = {
    // hideSubHeader: true,
     noDataMessage: this.translate.instant('Visit.NoRequest'),
     mode: "external",
     actions: {
       position: 'right',
       add: false,
       edit:false,
       editable:false,
       columnTitle: '',
       delete:false
     },

     columns: {
      VisitorNationalID: {
         title: this.translate.instant('Visit.ID'),
         type: "string",
         editable: false
       },
       bl_Name: {
        title: this.translate.instant('SearchRequest.bl_Name'),
        type: "string",
        editable: false
       },
       
       bl_MobileNo: {
        title: this.translate.instant('SearchRequest.bl_MobileNo'),
        type: "string",
        editable: false
       }
 
      
     
     },
     attr: {
      class: 'table table-bordered'
    }
   };
 
  ngOnInit() {
    this.SearchData();
    this.getStatus();
  }
  SearchData(){
    this.getRequests();
    this.getblackListRequests();
    }
    Reset(){
      this.searchModel=new SearchModel();
      this.SearchData();
    }
  getRequests() {
    this.spinnerService.show();
    try {
      this.searchRequestService
        .getData(this.searchModel).subscribe((requests) => {
          if (requests){
            this.source = requests;
            this.spinnerService.hide();
          }
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), 
          err =>{this.commonService.showFailureToast(err);
           this.spinnerService.hide();} 
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }
 
  }
  getblackListRequests() {
    this.spinnerService.show();
    try {
      this.searchRequestService
        .getblackList(this.searchModel).subscribe((requests) => {
          if (requests){
            this.sourcebl = requests;
            this.spinnerService.hide();
          }
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), 
          err =>{this.commonService.showFailureToast(err);
           this.spinnerService.hide();} 
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
          }
        }, error => { this.commonService.showFailureToast(error); this.spinnerService.hide();},
        ), err =>{ this.commonService.showFailureToast(err);
         
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }

  }

  onCustomAction(event){
    this.actionType=ActionType.Edit;
    this.router.navigate(['/searchRequest/EditSearch',event.data.VisitID]);
  }

OnEdit(event){
  this.display=true;
  this.visitor=event.data;
  //this.bindDateinRequest();
}
OnExit(event){
  this.visitor=event.data;

  if(this.visitor.StatusID==10){
    this.commonService.showWarningToast(this.translate.instant("SearchRequest.Alreadydeparture"));
    return;
  }
  this.displayconfirmdl=true;
}


ExsitSave(){
  this.visitor.TimeToleave=this.commonService.returnTimeStringOnly(new Date());
  this.visitor.AllExist=true;
 this.visitor.StatusID=10;

  this.AddNotes()
}
AddNotes(){
 /*  if(this.visitor.TimeToleave){
    this.visitor.TimeToleave=this.commonService.returnTimeStringOnly(this.visitor.TimeToleave);
  }
  if(this.visitor.TimeAttendance){
    this.visitor.TimeAttendance=this.commonService.returnTimeStringOnly(this.visitor.TimeAttendance);
  }
    */
  this.spinnerService.show();
  try {
    console.log(JSON.stringify(this.visitor))
    this.searchRequestService
      .AddNotes(this.visitor).subscribe((requests) => {
        if (requests)
          this.commonService.showSuccessToast(requests.Message);
          this.spinnerService.hide();
          this.display=false;
          this.displayconfirmdl=false;
      
          this.SearchData()
      },err =>{this.commonService.showFailureToast(err.Message);
        this.spinnerService.hide();}),
         err => {this.commonService.showFailureToast(err);
        this.spinnerService.hide();
      }
  } catch (err) {
    this.spinnerService.hide();
    this.commonService.showFailureToast(err);
} 
}

bindDateinRequest(){

  if(this.visitor.TimeToleave)
  this.visitor.TimeToleave=this.commonService.returnDatefromTimeString(this.visitor.TimeToleave);
  if(this.visitor.TimeAttendance)
  this.visitor.TimeAttendance=this.commonService.returnDatefromTimeString(this.visitor.TimeAttendance);
  
    }



}
