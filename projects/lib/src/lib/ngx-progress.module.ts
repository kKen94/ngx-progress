import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BarModule } from './bar.module';
import {
  ErrorInterceptor,
  NgxProgressInterceptor,
} from './ngx-progress.interceptor';
import { WHITELIST } from './symbols';

/***********************     HTTP ONLY         ************************/

const HTTP_PROVIDERS = [
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
    ...HTTP_PROVIDERS,
    {
      provide: WHITELIST,
      useValue: [],
    },
  ],
})
export class NgxProgressHttpModule {
  static forRoot(
    whitelist: string[],
  ): ModuleWithProviders<NgxProgressHttpModule> {
    return {
      ngModule: NgxProgressHttpModule,
      providers: [
        ...HTTP_PROVIDERS,
        {
          provide: WHITELIST,
          useValue: whitelist,
        },
      ],
    };
  }
}

/***********************     ONLY PROGRESSBAR         ************************/

@NgModule({
  imports: [BarModule],
  exports: [BarModule],
})
export class NgxProgressModule {}
