import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
@Injectable({
  providedIn: 'root',
})
export class GmrpService {
  private api = 'https://rickandmortyapi.com/api/';
  constructor(private http: HttpClient) {}
/* 
  Obtiene un personaje segun el numero enviado
*/
  getPersonaje(number: number) {
    let url = `${this.api}${'character/' + number} `;
    return this.http.get<Data>(url);
  }
}
