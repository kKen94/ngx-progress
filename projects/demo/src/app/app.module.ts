import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSliderModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxProgressOnlyBarModule } from '../../../lib/src/lib/ngx-progress.module';
import { FormsModule } from '@angular/forms';
import { ColorBlockModule } from 'ngx-color/block';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgxProgressOnlyBarModule,
    MatCheckboxModule,
    FormsModule,
    ColorBlockModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
