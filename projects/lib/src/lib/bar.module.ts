import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxProgressComponent } from './ngx-progress.component';
import { VendorComponent } from './vendor-component/vendor.component';

@NgModule({
  imports: [CommonModule],
  exports: [NgxProgressComponent],
  declarations: [NgxProgressComponent, VendorComponent],
})
export class BarModule {}
