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

@Injectable()
export class FakeHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const handleRoute = () => of(new HttpResponse({ status: 200 }));

    // tslint:disable-next-line:no-null-keyword
    return of(null)
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
