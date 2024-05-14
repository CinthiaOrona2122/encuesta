import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Encuesta, Pregunta, RespuestaSeleccionada } from 'src/interfaces/Encuesta';
import { EncuestaServiceService } from 'src/app/services/encuesta-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { FullScreenService } from 'src/app/services/full-screen.service';


@Component({
  selector: 'app-form-empleabilidad',
  templateUrl: './form-empleabilidad.component.html',
  styleUrls: ['./form-empleabilidad.component.css']
})
export class FormEmpleabilidadComponent implements OnInit {
  showButtonPrev = true; // Boton para subir una pregunta
  showButtonNext = true; // Boton para bajar una pregunta
  isFullscreen: boolean = false;
  id: number = 0; //El id para obtener la encuesta seleccionada en el Home.
  viewportWidth: number;

  FormularioEmpleabilidad: FormGroup;
  dataEncuesta = {} as Encuesta;
  preguntas: Pregunta[] = [];
  respuestaSeleccionada: RespuestaSeleccionada[] = [];


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fullScreen: FullScreenService,
    private encuestaService: EncuestaServiceService,
    private authService: AuthService,
    private aRoute: ActivatedRoute) {
    this.FormularioEmpleabilidad = this.fb.group({
      respuestas: this.fb.array([])
    });
    this.id = Number(aRoute.snapshot.paramMap.get('id'));
    this.checkFullscreen();
    this.viewportWidth = window.innerWidth;
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.getEncuestaById(this.id);
    }
  }

  ngAfterViewChecked() {
    this.ajustarScrollSiEsNecesario();
  }


  /**
   * Ajusta el contenido de la página al tope superior.
   */
  ajustarScrollSiEsNecesario() {
    const alturaContenido = document.body.scrollHeight;
    const alturaViewport = window.innerHeight;

    if (alturaViewport > alturaContenido) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.viewportWidth = window.innerWidth;
  }

  // Detecta cambios en el estado de pantalla completa
  @HostListener('document:fullscreenchange', ['$event'])
  onFullscreenChange() {
    this.checkFullscreen();
  }


  openFullscreen() {
    const elem = document.documentElement;
    this.fullScreen.openFullscreen(elem);
  }

  closeFullscreen() {
    this.fullScreen.closeFullscreen();
  }

  checkFullscreen() {
    this.isFullscreen = this.fullScreen.isFullscreen();
  }


  /**
  * 
  * @param id Obtiene la encuesta por ID
  */
  getEncuestaById(id: number) {
    try {
      this.encuestaService.getEncuestaById(id).subscribe((data: any) => {
        this.dataEncuesta = data;
        this.preguntas = data.preguntas.map((el: Pregunta) => {
          let opcionesArray: any[] = [];
          if (el.respuesta && el.respuesta.opciones) {
            opcionesArray = el.respuesta.opciones.split(",");
          }
          return {
            id: el.id,
            texto: el.texto,
            categoria: el.categoria,
            respuesta: {
              ...el.respuesta,
              opciones: opcionesArray
            }
          };
        });
        console.log("Preguntas procesadas: ", this.preguntas);
      });
    } catch (error) {
      console.log("Hubo un error al obtener la encuesta por su ID", error);
    }
  }




  /**
   * 
   * @param direction Mueve el bloque actual hacia adelante o hacia atrás
  */
  currentBlock = 0; // Bloque actual del formulario

  moveBlock(direction: 'prev' | 'next'): void {
    if (direction === 'next' && this.currentBlock < this.preguntas.length - 1) {
      this.currentBlock++;
    } else if (direction === 'prev' && this.currentBlock > 0) {
      this.currentBlock--;
    }
  }

  isOptionSelected(idPregunta: number, opcion: any): boolean {
    return this.respuestaSeleccionada.some(respuesta => respuesta.preguntaId === idPregunta && respuesta.opcionElegida === opcion);
  }


  /**
 * 
 * @returns Renderiza el avance del formulario por bloque.
 */
  getProgressWidth(): number {
    // Calcula el porcentaje de avance basado en el bloque actual
    return ((this.currentBlock + 1) / this.preguntas.length) * 100;
  }

  // Método para cambiar el flujo basado en la opción seleccionada.
  changeFlow(pregIndex: number, opIndex: number): void {

    // Ejemplo de lógica para una pregunta específica y opción.
    if (pregIndex === 3) { // Considerando pregIndex comenzando desde 0 para la primera pregunta.
      if (opIndex === 0) { // Asumiendo que 'Sí' está en el índice 0 del subarray de opciones
        this.currentBlock = pregIndex + 1; // Siguiente pregunta.
      } else if (opIndex === 1) { // Asumiendo que 'No' está en el índice 1 del subarray de opciones
        this.currentBlock = pregIndex + 3; // Salta a la posterior de la siguiente.
      }
      //??  Desmarcar si la pregunta (segun su indice) que las opciones de respuesta sean multiples
      //   } else if (pregIndex === 1) {
      //     this.currentBlock = pregIndex;
    }
    //TODO Para otras preguntas, simplemente avanza al siguiente bloque.
    else {
      this.currentBlock = pregIndex + 1;
    }
  }



  /**
   * Caso de uso, 'respuesta simple'.
   * @param idPregunta Es el id de la pregunta que se clickeo.
   * @param opcion Es la opcion de respuesta que se clickeo. Si la pregunta es de tipo multiple, se puede clickear mas de una opcion.
   */
  onCheckboxChange(idPregunta: number, opcion: any) {
    const index = this.respuestaSeleccionada.findIndex(respuesta => respuesta.preguntaId === idPregunta);
    // Si la pregunta ya está en la lista, actualiza la respuesta seleccionada
    if (index !== -1) {
      this.respuestaSeleccionada[index].opcionElegida = opcion;

    } else {
      // Si la pregunta no está en la lista, agrégala
      this.respuestaSeleccionada.push({ preguntaId: idPregunta, opcionElegida: opcion });
    }
  }


  /** Submit a la DB */
  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.respuestaSeleccionada);
    this.authService.logout();

  }




  /**
 * La función recibe el id del elemento al que quiere desplazarse de la pagina. Ej. goToPart('#parte1') ---> <div id="parte1">
 * @param fragment Es el id del elemento al que se quiere ir. Lleva el hashtag '#' seguido del nombre.
 */
  goToPart(fragment: any): void {
    this.router.navigateByUrl('#' + fragment);
  }




}
