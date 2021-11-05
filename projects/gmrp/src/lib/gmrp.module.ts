import { NgModule } from '@angular/core';
import { GmrpComponent } from './gmrp.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GmrpComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule  ],
  exports: [
    GmrpComponent
  ]
})
export class GmrpModule { }
