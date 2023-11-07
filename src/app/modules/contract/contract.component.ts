import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Contract, CommonService, ActionType, ContractService } from '../../core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ContractDialogeComponent } from './contract.dialoge.component';
import { Title } from '@angular/platform-browser';





@Component({
  selector: 'app-black_list-page',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  contract: Contract = {} as Contract;
  errors: Object = {};
  actionType:ActionType;
  modalTitle:string="";
  btnmodalTitle:string="";
  display: boolean = false;
  displaydl: boolean = false;
  translate = this.commonService.returnTranslate();
  requestApproveTitlePage:string=this.translate.instant('ApproveRequest.requestApproveTitlePage');

  source: any = [];
  constructor(
    private contractService:ContractService,
    private commonService:CommonService, 
    private dialog: MatDialog,private title:Title, 
    private router: Router,private spinnerService: Ng4LoadingSpinnerService) {
      this.title.setTitle(this.requestApproveTitlePage);
      if(this.translate.currentLang=='ar'){
          this.settings.columns.Employee_name_AR= {
          title: this.translate.instant('ApproveRequest.Employee_name_AR'),
          type: "string", editable: false};
          this.settings.columns.RequestDeptNameAR= {
            title: this.translate.instant('Contract.RequestDeptNameAR'),
            type: "string", editable: false};
          

            
      }
      else{
          this.settings.columns.Employee_name_EN= {
            title: this.translate.instant('ApproveRequest.Employee_name_EN'),
            type: "string", editable: false};
            this.settings.columns.RequestDeptNameEN= {
              title: this.translate.instant('Contract.RequestDeptNameAR'),
              type: "string", editable: false};
              
      }

     }

    
    settings:any = {
      // hideSubHeader: true,
   
       noDataMessage: this.translate.instant('Common.NoData'),
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
         add: this.commonService.isShowcontroleByRoles(['SUPERVISOR','MANAGEMENT','SECURITYHEAD']),
         edit:this.commonService.isShowcontroleByRoles(['SUPERVISOR','MANAGEMENT','SECURITYHEAD']),
         delete:this.commonService.isShowcontroleByRoles(['SUPERVISOR','MANAGEMENT','SECURITYHEAD']),
         editable:false,
         columnTitle: '',
         custom:this.commonService.isShowcontroleByRoles(['SECURITY','SECURITYHEAD'])?
          [{ name: 'makeCard', title: `<i class="fa fa-address-book fa-lg" title="make Card"></i>` ,}]:''

       },
     
   
    
       columns: {
        ID: {
           title: this.translate.instant('Visit.ID'),
           type: "string",
           editable: false,
           width: "12%",
         },
         Name: {
          title: this.translate.instant('Visit.Name'),
          type: "string",
          editable: false
        },
        CompanyName: {
           title: this.translate.instant('Contract.CompanyName'),
           type: "string",
           editable: false,
         },
         StartDate: {
          title: this.translate.instant('Contract.StartDate'),
          type: "string",
          editable: false,
          width: "10%",
        },
        EndDate: {
          title: this.translate.instant('Contract.EndDate'),
          type: "string",
          editable: false,
          width: "10%",
        }
    
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
    this.getContract();
  }

  getContract() {
    this.spinnerService.show();
    try {
      this.contractService
        .get(this.commonService.GetUserNo(),this.commonService.GetUserUserType()).subscribe((requests) => {
          if (requests){
            this.source = requests;
            
          }
          this.spinnerService.hide();
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
    dialogConfig.width='50%'
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
    const dialogRef = this.dialog.open(ContractDialogeComponent, dialogConfig);
    dialogRef.componentInstance.actionType=this.actionType;
  
    if(this.actionType==ActionType.Add)
    {
      dialogRef.componentInstance.contract=new Contract();
      dialogRef.componentInstance.contract.RequesterID=this.commonService.GetUserNo();
      dialogRef.componentInstance.contract.CreateBy=this.commonService.GetUserNo();
      dialogRef.componentInstance.contract.ContractID=0;
      dialogRef.componentInstance.contract.StatusId=7;
    }
    
   else{
    dialogRef.componentInstance.contract=this.contract;
    dialogRef.componentInstance.contract.UpdatedBy=this.commonService.GetUserNo();

  }
    dialogRef.afterClosed().subscribe(
        data =>{ 
          this.getContract();
      });    
  }

  onEdit(event) {
 
    this.actionType=ActionType.Edit;
    this.contract=event.data;
    this.openDialog();
  }
  onAdd(event){
    this.actionType=ActionType.Add;
   this.openDialog();
  }
  onMakeCard(event){
 
    this.contract=event.data;
      this.display = true;
  }
  onDelete(event){
    this.actionType=ActionType.Delete;
    this.contract=event.data;
      this.displaydl = true;
   
  }
  delete() {

    this.spinnerService.show();
    try {
      this.contractService
        .delete(this.contract.ContractID).subscribe((requests) => {
          if (requests)
            this.commonService.showSuccessToast(requests.Message);
            this.displaydl=false;
            this.getContract();
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

  makeCard() {

    this.spinnerService.show();
    try {
      this.contractService
        .makeCard(this.contract.ContractID).subscribe((requests) => {
          if (requests)
            this.commonService.showSuccessToast(requests.Message);
            this.display=false;
            this.getContract();
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
