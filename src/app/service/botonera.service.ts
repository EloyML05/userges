import { Injectable } from '@angular/core';
import { IPage } from '../model/model.interface';

@Injectable({
  providedIn: 'root'
})
export class BotoneraService {

constructor() { }
getbotonera(totalPages: number,page: number): string[] {
  let botonera: string[] = [];
 

  for (let i = 1; i <= totalPages; i++) {
    if (i == 1) {
      botonera.push('1');
    } else if (i >= page - 2 && i <= page - -2) {
      botonera.push(i.toString());
    } else if (i == totalPages) {
      botonera.push(totalPages.toString());
    } else if(i >= page -3 && i <= page - -3){
      botonera.push('...');
    }
  }

  return botonera;
}



}
