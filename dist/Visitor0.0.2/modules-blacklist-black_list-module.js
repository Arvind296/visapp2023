(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-blacklist-black_list-module"],{

/***/ "./src/app/modules/blacklist/black_list-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/blacklist/black_list-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BlackListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackListRoutingModule", function() { return BlackListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _black_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./black_list.component */ "./src/app/modules/blacklist/black_list.component.ts");
/* harmony import */ var _black_list_dialoge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./black_list.dialoge.component */ "./src/app/modules/blacklist/black_list.dialoge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _black_list_component__WEBPACK_IMPORTED_MODULE_3__["BlackListComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["RoleAuthGuard"]],
        data: { roles: ['SECURITY', 'SECURITYHEAD'] }
    },
    {
        path: 'EditblackList/:blId',
        component: _black_list_dialoge_component__WEBPACK_IMPORTED_MODULE_4__["BlackListDialogeComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["RoleAuthGuard"]],
        data: { roles: ['SECURITY', 'SECURITYHEAD'], action: [_core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit] }
        /*   resolve: {
            article: EditableArticleResolver
          } */
    }
];
var BlackListRoutingModule = /** @class */ (function () {
    function BlackListRoutingModule() {
    }
    BlackListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlackListRoutingModule);
    return BlackListRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/blacklist/black_list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/blacklist/black_list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        <h2 style=\"color: #41ad4f; text-align: center;padding: 8px;\">{{'Header.blacklist'|translate}}</h2>\n\n        <div>\n          <ng2-smart-table [settings]=\"settings\"  (delete)='onDelete($event)' (create)='onAdd()' [source]=\"source\"  (edit)=\"onEdit($event)\">\n          </ng2-smart-table>\n        </div>\n      \n\n      </div>\n    </div>\n  </div>\n</div>\n<div>\n  <p-dialog header=\"{{'Visit.modalDeleteTitle'| translate}}\" [(visible)]=\"displaydl\" [modal]=\"true\"  [responsive]=\"true\" [width]=\"450\" [minWidth]=\"300\" [minY]=\"70\" \n          [maximizable]=\"false\" [baseZIndex]=\"10000\">\n        <span> {{'Visit.modalDeleteMessage'| translate}} </span>\n        \n  \n          <p-footer>\n            <button  class=\"dialogbtn\" type=\"button\" pButton (click)=\"delete()\" > {{'Common.Save' | translate}}</button>\n            <button  class=\"dialogbtn\" type=\"button\" pButton   (click)=\"displaydl=false\">  {{'Common.Cancle' | translate}}</button>\n  \n             \n          </p-footer>\n  </p-dialog>\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/blacklist/black_list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/blacklist/black_list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogbtn{width:80px;font-size:bold;font-weight:600;height:31px}:host /deep/ tr.blRed{color:red}:host /deep/ tr.blOrange{color:#ad7207}\n"

/***/ }),

/***/ "./src/app/modules/blacklist/black_list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/blacklist/black_list.component.ts ***!
  \***********************************************************/
/*! exports provided: BlackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackListComponent", function() { return BlackListComponent; });
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _black_list_dialoge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./black_list.dialoge.component */ "./src/app/modules/blacklist/black_list.dialoge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlackListComponent = /** @class */ (function () {
    function BlackListComponent(blackListService, commonService, dialog, spinnerService) {
        var _this = this;
        this.blackListService = blackListService;
        this.commonService = commonService;
        this.dialog = dialog;
        this.spinnerService = spinnerService;
        this.blackList = {};
        this.errors = {};
        this.modalTitle = "";
        this.btnmodalTitle = "";
        this.displaydl = false;
        this.translate = this.commonService.returnTranslate();
        this.requestApproveTitlePage = this.translate.instant('ApproveRequest.requestApproveTitlePage');
        this.source = [];
        this.settings = {
            // hideSubHeader: true,
            noDataMessage: this.translate.instant('Common.NoData'),
            mode: "external",
            edit: {
                editButtonContent: "<i  class=\"fa fa-pencil fa-lg padding_right4 padding_left4\" title=\"" + this.translate.instant('Common.Edit') + "\"> </i>",
            },
            delete: {
                deleteButtonContent: "<i class=\"fa fa-trash fa-lg\" title=\"" + this.translate.instant('Common.delete') + "\"> </i>",
            },
            add: {
                addButtonContent: "<i class=\"fa fa-plus-circle fa-lg\" title=\"" + this.translate.instant('Common.Add') + "\"></i>",
            },
            actions: {
                position: 'right',
                add: true,
                edit: this.commonService.isShowcontroleByRoles(['SECURITYHEAD']),
                delete: true,
                editable: false,
                columnTitle: '',
            },
            rowClassFunction: function (row) {
                if (row.data.NoteType == 2) {
                    return 'blRed';
                }
                else {
                    return 'blOrange';
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
                    valuePrepareFunction: function (data) {
                        if (data) {
                            return data == 1 ? _this.translate.instant('BlackList.NoteTypeOrang') : _this.translate.instant('BlackList.NoteTypeRed');
                        }
                        return null;
                    },
                },
            },
            attr: {
                class: 'table table-bordered'
            }
        };
        if (this.translate.currentLang == 'ar') {
            this.settings.columns.Employee_name_AR = {
                title: this.translate.instant('ApproveRequest.Employee_name_AR'),
                type: "string", editable: false
            };
            this.settings.columns.StatusTypeAR = {
                title: this.translate.instant('BlackList.StatusType'),
                type: "string", editable: false
            };
            this.settings.columns.NationalityNameAr = {
                title: this.translate.instant('Visit.NationalityID'),
                type: "string", editable: false
            };
        }
        else {
            this.settings.columns.Employee_name_EN = {
                title: this.translate.instant('ApproveRequest.Employee_name_EN'),
                type: "string", editable: false
            };
            this.settings.columns.StatusTypeEN = {
                title: this.translate.instant('BlackList.StatusType'),
                type: "string", editable: false
            };
            this.settings.columns.NationalityNameEn = {
                title: this.translate.instant('Visit.NationalityID'),
                type: "string", editable: false
            };
        }
    }
    BlackListComponent.prototype.onSearch = function (query) {
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
    BlackListComponent.prototype.ngOnInit = function () {
        this.getBlackList();
    };
    BlackListComponent.prototype.getBlackList = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.blackListService
                .get(this.commonService.GetUserNo(), this.commonService.GetUserUserType()).subscribe(function (requests) {
                if (requests) {
                    _this.source = requests;
                    _this.spinnerService.hide();
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
    BlackListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.width = '70%';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };
        var dialogRef = this.dialog.open(_black_list_dialoge_component__WEBPACK_IMPORTED_MODULE_4__["BlackListDialogeComponent"], dialogConfig);
        dialogRef.componentInstance.actionType = this.actionType;
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add) {
            dialogRef.componentInstance.blackList = new _core__WEBPACK_IMPORTED_MODULE_2__["BlackList"]();
            dialogRef.componentInstance.blackList.RequesterID = this.commonService.GetUserNo();
            dialogRef.componentInstance.blackList.CreateBy = this.commonService.GetUserNo();
            dialogRef.componentInstance.blackList.BLID = 0;
            dialogRef.componentInstance.blackList.StatusId = 7;
        }
        else {
            dialogRef.componentInstance.blackList = this.blackList;
            dialogRef.componentInstance.blackList.UpdatedBy = this.commonService.GetUserNo();
        }
        dialogRef.afterClosed().subscribe(function () {
            _this.getBlackList();
        });
    };
    BlackListComponent.prototype.onEdit = function (event) {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit;
        this.blackList = event.data;
        this.openDialog();
    };
    BlackListComponent.prototype.onAdd = function () {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add;
        this.openDialog();
    };
    BlackListComponent.prototype.onDelete = function (event) {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Delete;
        this.blackList = event.data;
        if (this.blackList.StatusId == 6 && !(this.commonService.GetUserUserType() == 'SECURITYHEAD')) {
            this.commonService.showFailureToast(this.translate.instant("BlackList.Can’tDelete"));
            return;
        }
        this.displaydl = true;
    };
    BlackListComponent.prototype.delete = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.blackListService
                .delete(this.blackList.BLID).subscribe(function (requests) {
                if (requests)
                    _this.commonService.showSuccessToast(requests.Message);
                _this.displaydl = false;
                _this.getBlackList();
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
    BlackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-black_list-page',
            template: __webpack_require__(/*! ./black_list.component.html */ "./src/app/modules/blacklist/black_list.component.html"),
            styles: [__webpack_require__(/*! ./black_list.component.scss */ "./src/app/modules/blacklist/black_list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["BlackListService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__["Ng4LoadingSpinnerService"]])
    ], BlackListComponent);
    return BlackListComponent;
}());



/***/ }),

/***/ "./src/app/modules/blacklist/black_list.dialoge.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/blacklist/black_list.dialoge.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\">\n<h2 mat-dialog-title>{{modalTitle}}</h2>\n\n<mat-dialog-content [formGroup]=\"form\">\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        <div *ngIf=\"actionType==1\" class=\"row\" style=\"margin: 10px;\">\n          <div class=\"col-sm-5\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-4\" for=\"ID\">{{'Visit.ID' | translate}}</label>\n              <input class=\"form-control col-sm-8\" type=\"text\" name=\"ID\" placeholder=\"{{'Visit.ID' | translate}}\"  \n               [ngModelOptions]=\"{standalone: true}\" \n             (keyup.enter)=\"SearchData()\"  [(ngModel)]=\"searchNationalID\" />\n            </div>\n    \n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2\" for=\"ID\">{{'Visit.Name' | translate}}</label>\n       <!--      <ng2-completer class=\"col-sm-10\" [inputClass]=\"'form-control form-control-inline'\" \n         [ngModelOptions]=\"{standalone: true}\"\n            [clearSelected]=\"true\" (selected)=\"onSelected($event)\" [selectOnClick]=\"true\"\n            (ngModelChange)=\"SearchVistorByName($event)\"\n            [(datasource)]=\"datasource\"\n            [minSearchLength]=\"3\"\n            [(ngModel)]=\"searchName\"></ng2-completer> -->\n            <p-autoComplete [(ngModel)]=\"searchName\" (onSelect)=\"SearchData()\" [ngModelOptions]=\"{standalone: true}\"\n            [inputStyleClass]=\"'form-control form-control-inline'\"   class=\"col-sm-10\" [suggestions]=\"datasource\" (completeMethod)=\"SearchVistorByName($event)\" \n            field=\"Name\" [size]=\"30\"\n          placeholder=\"{{'Visit.Name' | translate}}\" [minLength]=\"3\"></p-autoComplete>\n          </div>\n          </div>\n          <div class=\"col-sm-2\">\n              <button type=\"button\" id=\"Search\" (click)=\"SearchData()\"\n              class=\"submit-btn2 search-btn\">{{'Common.Search' | translate}}</button>\n              <br>\n            </div>\n    </div>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div style=\"padding: 2px;background-color:rgb(247, 247, 247);\" >\n            \n                  <!-- VisitTypeID-->\n      <fieldset class=\"form-group\">\n        <div class=\"row ui-g-12\">\n          <div class=\"ui-g-6\">\n            <label for=\"group1\">{{'BlackList.NoteType' | translate}}</label>\n          </div>\n        <div class=\"ui-g-6\">\n          <p-radioButton name=\"Ngroup1\"  value=\"1\" label=\"{{'BlackList.NoteTypeOrang' | translate}}\"   formControlName=\"NoteType\"  inputId=\"optN1\"></p-radioButton>\n          <p-radioButton name=\"Ngroup1\"   value=\"2\" label=\"{{'BlackList.NoteTypeRed' | translate}}\"   formControlName=\"NoteType\"  inputId=\"optN2\"></p-radioButton>\n        </div>\n      </div>\n      </fieldset>\n                  <div class=\"form-group\">\n                    <label for=\"Name\">{{'Visit.Name' | translate}}</label>\n                    <input type=\"text\"  class=\"form-control\" formControlName=\"Name\" [ngClass]=\"{'is-invalid':form.get('Name').touched && form.get('Name').invalid}\" required />\n                    <div *ngIf=\"form.get('Name').touched && form.get('Name').invalid\"  class=\"invalid-feedback\">\n                      <div  *ngIf=\"form.get('Name').errors.required\"> {{'Visit.Name' | translate}} {{'Common.isrequired' | translate}}</div>\n                    </div>\n                  </div>\n\n      <!-- VisitTypeID-->\n      <fieldset class=\"form-group\">\n        <div class=\"row ui-g-12\">\n          <div class=\"ui-g-6\">\n            <label for=\"group1\">{{'Visit.IDType' | translate}}</label>\n          </div>\n        <div class=\"ui-g-6\">\n          <p-radioButton name=\"group1\"  value=\"1\" label=\"{{'Visit.IDTypeNationalId' | translate}}\"   formControlName=\"IDType\"  inputId=\"opt1\"></p-radioButton>\n          <p-radioButton name=\"group1\"   value=\"2\" label=\"{{'Visit.IDTypepassportOrIqama' | translate}}\"   formControlName=\"IDType\"  inputId=\"opt2\"></p-radioButton>\n        </div>\n      </div>\n      </fieldset>\n      <!-- ID -->\n      <div class=\"form-group\">\n        <label for=\"ID\">{{'Visit.ID' | translate}}</label>\n        <input type=\"text\" name=\"ID\"  class=\"form-control\" formControlName=\"ID\" [ngClass]=\"{'is-invalid':form.get('ID').touched && form.get('ID').invalid}\" required />\n        <div *ngIf=\"form.get('ID').touched && form.get('ID').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('ID').errors.required\"> {{'Visit.ID' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"MobileNo\">{{'Visit.MobileNo' | translate}}</label>\n        <input type=\"text\" name=\"MobileNo\"  class=\"form-control\" formControlName=\"MobileNo\" [ngClass]=\"{'is-invalid':form.get('MobileNo').touched && form.get('MobileNo').invalid}\" required />\n        <div *ngIf=\"form.get('MobileNo').touched && form.get('MobileNo').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('MobileNo').errors.required\"> {{'Visit.MobileNo' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n      </div>\n      <!-- StatusId -->\n      <div class=\"form-group\">\n        <label for=\"StatusId\">{{'Visit.StatusId' | translate}}</label>\n      <ng-select [items]=\"status\" \n      [virtualScroll]=\"true\" \n      bindLabel='{{statustextLbl}}'\n      [disabled]=\"isdisabledStatus\" [searchable]=\"!isdisabledStatus\" [clearable]=\"!isdisabledStatus\"\n      bindValue=\"StatusID\"\n      placeholder=\"{{'Visit.StatusId' | translate}}\"\n      formControlName=\"StatusId\">\n</ng-select>\n      </div>\n<!-- NationalityID -->\n                  <div class=\"form-group\">\n                    <label for=\"NationalityID\">{{'Visit.NationalityID' | translate}}</label>\n                  <ng-select [items]=\"nationalities\"\n                  [virtualScroll]=\"true\"\n                  formControlName=\"NationalityID\"\n                  bindLabel='{{nationalitiytextLbl}}'\n                  bindValue=\"ID\"\n                  placeholder=\"{{'Visit.NationalityID' | translate}}\"\n               >\n        </ng-select>\n                  </div>\n\n\n\n                  <div class=\"form-group\">\n                      <label for=\"Description\">{{'BlackList.Description' | translate}}</label>\n                      <textarea class=\"form-control\" name=\"Description\"\n                      formControlName=\"Description\"\n                        rows=\"4\" required\n                        placeholder=\"{{'BlackList.Description' | translate}}\">\n                      </textarea>\n                      <div *ngIf=\"form.get('Description').touched && form.get('Description').invalid\"  class=\"invalid-feedback\">\n                        <div  *ngIf=\"form.get('Description').errors.required\"> {{'BlackList.Description' | translate}} {{'Common.isrequired' | translate}}</div>\n                      </div>\n                  </div>\n\n                 \n               \n              </div>\n            </div>\n          </div>\n        </div>\n\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <div class=\"form-group div_btn\">\n    <button class=\"mat-raised-button btn btn-primary cust-btn-green\" mat-button [disabled]=\"!form.valid\" type=\"submit\"> {{'Common.Save' | translate}}</button>\n    <button mat-button class=\"mat-raised-button btn btn-danger cust-btn-red\" type=\"button\" (click)=\"dialogRef.close()\"> {{'Common.Cancle' | translate}}</button>\n  </div>\n  \n</mat-dialog-actions>\n\n</form>"

/***/ }),

/***/ "./src/app/modules/blacklist/black_list.dialoge.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/blacklist/black_list.dialoge.component.ts ***!
  \*******************************************************************/
/*! exports provided: BlackListDialogeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackListDialogeComponent", function() { return BlackListDialogeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlackListDialogeComponent = /** @class */ (function () {
    function BlackListDialogeComponent(blackListService, lookUpsService, commonService, spinnerService, dialogRef) {
        this.blackListService = blackListService;
        this.lookUpsService = lookUpsService;
        this.commonService = commonService;
        this.spinnerService = spinnerService;
        this.dialogRef = dialogRef;
        this.translate = this.commonService.returnTranslate();
        this.errors = {};
        this.status = [];
        this.statustextLbl = this.translate.currentLang == "ar" ? "StatusTypeAR" : "StatusTypeEN";
        this.isSubmitting = false;
        this.isdisabledStatus = true;
        this.modalTitle = "";
        this.nationalities = [];
        this.nationalitiytextLbl = this.translate.currentLang == "ar" ? "NamAR" : "NameEn";
        this.btnmodalTitle = "";
        // use the FormBuilder to create a form group
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            BLID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            IDType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            StatusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](7, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            MobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            NationalityID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            NoteType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    BlackListDialogeComponent.prototype.ngOnInit = function () {
        this.getStatus();
        this.getNationality();
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_4__["ActionType"].Edit && this.blackList) {
            this.modalTitle = this.translate.instant("BlackList.EditModalTitle");
            this.form.controls['StatusId'].enable();
            this.form.patchValue(this.blackList);
        }
        else {
            this.modalTitle = this.translate.instant("BlackList.AddModalTitle");
            this.form.controls['StatusId'].disable();
        }
    };
    BlackListDialogeComponent.prototype.SearchVistorByName = function (value) {
        var _this = this;
        if (value.query && value.query.length > 2) {
            try {
                this.spinnerService.show();
                this.lookUpsService
                    .SearchVistorByName(value.query).subscribe(function (requests) {
                    if (requests) {
                        _this.datasource = requests;
                        _this.spinnerService.hide();
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
        }
    };
    BlackListDialogeComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    BlackListDialogeComponent.prototype.SearchData = function () {
        this.getVisitorDataByNationalID();
    };
    BlackListDialogeComponent.prototype.getVisitorDataByNationalID = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            var sename = this.searchName ? this.searchName.Name : null;
            this.lookUpsService
                .getByNationalId(this.searchNationalID, sename).subscribe(function (requests) {
                if (requests) {
                    _this.blackList = requests;
                    _this.blackList.NoteType = 1;
                    _this.form.patchValue(_this.blackList);
                    _this.spinnerService.hide();
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
    BlackListDialogeComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    BlackListDialogeComponent.prototype.getSelectedstutus = function () {
        this.blackList.StatusId = Number(this.blackList.StatusId);
    };
    BlackListDialogeComponent.prototype.getStatus = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.lookUpsService
                .getStatusLookup('b').subscribe(function (requests) {
                if (requests) {
                    _this.status = requests;
                    //if(this.actionType==ActionType.Add){  this.blackList.StatusId=3;}
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
    BlackListDialogeComponent.prototype.updateArticle = function () {
        // Object.assign(this.article, values);
    };
    BlackListDialogeComponent.prototype.onSubmit = function () {
        Object.assign(this.blackList, this.form.value);
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_4__["ActionType"].Add) {
            this.blackList.RequesterID = this.commonService.GetUserNo();
            this.blackList.CreateBy = this.commonService.GetUserNo();
            this.blackList.BLID = 0;
            this.blackList.StatusId = 7;
            this.Add();
        }
        else if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_4__["ActionType"].Edit) {
            this.Edit();
        }
    };
    BlackListDialogeComponent.prototype.Add = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.blackListService
                .add(this.blackList).subscribe(function (requests) {
                if (requests)
                    _this.commonService.showSuccessToast(requests.Message);
                _this.spinnerService.hide();
                _this.dialogRef.close();
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
    BlackListDialogeComponent.prototype.Edit = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.blackListService
                .edit(this.blackList).subscribe(function (requests) {
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
    BlackListDialogeComponent.prototype.getNationality = function () {
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
    BlackListDialogeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-black_list-dialoge-page',
            template: __webpack_require__(/*! ./black_list.dialoge.component.html */ "./src/app/modules/blacklist/black_list.dialoge.component.html")
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_4__["BlackListService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["LookUpsService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], BlackListDialogeComponent);
    return BlackListDialogeComponent;
}());



/***/ }),

/***/ "./src/app/modules/blacklist/black_list.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/blacklist/black_list.module.ts ***!
  \********************************************************/
/*! exports provided: BlackListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackListModule", function() { return BlackListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _black_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./black_list-routing.module */ "./src/app/modules/blacklist/black_list-routing.module.ts");
/* harmony import */ var _black_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./black_list.component */ "./src/app/modules/blacklist/black_list.component.ts");
/* harmony import */ var _black_list_dialoge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./black_list.dialoge.component */ "./src/app/modules/blacklist/black_list.dialoge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BlackListModule = /** @class */ (function () {
    function BlackListModule() {
    }
    BlackListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerModule"].forRoot(), _black_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["BlackListRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            declarations: [_black_list_component__WEBPACK_IMPORTED_MODULE_5__["BlackListComponent"], _black_list_dialoge_component__WEBPACK_IMPORTED_MODULE_6__["BlackListDialogeComponent"]],
            providers: [],
            entryComponents: [_black_list_dialoge_component__WEBPACK_IMPORTED_MODULE_6__["BlackListDialogeComponent"]]
        })
    ], BlackListModule);
    return BlackListModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-blacklist-black_list-module.js.map