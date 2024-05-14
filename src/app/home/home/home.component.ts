import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dniCuilValidator } from 'src/app/Utils/Validators/dniCuilValidator';
import { AuthService } from 'src/app/services/auth.service';
import { EncuestaServiceService } from 'src/app/services/encuesta-service.service';
//import { SessionStorageService } from 'src/app/services/session-storage.service';
import { Encuesta, Pregunta } from 'src/interfaces/Encuesta';
import { UsuarioLogueado, Usuarios } from 'src/interfaces/Usuarios';
import { lugarResidencia, listaGenero } from 'src/constantes/data_formulario';
import { UserService } from 'src/app/services/user.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData$!: Observable<UsuarioLogueado>;
  FormularioDatosPersonales: FormGroup = new FormGroup({});
  lugarResidencia = lugarResidencia;
  listaGenero = listaGenero;

  encuestaIds: Number[] = []; //[1,2,3] del payload
  encuestas: Encuesta[] = []; //[{},{},{}] las del template
  preguntas: Pregunta[] = []; //preguntas y respuestas del template


  encuestaSeleccionada: number = 0;
  userData: any;//payload 
  email: string = '';
  formData: Usuarios[] = []; //
  indexPreguntas: any;

  showButtonNext: boolean = true;
  //Variable para manejo del template ROL_USUARIO o ROL_ADMIN
  isAdmin: boolean = false;
  //Variable para saber si las encuestas ya fueron cargadas en el localstorage
  encuestasCargadasEnLocal: boolean = false;
  //Variable para saber si las encuestas están vacías y mostrar un mensaje
  encuestasVacia: boolean = false;
  //Ocultar el formulario si isSubmitted es true en el localstorage
  isSubmitted: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private encuestaService: EncuestaServiceService,
  ) { }


  ngOnInit(): void {
    //debugger;
    let encuestasLocal = LocalstorageService.getItem('encuestasLocal');
    /* SERVICIO 1° */
    if (!this.userData && !encuestasLocal) {
      this.obtenerUserDataService(); // Solo llama al servicio una vez si no hay datos en el localstorage (userData y encuestas)
      if (this.encuestaIds) {
        this.obtenerEncuestasPorIds(this.encuestaIds.map(Number));
      }
    } else {
      /* LOCAL STORAGE 2° */
      this.obtenerUserDataLocalStorage();
      this.encuestas = encuestasLocal;
      this.encuestasCargadasEnLocal = true; // Marcar como cargadas las encuestas locales
    }

    this.getCurrentUser();
    this.initForm();


    //? VERIFICA QUE EL FORMULARIO YA FUE COMPLETADO Y MANTIENE OCULTO EL FORMULARIO O DESHABILITADOS LOS CAMPOS
    const savedFormState = LocalstorageService.getItem('isSubmitted'); //Comentar este bloque para seguir viendo el formulario al enviarlo
    if (savedFormState) {
      this.isSubmitted = savedFormState;
    }
    if (this.isSubmitted) {
      this.checkReadOnly();
    }
  }


  /**
   * Obtiene los datos del usuario logueado y los los id's de las encuesta, cada uno los guarda en la variable 'userData' y 'encuestas'.
   */
  obtenerUserDataService() {
    const token = LocalstorageService.getItem('token');
    this.userData$ = this.userService.getUserData(token);
    this.userData$.subscribe(userData => {
      // Aquí puedes manejar los datos del usuario
      console.log(userData);
      if (!userData) {
        console.log('No se encontraron los datos del usuario en sessionStorage.');
        alert('No se encontraron los datos del usuario en sessionStorage.');
        return;
      }
      //? SANITIZAR DATOS
      const data = {
        email: userData.sub,
        dni: userData.dni,
        cuil: userData.cuil,
        fechaDeNacimiento: userData['fecha de nacimiento'],
        lugarDeNacimiento: userData['Lugar de nacimiento'],
        genero: userData.genero,
        encuestas: userData.encuestas
      };
      this.userData = data;
      this.email = data.email;
      this.formData.push(data); //Rellena el formulario post confirmación de datos
      this.encuestaIds = this.userData.encuestas;
      console.log('Datos del usuario del userService:', this.userData, " encuestas Ids ", this.encuestaIds);

      this.initForm();
      this.cargarDatosFormulario();
    },
      error => {
        console.error('Error al obtener los datos del usuario:', error);
        //!!FALTA TOAST
      }
    );
  }


  /** 
  *recarga con los datos del token si ya registro sus datos antes
  */
  initForm() {
    this.FormularioDatosPersonales = this.fb.group({
      email: [this.userData.email],
      residencia: [this.userData.lugarDeNacimiento, [Validators.required]],
      dni: [this.userData.dni, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(8), Validators.maxLength(20)]],
      cuil: [this.userData.cuil, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(11), Validators.maxLength(20)]],
      nacimiento: [this.userData.fechaDeNacimiento, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      genero: [this.userData.genero, [Validators.required]]
    },
      {
        validators: dniCuilValidator()
      });
  }

  /**
  * Carga los datos del usuario en el formulario.
  */
  cargarDatosFormulario() {
    //debugger;
    this.FormularioDatosPersonales.patchValue({
      email: this.userData.sub, //Dato guardado en variable global de clase al obtener el userData del servidor.
      dni: this.userData.dni,
      cuil: this.userData.cuil,
      nacimiento: this.userData['fecha de nacimiento'],
      residencia: this.userData['Lugar de nacimiento'],
      genero: this.userData.genero
    });
  }


  /**
   * Obtiene los datos del usuario logueado del localStorage.
   */
  obtenerUserDataLocalStorage() {
    const userDataFromLocal: UsuarioLogueado = LocalstorageService.getItem('userData'); //obtener del localstorage
    if (userDataFromLocal) {
      //TODO FROM LOCAL STORAGE 'userData'     
      this.userData = userDataFromLocal;
      console.log("Usuario cargado desde local storage", this.userData);
    }
  }

  obtenerEncuestasPorIds(ids: number[]): void {
    ids.forEach(id => {
      this.cargarEncuestasService(id);
    });
    // Una vez que se han cargado todas las encuestas, marcamos como cargadas las encuestas locales
    this.encuestasCargadasEnLocal = true;
  }

  /**
   * Carga las encuestas del usuario.
   */
  cargarEncuestasService(id: any) {
    this.encuestaService.getEncuestaById(id).subscribe((encuesta: Encuesta) => {
      this.encuestas.push(encuesta);
      LocalstorageService.setItem('encuestasLocal', this.encuestas); // leer desde el localstorage
      this.preguntas = encuesta.preguntas;
      // this.preguntas.map((el: Pregunta) => {
      //   let opcionesArray: string[] = [];
      //   if (el.respuesta && el.respuesta.opciones) {
      //     opcionesArray = el.respuesta.opciones.split(",").map((opcion: string) => opcion.trim());
      //   }
      //   return {
      //     id: el.id,
      //     texto: el.texto,
      //     categoria: el.categoria,
      //     respuesta: {
      //       ...el.respuesta,
      //       opciones: opcionesArray
      //     }
      //   };
      // });

      // const { indicePreguntas } = this.calcularDatosPreguntas(this.preguntas);
      // console.log("Índice de preguntas:", indicePreguntas);

      //llamamos a la funcion para calcular los datos de las preguntas
      const datosPreguntas = this.calcularDatosPreguntas(this.preguntas);
      // Obtenemos el array de preguntas con respuestas abiertas
      const respuestasAbiertas = datosPreguntas.respuestasAbiertas;
      console.log("Array de preguntas con respuestas abiertas:", respuestasAbiertas);
      //Eliminamos el array de preguntas con respuestas abiertas
      respuestasAbiertas.forEach((el: Pregunta) => {
        const index = this.preguntas.findIndex(pregunta => pregunta.id === el.id);
        if(index !== -1){
          this.preguntas.splice(index, 1);
        }
      });

      console.log("Array de preguntas sin las de respuesta abierta:", this.preguntas);
    },
      error => {
        console.log("Hubo un error al obtener la encuesta por su ID", error);
      })
  };

  // Función para calcular respuestas abiertas y el índice de preguntas
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
   * 
   *get para acceder a los campos del formulario y sus controles
   */
  get dni() { return this.FormularioDatosPersonales.controls['dni']; }
  get cuil() { return this.FormularioDatosPersonales.controls['cuil']; }
  get nacimiento() { return this.FormularioDatosPersonales.controls['nacimiento']; }
  get genero() { return this.FormularioDatosPersonales.controls['genero']; }
  get residencia() { return this.FormularioDatosPersonales.controls['residencia']; }


  /**
   * Función para actualizar los datos de cualquier usuario admin/user
   */
  onSubmit(): void {
    const data: Usuarios = {
      dni: this.FormularioDatosPersonales.value.dni,
      cuil: this.FormularioDatosPersonales.value.cuil,
      fechaDeNacimiento: this.FormularioDatosPersonales.value.nacimiento,
      lugarDeNacimiento: this.FormularioDatosPersonales.value.residencia,
      genero: this.FormularioDatosPersonales.value.genero
    };

    if (this.FormularioDatosPersonales.valid) {
      this.authService.actualizarDatos(data).subscribe((data: any) => {
        this.userData = data;
        console.log("Datos actualizados del usuario:", this.userData);
        LocalstorageService.setItem('isSubmitted', true);
        LocalstorageService.setItem('userData', data);
        this.isSubmitted = true; //Se oculta el formulario original
        this.checkReadOnly(); //cuando termina de cargar el formulario se dehabilita, luego si recarga la variable isSubmitted en local lo oculta
        this.ajustarAltura();
      },
        (error) => {
          console.log("Hubo un error al actualizar los datos del usuario", error);
          this.isSubmitted = false;
        });
    } else {
      console.log("Formulario invalido");
    }
  }



  /* FUNCIONES UTILITARIAS */

  /**
   * Deshabilita el formulario si ya fue enviado.
   */
  checkReadOnly() {
    //debugger;
    if (this.FormularioDatosPersonales.valid && this.isSubmitted) {
      this.FormularioDatosPersonales.disable();
    }
    document.getElementById('btnSubmit')?.setAttribute('disabled', 'true');
  }


  /**
   * Ajusta la ventana para que quede el scroll al inicio de la página.
   */
  ajustarAltura() {
    const viewportHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    if (viewportHeight < scrollHeight) {
      window.scrollTo(0, 0);
    }
  }


  /**
  * 
  * @param idPregunta El id de la pregunta que se clickeo.
  * @param opcion La opcion de respuesta que se clickeo.
  * @returns Si true la opcion de respuesta fue seleccionada y se colorea.
  */
  isOptionSelected(idEncuesta: number): boolean {
    return this.encuestaSeleccionada === idEncuesta;
  }


  /**
   * Guarda el id de la encuesta seleccionada por el usuario.
   * @param id El id de la encuesta.
   */
  guardarEleccion(id: number, index: number) {
    //debugger;
    this.encuestaSeleccionada = id;
    let encuestaActiva = LocalstorageService.getEncuestaByIndex('encuestasLocal', index);
    console.log('Encuestas ID seleccionada:', id, "Encuesta activa:", encuestaActiva);
    LocalstorageService.setItem('id_index', { id: id, index: index });
  }


  /**
   * Redirige a la ruta de la encuesta seleccionada.
   */
  responderEncuesta() {
    //debugger;
    if (this.encuestaSeleccionada) {
      this.router.navigate(['/inter/', this.encuestaSeleccionada]);
    }
    else {
      alert("No haz seleccionado una encuesta");
    }
  }

  /**
   * Verifica que haya encuestas disponibles en el localstorage.
   */
  verificarEncuestas() {
    if (this.encuestas.length === 0) {
      this.encuestasVacia = true;
      alert("No hay encuestas disponibles");
    }
  }


  /**
   * Redirige al usuario admin a la ruta del dashboard
   */
  irAlDashboard() {
    this.router.navigate(['/admin']);
  }


  /**
   * Obtiene el usuario actual y verifica si es admin o no, para establecer diferentes templates.
   */
  getCurrentUser() {
    //debugger;
    const token = LocalstorageService.getItem('token');
    const currentUser = this.userService.isAdmin(token);
    this.isAdmin = currentUser;
    //console.log("Es admin:", this.isAdmin);
  }

}