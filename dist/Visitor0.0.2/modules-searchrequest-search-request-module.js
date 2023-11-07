(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-searchrequest-search-request-module"],{

/***/ "./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogbtn{\r\n    width: 80px;\r\n    font-size: bold;\r\n    font-weight: 600;\r\n    height: 31px;\r\n}\r\n:host /deep/ tr.solved {\r\n    color: rgba(86, 241, 86, 0.5);\r\n    }\r\n:host /deep/ tr.aborted {\r\n    color: rgba(243, 69, 69, 0.5);\r\n    }    "

/***/ }),

/***/ "./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner  [threshold]=\"1000\" [timeout]=\"300000\" [template]=\"template\"  [zIndex]=\"9999\"></ng4-loading-spinner>\n\n<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-11 offset-md-1 col-xs-12\">\n\n<form name=\"form\">\n\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n         \n                <h2 style=\"color: #41ad4f; text-align: center;\">{{VisitTitlePage}}</h2>\n           \n                <!-- VisitTypeID-->\n                <fieldset *ngIf='isSecurity' class=\"form-group\">\n                  <div class=\"row ui-g-12\">\n                    <div class=\"ui-g-3\">\n                      <label for=\"group1\">{{'Visit.VisitTypeID' | translate}}</label>\n                    </div>\n                  <div class=\"ui-g-9\">\n                    <p-radioButton name=\"group1\"  [ngModelOptions]=\"{standalone: true}\" value=\"1\" label=\"{{'Visit.VisitTypeVisit' | translate}}\"   [(ngModel)]=\"visit.VisitTypeID\"  inputId=\"opt1\"></p-radioButton>\n                    <p-radioButton name=\"group1\"  [ngModelOptions]=\"{standalone: true}\" value=\"2\" label=\"{{'Visit.VisitTypWalkinVisitor' | translate}}\"   [(ngModel)]=\"visit.VisitTypeID\"  inputId=\"opt2\"></p-radioButton>\n                  </div>\n                </div>\n                </fieldset>\n               <!-- Visit Request-->\n   <fieldset *ngIf='isSecretary' class=\"form-group\">\n                <div class=\"row ui-g-12\">\n                  <div class=\"ui-g-3\">\n                    <label for=\"group1\">{{'Visit.VisitRequest' | translate}}</label>\n                  </div>\n                <div class=\"ui-g-9\">\n                  <p-radioButton name=\"group1\"  [ngModelOptions]=\"{standalone: true}\" value=\"1\" label=\"{{'Visit.VisitRequestEmp' | translate}}\"   [(ngModel)]=\"visit.RequesterType\"  inputId=\"opt1\"></p-radioButton>\n                  <p-radioButton name=\"group1\"  [ngModelOptions]=\"{standalone: true}\" value=\"2\" label=\"{{'Visit.VisitRequestAnother' | translate}}\"   [(ngModel)]=\"visit.RequesterType\"  inputId=\"opt2\"></p-radioButton>\n                </div>\n              </div>\n              </fieldset>  \n\n               <div class=\"ui-g-12 ui-fluid\">\n                <label >{{'Visit.VisitDate' | translate}}</label>\n               \n                <p-calendar required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitDate\"></p-calendar>\n                </div>\n             \n                <div class=\"ui-g-12\">\n                <div class=\"ui-g-12 ui-md-6\">\n                  <label >{{'Visit.StartTime' | translate}}</label>\n                  <input class='inputTime' *ngIf=\"currentLang=='en'\" value=\"{{visit.StartTime}}\" locale=\"en\" theme=\"material-green\" type=\"time\" atp-time-picker  required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visit.StartTime\"/>\n               \n                  <input type=\"time\" atp-time-picker class='inputTime' *ngIf=\"currentLang=='ar'\"  value=\"{{visit.StartTime}}\" locale=\"ar\" theme=\"material-green\"   required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visit.StartTime\"/>\n\n<!--                   <p-calendar [showTime]=\"true\"   required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitstartTime\" [timeOnly]=\"true\"></p-calendar>\n -->              </div>\n              <div class=\"ui-g-12 ui-md-6\">\n                <label >{{'Visit.EndTime' | translate}}</label>\n                <input class='inputTime' *ngIf=\"currentLang=='ar'\"  value=\"{{visit.EndTime}}\"  locale=\"ar\" type=\"time\" theme=\"material-green\" atp-time-picker required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visit.EndTime\"/>\n                <input  class='inputTime' *ngIf=\"currentLang=='en'\" value=\"{{visit.EndTime}}\"  locale=\"en\" type=\"time\" theme=\"material-green\" atp-time-picker required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visit.EndTime\"/>\n\n<!--                 <p-calendar required  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitendTime\" [timeOnly]=\"true\"></p-calendar>\n -->            </div>\n          </div>\n\n          <div *ngIf='visit.VisitTypeID==2||visit.RequesterType==2' class=\"form-group\">\n            <label for=\"RequestorID\">{{'Visit.RequestorID' | translate}}</label>\n            <ng-select [items]=\"employees\"\n            [virtualScroll]=\"true\" \n            [ngModelOptions]=\"{standalone: true}\"\n            bindLabel='{{emptextLbl}}'\n            (change)='onChangeEmployee($event)'\n            bindValue=\"Employee_number\"\n            placeholder=\"{{'Visit.RequestorID' | translate}}\"\n            [(ngModel)]=\"visit.RequestorID\">\n         <!--    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n              <b> {{item.office_extn}} - {{item.Employee_name_AR}} </b>\n          </ng-template> -->\n             </ng-select>\n  \n\n\n\n   <!--         <ng-select [items]=\"cities3\"\n           bindLabel=\"name\"\n           bindValue=\"name\"\n           placeholder=\"Select city\"\n           [(ngModel)]=\"selectedCityName\">\n    <ng-template ng-header-tmp>\n      Custom header\n    </ng-template>\n    <ng-template ng-label-tmp let-item=\"item\">\n        <img height=\"15\" width=\"15\" [src]=\"item.avatar\"/>\n        <b>{{item.name}}</b> is cool\n    </ng-template>\n    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n        <img height=\"15\" width=\"15\" [src]=\"item.avatar\"/>\n        <b>{{item.name}}</b>\n    </ng-template>\n    <ng-template ng-footer-tmp>\n      Custom footer\n    </ng-template>\n</ng-select>\n -->\n\n          </div>\n\n          <!-- <div class=\"form-group\">\n            <label for=\"MeetingRoom\">{{'Visit.MeetingRoom' | translate}}</label>\n          \n          <ng-select [items]=\"metingrooms\"\n          [virtualScroll]=\"true\"\n          (change)='onChangeRoom($event)'\n          [ngModelOptions]=\"{standalone: true}\"\n          bindLabel='{{metingtextLbl}}'\n          bindValue=\"RoomID\"\n          required\n          placeholder=\"{{'Visit.MeetingRoom' | translate}}\"\n          [(ngModel)]=\"visit.MeetingRoom\">\n</ng-select>\n          </div> -->\n\n          <div *ngIf='IsEdit' class=\"form-group\">\n            <label for=\"StatusId\">{{'Visit.StatusId' | translate}}</label>\n          <ng-select [items]=\"status\" \n          [virtualScroll]=\"true\" \n          [(ngModel)]=\"visit.StatusId\"\n          [ngModelOptions]=\"{standalone: true}\"\n          bindLabel='{{statustextLbl}}'\n\n          [disabled]=\"isdisabledStatus\" [searchable]=\"!isdisabledStatus\" [clearable]=\"!isdisabledStatus\"\n          bindValue=\"StatusID\"\n          placeholder=\"{{'Visit.StatusId' | translate}}\"\n         >\n</ng-select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"NumberofVisitors\">{{'SearchRequest.NumberofVisitors' | translate}}</label>\n          <!--   <p-dropdown placeholder=\"{{'Visit.MeetingRoom' | translate}}\" [options]=\"metingrooms| selectItemPipe:'name':'ID'\" [style]=\"{'width':'100%'}\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visit.MeetingRoom\"  filter=\"true\">\n -->\n           <!--  <p-dropdown placeholder=\"{{'Visit.MeetingRoom' | translate}}\" [options]=\"metingrooms\" [style]=\"{'width':'100%'}\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visit.MeetingRoom\"  filter=\"true\">\n          \n          </p-dropdown> -->\n          <ng-select [items]=\"NumberofVisitors\"\n          [virtualScroll]=\"true\"[ngModelOptions]=\"{standalone: true}\"\n          bindLabel='{{numbertextlbl}}'\n          bindValue=\"Id\"\n          required\n          placeholder=\"{{'SearchRequest.NumberofVisitors' | translate}}\"\n          [(ngModel)]=\"visit.NumberofVisitors\">\n</ng-select>\n          </div>\n          \n    <!-- Description -->\n    <div class=\"ui-g-12\">\n                <fieldset class=\"form-group\">\n                  <label for=\"Description\">{{'Visit.Description' | translate}}</label>\n                  <textarea class=\"form-control\" name=\"Description\"\n                  [ngModelOptions]=\"{standalone: true}\"   [(ngModel)]=\"visit.Description\" \n                    rows=\"4\" required\n                    placeholder=\"{{'Visit.Description' | translate}}\">\n                  </textarea>\n                </fieldset>\n              </div>\n                  <!-- PrivateParking -->\n                <div  *ngIf='isParking' class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n                  <div class=\"ui-g-12\">\n                     <p-checkbox  [ngModelOptions]=\"{standalone: true}\" label=\"{{'Visit.PrivateParking' | translate}}\" [(ngModel)]=\"visit.PrivateParking\" binary=\"true\"></p-checkbox>\n                   </div>\n                  </div>\n                           <!--SupervisorComments  -->\n            <!--       <div *ngIf='isShowComment' class=\"ui-g-12\">\n                  <fieldset class=\"form-group\">\n                    <label for=\"SupervisorComments\">{{'Visit.SupervisorComments' | translate}}</label>\n                    <textarea disabled=\"true\" class=\"form-control\" name=\"SupervisorComments\"\n                    [ngModelOptions]=\"{standalone: true}\"   [(ngModel)]=\"visit.SupervisorComments\" \n                      rows=\"4\"\n                      placeholder=\"{{'Visit.SupervisorComments' | translate}}\">\n                    </textarea>\n                  </fieldset>\n                </div> -->\n                <!-- SecurityComments -->\n                <div  *ngIf='isShowComment' class=\"ui-g-12\">\n                  <fieldset class=\"form-group\">\n                    <label for=\"SecurityComments\">{{'Visit.SecurityComments' | translate}}</label>\n                    <textarea disabled=\"true\" class=\"form-control\" name=\"SecurityComments\"\n                    [ngModelOptions]=\"{standalone: true}\"    [(ngModel)]=\"visit.SecurityComments\" \n                      rows=\"4\"\n                      placeholder=\"{{'Visit.SecurityComments' | translate}}\">\n                    </textarea>\n                  </fieldset>\n                </div>\n\n\n  <div>\n    <ng2-smart-table [settings]=\"settings\"  (delete)='onDelete($event)' (create)='onAdd()' [source]=\"source\"  (edit)=\"onEdit($event)\">\n    </ng2-smart-table>\n  </div>\n\n\n\n                  <!-- \n\n                <fieldset class=\"form-group\">\n                  <label for=\"firstName\">{{'DASHBOARD.toDate' | translate}}</label>\n                  <input class=\"form-control form-control-lg\"\n                  [(ngModel)]=\"CreationDatechart\"  [ngModelOptions]=\"{standalone: true}\"\n                    type=\"text\"\n                    placeholder=\"{{'DASHBOARD.toDate' | translate}}\" />\n                </fieldset> -->\n    \n               <!--  <fieldset class=\"form-group\">\n                  <input class=\"form-control\"\n                    formControlName=\"description\"\n                    type=\"text\"\n                    placeholder=\"What's this article about?\" />\n                </fieldset>\n    \n                <fieldset class=\"form-group\">\n                  <textarea class=\"form-control\"\n                    formControlName=\"body\"\n                    rows=\"8\"\n                    placeholder=\"Write your article (in markdown)\">\n                  </textarea>\n                </fieldset>\n\n\n                  <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input type=\"text\"  class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{'is-invalid':form.get('firstName').touched && form.get('firstName').invalid}\" required />\n                    <div *ngIf=\"form.get('firstName').touched && form.get('firstName').invalid\"  class=\"invalid-feedback\">\n                      <div  *ngIf=\"form.get('firstName').errors.required\">First Name is required</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{'is-invalid':form.get('lastName').touched && form.get('lastName').invalid}\" required />\n               \n                      <div *ngIf=\"form.get('lastName').touched && form.get('lastName').invalid\"  class=\"invalid-feedback\">\n                        <div *ngIf=\"form.get('lastName').errors.required\">Last Name is required</div>\n       \n                      </div>\n                   \n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':form.get('email').touched && form.get('email').invalid}\"   />\n                    <div *ngIf=\"form.get('email').touched && form.get('email').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('email').errors.required\">Email Name is required</div>\n                      <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email Address</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\"  formControlName=\"password\" [ngClass]=\"{'is-invalid':form.get('password').touched && form.get('password').invalid}\" />\n                    <div *ngIf=\"form.get('password').touched && form.get('password').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('password').errors.required\">Password is required</div>\n                      <div *ngIf=\"form.get('password').errors.minlength\">Password  must be a letaset 6 charector</div>\n                    </div>\n                   \n                  </div>\n                 \n               \n          \n -->\n\n<div class=\"row div_btn\" >\n  <div class=\"col-md-4 offset-md-1\" >\n        <button class=\"btn btn-lg pull-xs-right btn-primary cust-btn-green\" type=\"button\" (click)=\"submitForm()\">\n          {{'Common.Save' | translate}}\n        </button>\n      </div>\n      <div class=\"col-md-4 offset-md-1\" >\n        <button class=\"btn  btn-lg pull-xs-right btn-primary cust-btn-red\" type=\"button\" (click)=\"navtovisite()\">\n          {{'Common.Cancle' | translate}}\n        </button>\n      </div>\n      </div>\n</form>\n\n</div>\n</div>\n</div>\n</div>\n\n\n<div>\n  <p-dialog header=\"{{'Visit.modalDeleteTitle'| translate}}\" [(visible)]=\"displaydl\" [modal]=\"true\" (onHide)='closedialoge()' [responsive]=\"true\" [width]=\"450\" [minWidth]=\"300\" [minY]=\"70\" \n          [maximizable]=\"false\" [baseZIndex]=\"10000\">\n        <span> {{'Visit.modalDeleteMessage'| translate}} </span>\n        \n  \n          <p-footer>\n            <button  class=\"dialogbtn\" type=\"button\" pButton (click)=\"delete()\" > {{'Common.Save' | translate}}</button>\n            <button  class=\"dialogbtn\" type=\"button\" pButton   (click)=\"displaydl=false\">  {{'Common.Cancle' | translate}}</button>\n  \n             \n          </p-footer>\n  </p-dialog>\n  </div> \n\n\n  <div>\n    <p-dialog header=\"{{'Visit.modalSlectRoom'| translate}}\" [(visible)]=\"displaydlRoom\" [modal]=\"true\"  [responsive]=\"true\" [width]=\"450\" [minWidth]=\"300\" [minY]=\"70\" \n            [maximizable]=\"false\" [baseZIndex]=\"10000\">\n          <span> {{'Visit.modalCreateOuutlookMettingMessage'| translate}} </span>\n          \n    \n            <p-footer>\n              <button  class=\"dialogbtn\" type=\"button\" pButton (click)=\"displaydlRoom=false\" > {{'Common.Close' | translate}}</button>\n            </p-footer>\n    </p-dialog>\n    </div> \n\n\n"

/***/ }),

/***/ "./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSearchComponent", function() { return EditSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _visit_dialoge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visit.dialoge.component */ "./src/app/modules/searchrequest/EditSearchRequest/visit.dialoge.component.ts");
/* harmony import */ var ngx_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-smart-table */ "./node_modules/ngx-smart-table/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditSearchComponent = /** @class */ (function () {
    function EditSearchComponent(visitRegistrationService, lookUpsService, title, activatedRoute, commonService, router, atp, spinnerService, dialog) {
        this.visitRegistrationService = visitRegistrationService;
        this.lookUpsService = lookUpsService;
        this.title = title;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.router = router;
        this.atp = atp;
        this.spinnerService = spinnerService;
        this.dialog = dialog;
        this.visit = new _core__WEBPACK_IMPORTED_MODULE_2__["Visit"]();
        this.template = '<img  src="./assets/images/loading.gif" class="spinLoading"/>';
        this.modalTitle = "";
        this.translate = this.commonService.returnTranslate();
        this.metingtextLbl = this.translate.currentLang == "ar" ? "RoomAR" : "RoomEN";
        this.emptextLbl = this.translate.currentLang == "ar" ? "Employee_name_AR" : "Employee_name_EN";
        this.status = [];
        this.isSecurity = false;
        this.isSecretary = false;
        this.statustextLbl = this.translate.currentLang == "ar" ? "StatusTypeAR" : "StatusTypeEN";
        this.isParking = this.visitRegistrationService.IsShowParking();
        this.isShowComment = false;
        this.isdisabledStatus = true;
        this.displaydlRoom = false;
        this.errors = {};
        this.metingrooms = [];
        this.employees = [];
        this.NumberofVisitors = [];
        this.numbertextlbl = "value";
        this.currentLang = this.translate.currentLang;
        this.source = new ngx_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
        this.displaydl = false;
        this.isSubmitting = false;
        this.IsEdit = false;
        this.VisitTitlePage = "Add Visit";
        this.settings = {
            //   hideSubHeader: true,
            noDataMessage: this.translate.instant('Visit.NoVisitor'),
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
                edit: true,
                editable: false,
                columnTitle: '',
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
    }
    EditSearchComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
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
    };
    EditSearchComponent.prototype.ngOnInit = function () {
        this.NumberofVisitors = [
            { "Id": 1, "value": "1" },
            { "Id": 2, "value": "2" },
            { "Id": 3, "value": "3" },
            { "Id": 4, "value": "4" },
            { "Id": 5, "value": "5" },
            { "Id": 6, "value": "6" },
            { "Id": 7, "value": "7" },
            { "Id": 8, "value": "8" },
            { "Id": 9, "value": "9" },
            { "Id": 10, "value": "10" },
            { "Id": 11, "value": "11" },
            { "Id": 12, "value": "12" },
            { "Id": 13, "value": "13" },
            { "Id": 14, "value": "14" },
            { "Id": 15, "value": "15" }
        ];
        this.isSecurity = this.commonService.GetUserIsSecurity();
        this.isSecretary = this.commonService.GetUserUserType() == "Secretary";
        this.getRooms();
        this.getStatus();
        this.getEmpData();
        this.visitId = this.activatedRoute.snapshot.paramMap.get("visitId");
        if (this.visitId) {
            this.actionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit;
            this.IsEdit = true;
            this.isShowComment = true;
            this.getVisitById(this.visitId);
            this.VisitTitlePage = this.translate.instant('Visit.EditpageTitle');
        }
        else {
            this.actionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add;
            this.visit.VisitTypeID = 1;
            this.visit.RequesterType = 1;
            this.visit.MeetingRoom = 35;
            /*   this.visitstartTime=new Date();
              this.visitendTime= new Date(); */
            this.visit.StartTime = this.commonService.returnTimeStringOnly(new Date());
            this.visit.EndTime = this.commonService.returnTimeStringOnly(new Date());
            this.visitDate = new Date();
            this.IsEdit = false;
            this.VisitTitlePage = this.translate.instant('Visit.AddpageTitle');
        }
        this.title.setTitle(this.VisitTitlePage);
        this.source.load(this.visit.visitors);
    };
    EditSearchComponent.prototype.onEdit = function (event) {
        this.dialogeactionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit;
        this.openDialog(event.data);
    };
    EditSearchComponent.prototype.onAdd = function () {
        this.dialogeactionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add;
        this.openDialog(null);
    };
    EditSearchComponent.prototype.onDelete = function (event) {
        this.displaydl = true;
        this.dialogeactionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Delete;
        this.visitor = event.data;
    };
    /*   onblackList(event){
        this.dialogeactionType=ActionType.BlackList;
        this.openDialog(event.data.VisitorID);
      } */
    EditSearchComponent.prototype.closedialoge = function () {
        // this.getVistits();
    };
    EditSearchComponent.prototype.updateArticle = function (values) {
        Object.assign(this.visit, values);
    };
    EditSearchComponent.prototype.openDialog = function (visitordata) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.width = '70%';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title: 'Angular For Beginners'
        };
        var dialogRef = this.dialog.open(_visit_dialoge_component__WEBPACK_IMPORTED_MODULE_4__["VisitDialogeComponent"], dialogConfig);
        dialogRef.componentInstance.actionType = this.dialogeactionType;
        if (this.visit && (this.visit.visitors == undefined || this.visit.visitors == null)) {
            this.visit.visitors = [];
        }
        if (this.dialogeactionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add) {
            dialogRef.componentInstance.visitor = new _core__WEBPACK_IMPORTED_MODULE_2__["visitor"]();
        }
        else {
            if (visitordata.VisitorID) {
                dialogRef.componentInstance.visitor = this.visit.visitors.find(function (z) { return z.VisitorID == visitordata.VisitorID; });
            }
            else {
                dialogRef.componentInstance.visitor = this.visit.visitors.find(function (z) { return z.ID == visitordata.ID; });
            }
        }
        dialogRef.componentInstance.visitor.VisitID = this.visit.VisitID;
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                if (_this.dialogeactionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add) {
                    data.VisitorID = 0;
                    data.VisitID = _this.visit.VisitID;
                    _this.visit.visitors.push(data);
                    _this.source.load(_this.visit.visitors);
                }
                else if (_this.dialogeactionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit) {
                    var index = _this.visit.visitors.findIndex(function (e) { return e.VisitorID === data.VisitorID; });
                    _this.visit.visitors[index] = data;
                    _this.source.load(_this.visit.visitors);
                }
            }
        });
    };
    EditSearchComponent.prototype.navtovisite = function () {
        this.router.navigate(['/searchRequest']);
    };
    EditSearchComponent.prototype.checkValidData = function () {
        if (!this.visit.VisitTypeID) {
            this.commonService.showFailureToast(this.translate.instant("Visit.RequiredVisitTypeID"));
            return false;
        }
        if (this.visit.RequesterType == 2 && !this.visit.RequestorID) {
            this.commonService.showFailureToast(this.translate.instant("Visit.RequiredRequestorID"));
            return false;
        }
        if (!this.visit.visitors || this.visit.visitors.length == 0) {
            this.commonService.showFailureToast(this.translate.instant("Visit.Addvisitors"));
            return false;
        }
        if (!this.visitDate) {
            this.commonService.showFailureToast(this.translate.instant("Visit.RequiredDate"));
            return false;
        }
        if (!this.visit.EndTime || !this.visit.StartTime) {
            this.commonService.showFailureToast(this.translate.instant("Visit.RequiredTime"));
            return false;
        }
        if (!this.visit.Description) {
            this.commonService.showFailureToast(this.translate.instant("Visit.RequiredDescription"));
            return false;
        }
        return true;
        ;
    };
    EditSearchComponent.prototype.submitForm = function () {
        if (!this.checkValidData()) {
            return;
        }
        if (this.visitDate) {
            this.visit.VisitDate = this.commonService.returnDateStringOnly(this.visitDate);
        }
        /* if(this.visitstartTime){
          this.visit.StartTime=this.commonService.returnTimeStringOnly(this.visitstartTime);
        }
        if(this.visitendTime){
          this.visit.EndTime=this.commonService.returnTimeStringOnly(this.visitendTime);
        } */
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add) {
            if (this.visit.VisitTypeID == 1 && this.visit.RequesterType != 2) {
                this.visit.RequestorID = this.commonService.GetCurrenUser().Employee_number;
            }
            this.visit.CreateBy = this.commonService.GetUserNo();
            this.Add();
        }
        else {
            this.visit.UpdatedBy = this.commonService.GetUserNo();
            this.Edit();
        }
    };
    EditSearchComponent.prototype.getSelectedRoom = function () {
        if (this.visit.MeetingRoom)
            this.visit.MeetingRoom = Number(this.visit.MeetingRoom);
        else
            this.visit.MeetingRoom = null;
    };
    EditSearchComponent.prototype.getSelectedstutus = function () {
        this.visit.StatusId = Number(this.visit.StatusId);
    };
    EditSearchComponent.prototype.getNumberOfVisitor = function () {
        this.visit.NumberofVisitors = Number(this.visit.NumberofVisitors);
    };
    EditSearchComponent.prototype.Add = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.visitRegistrationService
                .add(this.visit).subscribe(function (requests) {
                if (requests) {
                    _this.spinnerService.hide();
                    _this.commonService.showSuccessToast(requests.Message);
                    _this.navtovisite();
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
    EditSearchComponent.prototype.deletefromlistbyNationalId = function () {
        var _this = this;
        var index = this.visit.visitors.findIndex(function (e) { return e.ID === _this.visitor.ID; });
        if (index > -1) {
            this.visit.visitors.splice(index, 1);
            this.displaydl = false;
            this.source.load(this.visit.visitors);
        }
    };
    EditSearchComponent.prototype.deletefromlistbyid = function () {
        var _this = this;
        var index = this.visit.visitors.findIndex(function (e) { return e.VisitorID === _this.visitor.VisitorID; });
        if (index > -1) {
            this.visit.visitors.splice(index, 1);
            this.displaydl = false;
            this.source.load(this.visit.visitors);
        }
    };
    EditSearchComponent.prototype.delete = function () {
        var _this = this;
        if (!this.visitor.VisitorID) {
            this.deletefromlistbyNationalId();
            return;
        }
        this.spinnerService.show();
        try {
            this.visitRegistrationService
                .deleteVisitor(this.visitor.VisitorID).subscribe(function (requests) {
                if (requests)
                    //  this.source = requests;
                    _this.displaydl = false;
                _this.deletefromlistbyid();
                //this.source.load(this.visit.visitors);
                _this.commonService.showSuccessToast(requests.Message);
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
    EditSearchComponent.prototype.Edit = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.visitRegistrationService
                .Edit(this.visit).subscribe(function (requests) {
                if (requests) {
                    _this.spinnerService.hide();
                    _this.commonService.showSuccessToast(requests.Message);
                    _this.navtovisite();
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
    EditSearchComponent.prototype.bindDateinRequest = function () {
        this.visitDate = this.commonService.returnDatefromDateString(this.visit.VisitDate);
        this.visitendTime = this.commonService.returnDatefromTimeString(this.visit.EndTime);
        this.visitstartTime = this.commonService.returnDatefromTimeString(this.visit.StartTime);
    };
    EditSearchComponent.prototype.getVisitById = function (visitId) {
        var _this = this;
        this.spinnerService.show();
        try {
            this.visitRegistrationService
                .getById(visitId).subscribe(function (requests) {
                if (requests && requests.length > 0) {
                    _this.visit = requests[0];
                    _this.source.load(_this.visit.visitors);
                    _this.bindDateinRequest();
                    _this.getSelectedRoom();
                    _this.getNumberOfVisitor();
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
    EditSearchComponent.prototype.getRooms = function () {
        var _this = this;
        // this.spinnerService.show();
        try {
            this.lookUpsService
                .getRoomLookup().subscribe(function (requests) {
                if (requests) {
                    _this.metingrooms = requests;
                    /*   for (let index = 0; index < requests.length; index++) {
                        const element = requests[index];
                        this.metingrooms.push({label:this.translate.currentLang=="ar"?element.NamAR:element.NameEn,value:element.ID})
                       
                      }  */
                }
            }, function (error) { _this.commonService.showFailureToast(error); _this.spinnerService.hide(); }, function () { return _this.getSelectedRoom(); }), function (err) {
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
    EditSearchComponent.prototype.onChangeRoom = function (val) {
        if (val.RoomID != 35) {
            this.displaydlRoom = true;
        }
    };
    EditSearchComponent.prototype.onChangeEmployee = function (val) {
        this.isParking = JSON.parse(val.Parking);
    };
    EditSearchComponent.prototype.getempname = function (value) {
        return value.map(function (item) {
            return {
                User_ID: item.User_ID,
                Employee_number: item.Employee_number,
                Employee_name_EN: item.office_extn + ' - ' + item.Employee_name_EN,
                Employee_name_AR: item.office_extn + ' - ' + item.Employee_name_AR,
                Department_EN: item.Department_EN,
                Department_AR: item.Department_AR,
            };
        });
    };
    EditSearchComponent.prototype.getEmpData = function () {
        var _this = this;
        //this.spinnerService.show();
        try {
            this.visitRegistrationService
                .getEmpLookup().subscribe(function (requests) {
                if (requests) {
                    _this.employees = _this.getempname(requests);
                }
            }, function (error) { _this.commonService.showFailureToast(error); _this.spinnerService.hide(); }, function () { return _this.getSelectedRoom(); }), function (err) {
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
    EditSearchComponent.prototype.getStatus = function () {
        var _this = this;
        // this.spinnerService.show();
        try {
            this.lookUpsService
                .getStatusLookup('v').subscribe(function (requests) {
                if (requests) {
                    _this.status = requests;
                    if (_this.actionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add) {
                        _this.visit.StatusId = 3;
                    }
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
    EditSearchComponent.prototype.opentimpkr = function () {
        var amazingTimePicker = this.atp.open({
            theme: 'material-blue',
        });
    };
    EditSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-search',
            template: __webpack_require__(/*! ./edit-search.component.html */ "./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.html"),
            styles: [__webpack_require__(/*! ./edit-search.component.css */ "./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.css")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["VisitRegistrationService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["LookUpsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], amazing_time_picker__WEBPACK_IMPORTED_MODULE_8__["AmazingTimePickerService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditSearchComponent);
    return EditSearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/searchrequest/EditSearchRequest/visit.dialoge.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/searchrequest/EditSearchRequest/visit.dialoge.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\">\n<h2 mat-dialog-title>{{modalTitle}}</h2>\n\n<mat-dialog-content [formGroup]=\"form\">\n\n<!-- <div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\"> -->\n\n        \n      \n          <fieldset *ngIf=\"actionType==1\" class=\"fieldset1\" style=\"margin: 6px;\">\n            <legend> {{'Common.Search' | translate}} </legend>\n            <div *ngIf=\"actionType==1\" class=\"row col-md-12\" >\n          \n            \n          <div class=\"col-md-5\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-4\" for=\"ID\">{{'Visit.ID' | translate}}</label>\n              <input class=\"form-control col-sm-8\" type=\"text\" name=\"ID\" placeholder=\"{{'Visit.ID' | translate}}\"  \n               [ngModelOptions]=\"{standalone: true}\" \n             (keyup.enter)=\"SearchData()\"  [(ngModel)]=\"searchNationalID\" />\n            </div>\n          </div>\n    <div class=\"col-md-5\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2\" for=\"ID\">{{'Visit.Name' | translate}}</label>\n      <p-autoComplete [(ngModel)]=\"searchName\" (onSelect)=\"SearchData()\" [ngModelOptions]=\"{standalone: true}\"\n      [inputStyleClass]=\"'form-control form-control-inline'\"   class=\"col-sm-10\" [suggestions]=\"datasource\" (completeMethod)=\"SearchVistorByName($event)\" \n      field=\"Name\" [size]=\"30\"\n    placeholder=\"{{'Visit.Name' | translate}}\" [minLength]=\"3\"></p-autoComplete>\n    </div>\n    </div>\n        \n          <div class=\"col-md-2\">\n              <button type=\"button\" id=\"Search\" (click)=\"SearchData()\"\n              class=\"submit-btn2 search-btn\">{{'Common.Search' | translate}}</button>\n              <br>\n            </div>\n          \n    </div>\n</fieldset> \n\n \n\n\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        <fieldset  class=\"fieldset1\">\n          <legend> {{modalTitle}} </legend>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div style=\"padding: 2px;background-color:rgb(247, 247, 247);\" >\n            \n             \n                  <div class=\"form-group\">\n                    <label for=\"Name\">{{'Visit.Name' | translate}}</label>\n                    <input type=\"text\"  class=\"form-control\" formControlName=\"Name\" [ngClass]=\"{'is-invalid':form.get('Name').touched && form.get('Name').invalid}\" required />\n                    <div *ngIf=\"form.get('Name').touched && form.get('Name').invalid\"  class=\"invalid-feedback\">\n                      <div  *ngIf=\"form.get('Name').errors.required\"> {{'Visit.Name' | translate}} {{'Common.isrequired' | translate}}</div>\n                    </div>\n                  </div>\n\n      <!-- VisitTypeID-->\n      <fieldset class=\"form-group\">\n        <div class=\"row ui-g-12\">\n          <div class=\"ui-g-4\">\n            <label for=\"group1\">{{'Visit.IDType' | translate}}</label>\n          </div>\n        <div class=\"ui-g-8\">\n          <p-radioButton name=\"group1\"  value=\"1\" label=\"{{'Visit.IDTypeNationalId' | translate}}\"   formControlName=\"IDType\"  inputId=\"opt1\"></p-radioButton>\n          <p-radioButton name=\"group1\"   value=\"2\" label=\"{{'Visit.IDTypepassportOrIqama' | translate}}\"   formControlName=\"IDType\"  inputId=\"opt2\"></p-radioButton>\n          <div *ngIf=\"form.get('IDType').touched && form.get('IDType').invalid\"  class=\"invalid-feedback\">\n            <div  *ngIf=\"form.get('IDType').errors.required\"> {{'Visit.IDType' | translate}} {{'Common.isrequired' | translate}}</div>\n          </div>\n        </div>\n      </div>\n      </fieldset>\n      <!-- ID -->\n      <div class=\"form-group\">\n        <label for=\"ID\">{{'Visit.ID' | translate}}</label>\n        <input type=\"text\" name=\"ID\"  class=\"form-control\" formControlName=\"ID\" [ngClass]=\"{'is-invalid':form.get('ID').touched && form.get('ID').invalid}\" required />\n        <div *ngIf=\"form.get('ID').touched && form.get('ID').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('ID').errors.required\"> {{'Visit.ID' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"MobileNo\">{{'Visit.MobileNo' | translate}}</label>\n        <input type=\"text\" name=\"MobileNo\"  class=\"form-control\" formControlName=\"MobileNo\" [ngClass]=\"{'is-invalid':form.get('MobileNo').touched && form.get('MobileNo').invalid}\" required />\n        <div *ngIf=\"form.get('MobileNo').touched && form.get('MobileNo').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('MobileNo').errors.required\"> {{'Visit.MobileNo' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n      </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"NationalityID\">{{'Visit.NationalityID' | translate}}</label>\n                <!--     <p-dropdown [options]=\"nationalities\" [style]=\"{'width':'100%'}\" formControlName=\"NationalityID\" placeholder=\"{{'Visit.NationalityID' | translate}}\"  filter=\"true\">\n                  \n                  </p-dropdown> -->\n                  <ng-select [items]=\"nationalities\"\n                  [virtualScroll]=\"true\" required\n                  [disabled]=\"isblackList\" [searchable]=\"!isblackList\" [clearable]=\"!isblackList\"\n                  formControlName=\"NationalityID\"\n                  bindLabel='{{nationalitiytextLbl}}'\n                  bindValue=\"ID\"\n                  placeholder=\"{{'Visit.NationalityID' | translate}}\"\n               >\n        </ng-select>\n        <div *ngIf=\"form.get('NationalityID').touched && form.get('NationalityID').invalid\"  class=\"invalid-feedback\">\n          <div  *ngIf=\"form.get('NationalityID').errors.required\"> {{'Visit.NationalityID' | translate}} {{'Common.isrequired' | translate}}</div>\n        </div>\n                   \n                  </div>\n\n\n\n                 <!--  <div class=\"ui-g-12\">\n                    <fieldset class=\"form-group\">\n                      <label for=\"Description\">{{'Visit.Description' | translate}}</label>\n                      <textarea class=\"form-control\" name=\"Description\"\n                      [ngModelOptions]=\"{standalone: true}\"   [(ngModel)]=\"blackListDescription\" \n                        rows=\"4\" required\n                        placeholder=\"{{'Visit.Description' | translate}}\">\n                      </textarea>\n                    </fieldset>\n                  </div> -->\n\n           <!--        <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':form.get('email').touched && form.get('email').invalid}\"   />\n                    <div *ngIf=\"form.get('email').touched && form.get('email').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('email').errors.required\">Email Name is required</div>\n                      <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email Address</div>\n                    </div>\n                  </div> -->\n               <!--    <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\"  formControlName=\"password\" [ngClass]=\"{'is-invalid':form.get('password').touched && form.get('password').invalid}\" />\n                    <div *ngIf=\"form.get('password').touched && form.get('password').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('password').errors.required\">Password is required</div>\n                      <div *ngIf=\"form.get('password').errors.minlength\">Password  must be a letaset 6 charector</div>\n                    </div>\n                   \n                  </div> -->\n                 \n               \n              </div>\n            </div>\n          </div>\n        </div>\n\n    <!--   </div>\n    </div>\n  </div>\n</div> -->\n<br>\n</fieldset> \n</mat-dialog-content>\n\n<mat-dialog-actions>\n\n\n\n  <div class=\"row col-md-12 div_btn\" >\n    <div class=\"col-md-4 offset-md-1\" >\n          <button class=\"btn btn-lg pull-xs-right btn-primary cust-btn-green\" [disabled]=\"!form.valid\" type=\"submit\">\n            {{'Common.Save' | translate}}\n          </button>\n        </div>\n        <div class=\"col-md-4 offset-md-1\" >\n          <button  class=\"btn  btn-lg pull-xs-right btn-primary cust-btn-red\" type=\"button\" (click)=\"dialogRef.close()\">\n            {{'Common.Cancle' | translate}}\n          </button>\n        </div>\n        </div>\n\n\n <!--  <div class=\"form-group div_btn\">\n    <button class=\"mat-raised-button btn btn-primary cust-btn-green\" mat-button [disabled]=\"!form.valid\" type=\"submit\"> {{'Common.Save' | translate}}</button>\n    <button mat-button class=\"mat-raised-button btn btn-danger cust-btn-red\" type=\"button\" (click)=\"dialogRef.close()\"> {{'Common.Cancle' | translate}}</button>\n  </div> -->\n  \n\n<!--     <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\n    <button class=\"mat-raised-button mat-primary\"  >Save</button> -->\n</mat-dialog-actions>\n\n</form>"

/***/ }),

/***/ "./src/app/modules/searchrequest/EditSearchRequest/visit.dialoge.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/searchrequest/EditSearchRequest/visit.dialoge.component.ts ***!
  \************************************************************************************/
/*! exports provided: VisitDialogeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitDialogeComponent", function() { return VisitDialogeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//'../../../core/models/Visit.model';





var VisitDialogeComponent = /** @class */ (function () {
    function VisitDialogeComponent(blackListService, lookUpsService, commonService, spinnerService, dialogRef) {
        this.blackListService = blackListService;
        this.lookUpsService = lookUpsService;
        this.commonService = commonService;
        this.spinnerService = spinnerService;
        this.dialogRef = dialogRef;
        this.errors = {};
        this.isSubmitting = false;
        this.modalTitle = "";
        this.nationalities = [];
        this.isblackList = false;
        this.translate = this.commonService.returnTranslate();
        this.nationalitiytextLbl = this.translate.currentLang == "ar" ? "NamAR" : "NameEn";
        this.resultsFetched = false;
        this.btnmodalTitle = "";
        // use the FormBuilder to create a form group
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            VisitorID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            VisitID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            IDType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            NationalityID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            MobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    VisitDialogeComponent.prototype.ngOnInit = function () {
        this.getNationality();
        if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit && this.visitor) {
            this.modalTitle = this.translate.instant("Visit.EditModalTitle");
            this.form.patchValue(this.visitor);
            // Object.assign( this.form.value,this.visitor);
        }
        else if (this.actionType == _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].BlackList && this.visitor) {
            this.modalTitle = this.translate.instant("Visit.BlackListModalTitle");
            this.form.patchValue(this.visitor);
            this.isblackList = true;
            this.form.disable();
            // Object.assign( this.form.value,this.visitor);
        }
        else {
            this.modalTitle = this.translate.instant("Visit.AddModalTitle");
        }
    };
    VisitDialogeComponent.prototype.SearchData = function () {
        this.getVisitorDataByNationalID();
    };
    VisitDialogeComponent.prototype.SearchVistorByName = function (value) {
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
    VisitDialogeComponent.prototype.getVisitorDataByNationalID = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            var sename = this.searchName ? this.searchName.Name : null;
            this.lookUpsService
                .getByNationalId(this.searchNationalID, sename).subscribe(function (requests) {
                if (requests) {
                    _this.visitor = requests;
                    _this.form.patchValue(_this.visitor);
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
    VisitDialogeComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    VisitDialogeComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    VisitDialogeComponent.prototype.updateArticle = function () {
        // Object.assign(this.article, values);
    };
    VisitDialogeComponent.prototype.onSubmit = function () {
        /*    if(this.actionType==ActionType.BlackList)
        {
        this.blackList()
        } */
        var datag = Object.assign({}, this.form.value);
        //this.visit.visitors.push(datag);
        this.dialogRef.close(datag);
    };
    VisitDialogeComponent.prototype.blackList = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.blackListService
                .add(this.visitor.VisitorID).subscribe(function (requests) {
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
    VisitDialogeComponent.prototype.getNationality = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.lookUpsService
                .getNationalityLookup().subscribe(function (requests) {
                if (requests) {
                    _this.nationalities = requests;
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
    VisitDialogeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visit-dialoge-page',
            template: __webpack_require__(/*! ./visit.dialoge.component.html */ "./src/app/modules/searchrequest/EditSearchRequest/visit.dialoge.component.html")
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["BlackListService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["LookUpsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], VisitDialogeComponent);
    return VisitDialogeComponent;
}());



/***/ }),

/***/ "./src/app/modules/searchrequest/search.request-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/searchrequest/search.request-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SearchRequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRequestRoutingModule", function() { return SearchRequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _search_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.request.component */ "./src/app/modules/searchrequest/search.request.component.ts");
/* harmony import */ var _searchrequest_EditSearchRequest_edit_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../searchrequest/EditSearchRequest/edit-search.component */ "./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _search_request_component__WEBPACK_IMPORTED_MODULE_3__["SearchRequestComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["RoleAuthGuard"]],
        data: { roles: ['SECURITY', 'SECURITYHEAD'] }
    },
    {
        path: 'EditSearch/:visitId',
        component: _searchrequest_EditSearchRequest_edit_search_component__WEBPACK_IMPORTED_MODULE_4__["EditSearchComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["NoAuthGuard"]],
        data: { action: [_core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Add], animation: 'FilterPage' }
        /*   resolve: {
            article: EditableArticleResolver
          } */
    },
];
var SearchRequestRoutingModule = /** @class */ (function () {
    function SearchRequestRoutingModule() {
    }
    SearchRequestRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchRequestRoutingModule);
    return SearchRequestRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/searchrequest/search.request.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/searchrequest/search.request.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n\n        <h2 style=\"color: #41ad4f; text-align: center;padding: 8px;\">{{SearchTitlePage}}</h2>\n\n        <div class=\"row\" style=\"margin: 10px;\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"StatusId\">{{'Visit.StatusId' | translate}}</label>\n            <ng-select [items]=\"status\" \n            [virtualScroll]=\"true\" \n            [ngModelOptions]=\"{standalone: true}\"\n            bindLabel='{{statustextLbl}}'\n            bindValue=\"StatusID\"\n            placeholder=\"{{'Visit.StatusId' | translate}}\"\n            [(ngModel)]=\"searchModel.StatusId\">\n  </ng-select>\n            </div>\n    \n          </div>\n\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"Name\">{{'Visit.Name' | translate}}</label>\n              <input type=\"text\" name=\"Name\"  placeholder=\"{{'Visit.Name' | translate}}\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" \n              class=\"form-control\"  [(ngModel)]=\"searchModel.Name\" />\n            </div>\n    \n          </div>\n\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"ID\">{{'Visit.ID' | translate}}</label>\n              <input type=\"text\" name=\"ID\" placeholder=\"{{'Visit.ID' | translate}}\"  class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" \n              class=\"form-control\"  [(ngModel)]=\"searchModel.NationalID\" />\n            </div>\n    \n          </div>\n\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"MobileNo\">{{'Visit.MobileNo' | translate}}</label>\n              <input type=\"text\" placeholder=\"{{'Visit.MobileNo' | translate}}\" name=\"MobileNo\"  [ngModelOptions]=\"{standalone: true}\" \n              class=\"form-control\"  [(ngModel)]=\"searchModel.MobileNo\" />\n              \n            </div>\n    \n          </div>\n          <div class=\"col-sm-12\" style=\"display: flex;flex-direction: row; flex-wrap: nowrap;justify-content: space-around; align-items: center; align-content: center;\">\n          <div class=\"col-sm-4\">\n              <button type=\"button\" id=\"Search\" (click)=\"SearchData()\"\n              class=\"submit-btn2 search-btn\">{{'Common.Search' | translate}}</button>\n              <br>\n            </div>\n            <div class=\"col-sm-4\">\n                <button type=\"button\" id=\"Reset\" (click)=\"Reset()\"\n                class=\"submit-btn2 search-btn\">{{'Common.Reset' | translate}}</button>\n                <br>\n              </div>\n            </div>\n       \n    </div>\n    <div>\n      <h2 style=\"color: #41ad4f; text-align: center; padding: 8px;\">{{SearchvisitTitlePage}}</h2>\n\n      <ng2-smart-table [settings]=\"settings\" (delete)=\"OnExit($event)\" (edit)=\"OnEdit($event)\" (custom)=\"onCustomAction($event)\"  [source]=\"source\"  >\n      </ng2-smart-table>\n    </div>\n\n      \n     <!--      <br>\n        <hr class=\"type_5\">\n        <br>\n       \n      <div>\n          <h2 style=\"color: #41ad4f; text-align: center;padding: 8px;\">{{SearchblTitlePage}}</h2>\n\n          <ng2-smart-table [settings]=\"settingsbL\"  [source]=\"sourcebl\" >\n          </ng2-smart-table>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n<div>\n<p-dialog header=\"{{'SearchRequest.modalNotesTitle'| translate}}\" (onHide)='SearchData()' [(visible)]=\"display\" [modal]=\"true\"  [responsive]=\"true\" [width]=\"450\" [minWidth]=\"300\" [minY]=\"70\" \n[maximizable]=\"false\" [baseZIndex]=\"10000\">\n<div *ngIf=\"visitor\">\n<div class=\"form-group\">\n  <label for=\"StatusId\">{{'Visit.StatusId' | translate}}</label>\n<ng-select [items]=\"status\" \n[virtualScroll]=\"true\" \n[(ngModel)]=\"visitor.StatusID\"\n[ngModelOptions]=\"{standalone: true}\"\nbindLabel='{{statustextLbl}}'\nbindValue=\"StatusID\"\nplaceholder=\"{{'Visit.StatusId' | translate}}\"\n>\n</ng-select>\n</div>\n\n<div class=\"ui-g-12\">\n  <div class=\"ui-g-12\">\n    <label >{{'SearchRequest.TimeAttendance' | translate}}</label>\n    <input class='inputTime' *ngIf=\"currentLang=='en'\" value=\"{{visitor.TimeAttendance}}\" locale=\"en\" theme=\"material-green\" type=\"time\" atp-time-picker  required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitor.TimeAttendance\">\n    <input class='inputTime' *ngIf=\"currentLang=='ar'\"  value=\"{{visitor.TimeAttendance}}\" locale=\"ar\" theme=\"material-green\" type=\"time\" atp-time-picker  required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitor.TimeAttendance\">\n\n<!--     <p-calendar required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitor.TimeAttendance\" [timeOnly]=\"true\"></p-calendar>\n --></div>\n\n</div>\n\n<div class=\"ui-g-12\">\n<div class=\"ui-g-12\">\n  <label >{{'SearchRequest.TimeToleave' | translate}}</label>\n  <input class='inputTime' *ngIf=\"currentLang=='en'\" value=\"{{visitor.TimeToleave}}\" locale=\"en\" theme=\"material-green\" type=\"time\" atp-time-picker  required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitor.TimeToleave\">\n  <input class='inputTime' *ngIf=\"currentLang=='ar'\"  value=\"{{visitor.TimeToleave}}\" locale=\"ar\" theme=\"material-green\" type=\"time\" atp-time-picker  required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitor.TimeToleave\">\n\n<!--   <p-calendar required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitor.TimeToleave\" [timeOnly]=\"true\"></p-calendar>\n --></div>\n</div>\n<div  class=\"ui-g-12\">\n  <fieldset class=\"form-group\">\n    <label for=\"Comments\">{{'SearchRequest.Comments' | translate}}</label>\n    <textarea class=\"form-control\" name=\"Comments\"\n    [ngModelOptions]=\"{standalone: true}\"   [(ngModel)]=\"visitor.VisitorComments\" \n      rows=\"4\" required\n      placeholder=\"{{'SearchRequest.Comments' | translate}}\">\n    </textarea>\n  </fieldset>\n</div>\n</div>\n<p-footer>\n  <button  class=\"dialogbtn\" type=\"button\" pButton (click)=\"AddNotes()\" > {{'Common.Save' | translate}}</button>\n  <button  class=\"dialogbtn\" type=\"button\" pButton   (click)=\"display=false\">  {{'Common.Cancle' | translate}}</button>\n</p-footer>\n</p-dialog>\n</div>\n\n\n<div>\n  <p-dialog header=\"{{'SearchRequest.modalConfirmTitle'| translate}}\" [(visible)]=\"displayconfirmdl\" [modal]=\"true\"  [responsive]=\"true\" [width]=\"450\" [minWidth]=\"300\" [minY]=\"70\" \n          [maximizable]=\"false\" [baseZIndex]=\"10000\">\n        <span> {{'SearchRequest.modalExitMessage'| translate}} </span>\n        \n  \n          <p-footer>\n            <button  class=\"dialogbtn\" type=\"button\" pButton (click)=\"ExsitSave()\" > {{'Common.Save' | translate}}</button>\n            <button  class=\"dialogbtn\" type=\"button\" pButton   (click)=\"displayconfirmdl=false\">  {{'Common.Cancle' | translate}}</button>\n  \n             \n          </p-footer>\n  </p-dialog>\n  </div> "

/***/ }),

/***/ "./src/app/modules/searchrequest/search.request.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/searchrequest/search.request.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogbtn{width:80px;font-size:bold;font-weight:600;height:31px}:host /deep/ tr.blRed{color:red}:host /deep/ tr.blOrange{color:#ad7207}.fot{z-index:99;width:100%}.search-btn{color:#fff !important;font-weight:normal !important;display:block !important;text-align:center;height:45px !important;font-size:15px !important;line-height:45px !important;border-radius:2px !important;background:linear-gradient(45deg, #0d8a74 0%, #76cd50 100%) !important;-webkit-transition:all 0.3s !important;transition:all 0.3s !important;border:none !important;width:100% !important;margin-bottom:0px;margin-top:0px;align-content:center;vertical-align:middle;cursor:pointer}\n"

/***/ }),

/***/ "./src/app/modules/searchrequest/search.request.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/searchrequest/search.request.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRequestComponent", function() { return SearchRequestComponent; });
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_checkBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/checkBox */ "./src/app/shared/checkBox.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchRequestComponent = /** @class */ (function () {
    function SearchRequestComponent(router, searchRequestService, lookUpsService, title, commonService, spinnerService) {
        this.router = router;
        this.searchRequestService = searchRequestService;
        this.lookUpsService = lookUpsService;
        this.title = title;
        this.commonService = commonService;
        this.spinnerService = spinnerService;
        this.searchModel = {};
        this.errors = {};
        this.translate = this.commonService.returnTranslate();
        this.statustextLbl = this.translate.currentLang == "ar" ? "StatusTypeAR" : "StatusTypeEN";
        this.status = [];
        this.sourcebl = [];
        this.display = false;
        this.displayconfirmdl = false;
        this.source = [];
        this.SearchTitlePage = this.translate.instant('SearchRequest.SearchTitlePage');
        this.SearchblTitlePage = this.translate.instant('SearchRequest.SearchblTitlePage');
        this.SearchvisitTitlePage = this.translate.instant('SearchRequest.SearchvisitTitlePage');
        this.currentLang = this.translate.currentLang;
        this.settings = {
            // hideSubHeader: true,
            noDataMessage: this.translate.instant('Visit.NoRequest'),
            mode: "external",
            delete: {
                deleteButtonContent: "<i class=\"fa fa-sign-out fa-md\" title=\"" + this.translate.instant('SearchRequest.Exit') + "\"> </i>",
            },
            edit: {
                editButtonContent: "<i  class=\"fa fa-sticky-note fa-lg padding_right4 padding_left4\" title=\"" + this.translate.instant('SearchRequest.AddNotes') + "\"> </i>",
            },
            actions: {
                position: 'right',
                add: false,
                edit: true,
                editable: false,
                columnTitle: '',
                delete: true,
                custom: [
                    { name: 'editrecord', title: '&nbsp;&nbsp;<i class="fa  fa-pencil"></i>' }
                ],
            },
            pager: {
                display: true,
                perPage: 5
            },
            rowClassFunction: function (row) {
                if (row.data.NoteType == 2) {
                    return 'blRed';
                }
                else if (row.data.NoteType == 1) {
                    return 'blOrange';
                }
                return null;
            },
            columns: {
                VisitID: {
                    title: this.translate.instant('Visit.VisitID'),
                    type: "int",
                    editable: false, width: "7%"
                },
                VisitorName: {
                    title: this.translate.instant('ApproveRequest.VisitorName'),
                    type: "string",
                    editable: false, width: "11%"
                },
                VisitorNationalID: {
                    title: this.translate.instant('Visit.ID'),
                    type: "string",
                    editable: false
                },
                office_extn: {
                    title: this.translate.instant('SearchRequest.office_extn'),
                    type: "string",
                    editable: false, width: "4%"
                },
                //  VisitDate: {
                //   title: this.translate.instant('Visit.VisitDate'),
                //   type: "string",
                //   editable: false,width: "11%"
                // },
                PrivateParking: {
                    title: this.translate.instant('Visit.PrivateParking'),
                    //  type: 'html',
                    editable: false, width: "4%",
                    filter: {
                        type: 'checkbox',
                        config: {
                            true: 'true',
                            false: 'false',
                            resetText: 'clear',
                        },
                    },
                    type: 'custom',
                    renderComponent: src_app_shared_checkBox__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"]
                },
                CreatedDate: {
                    title: this.translate.instant('Visit.CreatedDate'),
                    type: "string", width: "11%",
                    editable: false,
                    valuePrepareFunction: function (date) {
                        if (date) {
                            return new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(date, 'yyyy-MM-dd');
                            // h:mm a
                        }
                        return null;
                    },
                },
                Supervisor_office_extn: {
                    title: this.translate.instant('SearchRequest.Supervisor_office_extn'),
                    type: "string",
                    editable: false, width: "4%"
                },
                NumberofVisitors: {
                    title: this.translate.instant('SearchRequest.NumberofVisitors'),
                    type: "int",
                    editable: false, width: "4%"
                },
            },
            attr: {
                class: 'table table-bordered'
            }
        };
        this.settingsbL = {
            // hideSubHeader: true,
            noDataMessage: this.translate.instant('Visit.NoRequest'),
            mode: "external",
            actions: {
                position: 'right',
                add: false,
                edit: false,
                editable: false,
                columnTitle: '',
                delete: false
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
        this.title.setTitle(this.SearchTitlePage);
        if (this.translate.currentLang == 'ar') {
            this.settings.columns.VisitID = {
                title: this.translate.instant('Visit.VisitID'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.vsStatusTypeAR = {
                title: this.translate.instant('ApproveRequest.VisitorStatus'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.StatusTypeAR = {
                title: this.translate.instant('Visit.StatusType'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.Employee_name_AR = {
                title: this.translate.instant('ApproveRequest.Employee_name_AR'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.Supervisor_Name_AR = {
                title: this.translate.instant('SearchRequest.Supervisor_Name'),
                type: "string", editable: false
            };
            //----------------
            this.settingsbL.columns.RequesterNameAR = {
                title: this.translate.instant('SearchRequest.RequesterName'),
                type: "string", editable: false
            };
            this.settingsbL.columns.NumberofVisitors = {
                title: this.translate.instant('SearchRequest.NumberofVisitors'),
                type: "int", editableL: false
            };
            this.settings.columns.Department_AR = {
                title: this.translate.instant('SearchRequest.Department_AR'),
                type: "string", editableL: false, width: "7%"
            };
        }
        else {
            this.settings.columns.VisitID = {
                title: this.translate.instant('Visit.VisitID'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.vsStatusTypeEN = {
                title: this.translate.instant('ApproveRequest.VisitorStatus'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.StatusTypeEN = {
                title: this.translate.instant('Visit.StatusType'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.Employee_name_EN = {
                title: this.translate.instant('ApproveRequest.Employee_name_EN'),
                type: "string", editable: false, width: "7%"
            };
            this.settings.columns.Supervisor_Name_EN = {
                title: this.translate.instant('SearchRequest.Supervisor_Name'),
                type: "string", editable: false
            };
            //----------------
            this.settingsbL.columns.RequesterNameEN = {
                title: this.translate.instant('SearchRequest.RequesterName'),
                type: "string", editable: false
            };
            this.settingsbL.columns.NumberofVisitors = {
                title: this.translate.instant('SearchRequest.NumberofVisitors'),
                type: "int", editableL: false
            };
            this.settings.columns.Department_EN = {
                title: this.translate.instant('SearchRequest.Department_EN'),
                type: "string", editableL: false, width: "7%"
            };
        }
    }
    SearchRequestComponent.prototype.ngOnInit = function () {
        this.SearchData();
        this.getStatus();
    };
    SearchRequestComponent.prototype.SearchData = function () {
        this.getRequests();
        this.getblackListRequests();
    };
    SearchRequestComponent.prototype.Reset = function () {
        this.searchModel = new _core__WEBPACK_IMPORTED_MODULE_2__["SearchModel"]();
        this.SearchData();
    };
    SearchRequestComponent.prototype.getRequests = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.searchRequestService
                .getData(this.searchModel).subscribe(function (requests) {
                if (requests) {
                    _this.source = requests;
                    _this.spinnerService.hide();
                }
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
            this.errors = err;
        }
    };
    SearchRequestComponent.prototype.getblackListRequests = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.searchRequestService
                .getblackList(this.searchModel).subscribe(function (requests) {
                if (requests) {
                    _this.sourcebl = requests;
                    _this.spinnerService.hide();
                }
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
            this.errors = err;
        }
    };
    SearchRequestComponent.prototype.getStatus = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.lookUpsService
                .getStatusLookup('v').subscribe(function (requests) {
                if (requests) {
                    _this.status = requests;
                }
            }, function (error) { _this.commonService.showFailureToast(error); _this.spinnerService.hide(); }), function (err) {
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
    SearchRequestComponent.prototype.onCustomAction = function (event) {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit;
        this.router.navigate(['/searchRequest/EditSearch', event.data.VisitID]);
    };
    SearchRequestComponent.prototype.OnEdit = function (event) {
        this.display = true;
        this.visitor = event.data;
        //this.bindDateinRequest();
    };
    SearchRequestComponent.prototype.OnExit = function (event) {
        this.visitor = event.data;
        if (this.visitor.StatusID == 10) {
            this.commonService.showWarningToast(this.translate.instant("SearchRequest.Alreadydeparture"));
            return;
        }
        this.displayconfirmdl = true;
    };
    SearchRequestComponent.prototype.ExsitSave = function () {
        this.visitor.TimeToleave = this.commonService.returnTimeStringOnly(new Date());
        this.visitor.AllExist = true;
        this.visitor.StatusID = 10;
        this.AddNotes();
    };
    SearchRequestComponent.prototype.AddNotes = function () {
        var _this = this;
        /*  if(this.visitor.TimeToleave){
           this.visitor.TimeToleave=this.commonService.returnTimeStringOnly(this.visitor.TimeToleave);
         }
         if(this.visitor.TimeAttendance){
           this.visitor.TimeAttendance=this.commonService.returnTimeStringOnly(this.visitor.TimeAttendance);
         }
           */
        this.spinnerService.show();
        try {
            console.log(JSON.stringify(this.visitor));
            this.searchRequestService
                .AddNotes(this.visitor).subscribe(function (requests) {
                if (requests)
                    _this.commonService.showSuccessToast(requests.Message);
                _this.spinnerService.hide();
                _this.display = false;
                _this.displayconfirmdl = false;
                _this.SearchData();
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
    SearchRequestComponent.prototype.bindDateinRequest = function () {
        if (this.visitor.TimeToleave)
            this.visitor.TimeToleave = this.commonService.returnDatefromTimeString(this.visitor.TimeToleave);
        if (this.visitor.TimeAttendance)
            this.visitor.TimeAttendance = this.commonService.returnDatefromTimeString(this.visitor.TimeAttendance);
    };
    SearchRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-request-page',
            template: __webpack_require__(/*! ./search.request.component.html */ "./src/app/modules/searchrequest/search.request.component.html"),
            styles: [__webpack_require__(/*! ./search.request.component.scss */ "./src/app/modules/searchrequest/search.request.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["SearchRequestService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["LookUpsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _core__WEBPACK_IMPORTED_MODULE_2__["CommonService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__["Ng4LoadingSpinnerService"]])
    ], SearchRequestComponent);
    return SearchRequestComponent;
}());



/***/ }),

/***/ "./src/app/modules/searchrequest/search.request.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/searchrequest/search.request.module.ts ***!
  \****************************************************************/
/*! exports provided: SearchRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRequestModule", function() { return SearchRequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var _search_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.request.component */ "./src/app/modules/searchrequest/search.request.component.ts");
/* harmony import */ var _search_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.request-routing.module */ "./src/app/modules/searchrequest/search.request-routing.module.ts");
/* harmony import */ var _EditSearchRequest_edit_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditSearchRequest/edit-search.component */ "./src/app/modules/searchrequest/EditSearchRequest/edit-search.component.ts");
/* harmony import */ var _searchrequest_EditSearchRequest_visit_dialoge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../searchrequest/EditSearchRequest/visit.dialoge.component */ "./src/app/modules/searchrequest/EditSearchRequest/visit.dialoge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SearchRequestModule = /** @class */ (function () {
    function SearchRequestModule() {
    }
    SearchRequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _search_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchRequestRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerModule"].forRoot()],
            declarations: [_search_request_component__WEBPACK_IMPORTED_MODULE_4__["SearchRequestComponent"], _EditSearchRequest_edit_search_component__WEBPACK_IMPORTED_MODULE_6__["EditSearchComponent"], _searchrequest_EditSearchRequest_visit_dialoge_component__WEBPACK_IMPORTED_MODULE_7__["VisitDialogeComponent"]],
            providers: [],
            entryComponents: [_searchrequest_EditSearchRequest_visit_dialoge_component__WEBPACK_IMPORTED_MODULE_7__["VisitDialogeComponent"]]
        })
    ], SearchRequestModule);
    return SearchRequestModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-searchrequest-search-request-module.js.map