
//TODO: Modificar por el nombre RequestForm
export interface Usuarios {
    dni: string;
    cuil: string;
    fechaDeNacimiento: string;
    lugarDeNacimiento: string;
    genero: string;
}

/**
 * Propiedades del objeto token desencriptado
 */
//TODO: Modifica el nombre por Payload
export interface UsuarioLogueado {
    sub: string;
    dni: string;
    cuil: string;
    ['fecha de nacimiento']: string;
    ['Lugar de nacimiento']: string;
    genero: string;
    roles: string[];
    encuestas: Number[]; // [1,2,3]
    iat?: number;
    exp: number;
}

