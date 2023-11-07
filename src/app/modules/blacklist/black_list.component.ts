import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';
import { BlackList, CommonService, ActionType, BlackListService } from '../../core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { BlackListDialogeComponent } from './black_list.dialoge.component';



@Component({
  selector: 'app-black_list-page',
  templateUrl: './black_list.component.html',
  styleUrls: ['./black_list.component.scss']
})
export class BlackListComponent implements OnInit {
  blackList: BlackList = {} as BlackList;
  errors: Object = {};
  actionType:ActionType;
  modalTitle:string="";
  btnmodalTitle:string="";
  displaydl: boolean = false;
  translate = this.commonService.returnTranslate();
  requestApproveTitlePage:string=this.translate.instant('ApproveRequest.requestApproveTitlePage');

  source: any = [];
  constructor(
    private blackListService:BlackListService,
    private commonService:CommonService, 
    private dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService) {
      if(this.translate.currentLang=='ar'){
          this.settings.columns.Employee_name_AR= {
          title: this.translate.instant('ApproveRequest.Employee_name_AR'),
          type: "string", editable: false};
          this.settings.columns.StatusTypeAR= {
            title: this.translate.instant('BlackList.StatusType'),
            type: "string", editable: false};
            this.settings.columns.NationalityNameAr= {
              title: this.translate.instant('Visit.NationalityID'),
              type: "string", editable: false};
      }
      else{
          this.settings.columns.Employee_name_EN= {
            title: this.translate.instant('ApproveRequest.Employee_name_EN'),
            type: "string", editable: false};
            this.settings.columns.StatusTypeEN= {
              title: this.translate.instant('BlackList.StatusType'),
              type: "string", editable: false};
              this.settings.columns.NationalityNameEn= {
                title: this.translate.instant('Visit.NationalityID'),
                type: "string", editable: false};
      }

     }

    
    settings:any = {
      // hideSubHeader: true,
   
       noDataMessage: this.translate.instant('Common.NoData'),
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
         add:true, 
         edit: this.commonService.isShowcontroleByRoles(['SECURITYHEAD']),
         delete:true,
         editable:false,
         columnTitle: '',
       },
     
   rowClassFunction: (row) =>{
     
      if(row.data.NoteType== 2){
        return 'blRed';
      }else {
        return 'blOrange'
      }
    }, 
    
       columns: {
        ID: {
           title: this.translate.instant('Visit.ID'),
           type: "string",
           editable: false
         },
         Name: {
          title: this.translate.instant('Visit.Name'),
          type: "string",
          editable: false
        },
        MobileNo: {
           title: this.translate.instant('Visit.MobileNo'),
           type: "string",
           editable: false,
         },
         
         NoteType: {
          title: this.translate.instant('BlackList.NoteType'),
          type: "string",
          editable: false,
          valuePrepareFunction: (data) => {
            if (data) {
            return data==1?this.translate.instant('BlackList.NoteTypeOrang'):this.translate.instant('BlackList.NoteTypeRed')
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
         field: 'ID',
         search: query
       },
     
  
     ], false);
     // second parameter specifying whether to perform 'AND' or 'OR' search 
     // (meaning all columns should contain search query or at least one)
     // 'AND' by default, so changing to 'OR' by setting false here
   
 } 
  ngOnInit() {
    this.getBlackList();
  }

  getBlackList() {
    this.spinnerService.show();
    try {
      this.blackListService
        .get(this.commonService.GetUserNo(),this.commonService.GetUserUserType()).subscribe((requests) => {
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

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='70%'
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
    const dialogRef = this.dialog.open(BlackListDialogeComponent, dialogConfig);
    dialogRef.componentInstance.actionType=this.actionType;
  
    if(this.actionType==ActionType.Add)
    {
      dialogRef.componentInstance.blackList=new BlackList();
      dialogRef.componentInstance.blackList.RequesterID=this.commonService.GetUserNo();
      dialogRef.componentInstance.blackList.CreateBy=this.commonService.GetUserNo();
      dialogRef.componentInstance.blackList.BLID=0;
      dialogRef.componentInstance.blackList.StatusId=7;
    }
    
   else{
    dialogRef.componentInstance.blackList=this.blackList;
    dialogRef.componentInstance.blackList.UpdatedBy=this.commonService.GetUserNo();

  }
    dialogRef.afterClosed().subscribe(
        () =>{ 
          this.getBlackList();
      });    
  }

  onEdit(event) {
 
    this.actionType=ActionType.Edit;
    this.blackList=event.data;
    this.openDialog();
  }
  onAdd(){
    this.actionType=ActionType.Add;
   this.openDialog();
  }

  onDelete(event){
    this.actionType=ActionType.Delete;
    this.blackList=event.data;
    if(this.blackList.StatusId==6&&!(this.commonService.GetUserUserType()=='SECURITYHEAD'))
    {
      this.commonService.showFailureToast(this.translate.instant("BlackList.Can’tDelete"));
     return; 
    }
    this.displaydl = true;
   
  }
  delete() {
    this.spinnerService.show();
    try {
      this.blackListService
        .delete(this.blackList.BLID).subscribe((requests) => {
          if (requests)
            this.commonService.showSuccessToast(requests.Message);
            this.displaydl=false;
            this.getBlackList();
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









}
