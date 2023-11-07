
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Visit,Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({providedIn: 'root'})
export class SearchRequestService {
  constructor (
    private apiService: ApiService,
    private commonService: CommonService,
  ) {}


  getById(visitId): Observable<Visit> {
    return this.apiService.get('/GetVisitByID?VisitID=' +visitId)
      .pipe(map(data => data));
  }
  getblackList(search): Observable<Visit> {
    return this.apiService.post('/GetBlackListAllData' ,search )
      .pipe(map(data => data));
  }
  getData(search): Observable<Visit> {
    return this.apiService.post('/GetALLvisitdata' ,search )
      .pipe(map(data => data));
  }
  UpdateStatus(visit): Observable<any> {
    return this.apiService.post('/UpdateStatus/',  visit)
      .pipe(map(data => data));
}
AddNotes(visitor): Observable<any> {
  return this.apiService.put('/AddVisitorNotes/',  visitor)
    .pipe(map(data => data));
}



}
