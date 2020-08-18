import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { BarModule } from './bar.module';
import {
  ErrorInterceptor,
  NgxProgressInterceptor,
} from './ngx-progress.interceptor';
import { getOptions, OPTIONS, Options } from './symbols';

const OPT = new InjectionToken('OPT');
const opt = {
  color: '#0984e3',
  showSpinner: true,
  showBar: true,
  indeterminate: false,
  barHeight: '1px',
  spinnerDiameter: '10px',
  initialValue: 0,
  overlay: true,
  overlayValue: 1,
  spinnerSpeed: 4,
};

/***********************     HTTP ONLY         ************************/

const HTTP_PROVIDERS = [
  {
    provide: OPTIONS,
    useFactory: getOptions,
    deps: [OPT],
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NgxProgressInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [HttpClientModule, BarModule],
  exports: [HttpClientModule, BarModule],
  providers: [
    {
      provide: OPT,
      useValue: opt,
    },
    ...HTTP_PROVIDERS,
  ],
})
export class NgxProgressHttpModule {
  static forRoot(
    options?: Options,
  ): ModuleWithProviders<NgxProgressHttpModule> {
    return {
      ngModule: NgxProgressHttpModule,
      providers: [
        {
          provide: OPT,
          useValue: options,
        },
        ...HTTP_PROVIDERS,
      ],
    };
  }
}

/***********************     ONLY PROGRESSBAR         ************************/

@NgModule({
  imports: [BarModule],
  exports: [BarModule],
  providers: [
    {
      provide: OPT,
      useValue: opt,
    },
    {
      provide: OPTIONS,
      useFactory: getOptions,
      deps: [OPT],
    },
  ],
})
export class NgxProgressModule {
  static forRoot(
    options?: Options,
  ): ModuleWithProviders<NgxProgressHttpModule> {
    return {
      ngModule: NgxProgressHttpModule,
      providers: [
        {
          provide: OPT,
          useValue: options,
        },
        {
          provide: OPTIONS,
          useFactory: getOptions,
          deps: [OPT],
        },
      ],
    };
  }
}
