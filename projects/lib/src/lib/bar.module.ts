import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxProgressComponent } from './ngx-progress.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [CommonModule],
  exports: [NgxProgressComponent],
  declarations: [NgxProgressComponent, BarComponent],
})
export class BarModule {}
