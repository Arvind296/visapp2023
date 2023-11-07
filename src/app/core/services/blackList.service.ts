
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Visit,Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({providedIn: 'root'})
export class BlackListService {
  constructor (
    private apiService: ApiService,
    private commonService: CommonService,
  ) {}

  get(empno,usertpe): Observable<any> {
    
    return this.apiService.post('/GetAllBlackListData',{empno:empno,userType:usertpe} )
      .pipe(map(data => data));
  }

  add(blacklist): Observable<any> {
      return this.apiService.post('/AddBlackList/', blacklist)
        .pipe(map(data => data));
  }

  edit(blacklist): Observable<any> {
    return this.apiService.post('/UpdateBlackList/', blacklist)
      .pipe(map(data => data));
}
delete(blacklistId): Observable<any> {
  return this.apiService.post('/DeleteBlackList?BLID='+  blacklistId)
    .pipe(map(data => data));
}




}
