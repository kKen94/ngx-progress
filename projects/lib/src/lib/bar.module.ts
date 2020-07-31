import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar/bar.component';
import { NgxProgressComponent } from './ngx-progress.component';

@NgModule({
  imports: [CommonModule],
  exports: [NgxProgressComponent],
  declarations: [NgxProgressComponent, BarComponent],
})
export class BarModule {}
