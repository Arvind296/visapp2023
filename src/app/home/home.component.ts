import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {  UserService, CommonService, DashboardService } from '../core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fromAmount:number;toAmount:number;
  sub:any;
  data:any;datagrap:any;
  datachart:any = {};
  translate = this.commonService.returnTranslate();
  toCreationDate:Date;
  fromCreationDate:Date;
  textToshow:string="... More"
  isshow:boolean=false;
  isSecurity:boolean=false;
  cmonth:string;cyear:string;
  minValue: number = 0; 
   pagetitle=this.translate.instant('Header.Home');

 









constructor(route: ActivatedRoute,private title:Title, private dashboardService:DashboardService,  private commonService: CommonService, private spinnerService: Ng4LoadingSpinnerService, private router:Router) { 
    this.translate = this.commonService.returnTranslate();
}

 

/*   public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b'; */
  public brandPrimary = 'white';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#1b63b1';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

  // events
  public chartClicked(e: any): void {
   // console.log(e);
  }

  public chartHovered(e: any): void {
   // console.log(e);
  }




  // mainChart

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public mainChartElements = 4;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    }/* ,
    {
      data: this.mainChartData3,
      label: 'BEP'
    } */
  ];
 
  public mainChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value;//.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 7,
          stepSize: Math.ceil(40 / 7),
          max: 60
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: this.convertHex(this.brandInfo, 10),
      borderColor: this.brandInfo,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';




  // sparkline charts

  CreationDatechart:Date=new Date();

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;
  listConfig: any = {
    type: 'all',
    filters: {}
  };
 




  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [30, 40, 50, 40, 65, 45, 35,50, 40, 33],
      //label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','May', 'June', 'July'];
  public lineChart1Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    { // grey
      backgroundColor: this.brandPrimary,
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
     // label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: this.brandInfo,
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      //label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
     //label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

 




  // sparkline charts


  ngOnInit(): void {
 this.isSecurity =this.commonService.GetUserIsSecurity();
 this.title.setTitle(this.pagetitle);
 this.getData() ;
 this.getGraphData();
  }
fillchart(){
  this.datachart={
    labels:localStorage.getItem('lang')=='ar'?
     ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو','أغسطس', 'سبتمبر','أكتور', 'نوفمبر','ديسمبر']:
    ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September','October', 'November','December'],
    datasets: [
        {
            label: this.datagrap?this.datagrap.filter(s=>s.YearType=='p')[0].ssyear:0,
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data:this.datagrap? this.datagrap.filter(s=>s.YearType=='p').map(({ count }) => count):[]
        },
        {
            label: this.datagrap?this.datagrap.filter(s=>s.YearType=='c')[0].ssyear:0,
            backgroundColor: '#41ab34',
            borderColor: '#7CB342',
            data: this.datagrap? this.datagrap.filter(s=>s.YearType=='c').map(({ count }) => count):[]
        }
    ]
  };
}
  getGraphData() {
    this.spinnerService.show();
    try {
      this.dashboardService
        .getGraphData().subscribe((requests:any) => {
          if (requests){
            this.datagrap = requests;
this.fillchart();
          }
          this.spinnerService.hide();
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), err =>{this.commonService.showFailureToast(err);
           this.spinnerService.hide();} 
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
  
    }
  
  }
  navigateToapprove(){
    this.router.navigate(['/approveRequest']);
  }
  navigateTo(statusId){

    this.router.navigate(['/visit/allRequest',statusId]);
  }
  navigateTovisit(){
    this.router.navigate(['/visit']);
  }
  getData() {
    this.spinnerService.show();
    debugger;
    try {
      this.dashboardService
        .getSecurityData().subscribe((requests:any) => {
          if (requests){
            this.data = requests[0];
            
          }
          this.spinnerService.hide();
        },err =>{this.commonService.showFailureToast(err.Message);
          this.spinnerService.hide();}), err =>{this.commonService.showFailureToast(err);
           this.spinnerService.hide();} 
    } catch (err) {
      this.spinnerService.hide();
      this.commonService.showFailureToast(err);
  
    }
  
  }

  ShowMore(){
    this.isshow=!this.isshow;
    
  if (!this.isshow) {
    this.textToshow=this.translate.instant('COMMON.More');;
  } else {
    this.textToshow=this.translate.instant('COMMON.Hide');;

  }
  }


  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }


  }
}
