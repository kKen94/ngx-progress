import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss'],
})
export class FormTestComponent {
  constructor(private readonly http: HttpClient) {}

  async fakeRequest(): Promise<void> {
    await this.http.get('https://github.com/kKen94/ngx-progress').toPromise();
  }
}
