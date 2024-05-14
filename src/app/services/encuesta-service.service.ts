import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Encuesta, Respuesta, RespuestaSeleccionada } from 'src/interfaces/Encuesta';
import { Observable, map } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaServiceService {
  private baseUrl = `http://localhost:3000/api/v1`;
  // private baseUrl = `http://localhost:8080/api/v1`;

  private apiUrl = `/encuestas-plantilla`;
  private apiUrlRespuestas = `usuarios`;

  constructor(private http: HttpClient) {
  }

  // Método para obtener todas las encuestas
  getEncuestas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.apiUrl}`); //http://localhost:3000/api/v1 + /encuestas-plantilla
  }

  // Método para obtener una encuesta por ID
  getEncuestaById(id: number): Observable<Encuesta> {
    return this.http.get<Encuesta>(`${this.baseUrl}${this.apiUrl}/${id}`); //http://localhost:3000/api/v1 + /encuestas-plantilla + /id
  }

  // M'etodo para enviar respuestas de encuesta
  postRespuestasUsuario(respuestas: RespuestaSeleccionada, id: number): Observable<Respuesta> {
    return this.http.post<Respuesta>(`${this.baseUrl}${this.apiUrl}/${id}/${this.apiUrlRespuestas}`, respuestas); //http://localhost:3000/api/v1 + /encuestas-plantilla/${id} + /usuarios
  }

}
