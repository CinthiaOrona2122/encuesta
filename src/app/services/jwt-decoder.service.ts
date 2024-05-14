import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtDecoderService{

  constructor() {
   }



  public decodeToken(token: string): any {
    if (!token) {
      // Manejar el caso en el que el token es null o undefined
      throw new Error('Token is null or undefined');
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
      .split('')
      .map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
    .join('')
    );
    //console.log('JSON Payload desde jwt-decoder: ', jsonPayload);
    return JSON.parse(jsonPayload);
    
  }
}
