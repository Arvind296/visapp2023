(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-request-approve-request-approve-module"],{

/***/ "./src/app/modules/request-approve/edite.approve.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/request-approve/edite.approve.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n<form name=\"form\">\n\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n         \n                <h2 style=\"color: #41ad4f; text-align: center;\">{{VisitTitlePage}}</h2>\n           \n                <!-- VisitTypeID-->\n                <fieldset class=\"form-group\">\n                  <div class=\"row ui-g-12\">\n                    <div class=\"ui-g-3\">\n                      <label for=\"group1\">{{'Visit.VisitTypeID' | translate}}</label>\n                    </div>\n                  <div class=\"ui-g-9\">\n                    <p-radioButton name=\"group1\" disabled  [ngModelOptions]=\"{standalone: true}\" value=\"1\" label=\"{{'Visit.VisitTypeVisit' | translate}}\"   [(ngModel)]=\"visit.VisitTypeID\"  inputId=\"opt1\"></p-radioButton>\n                    <p-radioButton name=\"group1\" disabled [ngModelOptions]=\"{standalone: true}\" value=\"2\" label=\"{{'Visit.VisitTypWalkinVisitor' | translate}}\"   [(ngModel)]=\"visit.VisitTypeID\"  inputId=\"opt2\"></p-radioButton>\n                  </div>\n                </div>\n                </fieldset>\n           \n\n               <div class=\"ui-g-12 ui-fluid\">\n                <label >{{'Visit.VisitDate' | translate}}</label>\n               \n                <p-calendar disabled  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitDate\"></p-calendar>\n                </div>\n\n                <div class=\"ui-g-12\">\n                <div class=\"ui-g-12 ui-md-6\">\n                  <label >{{'Visit.StartTime' | translate}}</label>\n              \n                  <p-calendar disabled [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitstartTime\" [timeOnly]=\"true\"></p-calendar>\n              </div>\n              <div class=\"ui-g-12 ui-md-6\">\n                <label >{{'Visit.EndTime' | translate}}</label>\n            \n                <p-calendar disabled [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"visitendTime\" [timeOnly]=\"true\"></p-calendar>\n            </div>\n          </div>\n\n\n          <!-- <div class=\"form-group\">\n            <label for=\"MeetingRoom\">{{'Visit.MeetingRoom' | translate}}</label>\n         \n          <ng-select [items]=\"metingrooms\"\n          [virtualScroll]=\"true\"\n          [ngModelOptions]=\"{standalone: true}\"\n          bindLabel='{{metingtextLbl}}'\n          bindValue=\"RoomID\"\n          [disabled]=\"isdisabledStatus\" [searchable]=\"!isdisabledStatus\" [clearable]=\"!isdisabledStatus\"\n          placeholder=\"{{'Visit.MeetingRoom' | translate}}\"\n          [(ngModel)]=\"visit.MeetingRoom\">\n</ng-select>\n          </div> -->\n\n          <div class=\"form-group\">\n            <label for=\"StatusId\">{{'Visit.StatusId' | translate}}</label>\n          <ng-select [items]=\"status\" \n          [virtualScroll]=\"true\" \n        \n          [ngModelOptions]=\"{standalone: true}\"\n          bindLabel='{{statustextLbl}}'\n\n          bindValue=\"StatusID\"\n          placeholder=\"{{'Visit.StatusId' | translate}}\"\n          [(ngModel)]=\"visit.StatusId\">\n</ng-select>\n          </div>\n    <!-- Description -->\n    <div class=\"ui-g-12\">\n                <fieldset class=\"form-group\">\n                  <label for=\"Description\">{{'Visit.Description' | translate}}</label>\n                  <textarea class=\"form-control\" name=\"Description\"\n                  [ngModelOptions]=\"{standalone: true}\" disabled  [(ngModel)]=\"visit.Description\" \n                    rows=\"4\"\n                    placeholder=\"{{'Visit.Description' | translate}}\">\n                  </textarea>\n                </fieldset>\n              </div>\n                  <!-- PrivateParking -->\n                <div  *ngIf='isParking' class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n                  <div class=\"ui-g-12\">\n                     <p-checkbox  [ngModelOptions]=\"{standalone: true}\" label=\"{{'Visit.PrivateParking' | translate}}\" [(ngModel)]=\"visit.PrivateParking\" binary=\"true\"></p-checkbox>\n                   </div>\n                  </div>\n                           <!--SupervisorComments  -->\n              <!--     <div class=\"ui-g-12\">\n                  <fieldset class=\"form-group\">\n                    <label for=\"SupervisorComments\">{{'Visit.SupervisorComments' | translate}}</label>\n                    <textarea [disabled]=\"usertype!='SUPERVISOR'\" class=\"form-control\" name=\"SupervisorComments\"\n                    [ngModelOptions]=\"{standalone: true}\"   [(ngModel)]=\"visit.SupervisorComments\" \n                      rows=\"4\"\n                      placeholder=\"{{'Visit.SupervisorComments' | translate}}\">\n                    </textarea>\n                  </fieldset>\n                </div> -->\n                <!-- SecurityComments -->\n                <div   class=\"ui-g-12\">\n                  <fieldset class=\"form-group\">\n                    <label for=\"SecurityComments\">{{'Visit.SecurityComments' | translate}}</label>\n                    <textarea [disabled]=\"usertype!='SECURITY' && usertype!='SECURITYHEAD'\" class=\"form-control\" name=\"SecurityComments\"\n                    [ngModelOptions]=\"{standalone: true}\"   [(ngModel)]=\"visit.SecurityComments\" \n                      rows=\"4\"\n                      placeholder=\"{{'Visit.SecurityComments' | translate}}\">\n                    </textarea>\n                  </fieldset>\n                </div>\n\n\n  <div>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"  >\n    </ng2-smart-table>\n  </div>\n\n\n\n                  <!-- \n\n                <fieldset class=\"form-group\">\n                  <label for=\"firstName\">{{'DASHBOARD.toDate' | translate}}</label>\n                  <input class=\"form-control form-control-lg\"\n                  [(ngModel)]=\"CreationDatechart\"  [ngModelOptions]=\"{standalone: true}\"\n                    type=\"text\"\n                    placeholder=\"{{'DASHBOARD.toDate' | translate}}\" />\n                </fieldset> -->\n    \n               <!--  <fieldset class=\"form-group\">\n                  <input class=\"form-control\"\n                    formControlName=\"description\"\n                    type=\"text\"\n                    placeholder=\"What's this article about?\" />\n                </fieldset>\n    \n                <fieldset class=\"form-group\">\n                  <textarea class=\"form-control\"\n                    formControlName=\"body\"\n                    rows=\"8\"\n                    placeholder=\"Write your article (in markdown)\">\n                  </textarea>\n                </fieldset>\n\n\n                  <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input type=\"text\"  class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{'is-invalid':form.get('firstName').touched && form.get('firstName').invalid}\" required />\n                    <div *ngIf=\"form.get('firstName').touched && form.get('firstName').invalid\"  class=\"invalid-feedback\">\n                      <div  *ngIf=\"form.get('firstName').errors.required\">First Name is required</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{'is-invalid':form.get('lastName').touched && form.get('lastName').invalid}\" required />\n               \n                      <div *ngIf=\"form.get('lastName').touched && form.get('lastName').invalid\"  class=\"invalid-feedback\">\n                        <div *ngIf=\"form.get('lastName').errors.required\">Last Name is required</div>\n       \n                      </div>\n                   \n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':form.get('email').touched && form.get('email').invalid}\"   />\n                    <div *ngIf=\"form.get('email').touched && form.get('email').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('email').errors.required\">Email Name is required</div>\n                      <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email Address</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\"  formControlName=\"password\" [ngClass]=\"{'is-invalid':form.get('password').touched && form.get('password').invalid}\" />\n                    <div *ngIf=\"form.get('password').touched && form.get('password').invalid\"  class=\"invalid-feedback\">\n                      <div *ngIf=\"form.get('password').errors.required\">Password is required</div>\n                      <div *ngIf=\"form.get('password').errors.minlength\">Password  must be a letaset 6 charector</div>\n                    </div>\n                   \n                  </div>\n                 \n               \n          \n -->\n <div class=\"row div_btn\" >\n  <div class=\"col-md-4 offset-md-1\" >\n        <button class=\"btn btn-lg pull-xs-right btn-primary cust-btn-green\" type=\"button\" (click)=\"submitForm()\">\n          {{'Common.Save' | translate}}\n        </button>\n      </div>\n      <div class=\"col-md-4 offset-md-1\" >\n        <button class=\"btn  btn-lg pull-xs-right btn-primary cust-btn-red\" type=\"button\" (click)=\"navtovisite()\">\n          {{'Common.Cancle' | translate}}\n        </button>\n      </div>\n      </div>\n\n   \n\n</form>\n\n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/request-approve/edite.approve.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/request-approve/edite.approve.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogbtn{width:80px;font-size:bold;font-weight:600;height:31px}.ng-select.disable-arrow .ng-arrow-wrapper .ng-arrow{display:none}.ng-select.disable-dropdown ng-dropdown-panel{display:none}.ng-select.disable-clear-all .ng-clear-wrapper{display:none}\n"

/***/ }),

/***/ "./src/app/modules/request-approve/edite.approve.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/request-approve/edite.approve.component.ts ***!
  \********************************************************************/
/*! exports provided: EditeApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditeApproveComponent", function() { return EditeApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-table */ "./node_modules/ngx-smart-table/index.js");
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





var EditeApproveComponent = /** @class */ (function () {
    function EditeApproveComponent(visitRegistrationService, lookUpsService, approveRequestService, activatedRoute, commonService, router, spinnerService) {
        this.visitRegistrationService = visitRegistrationService;
        this.lookUpsService = lookUpsService;
        this.approveRequestService = approveRequestService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.visit = new _core__WEBPACK_IMPORTED_MODULE_2__["Visit"]();
        this.modalTitle = "";
        this.translate = this.commonService.returnTranslate();
        this.metingtextLbl = this.translate.currentLang == "ar" ? "RoomAR" : "RoomEN";
        this.statustextLbl = this.translate.currentLang == "ar" ? "StatusTypeAR" : "StatusTypeEN";
        this.isParking = this.visitRegistrationService.IsShowParking();
        this.isShowComment = false;
        this.isdisabledStatus = true;
        this.errors = {};
        this.usertype = "";
        this.metingrooms = [];
        this.status = [];
        this.source = new ngx_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.displaydl = false;
        this.isSubmitting = false;
        this.VisitTitlePage = this.translate.instant('ApproveRequest.ShowRequest');
        this.settings = {
            // hideSubHeader: true,
            noDataMessage: this.translate.instant('Visit.NoVisitor'),
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
                add: false,
                edit: false,
                delete: false,
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
                    editable: false
                },
                ID: {
                    title: this.translate.instant('Visit.ID'),
                    type: "string",
                    editable: false,
                },
                MobileNo: {
                    title: this.translate.instant('Visit.MobileNo'),
                    type: "string",
                    editable: false,
                },
            },
            attr: {
                class: 'table table-bordered'
            }
        };
    }
    EditeApproveComponent.prototype.onSearch = function (query) {
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
    EditeApproveComponent.prototype.ngOnInit = function () {
        this.getRooms();
        this.getStatus();
        this.visitId = this.activatedRoute.snapshot.paramMap.get("visitId");
        this.getVisitById(this.visitId);
        this.source.load(this.visit.visitors);
        this.usertype = this.commonService.GetUserUserType();
        this.visit.usertype = this.usertype;
    };
    EditeApproveComponent.prototype.onDelete = function (event) {
        this.displaydl = true;
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Delete;
        this.visitor = event.data;
    };
    EditeApproveComponent.prototype.closedialoge = function () {
        // this.getVistits();
    };
    EditeApproveComponent.prototype.updateArticle = function (values) {
        Object.assign(this.visit, values);
    };
    EditeApproveComponent.prototype.navtovisite = function () {
        this.router.navigate(['/approveRequest']);
    };
    EditeApproveComponent.prototype.submitForm = function () {
        this.visit.usertype = this.usertype;
        if (this.visitDate) {
            this.visit.VisitDate = this.commonService.returnDateStringOnly(this.visitDate);
        }
        if (this.visitstartTime) {
            this.visit.StartTime = this.commonService.returnTimeStringOnly(this.visitstartTime);
        }
        if (this.visitendTime) {
            this.visit.EndTime = this.commonService.returnTimeStringOnly(this.visitendTime);
        }
        if (!this.visit.SupervisorComments && this.usertype == 'SUPERVISOR') {
            this.commonService.showFailureToast(this.translate.instant("ApproveRequest.AddComment"));
        }
        else if (!this.visit.SecurityComments && this.usertype == 'SECURITY') {
            this.commonService.showFailureToast(this.translate.instant("ApproveRequest.AddComment"));
        }
        else {
            this.Edit();
        }
    };
    EditeApproveComponent.prototype.getSelectedRoom = function () {
        this.visit.MeetingRoom = Number(this.visit.MeetingRoom);
    };
    EditeApproveComponent.prototype.getSelectedstutus = function () {
        this.visit.StatusId = Number(this.visit.StatusId);
    };
    EditeApproveComponent.prototype.Edit = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.approveRequestService
                .UpdateStatus(this.visit).subscribe(function (requests) {
                if (requests) {
                    _this.commonService.showSuccessToast(requests.Message);
                    _this.spinnerService.hide();
                    _this.navtovisite();
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
    EditeApproveComponent.prototype.bindDateinRequest = function () {
        this.visitDate = this.commonService.returnDatefromDateString(this.visit.VisitDate);
        this.visitendTime = this.commonService.returnDatefromTimeString(this.visit.EndTime);
        this.visitstartTime = this.commonService.returnDatefromTimeString(this.visit.StartTime);
    };
    EditeApproveComponent.prototype.getVisitById = function (visitId) {
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
                    _this.spinnerService.hide();
                }
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
    EditeApproveComponent.prototype.getRooms = function () {
        var _this = this;
        this.spinnerService.show();
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
    EditeApproveComponent.prototype.getStatus = function () {
        var _this = this;
        this.spinnerService.show();
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
    EditeApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edite-approve-page',
            template: __webpack_require__(/*! ./edite.approve.component.html */ "./src/app/modules/request-approve/edite.approve.component.html"),
            styles: [__webpack_require__(/*! ./edite.approve.component.scss */ "./src/app/modules/request-approve/edite.approve.component.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["VisitRegistrationService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["LookUpsService"],
            _core__WEBPACK_IMPORTED_MODULE_2__["ApproveRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], EditeApproveComponent);
    return EditeApproveComponent;
}());



/***/ }),

/***/ "./src/app/modules/request-approve/request-approve-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/request-approve/request-approve-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RequestApproveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApproveRoutingModule", function() { return RequestApproveRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _request_approve_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-approve.component */ "./src/app/modules/request-approve/request-approve.component.ts");
/* harmony import */ var _edite_approve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edite.approve.component */ "./src/app/modules/request-approve/edite.approve.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _request_approve_component__WEBPACK_IMPORTED_MODULE_3__["RequestApproveComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["RoleAuthGuard"]],
        data: { roles: ['SECURITY', 'SECURITYHEAD'] }
    },
    {
        path: 'EditRequest/:visitId',
        component: _edite_approve_component__WEBPACK_IMPORTED_MODULE_4__["EditeApproveComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["RoleAuthGuard"]],
        data: { roles: ['SECURITY', 'SECURITYHEAD'], action: [_core__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Edit] }
        /*   resolve: {
            article: EditableArticleResolver
          } */
    }
];
var RequestApproveRoutingModule = /** @class */ (function () {
    function RequestApproveRoutingModule() {
    }
    RequestApproveRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RequestApproveRoutingModule);
    return RequestApproveRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/request-approve/request-approve.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/request-approve/request-approve.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        <h2 style=\"color: #41ad4f; text-align: center;padding: 8px;\">{{requestApproveTitlePage}}</h2>\n        <div>\n          <ng2-smart-table id=\"myTableElementId\" [settings]=\"settings\"  [source]=\"source\"  (edit)=\"onEdit($event)\">\n          </ng2-smart-table>\n        </div>\n      \n\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/request-approve/request-approve.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/request-approve/request-approve.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogbtn{width:80px;font-size:bold;font-weight:600;height:31px}\n"

/***/ }),

/***/ "./src/app/modules/request-approve/request-approve.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/request-approve/request-approve.component.ts ***!
  \**********************************************************************/
/*! exports provided: RequestApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApproveComponent", function() { return RequestApproveComponent; });
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestApproveComponent = /** @class */ (function () {
    function RequestApproveComponent(approveRequestService, commonService, router, spinnerService) {
        this.approveRequestService = approveRequestService;
        this.commonService = commonService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.visit = {};
        this.errors = {};
        this.modalTitle = "";
        this.btnmodalTitle = "";
        this.displaydl = false;
        this.translate = this.commonService.returnTranslate();
        this.requestApproveTitlePage = this.translate.instant('ApproveRequest.requestApproveTitlePage');
        this.source = [];
        this.settings = {
            // hideSubHeader: true,
            noDataMessage: this.translate.instant('Visit.NoRequest'),
            mode: "external",
            edit: {
                editButtonContent: '<i  class="fa fa-pencil fa-lg padding_right4 padding_left4" title="Edit"> </i>',
            },
            actions: {
                position: 'right',
                add: false,
                edit: true,
                editable: false,
                columnTitle: '',
                delete: false
            },
            columns: {
                /*   Id: {
                  show:false
                  }, */
                /*     VisitID: {
                      title: this.translate.instant('Visit.VisitID'),
                      type: "string",
                      editable: false
                    }, */
                VisitDate: {
                    title: this.translate.instant('Visit.VisitDate'),
                    type: "string",
                    editable: false
                },
                CreatedDate: {
                    title: this.translate.instant('Visit.CreatedDate'),
                    type: "string",
                    editable: false,
                    sortDirection: 'desc',
                    valuePrepareFunction: function (date) {
                        if (date) {
                            return new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(date, 'yyyy-MM-dd h:mm a');
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
        }
        else {
            this.settings.columns.Employee_name_EN = {
                title: this.translate.instant('ApproveRequest.Employee_name_EN'),
                type: "string", editable: false
            };
        }
        // this.translate.currentLang=='ar'?
        // this.settings.columns.RoomAR= {
        //   title: this.translate.instant('Visit.MeetingRoom'),
        //   type: "string", editable: false}: this.settings.columns.RoomEN= {
        //     title: this.translate.instant('Visit.MeetingRoom'),
        //     type: "string", editable: false}
    }
    RequestApproveComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            {
                field: 'VisitID',
                search: query
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    RequestApproveComponent.prototype.ngOnInit = function () {
        this.getRequests();
    };
    RequestApproveComponent.prototype.getRequests = function () {
        var _this = this;
        this.spinnerService.show();
        try {
            this.approveRequestService
                .get(this.commonService.GetUserId(), this.commonService.GetUserUserType()).subscribe(function (requests) {
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
    RequestApproveComponent.prototype.onEdit = function (event) {
        this.actionType = _core__WEBPACK_IMPORTED_MODULE_3__["ActionType"].Edit;
        this.router.navigate(['/approveRequest/EditRequest', event.data.VisitID]);
    };
    RequestApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-approve-page',
            template: __webpack_require__(/*! ./request-approve.component.html */ "./src/app/modules/request-approve/request-approve.component.html"),
            styles: [__webpack_require__(/*! ./request-approve.component.scss */ "./src/app/modules/request-approve/request-approve.component.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ApproveRequestService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__["Ng4LoadingSpinnerService"]])
    ], RequestApproveComponent);
    return RequestApproveComponent;
}());



/***/ }),

/***/ "./src/app/modules/request-approve/request-approve.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/request-approve/request-approve.module.ts ***!
  \*******************************************************************/
/*! exports provided: RequestApproveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApproveModule", function() { return RequestApproveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var _request_approve_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-approve-routing.module */ "./src/app/modules/request-approve/request-approve-routing.module.ts");
/* harmony import */ var _request_approve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-approve.component */ "./src/app/modules/request-approve/request-approve.component.ts");
/* harmony import */ var _edite_approve_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edite.approve.component */ "./src/app/modules/request-approve/edite.approve.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RequestApproveModule = /** @class */ (function () {
    function RequestApproveModule() {
    }
    RequestApproveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"].forRoot(), _request_approve_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestApproveRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            declarations: [_request_approve_component__WEBPACK_IMPORTED_MODULE_4__["RequestApproveComponent"], _edite_approve_component__WEBPACK_IMPORTED_MODULE_5__["EditeApproveComponent"]],
            providers: [],
            entryComponents: []
        })
    ], RequestApproveModule);
    return RequestApproveModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-request-approve-request-approve-module.js.map