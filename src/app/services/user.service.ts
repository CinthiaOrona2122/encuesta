import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { UsuarioLogueado } from 'src/interfaces/Usuarios';
import { JwtDecoderService } from './jwt-decoder.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private router: Router, private jwtDecoder: JwtDecoderService) {
  }

  /**
   * Funcion para saber si el token tiene una fecha de expiración y rol.
   * @param token Se decodifica el token y se almacena en el sessionStorage.
   * @returns 
   */
  isTokenValid(token: string): boolean {
    const decodeToken: UsuarioLogueado = this.jwtDecoder.decodeToken(token);
    //si el expiracion del token es mayor a la fecha actual, el token es valido.
    const exp = decodeToken.exp > Date.now() / 1000;
    const roles = JSON.stringify(decodeToken.roles[0]);
    //console.log("'IstokenValid()' rol admin", roles.includes('ROLE_ADMIN'));
    if (exp && roles) {
      return true;
    } else {
      console.log("Token no valido - desde isTokenValid()");
      return false;
    }
  }

  /**
   * Funcion para saber si el usuario logueado es admin.
   * Esta función se utiliza en el 'auth.guard.ts' y permitir redireccionar a un array de endpoints. createUrlTree(['/', 'admin', 'users'])) etc...
   * @param token Se decodifica el token y se almacena en el sessionStorage.
   * @returns 
   */
  isAdmin(token: string): boolean {
    const decodeToken: UsuarioLogueado = this.jwtDecoder.decodeToken(token);
    const roles = JSON.stringify(decodeToken.roles[0]);
    //console.log("'IsAdmin()' rol: ", roles);
    if (roles.includes('ROLE_ADMIN')) {
      this.router.serializeUrl(this.router.createUrlTree(['/', 'admin']));
      return true;
    } else {
      console.log("No es admin - desde isAdmin()");
      return false;
    }
  }


  /**
   * Funcion para obtener los datos del usuario logueado.
   * @param token Se decodifica el token y se almacena en el sessionStorage.
   * @returns 
   */
  getUserData(token: string): Observable<UsuarioLogueado> {
    const decodeToken: UsuarioLogueado = this.jwtDecoder.decodeToken(token);
    LocalstorageService.setItem('userData', decodeToken);
    return of(decodeToken); // Importa 'of' desde 'rxjs'
  }

}
