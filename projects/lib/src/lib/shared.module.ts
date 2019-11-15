import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxProgressComponent } from './ngx-progress.component';
import { VendorModule } from './vendor-component';
import { NgxProgressService } from './ngx-progress.service';
import { RegisterService } from './register.service';

@NgModule({
  imports: [CommonModule, VendorModule],
  declarations: [NgxProgressComponent],
  exports: [NgxProgressComponent, CommonModule, VendorModule],
  providers: [NgxProgressService, RegisterService],
})
export class SharedModule {}
