import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorBlockModule } from 'ngx-color/block';
import { NgxProgressOnlyHttpModule } from '../../../lib/src/lib/ngx-progress.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgxProgressOnlyHttpModule,
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
