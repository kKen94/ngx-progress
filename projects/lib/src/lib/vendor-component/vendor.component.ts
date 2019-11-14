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
  @Input() color: string;
  @Input() height: string;
  @Input() diameter: string;
  @Input() value = null;

  constructor(public loader: VendorService) {}
}
