import { Injectable } from '@angular/core';
import { NgxProgressService } from '../ngx-progress.service';

@Injectable({ providedIn: 'root' })
export class BarService {
  value = 0;
  progress = 0;
  interval: number;

  constructor(private readonly ngxService: NgxProgressService) {}

  start(): void {
    this.interval = setInterval(() => {
      this.value += 0.005;
      this.progress = Math.round((Math.atan(this.value) / (Math.PI / 2)) * 100 * 1000) / 1000;
      if (this.progress >= 100) {
        clearInterval(this.interval);
      }
    }, 100);
  }

  stop(): void {
    clearInterval(this.interval);
  }

  complete(): void {
    this.set(99);
    setTimeout(() => {
      clearInterval(this.interval);
      this.progress = 0;
      this.value = 0;
    }, 100);
  }

  set(value: number): void {
    this.progress = value;
    this.value = Math.tan((value / 100) * (Math.PI / 2));
  }

  increment(value: number): void {
    if (!this.ngxService.isEnable) {
      return;
    }
    this.progress += value;
    this.value = Math.tan((this.progress / 100) * (Math.PI / 2));
  }
}
