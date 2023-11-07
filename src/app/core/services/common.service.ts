import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { _ } from 'underscore';
import { AbstractControl, ValidatorFn } from '@angular/forms';
//import { LocalStorage } from '@ngx-pwa/local-storage';





@Injectable({
  providedIn: 'root',
})

export class CommonService {

  cuurenUser:any={};

  base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  saveByteArray(data, name) {
    //  console.log(data);
    // let a = document.createElement("a");
    // document.body.appendChild(a);
    // var blob = new Blob(data, { type: "application/octet-stream" });
    // var url = window.URL.createObjectURL(blob);
    // a.href = url;
    // a.download = name;
    // a.click();
    // URL.revokeObjectURL(url);
    var blob = new Blob(data, { type: "application/octet-stream" });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
      window.navigator.msSaveOrOpenBlob(blob, name);
    } else { // chrome
      // const blob = new Blob([blob], { type: "application/octet-stream" });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = name;
      link.click();
    }
    this.showSuccessToast(this.translate.instant('COMMON.DownloadingDocument'));
    //var removeUnsafe = url.replace('unsafe:','');
    //let sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //let downloadtag = "<a download='" + name + "' href='" + sanitizedUrl + "'>" + name + "</a>";
    // let downloadtag = "<a id='down' href='#' onclick='clickDownloadTable('', ''); return false;'>" + name + "</a>";
    // let downloadtag = "<div id='temp' onclick='clickDownloadTable('" + url + "', '" + name + "')'>" + name +"</div>"
    // this.documentStruc["certificate"] = downloadtag;
    // //let temp = {url, name}
    this.spinnerService.hide();
    //return temp;
  }
GetCurrenUser(){
  if(localStorage.getItem("userData")){
    this.cuurenUser= JSON.parse(localStorage.getItem("userData"))
      }
return this.cuurenUser;

}
GetUserId(){
  /* return "saql@sidf.gov.sa"; */
   if(this.GetCurrenUser()&&this.cuurenUser.User_ID){
    return this.cuurenUser.User_ID;
      }
return ""; 
}
GetUserNo(){
  /*   return "2362"; */
    if(this.GetCurrenUser()&&this.cuurenUser.Employee_number){
      return this.cuurenUser.Employee_number;
        }
  return ""; 
  
  }
isShowcontroleByRoles(values:string[]){
    
  if (this.GetUserUserType()&&(values.includes('*')||(values.includes(this.GetUserUserType()))))
  {
   return true;
 }
 else{  return false;}  
}
GetUserUserType(){
 /*  return "SUPERVISOR"; */
    if(this.GetCurrenUser()&&this.cuurenUser.UserType){
    return this.cuurenUser.UserType;
      }
return "";  

}

GetUserIsSecurity():boolean{
  /*  return "SUPERVISOR"; */
     if(this.GetCurrenUser()&&(this.cuurenUser.UserType=='SECURITY'||this.cuurenUser.UserType=='SECURITYHEAD')){
     return true;
       }
 return false;  
 
 }
  dateRegex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  defaultLanguage: any = 'en';
  customerProfiles: any = [];
  private profileSource = new BehaviorSubject(this.customerProfiles);
  currentProfiles = this.profileSource.asObservable();


  constructor(private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastrService, private translate: TranslateService) {

    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang(this.defaultLanguage);

  }

 

  changeMessage(profilesList: Array<any>) {
    this.profileSource.next(profilesList)
  }

  setTranslate(language) {

    this.defaultLanguage = language;

    this.translate.use(this.defaultLanguage);

  }

  returnTranslate() {
    return this.translate;
  }


  validateHijriDate(hijriDate) {

    let date: string = '';

    if (hijriDate != null) {
      let convertDate = hijriDate.year + '-' + this.leftPad(hijriDate.month, 2) + '-' + this.leftPad(hijriDate.day, 2);
      if (this.dateRegex.test(convertDate))
        date = convertDate;
    }

    return date;

  }

  validateGregorianDate(date) {

    let status: boolean = false;

    if (date != null) {
      status = this.dateRegex.test(date);
    }

    return status;

  }

  leftPad(num, size) {

    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;

  }

  replaceDate(strDate) {

    return strDate.replace(/-/g, '');

  }

  showSuccessToast(message) {

    this.toastr.success(message, '', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
    });

  }

  showFailureToast(message) {

    this.toastr.error(message, '', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
    });

  }

  showWarningToast(message) {

    this.toastr.warning(message, '', {
      timeOut: 5000,
      positionClass: 'toast-top-center',
    });


  }

  sliceString(stringData) {

    return stringData.slice(0, 4) + '-' + stringData.slice(4, 6) + '-' + stringData.slice(6);

  }

  returnDateStringFromDateStringWithoutHyphen(dateStringWithoutHyphen) {

    let dateArray = { year: 0, month: 0, day: 0 };

    dateArray.year = parseInt(dateStringWithoutHyphen.slice(0, 4));

    switch (dateStringWithoutHyphen.length) {

      case 8:

        dateArray.month = parseInt(dateStringWithoutHyphen.slice(4, 6));
        dateArray.day = parseInt(dateStringWithoutHyphen.slice(6));

        break;

      case 6:
      default:

        dateArray.month = parseInt('0' + dateStringWithoutHyphen.slice(4, 5));
        dateArray.day = parseInt('0' + dateStringWithoutHyphen.slice(5));

        break;

    }

    return ('000' + dateArray.year).slice(-4) + '-' + ('0' + dateArray.month).slice(-2) + '-' + ('0' + dateArray.day).slice(-2);

  }

  returnDateStringWithoutHyphenFromDateString(dateString) {

    return dateString.replace(/-/g, '');

  }

  returnGregDateStringFromDateString(dateString) {

    let dateStringWithoutHyphen = dateString.replace(/-/g, '');

    let dateArray = { year: 0, month: 0, day: 0 };

    dateArray.year = parseInt(dateStringWithoutHyphen.slice(0, 4));

    switch (dateStringWithoutHyphen.length) {

      case 8:

        dateArray.month = parseInt(dateStringWithoutHyphen.slice(4, 6));
        dateArray.day = parseInt(dateStringWithoutHyphen.slice(6));

        break;

      case 6:
      default:

        dateArray.month = parseInt('0' + dateStringWithoutHyphen.slice(4, 5));
        dateArray.day = parseInt('0' + dateStringWithoutHyphen.slice(5));

        break;

    }

    let gregDateString = new Date(Date.UTC(dateArray.year, dateArray.month - 1, dateArray.day));

    return gregDateString;

  }

  returnDateArrayFromDateStringWithoutHyphen(dateString) {

    let dateArray = { year: 0, month: 0, day: 0 };

    dateArray.year = parseInt(dateString.slice(0, 4));

    switch (dateString.length) {

      case 8:

        dateArray.month = parseInt(dateString.slice(4, 6));
        dateArray.day = parseInt(dateString.slice(6));

        break;

      case 6:
      default:

        dateArray.month = parseInt('0' + dateString.slice(4, 5));
        dateArray.day = parseInt('0' + dateString.slice(5));

        break;

    }

    return dateArray;

  }

  converto12HourPMandAM(time)
  {
      // Check correct time format and split into components
      time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    
  }
  returnDatefromTimeString(stringTime: any){
    if( stringTime instanceof Date)
    {
      return new Date(stringTime);
    }
    let dateVal = "2019-01-01T" +stringTime;
    return new Date(dateVal);;
  }
  returnDatefromDateString(stringdate) {

    let dateVal = new Date(stringdate);
    return dateVal;
  }

  returnDateArrayFromGregDateString(gregDateString) {

    let dateVal = new Date(gregDateString);

    let yearVal = dateVal.getFullYear();
    let monthVal = dateVal.getMonth() + 1;
    let dayVal = dateVal.getDate();

    let dateArray = { year: yearVal, month: monthVal, day: dayVal };

    return dateArray;

  }

  returnDateStringWithoutHyphenFromGregDateString(gregDateString) {

    let dateVal = new Date(gregDateString);

    let yearVal = dateVal.getFullYear();
    let monthVal = dateVal.getMonth() + 1;
    let dayVal = dateVal.getDate();

    let dateArray = { year: yearVal, month: monthVal, day: dayVal };

    return ('000' + dateArray.year).slice(-4) + ('0' + dateArray.month).slice(-2) + ('0' + dateArray.day).slice(-2);

  }

  returnDateStringFromGregDateString(gregDateString) {

    let dateVal = new Date(gregDateString);

    let yearVal = dateVal.getFullYear();
    let monthVal = dateVal.getMonth() + 1;
    let dayVal = dateVal.getDate();

    let dateArray = { year: yearVal, month: monthVal, day: dayVal };

    return ('000' + dateArray.year).slice(-4) + '-' + ('0' + dateArray.month).slice(-2) + '-' + ('0' + dateArray.day).slice(-2);

  }

  returnGregDateStringFromDateArray(dateArray) {

    let gregDateString = new Date(Date.UTC(dateArray.year, dateArray.month - 1, dateArray.day));

    return gregDateString;

  }

  returnDateStringWithoutHyphenFromDateArray(dateArray) {

    return ('000' + dateArray.year).slice(-4) + ('0' + dateArray.month).slice(-2) + ('0' + dateArray.day).slice(-2);

  }

  returnDateStringFromDateArray(dateArray) {

    return ('000' + dateArray.year).slice(-4) + '-' + ('0' + dateArray.month).slice(-2) + '-' + ('0' + dateArray.day).slice(-2);

  }

  returnGregDateStringFromDateStringWithoutHyphen(dateString) {

    let year = 0, month = 0, day = 0;

    year = parseInt(dateString.slice(0, 4));

    switch (dateString.length) {

      case 8:

        month = parseInt(dateString.slice(4, 6));
        day = parseInt(dateString.slice(6));

        break;

      case 6:
      default:

        month = parseInt('0' + dateString.slice(4, 5));
        day = parseInt('0' + dateString.slice(5));

        break;

    }

    let gregDateString = new Date(Date.UTC(year, month, day));

    return gregDateString.toString();

  }
  returnDateStringOnly(dateString) {
    let gregDateString = new Date(dateString);
    var date = gregDateString.getFullYear()+'-'+((gregDateString.getMonth()+1)<10?'0':'')+(gregDateString.getMonth()+1)+'-'+(gregDateString.getDate()<10?'0':'')+gregDateString.getDate();
return date;
  }
  returnTimeStringOnly(dateString) {
    let gregDateString = new Date(dateString);
    var time = (gregDateString.getHours()<10?'0':'')+gregDateString.getHours() + ":" +(gregDateString.getMinutes()<10?'0':'') + gregDateString.getMinutes();
    return time;

  }

  returnISODateStringFromDateStringWithoutHyphen(dateString) {

    let year = '', month = '', day = '';

    year = dateString.slice(0, 4);

    switch (dateString.length) {

      case 8:

        month = dateString.slice(4, 6);
        day = dateString.slice(6);

        break;

      case 6:
      default:

        month = '0' + dateString.slice(4, 5);
        day = '0' + dateString.slice(5);

        break;

    }

    let isoDateString = year.toString() + '-' + month.toString() + '-' + day.toString() + 'T00:00:00.000Z';

    return isoDateString;

  }

  returnValueStringFromSARString(SARString) {

    SARString = SARString.replace(/,/g, '');

    let string_array = [];

    string_array = SARString.split(' ');

    if (string_array[1])
      SARString = string_array[1];

    return SARString;

  }

  sortArray(property) {

    let sortOrder = 1;

    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {

      if (sortOrder == -1)
        return b[property].localeCompare(a[property]);
      else
        return a[property].localeCompare(b[property]);

    }

  }

  returnRandomNumber() {

    let rand_num = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return (rand_num);

  }

  returnUploadGet(Docstructure) {

    let url = Docstructure.downloadDocumentUrl;

    let document_array = {
      'url': url,
      'documentList': [],
    };

    for (let i = 0; i < Docstructure.result.length; i++) {

      let EntityId = Docstructure.result[i].EntityId;
      let RefId = Docstructure.result[i].Id;

      if (RefId === undefined) {
        RefId = 0;
      }

      for (let j = 0; j < Docstructure.result[j].Documents.length; j++) {

        let DocumentId = Docstructure.result[i].Documents[j].Id;
        let FileName = Docstructure.result[i].Documents[j].FileName;

        let temp_documentList = {
          'EntityId': EntityId,
          'RefId': RefId,
          'DocumentId': DocumentId,
          'FileName': FileName,
        };

        document_array.documentList.push(temp_documentList);

      }

    }
  }

  returnViewDocumentJson(docstructure) {

    let finalJsonData = {};

    let documentListArray = [];

    for (let i = 0; i < docstructure.result.length; i++) {

      for (let j = 0; j < docstructure.result[i].Documents.length; j++) {

        let data = {

          'EntityId': docstructure.result[i].EntityId,
          'RefId': docstructure.result[i].Id,
          'RelatedEntityId': docstructure.result[i].RelatedEntityId,
          'DocumentId': docstructure.result[i].Documents[j].Id,
          'DocumentDefId': docstructure.result[i].Documents[j].Definition.Id,
          'DocumentDefName': docstructure.result[i].Documents[j].Definition.Name,
          'FileName': docstructure.result[i].Documents[j].FileName,

        }

        documentListArray.push(data);

      }

    }

    finalJsonData = {

      'url': docstructure.downloadDocumentUrl,
      'documentList': documentListArray,

    };

    return finalJsonData;

  }

  downLoadFile(data: any, type: string, fileName: string) {

    if (data.MessType == 'S') {

      // alert(data.result);
      let blob = new Blob([data.result], { type: type });
      let url = window.URL.createObjectURL(blob);
      let anchor = document.createElement('a');
      anchor.download = fileName;
      anchor.href = url;
      anchor.click();
      // var pwa = window.open(url);
      // if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      //     alert( 'Please disable your Pop-up blocker and try again.');
      // }

    }

  }

  numberToNumberWithCommas(value) {

    let result = value.toString().split('.');
    result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return result.join('.');

  }

  numberWithCommasToNumber(value) {

    let result = value;
    result = result.split(',').join('');
    return result;

  }

  findIndexFromId(array, id) {
    if (array && array.length != 0 && (id + "") != "") {
      return _.findIndex(array, function (num) { return (num.id + "") === id });
    } else {
      return -1;
    }
  }





  returnDateArrayFromDateString(dateString) {

    var dateArray = { year: 0, month: 0, day: 0 };

    dateArray.year = parseInt(dateString.slice(0, 4));

    switch (dateString.length) {

      case 8:

        dateArray.month = parseInt(dateString.slice(4, 6));
        dateArray.day = parseInt(dateString.slice(6));

        break;

      case 6:
      default:

        dateArray.month = parseInt("0" + dateString.slice(4, 5));
        dateArray.day = parseInt("0" + dateString.slice(5));

        break;

    }

    return dateArray;

  }

}
