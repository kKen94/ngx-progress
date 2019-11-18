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
   * Show and hide circle spinner
   */
  @Input() showSpinner = false;
  /**
   * Show and hide progress bar
   */
  @Input() showBar = true;
  /**
   * Height of progress bar
   * Default height style attributes format ('1px', '1%', ...)
   */
  @Input() barHeight = '1px';
  /**
   * Width of spinner
   * Default width style attributes format ('5px', '5%', ...)
   */
  @Input() spinnerDiameter = '10px';
  /**
   * The starting value of progress bar (from 1 to 100)
   */
  @Input() initialValue: number = undefined;
  /**
   * Show or hide overlay
   */
  @Input() overlay = true;
  /**
   * Set spinner speed, from 1 to 10
   */
  @Input() spinnerSpeed: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4;

  show = true;

  constructor(
    public readonly progressService: NgxProgressService,
    private readonly self: ElementRef<NgxProgressComponent>,
    private readonly register: RegisterService,
  ) {}

  ngOnDestroy(): void {
    this.register.unregisterBar(this.self.nativeElement);
  }

  ngOnInit(): void {
    this.register.registerBar(this.self.nativeElement);
  }
}
