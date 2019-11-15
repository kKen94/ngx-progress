import { Component, Input, ViewEncapsulation } from '@angular/core';
import { VendorService } from './vendor.service';

@Component({
  selector: 'ngx-vendor-bar',
  templateUrl: './vendor.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent {
  @Input() includeSpinner: boolean;
  @Input() includeBar = true;
  @Input() color: string;
  @Input() height: string;
  @Input() diameter: string;
  @Input() value: number;

  constructor(public loader: VendorService) {}
}
