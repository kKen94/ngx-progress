import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { NgxProgressService } from './ngx-progress.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'ngx-progress',
  templateUrl: './ngx-progress.component.html',
  styleUrls: ['ngx-progress.component.scss'],
})
export class NgxProgressComponent implements OnInit, OnDestroy {
  /**
   * Color of spinner and progress bar
   * Default color style attributes format ('#0984e3', 'rgb(169, 86, 90)', ...)
   */
  @Input() barColor = '#0984e3';
  /**
   * Show and hide the circle spinner
   */
  @Input() spinner = false;
  /**
   * Heigth of progress bar
   * Default heigth style attributes format ('1px', '1%', ...)
   */
  @Input() heigth = '1px';
  /**
   * Width of spinner
   * Default width style attributes format ('5px', '5%', ...)
   */
  @Input() spinnerDiameter = '5px';
  /**
   * The starting value of progress bar (from 1 to 100)
   */
  @Input() initialValue: number = null;
  /**
   * Show or hide overlay
   */
  @Input() overlay = true;

  show = true;

  constructor(
    public progressService: NgxProgressService,
    private self: ElementRef<NgxProgressComponent>,
    private register: RegisterService,
  ) {}

  ngOnDestroy(): void {
    this.register.unregisterBar(this.self.nativeElement);
  }

  ngOnInit(): void {
    this.register.registerBar(this.self.nativeElement);
  }
}
