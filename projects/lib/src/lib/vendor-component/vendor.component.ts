import { Component, Input, ViewEncapsulation } from '@angular/core';
import { VendorService } from './vendor.service';

@Component({
  selector: 'vendor-bar',
  templateUrl: './vendor.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent {
  @Input() includeSpinner = true;
  @Input() includeBar = true;
  @Input() color;
  @Input() height;
  @Input() diameter;
  @Input() value = null;

  constructor(public loader: VendorService) {}
}
