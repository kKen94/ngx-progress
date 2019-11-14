import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VendorComponent],
  exports: [VendorComponent],
})
export class VendorModule {}
