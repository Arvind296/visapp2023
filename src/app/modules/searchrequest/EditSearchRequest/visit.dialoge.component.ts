
import { visitor } from './../../../core/models/Visit.model'
//'../../../core/models/Visit.model';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {  ActionType,LookUpsService, CommonService, BlackListService } from './../../../core';
import { MatDialogRef } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-visit-dialoge-page',
  templateUrl: './visit.dialoge.component.html'
})
export class VisitDialogeComponent implements OnInit {
  Selectednationality:any;
  form: FormGroup;
  blackListDescription:string;
  errors: Object = {};
  searchNationalID:string;
  isSubmitting = false;
  actionType:ActionType;
  modalTitle:string="";
  visitor: visitor;
  nationalities:SelectItem[]=[];
isblackList:boolean=false;
  searchName: any;

  translate = this.commonService.returnTranslate();
  nationalitiytextLbl:string=this.translate.currentLang=="ar"?"NamAR":"NameEn";

  datasource:any;
  resultsFetched =false;
  btnmodalTitle:string="";
  description:string;
  constructor(
    private blackListService:BlackListService,
    private lookUpsService:LookUpsService,
    private commonService:CommonService,
   private spinnerService: Ng4LoadingSpinnerService ,public dialogRef: MatDialogRef<VisitDialogeComponent>  ) {

    // use the FormBuilder to create a form group
    this.form = new FormGroup({
      VisitorID: new FormControl(null),
      VisitID: new FormControl(null),
      Name: new FormControl('', Validators.required),
      IDType: new FormControl(1, Validators.required),
      ID: new FormControl('', [Validators.required]),
      NationalityID: new FormControl(null, [Validators.required]),
      MobileNo: new FormControl(''),
     });
    
    }

  ngOnInit() {

    this.getNationality();
    if(this.actionType==ActionType.Edit&&this.visitor){
     this.modalTitle=this.translate.instant("Visit.EditModalTitle")
      this.form.patchValue(this.visitor);
     // Object.assign( this.form.value,this.visitor);
    }    else if(this.actionType==ActionType.BlackList&&this.visitor){
      this.modalTitle=this.translate.instant("Visit.BlackListModalTitle")
       this.form.patchValue(this.visitor);
       this.isblackList=true;
       this.form.disable();
      // Object.assign( this.form.value,this.visitor);
     }
 else{
  this.modalTitle=this.translate.instant("Visit.AddModalTitle")
 }
  }
  SearchData(){
    this.getVisitorDataByNationalID()
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
  getVisitorDataByNationalID() {
    this.spinnerService.show();
    try {
   let sename=this.searchName?this.searchName.Name:null;
      this.lookUpsService
        .getByNationalId(this.searchNationalID,sename).subscribe((requests:any) => {
          if (requests)
          {
            this.visitor=requests;
            this.form.patchValue(this.visitor);
      
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
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

  updateArticle() {
   // Object.assign(this.article, values);
  }
  onSubmit(){
/*    if(this.actionType==ActionType.BlackList)
{
this.blackList()
} */
  var datag=  Object.assign({}, this.form.value);
 //this.visit.visitors.push(datag);
  this.dialogRef.close(datag);
  
  }
  blackList(){
      this.spinnerService.show();
      try {
        this.blackListService
          .add(this.visitor.VisitorID).subscribe((requests) => {
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
  getNationality() {
    this.spinnerService.show();
    try {
      this.lookUpsService
        .getNationalityLookup().subscribe((requests) => {
          if (requests)
          {
            this.nationalities=requests;
         /*     for (let index = 0; index < requests.length; index++) {
              const element = requests[index];
              var item={label:this.translate.currentLang=="ar"?element.NamAR:element.NameEn,value:element.ID};
              this.nationalities.push(item)
             if(this.actionType==ActionType.Edit&&this.visitor&&element.ID==this.visitor.NationalityID){
             this.form.value["NationalityID"]=  item;
             this.Selectednationality=  item;
            
            } 
            }*/
         
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
