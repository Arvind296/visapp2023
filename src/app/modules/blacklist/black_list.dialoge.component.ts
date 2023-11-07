
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SelectItem } from 'primeng/primeng';
import { BlackList,CommonService, ActionType, BlackListService, LookUpsService } from '../../core';


@Component({
  selector: 'app-black_list-dialoge-page',
  templateUrl: './black_list.dialoge.component.html'
})
export class BlackListDialogeComponent implements OnInit {
  Selectednationality:any;
  form: FormGroup;
  translate = this.commonService.returnTranslate();
  searchNationalID:string;
  errors: Object = {};
  status:any[]=[]
  statustextLbl:string=this.translate.currentLang=="ar"?"StatusTypeAR":"StatusTypeEN";
  isSubmitting = false;
  isdisabledStatus:boolean=true;
  actionType:ActionType;
  modalTitle:string="";
  blackList: BlackList;
  nationalities:SelectItem[]=[];
  searchName: any;
  datasource:any;
  nationalitiytextLbl:string=this.translate.currentLang=="ar"?"NamAR":"NameEn";

  btnmodalTitle:string="";
  description:string;
  constructor(
    private blackListService:BlackListService,
    private lookUpsService:LookUpsService,
    private commonService:CommonService,
    private spinnerService: Ng4LoadingSpinnerService ,public dialogRef: MatDialogRef<BlackListDialogeComponent>  ) {

    // use the FormBuilder to create a form group
    this.form = new FormGroup({
      BLID: new FormControl(null),
      ID: new FormControl('',[Validators.required]),
      Name: new FormControl('', Validators.required),
      IDType: new FormControl('', Validators.required),
      StatusId: new FormControl(7, [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      MobileNo: new FormControl('',[Validators.required]),
      NationalityID: new FormControl(null,[Validators.required]),
      NoteType: new FormControl(1, [Validators.required]),
      
     });
    }

  ngOnInit() {
     this.getStatus();
    this.getNationality();
    if(this.actionType==ActionType.Edit&&this.blackList){
     this.modalTitle=this.translate.instant("BlackList.EditModalTitle");
     this.form.controls['StatusId'].enable();
      this.form.patchValue(this.blackList);
    }    
 else{
  this.modalTitle=this.translate.instant("BlackList.AddModalTitle");
  this.form.controls['StatusId'].disable();
 }
  }

  SearchVistorByName(value) {
    if(value.query && value.query.length > 2){
    try {
      this.spinnerService.show();
      this.lookUpsService
        .SearchVistorByName(value.query).subscribe((requests:any) => {
          if (requests)
          {
          this.datasource=requests;
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

  }
  save() {
    this.dialogRef.close(this.form.value);
}
SearchData(){

  this.getVisitorDataByNationalID()
}

getVisitorDataByNationalID() {
  this.spinnerService.show();
  try {
    let sename=this.searchName?this.searchName.Name:null;
    this.lookUpsService
      .getByNationalId(this.searchNationalID,sename).subscribe((requests:any) => {
        if (requests)
        {
          this.blackList=requests;
          this.blackList.NoteType=1;
          this.form.patchValue(this.blackList);
          this.spinnerService.hide();
        }
      },err =>{
        this.commonService.showFailureToast(err.Message);
        this.spinnerService.hide();}), err =>{ this.commonService.showFailureToast(err);
       
        this.spinnerService.hide();
      }
  } catch (err) {
    this.spinnerService.hide();
    this.commonService.showFailureToast(err);
    this.errors = err;
  }

}
close() {
    this.dialogRef.close();
}
getSelectedstutus(){
  this.blackList.StatusId=Number(this.blackList.StatusId);
}
getStatus() {
  this.spinnerService.show();
  try {
    this.lookUpsService
      .getStatusLookup('b').subscribe((requests) => {
        if (requests)
        {

          this.status= requests;
          //if(this.actionType==ActionType.Add){  this.blackList.StatusId=3;}
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
  updateArticle() {
   // Object.assign(this.article, values);
  }
  onSubmit(){
  Object.assign(this.blackList, this.form.value);
 
   if(this.actionType==ActionType.Add)
{
  this.blackList.RequesterID=this.commonService.GetUserNo();
  this.blackList.CreateBy=this.commonService.GetUserNo();
  this.blackList.BLID=0;
  this.blackList.StatusId=7;
this.Add()
}
else if(this.actionType==ActionType.Edit)
{
this.Edit()
}
  
  }
  Add(){
      this.spinnerService.show();
      try {
        this.blackListService
          .add(this.blackList).subscribe((requests) => {
            if (requests)
              this.commonService.showSuccessToast(requests.Message);
              this.spinnerService.hide();
              this.dialogRef.close();
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


  Edit() {
  
      this.spinnerService.show();
      try {
        this.blackListService
          .edit(this.blackList).subscribe((requests) => {
            if (requests){
              this.spinnerService.hide();
              this.commonService.showSuccessToast(requests.Message);
              this.close();
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
  getNationality() {
    this.spinnerService.show();
    try {
      this.lookUpsService
        .getNationalityLookup().subscribe((requests) => {
          if (requests)
          {
            this.nationalities=requests;
          }
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), err => this.commonService.showFailureToast(err);
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }
    this.spinnerService.hide();
  }

}
