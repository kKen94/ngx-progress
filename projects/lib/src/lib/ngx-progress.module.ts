import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { BarModule } from './bar.module';
import {
  ErrorInterceptor,
  NgxProgressInterceptor,
} from './ngx-progress.interceptor';
import { NgxProgressService } from './ngx-progress.service';

/***********************     HTTP ONLY         ************************/

@NgModule({
  imports: [HttpClientModule, BarModule],
  exports: [HttpClientModule, BarModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgxProgressInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class NgxProgressOnlyHttpModule {}

/********************     ROUTER NAVIGATION ONLY         *********************/

@NgModule({
  imports: [RouterModule, BarModule],
  exports: [RouterModule, BarModule],
})
export class NgxProgressOnlyRouterModule {
  constructor(
    router: Router,
    private readonly progressService: NgxProgressService,
  ) {
    initRouter(router, progressService);
  }
}

/******************     HTTP AND ROUTER NAVIGATION         *******************/

@NgModule({
  imports: [HttpClientModule, RouterModule, BarModule],
  exports: [HttpClientModule, RouterModule, BarModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgxProgressInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class NgxProgressModule {
  constructor(
    router: Router,
    private readonly progressService: NgxProgressService,
  ) {
    initRouter(router, progressService);
  }
}

/***********************     ONLY PROGRESSBAR         ************************/

@NgModule({
  imports: [BarModule],
  exports: [BarModule],
})
export class NgxProgressOnlyBarModule {}

/*********************** methods          ************************/

const getCurrentNavigationState = (router: Router) => {
  const currentNavigation = router.getCurrentNavigation();
  if (currentNavigation?.extras) {
    return currentNavigation.extras.state;
  }

  return {};
};

const initRouter = (router: Router, progressService: NgxProgressService) => {
  router.events.subscribe(event => {
    const state = getCurrentNavigationState(router);
    if (state && state.ignoreLoadingBar) {
      return;
    }

    if (event instanceof NavigationStart) {
      progressService.start();
    }

    if (
      event instanceof NavigationError ||
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel
    ) {
      progressService.end();
    }
  });
};
