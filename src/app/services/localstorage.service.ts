import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() {
   }

  //crear una key 'encuestasLocal' en el localstorageService
  //ejemplo: setEncuestas('encuestasLocal', value)
  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value)); //se convierte a string
  }

  //obtener la key 'encuestasLocal' en el localstorageService
  //ejemplo: getEncuestas('encuestasLocal')
  static getItem(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null; //se convierte a objeto
  }

  //acceder a un elemento index del array de la key 'encuestasLocal' en el localStorage
  //ejemplo: getEncuestaLocal('encuestasLocal', index)
  static getEncuestaByIndex(key: string, index: number) {
    let value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value)[index];
    }
  }

  static clear() {
    localStorage.clear();
  }

  //remover la key 'encuestasLocal' en el localStorageService
  //ejemplo: removeEncuestas('encuestasLocal')
  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  //remover el index de la key 'encuestasLocal' en el localStorage
  //ejemplo: removeIndex('encuestasLocal', index)
  static removeByIndex(key: string, value: any) {
    const data = LocalstorageService.getItem(key);
    if (data) {
      data.splice(value, 1);
      LocalstorageService
    } 
  }




}
