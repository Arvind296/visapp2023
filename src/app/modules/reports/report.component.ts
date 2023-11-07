import { Title } from '@angular/platform-browser';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';
import { CommonService, LookUpsService, ReportService, ReportModel } from '../../core';
 import * as printJS from 'print-js';
/*import 'jspdf-autotable';
import html2canvas from 'html2canvas'; */
/* import { ExportAsService, ExportAsConfig } from 'ngx-export-as'; */
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report-page',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})


export class ReportComponent implements OnInit {
  visitorCount:number=0
  reportModel: ReportModel = {} as ReportModel;
  errors: Object = {};
  translate = this.commonService.returnTranslate();
  statustextLbl:string=this.translate.currentLang=="ar"?"StatusTypeAR":"StatusTypeEN";
  status:any[]=[]
  sourcebl: any = [];
  source: any = [];
  settings:any={actions: {
    position: 'right',
    add: false,
    edit:false,
    editable:false,
    columnTitle: '',
    delete:false
  },};

  ReportvisitTitlePage:string;
/*    exportAsConfig: ExportAsConfig = {
    type: 'docx', // the type you want to download
    elementId: 'myTableIdElementId', // the id of html/table element,
    options: { // html-docx-js document options
      orientation: 'landscape',
      margins: {
        top: '20'
      }
    }
  } */
  constructor(private reportService:ReportService,
   private lookUpsService:LookUpsService,
    private title:Title, 
    private commonService:CommonService, private spinnerService: Ng4LoadingSpinnerService) { 
this.title.setTitle(this.translate.instant('Header.Report'));
      if(this.translate.currentLang=='ar'){

        this.settingsV.columns.StatusTypeAR= {
          title: this.translate.instant('Visit.StatusType'),
          type: "string", editable: false, width:'8%'};
          
          this.settingsV.columns.Employee_name_AR= {
          title: this.translate.instant('ApproveRequest.Employee_name_AR'),
          type: "string", editable: false,width:'11%'};
       
            //----------------
            this.settingsC.columns.RequesterNameAR= {
              title: this.translate.instant('SearchRequest.RequesterName'),
              type: "string", editable: false};
        
      }
      else{
        this.settingsV.columns.StatusTypeEN= {
          title: this.translate.instant('Visit.StatusType'),
          type: "string", editable: false, width:'8%'};
          this.settingsV.columns.Employee_name_EN= {
            title: this.translate.instant('ApproveRequest.Employee_name_EN'),
            type: "string", editable: false,width:'11%'};
       

            //----------------
            this.settingsC.columns.RequesterNameEN= {
              title: this.translate.instant('SearchRequest.RequesterName'),
              type: "string", editable: false};
      }
      this.settingsV.columns.Comments= {
        title: this.translate.instant('SearchRequest.Comments'),type: "string", editable: false, width:'11%'
       }

    }

    settingsV:any = {
      // hideSubHeader: true,
       noDataMessage: this.translate.instant('Visit.NoRequest'),
       mode: "external",
       actions: {
         position: 'right',
         add: false,
         edit:false,
         editable:false,
         columnTitle: '',
         delete:false
       },
       columns: {
     
         Name: {
          title: this.translate.instant('ApproveRequest.VisitorName'),
          type: "string",
          editable: false
         },
         NationalId: {
          title: this.translate.instant('Visit.ID'),
          type: "string",
          editable: false
         },
         
         office_extn: {
          title: this.translate.instant('SearchRequest.office_extn'),
          type: "string",width: "4%",
          editable: false
         }, 
         CreatedDate: {
          title: this.translate.instant('Visit.CreatedDate'),
          type: "string",width: "13%",
          editable: false,
          valuePrepareFunction: (date) => {
            if (date) {
            return new DatePipe('en-US').transform(date, 'yyyy-MM-dd h:mm a')
            }
            return null;
            },
        },
         VisitDate: {
          title: this.translate.instant('Visit.VisitDate'),
          type: "string",
          editable: false,
          width:'12%'
        },
        TimeAttendance: {
          title: this.translate.instant('SearchRequest.TimeAttendance'),
          type: "string",
          editable: false,
          width:'10%'
         },
         TimeToleave: {
          title: this.translate.instant('SearchRequest.TimeToleave'),
          type: "string",
          editable: false,
          width:'10%'
         },
         VisitTypeID:{
          title: this.translate.instant('Visit.VisitTypeID'),
          type: "string", editable: false,
          
          valuePrepareFunction: (data) => {
            if (data) {
            return data==1?this.translate.instant('Visit.VisitTypeVisit'):this.translate.instant('Visit.VisitTypWalkinVisitor')
            }
            return null;
            },
         },
      
       },
       attr: {
        class: 'table table-bordered'
      }
     };
   
  settingsC:any = {
    // hideSubHeader: true,
     noDataMessage: this.translate.instant('Visit.NoRequest'),
     mode: "external",
     actions: {
       position: 'right',
       add: false,
       edit:false,
       editable:false,
       columnTitle: '',
       delete:false
     },
     columns: {
      bl_ID: {
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
 
  ngOnInit() {
   
    this.getStatus();
  }
  VisitorReport(){
this.settings=this.settingsV;
this.ReportvisitTitlePage=this.translate.instant('Report.SearchVisitTitlePage');
this.getRequests();
  }
  ContractReport(){
    this.settings=this.settingsC;
    this.ReportvisitTitlePage=this.translate.instant('Report.SearchContractTitlePage');

    //this.getblackListRequests();
  }
  getRequests() {
    if(this.reportModel.ToDate){
      this.reportModel.ToDate=new Date(new DatePipe('en-US').transform(this.reportModel.ToDate, 'yyyy-MM-dd'));
    }
    if( this.reportModel.FromDate){
      this.reportModel.FromDate=new Date(new DatePipe('en-US').transform(this.reportModel.FromDate, 'yyyy-MM-dd'));
    }
    this.spinnerService.show();
    try {
      this.reportService
        .getData(this.reportModel).subscribe((requests:any) => {
        
          if (requests){
       
            this.source = requests;
            this.visitorCount=requests.length;
            this.spinnerService.hide();
          }
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), 
          err =>{this.commonService.showFailureToast(err);
           this.spinnerService.hide();} 
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }
 
  }
/*   getblackListRequests() {
    this.spinnerService.show();
    try {
      this.searchRequestService
        .getblackList(this.reportModel).subscribe((requests:any) => {
          if (requests){
            this.source = requests;
            this.visitorCount=requests.length;
            this.spinnerService.hide();
          }
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), 
          err =>{this.commonService.showFailureToast(err);
           this.spinnerService.hide();} 
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }
 
  } */

  getStatus() {
    this.spinnerService.show();
    try {
      this.lookUpsService
        .getStatusLookup('v').subscribe((requests) => {
          if (requests)
          {
            this.status= requests;
          }
        }, error => { this.commonService.showFailureToast(error); this.spinnerService.hide();},
        ), err =>{ this.commonService.showFailureToast(err);
         
          this.spinnerService.hide();
        }
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
      this.errors = err;
    }

  }
   exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'myTableElementId', // the id of html/table element,
    options: { // html-docx-js document options
      orientation: 'landscape',
    
      height: '100%',
      format: 'letter',
    
      styles: { columnWidth: 'wrap' },
      columnStyles: {
          text: { columnWidth: 'auto' },
          nil: { halign: 'right' },
          tgl: { halign: 'right' }
      },
      headerStyles: { halign: 'center' },
      theme: 'striped',
      lang: 'ar' 
    }
  }
export(){
  var cols =[];
  var rows = [];
var i=1;
 
  for(var key in this.source){
    var temp=[];
    
    for(var col in Object.keys(this.settings.columns)){

     var item= Object.keys(this.settings.columns)[col];
    
     if(key=='0'){
     var coldata= { field: item, displayName: this.settings.columns[item]['title']};
     cols.push(coldata)
     }
     this.source[key].no=Number(i);
       temp.push(this.source[key][item]);
     
    }
  
    rows.push(temp);
    i=i+1;
  }

cols.push({ field: 'no', displayName:'#'})
  printJS({printable:this.source,css:['../../../assets/styles/main.css','../../../styles.css',
`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'`,], properties: cols,
  documentTitle:this.ReportvisitTitlePage +new Date().toDateString() ,
  style: `@page {
    size: landscape;orphans:4; widows:2;
    margin: 3%
 }.custom-h3 { color: #17750c;text-align:center;font-weight: 600; } 
   table{font-size: 16px;text-align: center !important;
    display: table !important;} tr:nth-child(odd) { 
      background-color: rgba(65, 171, 52, 0.23);}
      thead ,th {
        font-size:	17pt;
        background-color:white;
        font-family: 	El Messiri,titillium web,sans-serif, sans-serif !important;
        text-align: center !important;
        
          }
          tbody {
            font-size:	16pt;
            text-align: center !important;}
      `,
   showModal:true, font: 'TimesNewRoman',

   headerStyle:'font-weight: 600;',  
    gridHeaderStyle: 'font-weight: bolder;font-size:17pt;text-align:center;color: #17750c;  border: 2px solid #333;',
  gridStyle: 'font-size: 14pt;text-align:center;border: 1px solid #333;font-weight: 300;font-family:Times New Roman,Times,serif;'
  ,header: `<h3 dir="rtl" class="custom-h3">`+this.ReportvisitTitlePage+`</h3>`, type: 'json'})
//  this.exportAsService.save(this.exportAsConfig, 'My File Name');

  // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
/*   this.exportAsService.get(this.exportAsConfig).subscribe(content => {
    console.log(content);
  }); */
  
 /*  var doc = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF 
  var cols =[];
  var rows = [];
  
  for(var key in this.source){
    
    var temp=[];
    for(var col in Object.keys(this.settings.columns)){

     var item= Object.keys(this.settings.columns)[col];
     if(key=='0'){
      cols.push(this.settings.columns[item]['title'])
     }
     
       temp.push(this.source[key][item]);
     
    }

    rows.push(temp);
  }

  console.log('cols',cols)
  console.log('rows',rows)



/*   doc.autoTable(cols, rows, {
    startY: 20,
    orientation: 'landscape',
    format: 'letter',
    margin: { horizontal: 7 },
    styles: { columnWidth: 'wrap' },
    columnStyles: {
        text: { columnWidth: 'auto' },
        nil: { halign: 'right' },
        tgl: { halign: 'right' }
    },
    headerStyles: { halign: 'center' },
    theme: 'striped',
    lang: 'ar' 
}); */
/* const elementToPrint = document.getElementById('myTableElementId');
html2canvas(elementToPrint).then(canvas => {  
  // Few necessary setting options  
  var imgWidth = 208;   
  var pageHeight = 295;    
  var imgHeight = canvas.height * imgWidth / canvas.width;  
  var heightLeft = imgHeight;  

  const contentDataURL = canvas.toDataURL('image/png')  
  var position = 0;  
  doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
  doc.save('MYPdf.pdf'); // Generated PDF    
});  
*/
/* doc.autoTable({html: document.getElementById('myTableElementId')});
  doc.save('Te58st.pdf');*/
} 







}
