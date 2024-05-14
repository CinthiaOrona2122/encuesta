import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
  
    //PAsar funcion a dashboard
  /**
   * Se obtienen todas las encuestas de la Base de Datos.
   */
  // obtenerEncuestas() {
  //   try {
  //     this.encuestaService.getEncuestas().subscribe((data: any) => {
  //       this.encuestas = data;
  //       console.log('Encuestas obtenidas:', this.encuestas);
  //     });
  //   } catch (error) {
  //     console.log('Error al obtener las encuestas:', error);
  //   }
  // }
}
