import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { GmrpService } from './gmrp.service';
import { Data } from './data';
import { Input } from '@angular/core';
@Component({
  selector: 'lib-gmrp',
  templateUrl: './gmrp.component.html',
  styleUrls: ['./gmrp.sass'],
})
export class GmrpComponent implements OnInit {
  @Input() number: number
  @Output() alert = new EventEmitter<any>();
  data: any;
  constructor(private gmrp: GmrpService) {
    this.number=1
  }
  /*
Genera un numero aleatorio y hace la peticion
*/
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.number.currentValue != changes.number.previousValue) {
      this.alert.emit("Cambio de personaje")
      this.gmrp.getPersonaje(this.number).subscribe((val) => {
        this.data = val;
      });
    }
  }
  ngOnInit(): void {}

 
    

}
