import { NgModule } from '@angular/core';
import { NgxProgressComponent } from './ngx-progress.component';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { NgxProgressService } from './ngx-progress.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxProgressInterceptor } from './ngx-progress.interceptor';
import { SharedModule } from './shared.module';

/***********************     HTTP ONLY         **************************/

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NgxProgressComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgxProgressInterceptor, multi: true },
  ]
})
export class NgxProgressHttpOnlyModule {}

/********************         ROUTER NAVIGATION ONLY         ********************/

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [NgxProgressComponent],
})
export class NgxProgressOnlyRouterModule {
  constructor(router: Router, private progressService: NgxProgressService) {
    initRouter(router, progressService);
  }
}

/********************         HTTP AND ROUTER NAVIGATION        ********************/

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [NgxProgressComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgxProgressInterceptor, multi: true },
  ]
})
export class NgxProgressModule {
  constructor(router: Router, private progressService: NgxProgressService) {
    initRouter(router, progressService);
  }
}

/*******************         ONLY PROGRESSBAR          ********************/

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [NgxProgressComponent],
})
export class NgxProgressOnlyBarModule {}

/*****************************************************************************************/

const getCurrentNavigationState = (router: Router) => {
  const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
  if (currentNavigation && currentNavigation.extras) {
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

    if ((event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel)) {
      progressService.end();
    }
  });
};
