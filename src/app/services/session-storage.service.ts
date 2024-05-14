import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() { }

  // //guardar
  // static setItem(key:string, value: any) {
  //   sessionStorage.setItem(key, JSON.stringify(value)); //se convierte a string
  // }
  // //obtener
  // static getItem(key: string) {
  //   const value = sessionStorage.getItem(key);
  //   return value ? JSON.parse(value) : null; //se convierte a objeto
  // }

  // //clear != remove
  // static clear() {
  //   sessionStorage.clear();
  // }

  // //remove
  // static removeItem(key: string) {
  //   sessionStorage.removeItem(key); 
  // }

  // //remover el index del array
  // static removeIndex(key: string, index: number) {
  //   let value = this.getItem(key);
  //   if (value) {
  //     value.splice(index, 1);
  //     this.setItem(key, value);
  //   }
  // }

  // //acceder a un elemento del array de la key 'encuestasLocal' en el localStorageService
  // //ejemplo: getEncuesta('encuestas', index)
  // static getEncuestaIndexSession(key: string, index: number) {
  //   let value = SessionStorageService.getItem(key);
  //   if (value) {
  //     return value[index];;
  //   }
  // }

  

}
