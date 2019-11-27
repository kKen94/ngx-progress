import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NgxProgressService } from './ngx-progress.service';

@Injectable()
export class NgxProgressInterceptor implements HttpInterceptor {
  constructor(private readonly progressService: NgxProgressService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progressService.start();
    return next.handle(request).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          this.progressService.end();
        }
        return event;
      }),
    );
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private readonly progressService: NgxProgressService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        this.progressService.terminate();
        return of(err);
      }),
    );
  }
}
