import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EncuestaServiceService } from 'src/app/services/encuesta-service.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ScrollHelperService } from 'src/app/services/scroll-helper.service';
import { Encuesta, Pregunta, RespuestaSeleccionada } from 'src/interfaces/Encuesta';


@Component({
  selector: 'app-form-cfp',
  templateUrl: './form-cfp.component.html',
  styleUrls: ['./form-cfp.component.css']
})
export class FormCfpComponent implements OnInit {
  encuestaForm: FormGroup;
  showButtonPrev = true; // Boton para subir una pregunta
  showButtonNext = true; // Boton para bajar una pregunta
  isSubmitted = false;
  mostrarModal: boolean = false;

  dataId: number;
  viewportWidth: number;
  preguntas: Pregunta[] = []
  indexPreguntas: any = [];
  respuestaSeleccionada: RespuestaSeleccionada[] = [];

  opciones: any = '';
  dataEncuesta: any = {};
  currentBlock = 0;


  constructor(
    private fb: FormBuilder,
    private encuestaService: EncuestaServiceService,
    private authService: AuthService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private scrollHelper: ScrollHelperService
  ) {
    this.encuestaForm = this.fb.group({
      respuestas: new FormArray([])
    });
    this.viewportWidth = window.innerWidth;
    this.dataId = Number(this.aRoute.snapshot.params['id']);
  }

  /**
   * Este metodo se ejecuta al iniciar el componente, lee el id del param de la url y 
   * obtiene la encuesta por su id del localStorage, si no la encuentra, la obtiene del servicio.
   */
  ngOnInit() {
    if (this.dataId !== 0) {
      console.log("Aca lee la encuesta del localstorage");
      const encuestasLocal = LocalstorageService.getItem('encuestasLocal');
      if (encuestasLocal) {
        const findId = encuestasLocal.findIndex((el: Encuesta) => el.id === this.dataId);
        this.dataEncuesta = encuestasLocal[findId];
        this.preguntas = this.dataEncuesta.preguntas.map((el: Pregunta) => {
          let opcionesArray: string[] = [];
          if (el.respuesta && el.respuesta.opciones) {
            opcionesArray = el.respuesta.opciones.split(",").map((opcion: string) => opcion.trim());
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
        // const { indicePreguntas, respuestasAbiertas } = this.calcularDatosPreguntas(this.preguntas);
        // console.log("Índice de preguntas:", indicePreguntas);
        // console.log("Respuestas abiertas:", respuestasAbiertas);

      } else {
        this.getEncuestasById(this.dataId);
        //console.log("Aca lee la encuesta del servicio getById");
      }
    }
  }

  /**
   * Obtiene la encuesta por su ID y la guarda en la variable 'encuestas'.
   * @param id 
   */
  getEncuestasById(id: number) {
    //debugger;
    this.encuestaService.getEncuestaById(id).subscribe((data: any) => {
      // Agregar las nuevas encuestas al array
      this.dataEncuesta = data;
      LocalstorageService.setItem('encuestasLocal', this.dataEncuesta); // leer desde el localstorage     
      this.preguntas = data.preguntas.map((el: Pregunta) => {
        let opcionesArray: string[] = [];
        if (el.respuesta && el.respuesta.opciones) {
          opcionesArray = el.respuesta.opciones.split(",").map((opcion: string) => opcion.trim());
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
      // const { indicePreguntas, respuestasAbiertas } = this.calcularDatosPreguntas(this.preguntas);
      // console.log("Índice de preguntas:", indicePreguntas);
      // console.log("Respuestas abiertas:", respuestasAbiertas);

    },
      error => {
        console.log("Hubo un error al obtener la encuesta por su ID", error);
      });
  }

  /**
   * Esta función se encarga de calcular los datos de las preguntas, como el índice de preguntas y las respuestas abiertas.
   * @param preguntas Toma un array de preguntas.
   * @returns 
   */
  calcularDatosPreguntas(preguntas: Pregunta[]): { indicePreguntas: any[], respuestasAbiertas: Pregunta[] } {
    const respuestasAbiertas = preguntas.filter((el: Pregunta) => {
      return el.respuesta.tipoRespuesta === "Respuesta abierta (texto libre)";
    });

    const indicePreguntas = preguntas.map((el: Pregunta) => {
      return { id: el.id };
    });

    return { indicePreguntas, respuestasAbiertas };
  }

  /**
   * Este método envía las respuestas al servidor y redirecciona al usuario a la página de inicio.
   */
  onSubmit(e: Event) {
    e.preventDefault();
    try {
      //enviar 
      this.enviarRespuestasAlServidor();
      // limpiar
      LocalstorageService.removeItem('respuestasEncuesta');

      //eliminar encuesta por index
      const encuestasLocal = LocalstorageService.getItem('encuestasLocal');
      if (encuestasLocal) {
        const findId = encuestasLocal.findIndex((el: Encuesta) => el.id === this.dataId);
        encuestasLocal.splice(findId, 1);
        LocalstorageService.setItem('encuestasLocal', encuestasLocal);
      }
      //redireccionar
      this.router.navigate(['/home']);
    } catch (error) {
      console.log("Hubo un error al enviar las respuestas al servidor", error);
    }
  }

  /**
   * Envia las respuestas al servidor.
   */
  enviarRespuestasAlServidor() {
    // Obtenemos las respuestas guardadas en sessionStorage
    let respuestasGuardadas = LocalstorageService.getItem('respuestasEncuesta');
    let respuestas = respuestasGuardadas ? respuestasGuardadas : [];
    // Crear el objeto con la propiedad respuestas que contiene el array
    const respuesta: any = {
      respuestas: respuestas
    };
    this.encuestaService.postRespuestasUsuario(respuesta, this.dataId).subscribe((data: any) => {
      console.log("Respuestas enviadas al servidor: ", respuesta);
    });
  }

  /**
   * Devuelve un booleano que permite marcar de otro color la opcion seleccionada.
   * @param idPregunta El id de la pregunta que se clickeo.
   * @param opcion La opcion de respuesta que se clickeo.
   * @returns 
   */
  isOptionSelected(idPregunta: number, opcion: any): boolean {
    return this.respuestaSeleccionada.some(respuesta => respuesta.preguntaId === idPregunta && respuesta.opcionElegida === opcion);
  }

  /**
   * Guarda el ultimo valor de respuesta, por cada pregunta, en un array en el sessionStorage, y se elimina al enviar la encuesta.
   * @param preguntaId Toma el id de la pregunta.
   * @param valor Toma el valor de la respuesta.
   */
  guardarRespuestaTemporal(preguntaId: number, valor: any) {
    // Intentamos obtener el array de respuestas existente, si no existe, inicializamos un array vacío
    let respuestas = LocalstorageService.getItem('respuestasEncuesta') || [];
    // Buscamos si ya existe una respuesta para la preguntaId
    const indiceExistente = respuestas.findIndex((respuesta: { preguntaId: number; }) => respuesta.preguntaId === preguntaId);
    // Si la pregunta ya tiene una respuesta, actualizamos su valor
    if (indiceExistente !== -1) {
      // Si la pregunta ya tiene una respuesta, actualizamos su valor
      respuestas[indiceExistente].opcionElegida = valor;
    } else {
      // Si es una nueva pregunta, añadimos el nuevo objeto al array
      respuestas.push({ preguntaId, opcionElegida: valor });
    }
    // Guardamos el array actualizado en sessionStorage
    LocalstorageService.setItem('respuestasEncuesta', respuestas);
  }

  /**
   * 
   * @param direction Mueve el bloque actual hacia adelante o hacia atrás
   */
  moveBlock(direction: 'prev' | 'next'): void {
    if (direction === 'next' && this.currentBlock < this.preguntas.length - 1) {
      this.currentBlock++;
    } else if (direction === 'prev' && this.currentBlock > 0) {
      this.currentBlock--;
    }
  }

  /**
   * 
   * @returns Renderiza el avance del formulario por bloque.
   */
  getProgressWidth(): number {
    // Calcula el porcentaje de avance basado en el bloque actual
    return (((this.currentBlock) / this.preguntas.length)) * 100; //

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

  /**
 * Cierra la sesión del usuario.
 */
  logout() {
    this.authService.logout();
  }

  /**
   * Este método se encarga de calcular el offset de cada bloque de preguntas.
   * @param index Indice de la pregunta actual
   * @returns 
   */
  blockOffset(index: number): number {
    return index / this.preguntas.length;
  }

  /**
   * Ajusta el scroll al medio de la pantalla.
   */
  scrollToMiddle() {
    this.scrollHelper.ajustarScrollSiEsNecesario();
  }

  /**
   * Escucha el evento de resize de la ventana y actualiza el viewportWidth.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.viewportWidth = window.innerWidth;
  }



}