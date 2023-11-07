
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Visit,Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({providedIn: 'root'})
export class ContractService {
  constructor (
    private apiService: ApiService,
    private commonService: CommonService,
  ) {}
  getByNationalId(NationalId): Observable<any> {
    return this.apiService.get('/GetVisitByID?VisitID=' +NationalId)
      .pipe(map(data => data));
  }

  getById(visitId): Observable<any> {
    return this.apiService.get('/GetVisitByID?VisitID=' +visitId)
      .pipe(map(data => data));
  }
  get(empno,usertpe): Observable<any> {
    
    return this.apiService.post('/GetAllContractorVisitAllData',{empno:empno,userType:usertpe} )
      .pipe(map(data => data));
  }





  add(contract): Observable<any> {
      return this.apiService.post('/AddContractor/', contract)
        .pipe(map(data => data));
    
  }


  edit(contract): Observable<any> {
    return this.apiService.post('/UpdateContractor/', contract)
      .pipe(map(data => data));
  
}
delete(contractId): Observable<any> {
  return this.apiService.post('/DeleteContractor?contractId='+  contractId)
    .pipe(map(data => data));

}
makeCard(contractId): Observable<any> {
  return this.apiService.post('/MakeCardContractor?contractId='+  contractId)
    .pipe(map(data => data));

}



}
