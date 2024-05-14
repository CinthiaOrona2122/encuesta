import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //para poder enviar la request modificada, se clona para añadirle headers y params
    let clonedRequest = request;

    if (LocalstorageService.getItem('token')) {
      clonedRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + LocalstorageService.getItem('token')!
        }
      });
      //console.log("Http request intercepted:", request.url);
    }
    return next.handle(clonedRequest);
  }

}
