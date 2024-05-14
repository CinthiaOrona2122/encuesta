
export interface LugarResidencia {
    value: string;
    name: string;
}

export interface Genero {
    value: string;
    name: string;
}


export interface Encuesta {
  respondida?: boolean;
  id: number;
  nombre: string;
  descripcion: string;
  estado: number;
  preguntas: Pregunta[];
}

export interface Pregunta {
    id: number;
    texto: string;
    subtitulo?: string;
    categoria: Categoria;
    respuesta: Respuesta;
}

export interface Categoria {
    id: number;
    nombre: string;
}

export interface Respuesta {
    id: number;
    tipoRespuesta: string;
    opciones: string;
}

export interface RespuestaSeleccionada {
    preguntaId: number;
    opcionElegida: string;
}


