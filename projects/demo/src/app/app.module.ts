import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxProgressOnlyBarModule } from '../../../lib/src/lib/ngx-progress.module';
import { FormsModule } from '@angular/forms';
import { ColorBlockModule } from 'ngx-color/block';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgxProgressOnlyBarModule,
    FormsModule,
    ColorBlockModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
