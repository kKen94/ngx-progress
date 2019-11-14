import { Component, Input } from '@angular/core';
import { NgxProgressService } from './ngx-progress.service';

@Component({
  selector: 'ngx-progess',
  templateUrl: './ngx-progress.component.html',
  styleUrls: ['ngx-progress.component.scss'],
})
export class NgxProgressComponent {

  @Input() barColor = '#0984e3';
  @Input() spinner = false;
  @Input() heigth = '1px';
  @Input() spinnerDiameter = '5px';
  @Input() initialValue = null;
  @Input() overlay = true;

  constructor(public progressService: NgxProgressService) {}
}
