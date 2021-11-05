import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GmrpModule } from 'projects/gmrp/src/src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GmrpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
