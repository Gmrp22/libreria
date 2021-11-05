import { Component } from '@angular/core';
import { GmrpComponent } from 'projects/gmrp/src/src';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  newNumber = 1;
  flag=false
  MSG=""
  title = 'libreriaGmrp';

  ngDoCheck(): void {
    if(this.flag){
      this.newNumber += 1;
      this.flag=false
    }
    
  }
  nextPersonaje(){
    if(this.flag){
      this.flag=false
    }
    else{
      this.flag=true
    }
  }
  cambio(response: any){
    this.MSG=response
    console.log(this.MSG)
  }
}
