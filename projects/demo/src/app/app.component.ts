import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  barColor = '#0984e3';
  showSpinner = false;
  showBar = true;
  barHeight = '1px';
  spinnerDiameter = '10px';
  initialValue: number = undefined;
  overlay = true;
  spinnerSpeed: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4;
}
