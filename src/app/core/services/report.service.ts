
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Visit,Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({providedIn: 'root'})
export class ReportService {
  constructor (
    private apiService: ApiService,
    private commonService: CommonService,
  ) {}



  getData(report): Observable<any> {
    return this.apiService.post('/GetVisitorReport' ,report )
      .pipe(map(data => data));
  }
 



}
