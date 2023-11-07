
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LookUpsService {
  constructor (
    private apiService: ApiService
  ) {}



  getNationalityLookup(): Observable<any> {
    return this.apiService.get('/GetNationalityLookup/')
      .pipe(map(data => data));
  }

  getRoomLookup(): Observable<any> {
    return this.apiService.get('/GetRoomLookup/')
      .pipe(map(data => data));
  }

  getStatusLookup(type): Observable<any> {
    return this.apiService.get('/GetStatusLookup?type='+type)
      .pipe(map(data => data));
  }
  getByNationalId(NationalId,name): Observable<any> {
    return this.apiService.post('/GetVisitorDataByNationalID',{NationalId:NationalId,Name:name})
      .pipe(map(data => data));
  }

  SearchVistorByName(searchName){
    return this.apiService.get('/GetVisitorsNameBysearchName?searchName=' +searchName)
    .pipe(map(data => data));
  }

}
