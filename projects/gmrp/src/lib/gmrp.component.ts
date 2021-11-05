import { Component, OnInit } from '@angular/core';
import { GmrpService } from './gmrp.service';
import { Data } from './data';
@Component({
  selector: 'lib-gmrp',
  templateUrl: './gmrp.component.html',
  styleUrls: ['./gmrp.sass'],
})
export class GmrpComponent implements OnInit {
  data: any;
  constructor(private gmrp: GmrpService) {}
  /* 
Genera un numero aleatorio y hace la peticion
*/
  async ngOnInit(): Promise<void> {
    let number = Math.floor(Math.random() * (398 - 1 + 1)) + 1;
    await this.gmrp.getPersonaje(number).subscribe((val) => {
      this.data = val;
    });
  }
}
