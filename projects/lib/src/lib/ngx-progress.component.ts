import { Component, Input } from '@angular/core';
import { NgxProgressService } from './ngx-progress.service';

@Component({
  selector: 'ngx-progess',
  templateUrl: './ngx-progress.component.html',
  styleUrls: ['ngx-progress.component.scss'],
})
export class NgxProgressComponent {

  @Input() barColor: string;
  @Input() fixed = false;
  @Input() spinner = false;
  @Input() heigth = '1px';
  @Input() spinnerDiameter: any;
  @Input() initialValue = null;

  constructor(public progressService: NgxProgressService) {}
}
