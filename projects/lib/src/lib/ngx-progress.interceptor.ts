import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NgxProgressService } from './ngx-progress.service';
import { WHITELIST } from './symbols';

@Injectable()
export class NgxProgressInterceptor implements HttpInterceptor {
  // tslint:disable-next-line:variable-name
  #_regexUrl: RegExp[] = [];
  /**
   * Is done the mapping from string to regex on variable assignment
   * @param patterns: the whitelist
   */
  set regexUrl(patterns: string[]) {
    this.#_regexUrl = patterns.map(p => new RegExp(p));
  }

  constructor(
    private readonly progressService: NgxProgressService,
    @Inject(WHITELIST) private readonly whitelist: string[],
  ) {
    this.regexUrl = whitelist;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    for (const regexUrlItem of this.#_regexUrl) {
      if (regexUrlItem.test(request.url)) {
        return next.handle(request);
      }
    }
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

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        this.progressService.terminate();
        return of(err);
      }),
    );
  }
}
