import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

@Injectable()
export class FakeHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(3000))
      .pipe(dematerialize());

    function handleRoute() {
      return of(new HttpResponse({status: 200}));
    }
  }
}

export const fakeHttpProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeHttpInterceptor,
  multi: true
};
