(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contract-contract-module"],{

/***/ "./src/app/modules/contract/contract-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/contract/contract-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ContractRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractRoutingModule", function() { return ContractRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contract.component */ "./src/app/modules/contract/contract.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _contract_component__WEBPACK_IMPORTED_MODULE_2__["ContractComponent"],
    }
];
var ContractRoutingModule = /** @class */ (function () {
    function ContractRoutingModule() {
    }
    ContractRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ContractRoutingModule);
    return ContractRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/contract/contract.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/contract/contract.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        <h2 style=\"color: #41ad4f; text-align: center;padding: 8px;\">{{'Header.contract'|translate}}</h2>\n\n        <div>\n          <ng2-smart-table [settings]=\"settings\" (custom)=\"onMakeCard($event)\"  (delete)='onDelete($event)' (create)='onAdd($event)' [source]=\"source\"  (edit)=\"onEdit($event)\">\n          </ng2-smart-table>\n        </div>\n      \n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <p-dialog header=\"{{'Visit.modalDeleteTitle'| translate}}\" [(visible)]=\"displaydl\" [modal]=\"true\"  [responsive]=\"true\" [width]=\"450\" [minWidth]=\"300\" [minY]=\"70\" \n          [maximizable]=\"false\" [baseZIndex]=\"10000\">\n        <span> {{'Visit.modalDeleteMessage'| translate}} </span>\n        \n  \n          <p-footer>\n            <button  class=\"dialogbtn\" type=\"button\" pButton (click)=\"delete()\" > {{'Common.Save' | translate}}</button>\n            <button  class=\"dialogbtn\" type=\"button\" pButton   (click)=\"displaydl=false\">  {{'Common.Cancle' | translate}}</button>\n  \n             \n          </p-footer>\n  </p-dialog>\n  </div> \n\n  <div>\n    <p-dialog header=\"{{'Contract.modalCardTitle'| translate}}\" [(visible)]=\"display\" [modal]=\"true\"  [responsive]=\"true\" [width]=\"450\" [minWidth]=\"300\" [minY]=\"70\" \n            [maximizable]=\"false\" [baseZIndex]=\"10000\">\n          <span> {{'Contract.modalMakeMessage'| translate}} </span>\n          \n    \n            <p-footer>\n              <button  class=\"dialogbtn\" type=\"button\" pButton (click)=\"makeCard()\" > {{'Common.Save' | translate}}</button>\n              <button  class=\"dialogbtn\" type=\"button\" pButton   (click)=\"display=false\">  {{'Common.Cancle' | translate}}</button>\n    \n               \n            </p-footer>\n    </p-dialog>\n    </div> "

/***/ }),

/***/ "./src/app/modules/contract/contract.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/contract/contract.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogbtn{width:80px;font-size:bold;font-weight:600;height:31px}.ng-select.disable-arrow .ng-arrow-wrapper .ng-arrow{display:none}.ng-select.disable-dropdown ng-dropdown-panel{display:none}.ng-select.disable-clear-all .ng-clear-wrapper{display:none}.ng2-smart-actions{width:72px !important}\n"

/***/ }),

/***/ "./src/app/modules/contract/contract.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/contract/contract.component.ts ***!
  \********************************************************/
/*! exports provided: ContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractComponent", function() { return ContractComponent; });
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contract_dialoge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contract.dialoge.component */ "./src/app/modules/contract/contract.dialoge.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContractComponent = /** @class */ (function () {
    function ContractComponent(contractService, commonService, dialog, title, router, spinnerService) {
        this.contractService = contractService;
        this.commonService = commonService;
        this.dialog = dialog;
        this.title = title;
        this.router = router;
        this.spinnerService = spinnerService;
        this.contract = {};
        this.errors = {};
        this.modalTitle = "";
        this.btnmodalTitle = "";
        this.display = false;
        this.displaydl = false;
        this.translate = this.commonService.returnTranslate();
        this.requestApproveTitlePage = this.translate.instant('ApproveRequest.requestApproveTitlePage');
        this.source = [];
        this.settings = {
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
                add: this.commonService.isShowcontroleByRoles(['SUPERVISOR', 'MANAGEMENT', 'SECURITYHEAD']),
                edit: this.commonService.isShowcontroleByRoles(['SUPERVISOR', 'MANAGEMENT', 'SECURITYHEAD']),
                delete: this.commonService.isShowcontroleByRoles(['SUPERVISOR', 'MANAGEMENT', 'SECURITYHEAD']),
                editable: false,
                columnTitle: '',
                custom: this.commonService.isShowcontroleByRoles(['SECURITY', 'SECURITYHEAD']) ?
                    [{ name: 'makeCard', title: "<i class=\"fa fa-address-book fa-lg\" title=\"make Card\"></i>", }] : ''
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
        this.title.setTitle(this.requestApproveTitlePage);
        if (this.translate.currentLang == 'ar') {
            this.settings.columns.Employee_name_AR = {
                title: this.translate.instant('ApproveRequest.Employee_name_AR'),
                type: "string", editable: false
            };
            this.settings.columns.RequestDeptNameAR = {
                title: this.translate.instant('Contract.RequestDeptNameAR'),
                type: "string", editable: false
            };
        }
        else {
            this.settings.columns.Employee_name_EN = {
                title: this.translate.instant('ApproveRequest.Employee_name_EN'),
                type: "string", editable: false
            };
            this.settings.columns.RequestDeptNameEN = {
                title: this.translate.instant('Contract.RequestDeptNameAR'),
                type: "string", editable: false
            };
        }
    }
    ContractComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            {
                field: 'ID',
                search: query
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    ContractComponent.prototype.ngOnInit = function () {
        this.getContract();
    };
    ContractComponent.prototype.getContract = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.contractService
                .get(this.commonService.GetUserNo(), this.commonService.GetUserUserType()).subscribe(function (requests) {
                if (requests) {
                    _this.source = requests;
                }
                _this.spinnerService.hide();
            }, function (err) {
                _this.commonService.showFailureToast(err.Message);
                _this.spinnerService.hide();
            }), function (err) {
                _this.commonService.showFailureToast(err);
                _this.spinnerService.hide();
            };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
            this.errors = err;
        }
    };
    ContractComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = '50%';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };
        var dialogRef = this.dialog.open(_contract_dialoge_component__WEBPACK_IMPORTED_MODULE_5__["ContractDialogeComponent"], dialogConfig);
        dialogRef.componentInstance.actionType = this.actionType;
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].Add) {
            dialogRef.componentInstance.contract = new _core__WEBPACK_IMPORTED_MODULE_3__["Contract"]();
            dialogRef.componentInstance.contract.RequesterID = this.commonService.GetUserNo();
            dialogRef.componentInstance.contract.CreateBy = this.commonService.GetUserNo();
            dialogRef.componentInstance.contract.ContractID = 0;
            dialogRef.componentInstance.contract.StatusId = 7;
        }
        else {
            dialogRef.componentInstance.contract = this.contract;
            dialogRef.componentInstance.contract.UpdatedBy = this.commonService.GetUserNo();
        }
        dialogRef.afterClosed().subscribe(function (data) {
            _this.getContract();
        });
    };
    ContractComponent.prototype.onEdit = function (event) {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].Edit;
        this.contract = event.data;
        this.openDialog();
    };
    ContractComponent.prototype.onAdd = function (event) {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].Add;
        this.openDialog();
    };
    ContractComponent.prototype.onMakeCard = function (event) {
        this.contract = event.data;
        this.display = true;
    };
    ContractComponent.prototype.onDelete = function (event) {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].Delete;
        this.contract = event.data;
        this.displaydl = true;
    };
    ContractComponent.prototype.delete = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.contractService
                .delete(this.contract.ContractID).subscribe(function (requests) {
                if (requests)
                    _this.commonService.showSuccessToast(requests.Message);
                _this.displaydl = false;
                _this.getContract();
                _this.spinnerService.hide();
            }, function (err) {
                _this.commonService.showFailureToast(err.Message);
                _this.spinnerService.hide();
            }), function (err) {
                _this.commonService.showFailureToast(err);
                _this.spinnerService.hide();
            };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
        }
    };
    ContractComponent.prototype.makeCard = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.contractService
                .makeCard(this.contract.ContractID).subscribe(function (requests) {
                if (requests)
                    _this.commonService.showSuccessToast(requests.Message);
                _this.display = false;
                _this.getContract();
                _this.spinnerService.hide();
            }, function (err) {
                _this.commonService.showFailureToast(err.Message);
                _this.spinnerService.hide();
            }), function (err) {
                _this.commonService.showFailureToast(err);
                _this.spinnerService.hide();
            };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
        }
    };
    ContractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-black_list-page',
            template: __webpack_require__(/*! ./contract.component.html */ "./src/app/modules/contract/contract.component.html"),
            styles: [__webpack_require__(/*! ./contract.component.scss */ "./src/app/modules/contract/contract.component.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ContractService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__["Ng4LoadingSpinnerService"]])
    ], ContractComponent);
    return ContractComponent;
}());



/***/ }),

/***/ "./src/app/modules/contract/contract.dialoge.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/contract/contract.dialoge.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\">\n<h2 mat-dialog-title>{{modalTitle}}</h2>\n\n<mat-dialog-content [formGroup]=\"form\">\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div style=\"padding: 2px;background-color:rgb(247, 247, 247);\" >\n            \n             \n                  <div class=\"form-group\">\n                    <label for=\"Name\">{{'Visit.Name' | translate}}</label>\n                    <input type=\"text\"  class=\"form-control\" formControlName=\"Name\" [ngClass]=\"{'is-invalid':form.get('Name').touched && form.get('Name').invalid}\" required />\n                    <div *ngIf=\"form.get('Name').touched && form.get('Name').invalid\"  class=\"invalid-feedback\">\n                      <div  *ngIf=\"form.get('Name').errors.required\"> {{'Visit.Name' | translate}} {{'Common.isrequired' | translate}}</div>\n                    </div>\n                  </div>\n\n      <!-- VisitTypeID-->\n      <fieldset class=\"form-group\">\n        <div class=\"row ui-g-12\">\n          <div class=\"ui-g-4\">\n            <label for=\"group1\">{{'Visit.IDType' | translate}}</label>\n          </div>\n        <div class=\"ui-g-8\">\n          <p-radioButton name=\"group1\"  value=\"1\" label=\"{{'Visit.IDTypeNationalId' | translate}}\"   formControlName=\"IDType\"  inputId=\"opt1\"></p-radioButton>\n          <p-radioButton name=\"group1\"   value=\"2\" label=\"{{'Visit.IDTypepassportOrIqama' | translate}}\"   formControlName=\"IDType\"  inputId=\"opt2\"></p-radioButton>\n        </div>\n      </div>\n      </fieldset>\n      <!-- ID -->\n      <div class=\"form-group\">\n        <label for=\"ID\">{{'Contract.ID' | translate}}</label>\n        <input type=\"text\" name=\"ID\"  class=\"form-control\" formControlName=\"ID\" [ngClass]=\"{'is-invalid':form.get('ID').touched && form.get('ID').invalid}\" required />\n        <div *ngIf=\"form.get('ID').touched && form.get('ID').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('ID').errors.required\"> {{'Visit.ID' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"CompanyName\">{{'Contract.CompanyName' | translate}}</label>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"CompanyName\" [ngClass]=\"{'is-invalid':form.get('CompanyName').touched && form.get('CompanyName').invalid}\" required />\n        <div *ngIf=\"form.get('CompanyName').touched && form.get('CompanyName').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('CompanyName').errors.required\"> {{'Contract.CompanyName' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n      </div>\n\n\n      <div class=\"ui-g-12 ui-fluid\">\n        <label >{{'Contract.StartDate' | translate}}</label>\n        <p-calendar required formControlName=\"StartDate\"   [maxDate]=\"maxDateValue\" [(ngModel)]=\"minDateValue\" [ngClass]=\"{'is-invalid':form.get('StartDate').touched && form.get('StartDate').invalid}\" ></p-calendar>\n        <div *ngIf=\"form.get('StartDate').touched && form.get('StartDate').invalid\"   class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('StartDate').errors.required\"> {{'Contract.StartDate' | translate}} {{'Common.isrequired' | translate}}</div>\n      \n        </div>\n        </div>\n\n        <div class=\"ui-g-12 ui-fluid\">\n          <label >{{'Contract.EndDate' | translate}}</label>\n          <p-calendar   required [(ngModel)]=\"maxDateValue\" [minDate]=\"minDateValue\"  [ngClass]=\"{'is-invalid':form.get('EndDate').touched && form.get('EndDate').invalid}\" formControlName=\"EndDate\" ></p-calendar>\n          <div *ngIf=\"form.get('EndDate').touched && form.get('EndDate').invalid\"  class=\"invalid-feedback\">\n            <div  *ngIf=\"form.get('EndDate').errors.required\"> {{'Contract.EndDate' | translate}} {{'Common.isrequired' | translate}}</div>\n          \n          </div>\n\n          </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"MobileNo\">{{'Visit.MobileNo' | translate}}</label>\n        <input type=\"text\" name=\"MobileNo\"  class=\"form-control\" formControlName=\"MobileNo\" />\n        <!-- <div *ngIf=\"form.get('MobileNo').touched && form.get('MobileNo').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('MobileNo').errors.required\"> {{'Visit.MobileNo' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div> -->\n      </div>\n      <!-- StatusId -->\n      <div class=\"form-group\">\n        <label for=\"StatusId\">{{'Visit.StatusId' | translate}}</label>\n      <ng-select [items]=\"status\" \n      [virtualScroll]=\"true\" \n      formControlName=\"StatusId\"\n      bindLabel='{{statustextLbl}}'\n      [disabled]=\"isdisabledStatus\" [searchable]=\"!isdisabledStatus\" [clearable]=\"!isdisabledStatus\"\n      bindValue=\"StatusID\"\n      placeholder=\"{{'Visit.StatusId' | translate}}\"\n      >\n</ng-select>\n\n      </div>\n<!-- NationalityID -->\n                  <div class=\"form-group\">\n                    <label for=\"NationalityID\">{{'Visit.NationalityID' | translate}}</label>\n                  <ng-select [items]=\"nationalities\"\n                  [virtualScroll]=\"true\"\n                  formControlName=\"NationalityID\"\n                  bindLabel='{{nationalitiytextLbl}}'\n                  bindValue=\"ID\"\n                  [disabled]=\"isdisablednationaliy\" [searchable]=\"!isdisablednationaliy\" [clearable]=\"!isdisablednationaliy\"\n\n                  placeholder=\"{{'Visit.NationalityID' | translate}}\"\n               >\n        </ng-select>\n        <div *ngIf=\"form.get('NationalityID').touched && form.get('NationalityID').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('NationalityID').errors.required\"> {{'Visit.NationalityID' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n                  </div>\n                 \n               \n              </div>\n            </div>\n          </div>\n        </div>\n\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n<!--   <div class=\"form-group div_btn\">\n    <button class=\"mat-raised-button btn btn-primary cust-btn-green\" mat-button [disabled]=\"!form.valid\" type=\"submit\"> {{'Common.Save' | translate}}</button>\n    <button mat-button class=\"mat-raised-button btn btn-danger cust-btn-red\" type=\"button\" (click)=\"dialogRef.close()\"> {{'Common.Cancle' | translate}}</button>\n  </div> -->\n  \n\n  <div class=\"row col-md-12 div_btn\" >\n    <div class=\"col-md-4 offset-md-1\" >\n          <button class=\"btn btn-lg pull-xs-right btn-primary cust-btn-green\" [disabled]=\"!form.valid\" type=\"submit\">\n            {{'Common.Save' | translate}}\n          </button>\n        </div>\n        <div class=\"col-md-4 offset-md-1\" >\n          <button  class=\"btn  btn-lg pull-xs-right btn-primary cust-btn-red\" type=\"button\" (click)=\"close()\">\n            {{'Common.Cancle' | translate}}\n          </button>\n        </div>\n        </div>\n\n\n</mat-dialog-actions>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/modules/contract/contract.dialoge.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/contract/contract.dialoge.component.ts ***!
  \****************************************************************/
/*! exports provided: ContractDialogeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDialogeComponent", function() { return ContractDialogeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ContractDialogeComponent = /** @class */ (function () {
    function ContractDialogeComponent(contractService, lookUpsService, route, router, commonService, fb, spinnerService, dialogRef, data) {
        this.contractService = contractService;
        this.lookUpsService = lookUpsService;
        this.route = route;
        this.router = router;
        this.commonService = commonService;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.dialogRef = dialogRef;
        this.translate = this.commonService.returnTranslate();
        this.errors = {};
        this.displaydl = false;
        this.status = [];
        this.statustextLbl = this.translate.currentLang == "ar" ? "StatusTypeAR" : "StatusTypeEN";
        this.isSubmitting = false;
        this.isdisabledStatus = true;
        this.isdisablednationaliy = false;
        this.modalTitle = "";
        this.nationalities = [];
        this.nationalitiytextLbl = this.translate.currentLang == "ar" ? "NamAR" : "NameEn";
        this.btnmodalTitle = "";
        // use the FormBuilder to create a form group
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ContractID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            IDType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            MobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            NationalityID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            StatusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](7),
        });
    }
    ContractDialogeComponent.prototype.ngOnInit = function () {
        this.getStatus();
        this.getNationality();
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_5__["ActionType"].Edit && this.contract) {
            this.bindDateinRequest();
            this.isdisabledStatus = false;
            this.modalTitle = this.translate.instant("Contract.EditModalTitle");
            this.form.controls['StatusId'].enable();
            this.form.patchValue(this.contract);
        }
        else {
            this.modalTitle = this.translate.instant("Contract.AddModalTitle");
            this.form.controls['StatusId'].disable();
        }
    };
    ContractDialogeComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    ContractDialogeComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ContractDialogeComponent.prototype.getSelectedstutus = function () {
        this.contract.StatusId = Number(this.contract.StatusId);
    };
    ContractDialogeComponent.prototype.getStatus = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.lookUpsService
                .getStatusLookup('b').subscribe(function (requests) {
                if (requests) {
                    _this.status = requests;
                    //if(this.actionType==ActionType.Add){  this.Contract.StatusId=3;}
                }
            }, function (error) { _this.commonService.showFailureToast(error); _this.spinnerService.hide(); }, function () { return _this.getSelectedstutus(); }), function (err) {
                _this.commonService.showFailureToast(err);
                _this.spinnerService.hide();
            };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
            this.errors = err;
        }
    };
    ContractDialogeComponent.prototype.bindDateinRequest = function () {
        this.contract.StartDate = new Date(this.contract.StartDate);
        this.contract.EndDate = new Date(this.contract.EndDate);
        this.maxDateValue = this.contract.EndDate;
        this.minDateValue = this.contract.StartDate;
    };
    ContractDialogeComponent.prototype.onSubmit = function () {
        Object.assign(this.contract, this.form.value);
        this.contract.StartDate = this.commonService.returnDateStringOnly(this.contract.StartDate);
        this.contract.EndDate = this.commonService.returnDateStringOnly(this.contract.EndDate);
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_5__["ActionType"].Add) {
            this.Add();
        }
        else if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_5__["ActionType"].Edit) {
            this.Edit();
        }
    };
    ContractDialogeComponent.prototype.Add = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.contractService
                .add(this.contract).subscribe(function (requests) {
                if (requests)
                    _this.commonService.showSuccessToast(requests.Message);
                _this.spinnerService.hide();
                _this.close();
            }, function (err) {
                _this.commonService.showFailureToast(err.Message);
                _this.spinnerService.hide();
            }),
                function (err) {
                    _this.commonService.showFailureToast(err);
                    _this.spinnerService.hide();
                };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
        }
    };
    ContractDialogeComponent.prototype.Edit = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.contractService
                .edit(this.contract).subscribe(function (requests) {
                if (requests) {
                    _this.spinnerService.hide();
                    _this.commonService.showSuccessToast(requests.Message);
                    _this.close();
                }
            }, function (err) {
                _this.commonService.showFailureToast(err.Message);
                _this.spinnerService.hide();
            }), function (err) {
                _this.commonService.showFailureToast(err);
                _this.spinnerService.hide();
            };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
            this.errors = err;
        }
    };
    ContractDialogeComponent.prototype.getNationality = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.lookUpsService
                .getNationalityLookup().subscribe(function (requests) {
                if (requests) {
                    _this.nationalities = requests;
                }
            }, function (err) {
                _this.commonService.showFailureToast(err.Message);
                _this.spinnerService.hide();
            }), function (err) { return _this.commonService.showFailureToast(err); };
        }
        catch (err) {
            this.spinnerService.hide();
            this.commonService.showFailureToast(err);
            this.errors = err;
        }
        this.spinnerService.hide();
    };
    ContractDialogeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contract-dialoge-page',
            template: __webpack_require__(/*! ./contract.dialoge.component.html */ "./src/app/modules/contract/contract.dialoge.component.html"),
            styles: [__webpack_require__(/*! ./contract.component.scss */ "./src/app/modules/contract/contract.component.scss")]
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_5__["ContractService"],
            _core__WEBPACK_IMPORTED_MODULE_5__["LookUpsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], ContractDialogeComponent);
    return ContractDialogeComponent;
}());



/***/ }),

/***/ "./src/app/modules/contract/contract.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/contract/contract.module.ts ***!
  \*****************************************************/
/*! exports provided: ContractModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractModule", function() { return ContractModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contract_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contract-routing.module */ "./src/app/modules/contract/contract-routing.module.ts");
/* harmony import */ var _contract_dialoge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contract.dialoge.component */ "./src/app/modules/contract/contract.dialoge.component.ts");
/* harmony import */ var _contract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contract.component */ "./src/app/modules/contract/contract.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContractModule = /** @class */ (function () {
    function ContractModule() {
    }
    ContractModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerModule"].forRoot(), _contract_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContractRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            declarations: [_contract_component__WEBPACK_IMPORTED_MODULE_6__["ContractComponent"], _contract_dialoge_component__WEBPACK_IMPORTED_MODULE_5__["ContractDialogeComponent"]],
            providers: [],
            entryComponents: [_contract_dialoge_component__WEBPACK_IMPORTED_MODULE_5__["ContractDialogeComponent"]]
        })
    ], ContractModule);
    return ContractModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-contract-contract-module.js.map