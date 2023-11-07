
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Visit,Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({providedIn: 'root'})
export class ApproveRequestService {
  constructor (
    private apiService: ApiService,
    private commonService: CommonService,
  ) {}


  getById(visitId): Observable<Visit> {
    return this.apiService.get('/GetVisitByID?VisitID=' +visitId)
      .pipe(map(data => data));
  }
  get(userId,usertpe): Observable<Visit> {
    return this.apiService.post('/GetVisitDataForSupervisor/' ,{userId:userId,userType:usertpe} )
      .pipe(map(data => data));
  }

  UpdateStatus(visit): Observable<any> {
    return this.apiService.post('/UpdateStatus/',  visit)
      .pipe(map(data => data));
}



}
