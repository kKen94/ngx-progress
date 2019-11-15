import { Injectable } from '@angular/core';
import { NgxProgressComponent } from './ngx-progress.component';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private readonly existingBars: NgxProgressComponent[] = [];

  registerBar(bar: NgxProgressComponent): void {
    this.existingBars.push(bar);
  }

  unregisterBar(bar: NgxProgressComponent): void {
    this.existingBars.splice(this.existingBars.indexOf(bar), 1);
  }

  // TODO: ogni volta che un componente viene registrato o deregistrato solo l'ultimo deve avere la variabile show impostata a true
}
