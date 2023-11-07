import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Visit, VisitRegistrationService,CommonService, ActionType } from './../../../core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-visit.allData-page',
  templateUrl: './visit.allData.component.html',
  styleUrls: ['./all-visit.component.scss'],
})
export class VisitAllDataComponent implements OnInit {
  visit: Visit = {} as Visit;
  errors: Object = {};
  actionType:ActionType;
  modalTitle:string="";
  btnmodalTitle:string="";
  displaydl: boolean = false;
  selectedStatus:any;
  translate = this.commonService.returnTranslate();
  VisitTitlePage:string=this.translate.instant('Visit.VisitTitlePage');

  source: any = [];
  constructor(private title:Title,
    private activatedRoute: ActivatedRoute,
    private visitRegistrationService: VisitRegistrationService,
    private commonService:CommonService, 
    private router: Router,private spinnerService: Ng4LoadingSpinnerService) {
      this.title.setTitle(this.VisitTitlePage);
this.translate.currentLang=='ar'?
    this.settings.columns.StatusTypeAR= {
      title: this.translate.instant('Visit.StatusType'),
      type: "string", editable: false,width: "9%"}: this.settings.columns.StatusTypeEN= {
        title: this.translate.instant('Visit.StatusType'),
        type: "string", editable: false,width: "8%"};

        //this.translate.currentLang=='ar'?
        // this.settings.columns.RoomAR= {
        //   title: this.translate.instant('Visit.MeetingRoom'),
        //   type: "string", editable: false}: this.settings.columns.RoomEN= {
        //     title: this.translate.instant('Visit.MeetingRoom'),
        //     type: "string", editable: false}
      
  


     }
    settingstest = {
      noDataMessage: this.translate.instant('Visit.NoVisit'),
      mode: "external",
      edit: {
        editButtonContent: '<i class="nb-edit"  title="Edit">edit</i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash" title="delete">delete</i>',
   
      },
      add: {
        addButtonContent: '<i class="nb-plus" title="Add">Add</i>',
    
      },
      actions: {
        position: 'right',
        add: true,
        edit:true,
        editable:false,
        columnTitle: '',
      },
    
      columns: {
        id: {
          title: 'ID'
        },
        name: {
          title: 'Full Name'
        },
        username: {
          title: 'User Name'
        },
        email: {
          title: 'Email'
        }
      }
    };
    datatest = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      
      // ... list of items
      
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      },
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      
      // ... list of items
      
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      },
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      
      // ... list of items
      
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      },
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      
      // ... list of items
      
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      }
    ];

    
  settings:any = {
    // hideSubHeader: true,
 
     noDataMessage: this.translate.instant('Visit.NoRequest'),
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
     },
     pager: {
      display: true,
      perPage: 12
    },
 /*     rowClassFunction: (row) =>{
     
      if(row.data.VisitID > 2053){
        return 'solved';
      }else {
        return 'aborted'
      }
    }, */
  
     columns: {
     /*   Id: {
       show:false
       }, */
    /*    VisitID: {
         title: this.translate.instant('Visit.VisitID'),
         type: "string",
         editable: false
       }, */

       FirstVisitorName: {
        title: this.translate.instant('Visit.VisitorName'),
        type: "string",
        editable: false
      }, 
       
       VisitDate: {
        title: this.translate.instant('Visit.VisitDate'),
        type: "string",
        editable: false
      },
      VisitTypeID:{
        title: this.translate.instant('Visit.VisitTypeID'),
        type: "string", editable: false,
        width: "10%",
        valuePrepareFunction: (data) => {
          if (data) {
          return data==1?this.translate.instant('Visit.VisitTypeVisit'):this.translate.instant('Visit.VisitTypWalkinVisitor')
          }
          return null;
          },
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

   getSelectedStatus(){
    if(this.selectedStatus)
    this.selectedStatus=Number(this.selectedStatus);
    else
    this.selectedStatus=null;
  }

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
    this.getVistits();
    this.selectedStatus = this.activatedRoute.snapshot.paramMap.get("selectedStatus");
    if(this.selectedStatus)
    this.selectedStatus=Number(this.selectedStatus);
  }

  getVistits() {
    this.spinnerService.show();
    try {
      this.visitRegistrationService
        .get(this.commonService.GetUserNo(),this.selectedStatus).subscribe((requests) => {
          if (requests){
        
            this.source = requests;
            this.spinnerService.hide();
          }

        },err =>{this.commonService.showFailureToast(err);
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
    this.router.navigate(['/visit/EditVisit',event.data.VisitID]);

  }

  onAdd(){
    this.router.navigate(['/visit/AddVisit']);
  }


  onDelete(event){
    this.visit=event.data;
    if(this.visit.VisitTypeID==2&&(!(this.commonService.GetUserUserType()=='SECURITY')||!(this.commonService.GetUserUserType()=='SECURITYHEAD')))
    {
      this.commonService.showFailureToast(this.translate.instant("Visit.Can’tDelete"));
     return; 
    }
   else if(this.visit.VisitTypeID==1&&this.visit.StatusId!=3&&(!(this.commonService.GetUserUserType()=='SECURITY')||!(this.commonService.GetUserUserType()=='SECURITYHEAD')))
    {
      this.commonService.showFailureToast(this.translate.instant("Visit.Can’tDelete"));
     return; 
    }
    this.displaydl = true;
    this.actionType=ActionType.Delete;
  }
  closedialoge(){
    this.getVistits();
  }

  delete() {
    this.spinnerService.show();
    try {
      this.visitRegistrationService
        .delete(this.visit.VisitID).subscribe((requests) => {
          if (requests)
          //  this.source = requests;
            this.displaydl = false;
            this.getVistits();
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

/* onclickBtn(){
  switch (this.actionType){
  case ActionType.Add:{
    this.AddUser();
    break;
  }
  case ActionType.Edit:{
    this.AddUser();
    break;
  }
  case ActionType.Delete:{
    this.deleteUser();
    break;
  }
  }
} */



}
