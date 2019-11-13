import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxProgressComponent } from './ngx-progress.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingBarModule,
  ],
  declarations: [NgxProgressComponent],
  exports: [
    NgxProgressComponent,
    CommonModule,
    LoadingBarModule,
  ],
})
export class SharedModule {}
