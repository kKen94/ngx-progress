import { ElementRef, Injectable } from '@angular/core';
import { NgxProgressComponent } from './ngx-progress.component';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private readonly existingBars: ElementRef<NgxProgressComponent>[] = [];

  registerBar(newBar: ElementRef<NgxProgressComponent>): void {
    this.existingBars.forEach(bar => {
      bar.nativeElement['style']['display'] = 'none';
    });
    this.existingBars.push(newBar);
  }

  unregisterBar(bar: ElementRef<NgxProgressComponent>): void {
    this.existingBars.splice(this.existingBars.indexOf(bar), 1);
    this.existingBars[this.existingBars.length - 1]['style']['display'] = 'inherit';
  }
}
