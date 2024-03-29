import { Component, Input } from '@angular/core';
import { BarService } from './bar.service';

@Component({
  selector: 'ngx-vendor-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  @Input() includeSpinner!: boolean;
  @Input() includeBar!: boolean;
  @Input() color!: string;
  @Input() barHeight!: string;
  @Input() diameter!: string;
  @Input() indeterminate!: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
  _initialValue!: number;
  get initialValue(): number {
    return this._initialValue;
  }
  @Input() set initialValue(initialValue: number) {
    this._initialValue = initialValue;
    if (initialValue) {
      this.loader.set(initialValue);
    }
  }
  @Input() spinnerSpeed!: number;

  constructor(public loader: BarService) {}
}
