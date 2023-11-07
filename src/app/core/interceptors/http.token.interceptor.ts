import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { JwtService, CommonService } from '../services';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor( private spinnerService: Ng4LoadingSpinnerService,private jwtService: JwtService,private commonService:CommonService,private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json; charset=utf-8'
      // 'Accept': 'application/json' ,
     //'Access-Control-Allow-Origin':'http://localhost:4200'
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }
   
    if (this.commonService) {
      headersConfig['CurrentUserNumber'] = this.commonService.GetUserNo();
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request)   .catch(err => {
  
          if (err instanceof HttpErrorResponse && err.status === 504) {
              return next.handle(req);
          }
        return throwError(this.handleError(err));
    });;
  }


  getClientErrorMessage(error: Error): string {   
 
    return error.message ? 
           error.message : 
           error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ?    
           error.message :
           'No Internet Connection';
  } 
  getServerErrorMessageFromServer(error: HttpErrorResponse): string {
    return navigator.onLine ?    
           (error.error? error.error.Message:"") :
           'No Internet Connection';
  } 
  handleError(error) {

    let errorMessage = '';
    let router = this.injector.get(Router);
    if (error instanceof HttpErrorResponse) {
      // Server error
      errorMessage = `URL: ${router.url} \nError: ${error.error.message}`+this.getServerErrorMessage(error)+`\nMessage: `+this.getServerErrorMessageFromServer(error);
      //stackTrace = errorService.getServerErrorStackTrace(error);
    } else {
      // Client Error
      errorMessage = `URL: ${router.url} \n Error Code: ${error.status}` +this.getClientErrorMessage(error);
    }
    // Always log errors
    console.error(error);
    console.error(errorMessage);
    this.commonService.showFailureToast(errorMessage)
    this.spinnerService.hide();
    return error;
}
}