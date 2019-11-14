import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxProgressComponent } from './ngx-progress.component';
import { VendorModule } from './vendor-component/vendor.module';

@NgModule({
  imports: [
    CommonModule,
    VendorModule,
  ],
  declarations: [NgxProgressComponent],
  exports: [
    NgxProgressComponent,
    CommonModule,
    VendorModule,
  ],
})
export class SharedModule {}
