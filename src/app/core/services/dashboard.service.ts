
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Visit,Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({providedIn: 'root'})
export class DashboardService {
  constructor (
    private apiService: ApiService,
    private commonService: CommonService,
  ) {}



  getUserData(): Observable<any> {
    return this.apiService.post('/GetEmpRequestCount',{})
      .pipe(map(data => data));
  }
 

  getSecurityData(): Observable<any> {
    return this.apiService.post('/GetTotalRequestCount',{})
      .pipe(map(data => data));
  }
 

  getGraphData(): Observable<any> {
    return this.apiService.post('/GetRequestInGraphicalMode',{})
      .pipe(map(data => data));
  }

}
