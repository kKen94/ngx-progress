import { Component, HostListener } from '@angular/core';
import { NgxProgressService } from '../../../lib/src/lib/ngx-progress.service';
import { ColorEvent } from 'ngx-color';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  color = '#0984e3';
  showSpinner = true;
  showBar = true;
  barHeight = '2px';
  spinnerDiameter = '15px';
  initialValue = 0;
  overlay = false;
  spinnerSpeed: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4;
  showPicker = false;
  env = environment;

  @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
    if (
      !(event.target as HTMLElement).className.includes('block') &&
      !(event.target as HTMLElement).className.includes('square') &&
      !((event.target as HTMLElement).nodeName === 'INPUT')
    ) {
      this.showPicker = false;
    }
  }

  constructor(
    public readonly progress: NgxProgressService,
    private readonly http: HttpClient,
  ) { }

  changeColor(event: ColorEvent): void {
    this.color = event.color.hex;
    if (!(event.$event instanceof KeyboardEvent)) {
      this.showPicker = false;
    }
  }

  toggleMenu(): void {
    const classs = (document.getElementsByTagName('ASIDE').item(0) as HTMLElement).className;
    (document.getElementsByTagName('ASIDE').item(0) as HTMLElement).className
      = classs.includes('active')
        ? classs.replace(' active', '')
        : classs.replace('sidebar', 'sidebar active');
  }

  async fakeRequest(): Promise<void> {
    await this.http.get('https://github.com/kKen94/ngx-progress').toPromise();
  }
}
