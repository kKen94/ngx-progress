import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

const handleRoute = (): Observable<HttpResponse<unknown>> => of(new HttpResponse({ status: 200 }));

@Injectable()
export class FakeHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(undefined)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(3000))
      .pipe(dematerialize());
  }
}

export const fakeHttpProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeHttpInterceptor,
  multi: true,
};
