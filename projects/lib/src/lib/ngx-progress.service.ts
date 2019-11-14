import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VendorService } from './vendor-component/vendor.service';

@Injectable()
export class NgxProgressService {

  private endEmitter = new Subject();
  private startEmitter = new Subject();

  /**
   * Notifica quando lo spinner scompare
   */
  end$ = this.endEmitter.asObservable();

  /**
   * Notifica quando lo spinner parte
   */
  start$ = this.startEmitter.asObservable();

  isStarted: boolean;
  progressCount = 0;

  constructor(
    private vendorBarService: VendorService,
  ) { }

  /**
   * Viene fatta partire la progress bar.
   * Se ci sono altre navigazioni / chiamate che avevano precedentemente fatto partire la progressbar
   * questa non riparte da 0 ma continua fluidamente ad andare avanti
   */
  start(): void {
    if (this.progressCount === 0) {
      this.vendorBarService.start();
      this.isStarted = true;
      this.startEmitter.next();
    }
    this.progressCount++;
  }

  /**
   * Viene interrota la progressbar.
   * Se ci sono però altre chiamate / navigazioni di mezzo non sparisce finché non vengono risolte anche quelle
   */
  end(): void {
    this.progressCount--;
    setTimeout(() => {
      if (this.progressCount === 0) {
        this.vendorBarService.complete();
        this.isStarted = false;
        this.endEmitter.next();
      }
    }, 200);
  }

  /**
   * Forza la progressbar a partire da 0 anche se altre chiamate / navigazioni sono in corso
   */
  reset(): void {
    this.vendorBarService.start();
    this.isStarted = true;
    this.progressCount++;
    this.startEmitter.next();
  }

  /**
   * Forza la progressbar a scomparire anche se altre chiamate / navigazioni sono in corso
   */
  terminate(): void {
    this.vendorBarService.complete();
    this.isStarted = false;
    this.endEmitter.next();
  }
}
