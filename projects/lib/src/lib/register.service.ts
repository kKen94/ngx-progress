import { ElementRef, Injectable } from '@angular/core';
import { NgxProgressComponent } from './ngx-progress.component';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private readonly existingBars: ElementRef<NgxProgressComponent>[] = [];

  /**
   * Registers a new bar to the existing bars array
   * @param newBar: the component to register
   */
  registerBar(newBar: ElementRef<NgxProgressComponent>): void {
    this.existingBars.forEach(bar => {
      // tslint:disable-next-line:ban-ts-ignore
      // @ts-ignore
      // TODO: verificare errore sottostante
      bar.nativeElement['style']['display'] = 'none';
    });
    this.existingBars.push(newBar);
  }

  /**
   * Called when a component that contains an ngx-progress is destroyed
   * @param bar: the bar to unregister
   */
  unregisterBar(bar: ElementRef<NgxProgressComponent>): void {
    this.existingBars.splice(this.existingBars.indexOf(bar), 1);
    if (this.existingBars.length) {
      // tslint:disable-next-line:ban-ts-ignore
      // @ts-ignore
      this.existingBars[this.existingBars.length - 1].nativeElement['style'][
        'display'
      ] = 'inherit';
    }
  }
}
