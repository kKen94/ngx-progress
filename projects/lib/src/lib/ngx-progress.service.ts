import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BarService } from './bar/bar.service';

@Injectable({ providedIn: 'root' })
export class NgxProgressService {
  // tslint:disable-next-line:variable-name
  _regexUrl: RegExp[] = [];
  /**
   * Is done the mapping from string to regex on variable assignment
   * @param patterns: the whitelist
   */
  set regexUrl(patterns: string[]) {
    this._regexUrl = patterns.map(p => new RegExp(p));
  }

  private readonly endEmitter = new Subject();
  private readonly startEmitter = new Subject();

  /**
   * Tells if bar is enabled or not
   */
  // tslint:disable-next-line:variable-name
  private _isEnable = true;
  get isEnable(): boolean {
    return this._isEnable;
  }

  /**
   * Tells when progress ends
   */
  end$ = this.endEmitter.asObservable();

  /**
   * Tells when progress starts
   */
  start$ = this.startEmitter.asObservable();

  isStarted!: boolean;
  progressCount = 0;

  constructor(private readonly barService: BarService) {}

  /**
   * Starts progress bar.
   * If other request / router changes had previously started the progressbar
   * it doesn't restart but continues to move smoothly
   */
  start(): void {
    if (this.progressCount === 0) {
      this.barService.start();
      this.isStarted = true;
      this.startEmitter.next();
    }
    this.progressCount++;
  }

  /**
   * Ends progress bar.
   * If there are other requests in progress
   * this will not disappear until those are also resolved
   */
  end(): void {
    if (this.progressCount > 0) {
      this.progressCount--;
    }
    setTimeout(() => {
      if (this.progressCount === 0) {
        this.barService.complete();
        this.isStarted = false;
        this.endEmitter.next();
      }
    }, 200);
  }

  /**
   * Force reset of the progress bar
   */
  reset(): void {
    this.barService.start();
    this.isStarted = true;
    this.progressCount++;
    this.startEmitter.next();
  }

  /**
   * Force the end of the progress
   */
  terminate(): void {
    this.barService.complete();
    this.isStarted = false;
    this.endEmitter.next();
  }

  /**
   * Set the progress bar at specified value
   * @param value: The value at which to set the progress bar
   */
  set(value: number): void {
    this.barService.set(value);
  }

  /**
   * Enable bars if it has been previously disabled
   */
  enable(): void {
    this._isEnable = true;
  }

  /**
   * Disables all the bars that will not be shown until the next enabling
   */
  disable(): void {
    this._isEnable = false;
  }
}
