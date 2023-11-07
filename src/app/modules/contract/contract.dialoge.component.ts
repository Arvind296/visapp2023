
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SelectItem } from 'primeng/primeng';
import { Contract,CommonService, ActionType, ContractService, LookUpsService } from '../../core';



@Component({
  selector: 'app-contract-dialoge-page',
  templateUrl: './contract.dialoge.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractDialogeComponent implements OnInit {
  Selectednationality:any;
  form: FormGroup;
  translate = this.commonService.returnTranslate();
  searchNationalID:string;
  errors: Object = {};
  displaydl: boolean = false;
  minDateValue:any;
  maxDateValue:any;
  status:any[]=[]
  statustextLbl:string=this.translate.currentLang=="ar"?"StatusTypeAR":"StatusTypeEN";
  isSubmitting = false;
  isdisabledStatus:boolean=true;
  isdisablednationaliy:boolean=false;
  actionType:ActionType;
  modalTitle:string="";
  contract: Contract;
  nationalities:SelectItem[]=[];

  nationalitiytextLbl:string=this.translate.currentLang=="ar"?"NamAR":"NameEn";

  btnmodalTitle:string="";
  description:string;
  constructor(
    private contractService:ContractService,
    private lookUpsService:LookUpsService,
    private route: ActivatedRoute,
    private router: Router,private commonService:CommonService,
    private fb: FormBuilder, private spinnerService: Ng4LoadingSpinnerService ,public dialogRef: MatDialogRef<ContractDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    // use the FormBuilder to create a form group
    this.form = new FormGroup({
      ContractID: new FormControl(0),
      ID: new FormControl('',[Validators.required]),
      Name: new FormControl('', Validators.required),
      IDType: new FormControl('', Validators.required),
      CompanyName: new FormControl('', [Validators.required]),
      MobileNo: new FormControl(''),
      NationalityID: new FormControl(null,[Validators.required]),
      StartDate: new FormControl('',[Validators.required]),
      EndDate: new FormControl('',[Validators.required]),
      StatusId: new FormControl(7),
     });
    }

  ngOnInit() {
    
     this.getStatus();
    this.getNationality();
    if(this.actionType==ActionType.Edit&&this.contract){
      this.bindDateinRequest();
      this.isdisabledStatus=false; 
     this.modalTitle=this.translate.instant("Contract.EditModalTitle");
     this.form.controls['StatusId'].enable();
      this.form.patchValue(this.contract);
    }   
 else{
  this.modalTitle=this.translate.instant("Contract.AddModalTitle");
  
this.form.controls['StatusId'].disable();
 }
  }


  save() {
    this.dialogRef.close(this.form.value);
}


close() {
    this.dialogRef.close();
}
getSelectedstutus(){
  this.contract.StatusId=Number(this.contract.StatusId);
}
getStatus() {
  this.spinnerService.show();
  try {
    this.lookUpsService
      .getStatusLookup('b').subscribe((requests) => {
        if (requests)
        {
          this.status= requests;
          //if(this.actionType==ActionType.Add){  this.Contract.StatusId=3;}
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

    bindDateinRequest(){
      this.contract.StartDate=new Date(this.contract.StartDate);
      this.contract.EndDate=new Date(this.contract.EndDate);
      this.maxDateValue= this.contract.EndDate;
      this.minDateValue=this.contract.StartDate;
        }
  onSubmit(){

  Object.assign(this.contract, this.form.value);
  this.contract.StartDate=this.commonService.returnDateStringOnly(this.contract.StartDate);
  this.contract.EndDate=this.commonService.returnDateStringOnly(this.contract.EndDate);
   if(this.actionType==ActionType.Add)
{
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
        this.contractService
          .add(this.contract).subscribe((requests) => {
            if (requests)
              this.commonService.showSuccessToast(requests.Message);
              this.spinnerService.hide();
              this.close();
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
        this.contractService
          .edit(this.contract).subscribe((requests) => {
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
