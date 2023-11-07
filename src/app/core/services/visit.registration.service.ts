
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Visit,Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({providedIn: 'root'})
export class VisitRegistrationService {
  constructor (
    private apiService: ApiService,
    private commonService: CommonService,
  ) {}

  query(config: ArticleListConfig): Observable<{articles: Article[], articlesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/articles' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  } 
  getById(visitId): Observable<Visit> {
    return this.apiService.get('/GetVisitByID?VisitID=' +visitId)
      .pipe(map(data => data));
  }
  get(empno,statusID): Observable<Visit> {
    return this.apiService.post('/GetVisitAllDataN',{EmpNo:empno,StatusID:statusID} )
      .pipe(map(data => data));
  }


  getEmpLookup(): Observable<any> {
    return this.apiService.post('/GetEmployeeDataALLSearch/',{})
      .pipe(map(data => data));
  }

  add(visit): Observable<any> {
      return this.apiService.post('/Create_Visit/', visit)
        .pipe(map(data => data));
    
  }
  Edit(visit): Observable<any> {
    return this.apiService.put('/Update_Visit/',  visit)
      .pipe(map(data => data));
  
}

delete(visitid): Observable<any> {
  return this.apiService.post('/DeleteVisit?VisitID='+  visitid)
    .pipe(map(data => data));

}
deleteVisitor(VisitorID): Observable<any> {
  return this.apiService.post('/DeleteVisitors?VisitorID='+  VisitorID)
    .pipe(map(data => data));

}

isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}
 IsShowParking(){
  let User=this.commonService.GetCurrenUser();
  if(User&&!this.isEmpty(User)){
   return  JSON.parse(User.Parking);
  }
  return false;
 }


}
