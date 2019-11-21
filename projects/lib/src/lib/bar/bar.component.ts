import { Component, Input } from '@angular/core';
import { BarService } from './bar.service';

@Component({
  selector: 'ngx-vendor-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  @Input() includeSpinner: boolean;
  @Input() includeBar: boolean;
  @Input() color: string;
  @Input() barHeight: string;
  @Input() diameter: string;
  @Input() value: number = undefined;
  @Input() spinnerSpeed: number;

  constructor(public loader: BarService) {}
}
