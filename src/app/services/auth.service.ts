import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/interfaces/Login';
import { Observable, tap } from 'rxjs';
import { Usuarios } from 'src/interfaces/Usuarios';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `http://localhost:3000/api/v1`;
  // private baseUrl = `http://localhost:8080/api/v1`;

  private loginApi = `/auth/login`;
  private userDataApi = `/auth/usuarios`;


  constructor(private http: HttpClient, private router: Router) {
  }


  /**
   * Al iniciar sesión se almacena el token en el sessionStorage.
   * @param userData Son los datos del usuario que se envían al servidor para hacer login.
   * @returns 
   */
  login(userData: Login): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl}${this.loginApi}`, userData);
  }

  /**
   * Al cerrar sesión, se elimina el token del sessionStorage y se redirige al login.
   */
  logout(): void {
    LocalstorageService.clear();
    this.router.navigate(['/auth']);
  }


  /**
   * Actualiza los datos del usuario
   * @param userData Son los datos del usuario obtenidos del token previamente decodificado.
   * @returns 
   */
  actualizarDatos(userData: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.baseUrl}${this.userDataApi}`, userData)
  }

}


