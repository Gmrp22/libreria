import { Component } from '@angular/core';
import { GmrpComponent } from 'projects/gmrp/src/src';
@Component({
  selector: 'app-root',
  template:  `<lib-gmrp> </lib-gmrp>`,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'libreriaGmrp';
}
