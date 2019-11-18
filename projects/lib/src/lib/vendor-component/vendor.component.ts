import { Component, Input } from '@angular/core';
import { VendorService } from './vendor.service';

@Component({
  selector: 'ngx-vendor-bar',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent {
  @Input() includeSpinner: boolean;
  @Input() includeBar: boolean;
  @Input() color: string;
  @Input() barHeight: string;
  @Input() diameter: string;
  @Input() value: number = undefined;
  @Input() spinnerSpeed: number;

  constructor(public loader: VendorService) {}
}
