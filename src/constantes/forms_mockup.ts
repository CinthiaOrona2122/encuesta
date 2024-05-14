export const encuestas = [
    {
        "id": 1,
        "nombre": "Encuesta Empleabilidad CaC",
        "descripcion": "Encuesta de empleabilidad para egresados de Codo a Codo",
        "estado": 1,
        "preguntas": [
            {
                "id": 6,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿En que cuatrimestre cursaste Codo a Codo? En caso de haber cursado mas de una vez respondenos por tu ultima experiencia",
                "respuesta": {
                    "id": 4,
                    "tipoRespuesta": "Cuatrimestre cursado",
                    "opciones": "1er Cuatrimestre 2022, 2do Cuatrimestre 2022, 1er Cuatrimestre 2023, 2do Cuatrimestre 2023"
                }
            },
            {
                "id": 7,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿De que curso de Codo a Codo egresaste? En caso de haber egresado de mas de un curso responde por el ultimo",
                "respuesta": {
                    "id": 5,
                    "tipoRespuesta": "Cursos Codo a Codo",
                    "opciones": "Big Data, Diseño UX/UI, FullStack - Java, FullStack - JavaScript/Node.js, FullStack - PHP, FullStack - Python, Programacion Inicial, Testing QA + Automatizacion, Django, React, Spring, Unity"
                }
            },
            {
                "id": 8,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿Cuanto crees que Codo a Codo te ayudo a mejorar tu perfil para buscar trabajo o mejorar tu desempeño y crecimiento laboral?",
                "respuesta": {
                    "id": 6,
                    "tipoRespuesta": "Valoracion escala",
                    "opciones": "Muchísimo, Bastante, Poco, Nada, Indistinto"
                }
            },
            {
                "id": 9,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "Cuando terminaste de cursar Codo a Codo, ¿continuaste con algun otro estudio vinculado al sector IT?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 10,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿Que tipo de estudios continuaste realizando en el sector IT luego de Codo a Codo?",
                "respuesta": {
                    "id": 8,
                    "tipoRespuesta": "Tipos de cursos",
                    "opciones": "Curso de duración cuatrimestral gratuito, Curso de duración cuatrimestral pago, Curso de duración anual gratuito, Curso de duración anual pago, Estudios de nivel terciario gratuito, Estudios de nivel terciario pago, Estudio de nivel universitario gratuito, Estudio de nivel universitario pago, Otro"
                }
            },
            {
                "id": 11,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿Cual crees que es tu nivel en programacion?",
                "respuesta": {
                    "id": 9,
                    "tipoRespuesta": "Seniority",
                    "opciones": "Senior, Semi senior, Junior, Trainee"
                }
            },
            {
                "id": 12,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿Cual es tu situacion laboral actual?",
                "respuesta": {
                    "id": 10,
                    "tipoRespuesta": "Situacion laboral actual",
                    "opciones": "Trabajo, No trabajo y busco trabajo, No trabajo y no busco trabajo, Jubilado/a y/o pensionado/a"
                }
            },
            {
                "id": 13,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "Actualmente tu trabajo es...",
                "respuesta": {
                    "id": 12,
                    "tipoRespuesta": "Condicion laboral actual",
                    "opciones": "En relacion de dependencia, Soy monotributista, Trabajo de manera informal"
                }
            },
            {
                "id": 14,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿Tu puesto de trabajo actual esta relacionado con el sector IT?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 15,
                "categoria": {
                    "id": 1,
                    "nombre": "Pregunta encuesta"
                },
                "texto": "¿Trabajas actualmente como programador?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 16,
                "categoria": {
                    "id": 2,
                    "nombre": "Oportunidades laborales"
                },
                "texto": "¿Te interesaria recibir busquedas laborales ajustadas a tu perfil?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 1,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "Mail",
                "respuesta": {
                    "id": 22,
                    "tipoRespuesta": "Respuesta abierta (texto libre)",
                    "opciones": ""
                }
            },
            {
                "id": 2,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "DNI/Nro de Pasaporte",
                "respuesta": {
                    "id": 22,
                    "tipoRespuesta": "Respuesta abierta (texto libre)",
                    "opciones": ""
                }
            },
            {
                "id": 3,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "Genero",
                "respuesta": {
                    "id": 1,
                    "tipoRespuesta": "Genero",
                    "opciones": "Masculino, Femenino, No Binario"
                }
            },
            {
                "id": 4,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "Lugar de Residencia",
                "respuesta": {
                    "id": 2,
                    "tipoRespuesta": "Lugar de residencia",
                    "opciones": "Ciudad Autonoma de Buenos Aires, Provincia de Buenos Aires, Catamarca, Chaco, Chubut, Cordoba, Corrientes, Entre Rios, Formosa, Jujuy, La Pampa, La Rioja, Mendoza, Misiones, Neuquen, Rio Negro, Salta, San Juan, San Luis, Santa Cruz, Santa Fe, Santiago del Estero, Tierra del Fuego, Tucuman, Otro"
                }
            },
            {
                "id": 5,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "¿Cual es tu maximo nivel de estudios alcanzado?",
                "respuesta": {
                    "id": 3,
                    "tipoRespuesta": "Nivel de estudios",
                    "opciones": "Posgrado incompleto, Posgrado completo, Universitario incompleto, Universitario completo, Terciario incompleto, Terciario completo, Secundario incompleto, Secundario completo"
                }
            }
        ]
    },
    {
        "id": 2,
        "nombre": "Encuesta Empleabilidad Intercohorte",
        "descripcion": "Encuesta de empleabilidad intercohorte Codo a Codo",
        "estado": 1,
        "preguntas": [
            {
                "id": 38,
                "categoria": {
                    "id": 2,
                    "nombre": "Oportunidades laborales"
                },
                "texto": "¿Te interesaria recibir busquedas laborales ajustadas a tu perfil?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 28,
                "categoria": {
                    "id": 3,
                    "nombre": "Sobre la experiencia en Codo a Codo"
                },
                "texto": "¿En que cuatrimestre cursaste Codo a Codo? En caso de haber cursado más de una vez respondenos por tu ultima experiencia",
                "respuesta": {
                    "id": 4,
                    "tipoRespuesta": "Cuatrimestre cursado",
                    "opciones": "1er Cuatrimestre 2022, 2do Cuatrimestre 2022, 1er Cuatrimestre 2023, 2do Cuatrimestre 2023"
                }
            },
            {
                "id": 29,
                "categoria": {
                    "id": 3,
                    "nombre": "Sobre la experiencia en Codo a Codo"
                },
                "texto": "¿De que curso de Codo a Codo egresaste? En caso de haber egresado de más de un curso responde por el ultimo",
                "respuesta": {
                    "id": 5,
                    "tipoRespuesta": "Cursos Codo a Codo",
                    "opciones": "Big Data, Diseño UX/UI, FullStack - Java, FullStack - JavaScript/Node.js, FullStack - PHP, FullStack - Python, Programacion Inicial, Testing QA + Automatizacion, Django, React, Spring, Unity"
                }
            },
            {
                "id": 30,
                "categoria": {
                    "id": 3,
                    "nombre": "Sobre la experiencia en Codo a Codo"
                },
                "texto": "¿Cuanto crees que Codo a Codo te ayudo a mejorar tu perfil para buscar trabajo o mejorar tu desempeño y crecimiento laboral?",
                "respuesta": {
                    "id": 6,
                    "tipoRespuesta": "Valoracion escala",
                    "opciones": "Muchísimo, Bastante, Poco, Nada, Indistinto"
                }
            },
            {
                "id": 31,
                "categoria": {
                    "id": 4,
                    "nombre": "Despues"
                },
                "texto": "Cuando terminaste de cursar Codo a Codo, ¿continuaste con algun otro estudio vinculado al sector IT?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 32,
                "categoria": {
                    "id": 4,
                    "nombre": "Despues"
                },
                "texto": "¿Que tipo de estudios continuaste realizando en el sector IT luego de Codo a Codo?",
                "respuesta": {
                    "id": 8,
                    "tipoRespuesta": "Tipos de cursos",
                    "opciones": "Curso de duración cuatrimestral gratuito, Curso de duración cuatrimestral pago, Curso de duración anual gratuito, Curso de duración anual pago, Estudios de nivel terciario gratuito, Estudios de nivel terciario pago, Estudio de nivel universitario gratuito, Estudio de nivel universitario pago, Otro"
                }
            },
            {
                "id": 33,
                "categoria": {
                    "id": 4,
                    "nombre": "Despues"
                },
                "texto": "Actualmente, ¿Cual crees que es tu nivel en programacion?",
                "respuesta": {
                    "id": 9,
                    "tipoRespuesta": "Seniority",
                    "opciones": "Senior, Semi senior, Junior, Trainee"
                }
            },
            {
                "id": 34,
                "categoria": {
                    "id": 4,
                    "nombre": "Despues"
                },
                "texto": "¿Cual es tu situacion laboral actual?",
                "respuesta": {
                    "id": 10,
                    "tipoRespuesta": "Situacion laboral actual",
                    "opciones": "Trabajo, No trabajo y busco trabajo, No trabajo y no busco trabajo, Jubilado/a y/o pensionado/a"
                }
            },
            {
                "id": 35,
                "categoria": {
                    "id": 4,
                    "nombre": "Despues"
                },
                "texto": "Actualmente tu trabajo es...",
                "respuesta": {
                    "id": 12,
                    "tipoRespuesta": "Condicion laboral actual",
                    "opciones": "En relacion de dependencia, Soy monotributista, Trabajo de manera informal"
                }
            },
            {
                "id": 36,
                "categoria": {
                    "id": 4,
                    "nombre": "Despues"
                },
                "texto": "¿Tu puesto de trabajo actual esta relacionado con el sector IT?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 37,
                "categoria": {
                    "id": 4,
                    "nombre": "Despues"
                },
                "texto": "¿Trabajas actualmente como programador?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 17,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "Mail",
                "respuesta": {
                    "id": 22,
                    "tipoRespuesta": "Respuesta abierta (texto libre)",
                    "opciones": ""
                }
            },
            {
                "id": 18,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "DNI/Nro de Pasaporte",
                "respuesta": {
                    "id": 22,
                    "tipoRespuesta": "Respuesta abierta (texto libre)",
                    "opciones": ""
                }
            },
            {
                "id": 19,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "CUIL",
                "respuesta": {
                    "id": 22,
                    "tipoRespuesta": "Respuesta abierta (texto libre)",
                    "opciones": ""
                }
            },
            {
                "id": 20,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "Fecha de nacimiento",
                "respuesta": {
                    "id": 22,
                    "tipoRespuesta": "Respuesta abierta (texto libre)",
                    "opciones": ""
                }
            },
            {
                "id": 21,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "Genero",
                "respuesta": {
                    "id": 1,
                    "tipoRespuesta": "Genero",
                    "opciones": "Masculino, Femenino, No Binario"
                }
            },
            {
                "id": 22,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "Lugar de Residencia",
                "respuesta": {
                    "id": 2,
                    "tipoRespuesta": "Lugar de residencia",
                    "opciones": "Ciudad Autonoma de Buenos Aires, Provincia de Buenos Aires, Catamarca, Chaco, Chubut, Cordoba, Corrientes, Entre Rios, Formosa, Jujuy, La Pampa, La Rioja, Mendoza, Misiones, Neuquen, Rio Negro, Salta, San Juan, San Luis, Santa Cruz, Santa Fe, Santiago del Estero, Tierra del Fuego, Tucuman, Otro"
                }
            },
            {
                "id": 23,
                "categoria": {
                    "id": 6,
                    "nombre": "Datos personales"
                },
                "texto": "¿Cual es tu maximo nivel de estudios alcanzado?",
                "respuesta": {
                    "id": 3,
                    "tipoRespuesta": "Nivel de estudios",
                    "opciones": "Posgrado incompleto, Posgrado completo, Universitario incompleto, Universitario completo, Terciario incompleto, Terciario completo, Secundario incompleto, Secundario completo"
                }
            },
            {
                "id": 24,
                "categoria": {
                    "id": 7,
                    "nombre": "Antes"
                },
                "texto": "ANTES de realizar el curso de Codo a Codo, ¿cual crees que era tu nivel en programacion?",
                "respuesta": {
                    "id": 9,
                    "tipoRespuesta": "Seniority",
                    "opciones": "Senior, Semi senior, Junior, Trainee"
                }
            },
            {
                "id": 25,
                "categoria": {
                    "id": 7,
                    "nombre": "Antes"
                },
                "texto": "ANTES de realizar el curso de Codo a Codo, ¿Cual era tu situacion laboral?",
                "respuesta": {
                    "id": 11,
                    "tipoRespuesta": "Situacion laboral pasada",
                    "opciones": "Trabajaba, No trabajaba y buscaba trabajo, No trabajaba y no buscaba trabajo, Jubilado/a y/o pensionado/a"
                }
            },
            {
                "id": 26,
                "categoria": {
                    "id": 7,
                    "nombre": "Antes"
                },
                "texto": "ANTES de realizar el curso de Codo a Codo, tu trabajo era...",
                "respuesta": {
                    "id": 13,
                    "tipoRespuesta": "Condicion laboral pasada",
                    "opciones": "En relacion de dependencia, Era monotributista, Trabajaba de manera informal"
                }
            },
            {
                "id": 27,
                "categoria": {
                    "id": 7,
                    "nombre": "Antes"
                },
                "texto": "ANTES de realizar el curso de Codo a Codo, ¿Tu puesto de trabajo estaba relacionado con el sector IT?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            }
        ]
    },
    {
        "id": 3,
        "nombre": "Encuesta Satisfaccion Estudiantes de Codo a Codo",
        "descripcion": "Encuesta de satisfaccion para estudiantes que finalizaron el ciclo de formacion de Codo a Codo",
        "estado": 1,
        "preguntas": [
            {
                "id": 39,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Que curso realizaste en Codo a Codo?",
                "respuesta": {
                    "id": 5,
                    "tipoRespuesta": "Cursos Codo a Codo",
                    "opciones": "Big Data, Diseño UX/UI, FullStack - Java, FullStack - JavaScript/Node.js, FullStack - PHP, FullStack - Python, Programacion Inicial, Testing QA + Automatizacion, Django, React, Spring, Unity"
                }
            },
            {
                "id": 40,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "Selecciona el nombre de tu docente del curso.",
                "respuesta": {
                    "id": 15,
                    "tipoRespuesta": "Docente",
                    "opciones": ""
                }
            },
            {
                "id": 41,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Cuan satisfecho/a te encontras con tu docente del curso?",
                "respuesta": {
                    "id": 14,
                    "tipoRespuesta": "Valoracion satisfaccion",
                    "opciones": "Muy satisfecho/a, Satisfecho/a, Indistinto/a, Insatisfecho/a, Muy insatisfecho/a"
                }
            },
            {
                "id": 42,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "En terminos generales, ¿Cuan satisfecho/a te encontras con tu experiencia en Codo a Codo?",
                "respuesta": {
                    "id": 14,
                    "tipoRespuesta": "Valoracion satisfaccion",
                    "opciones": "Muy satisfecho/a, Satisfecho/a, Indistinto/a, Insatisfecho/a, Muy insatisfecho/a"
                }
            },
            {
                "id": 43,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Cuan utiles te resultaron los contenidos del curso?",
                "respuesta": {
                    "id": 16,
                    "tipoRespuesta": "Valoracion utilidad",
                    "opciones": "Muy utiles, Utiles, Indistinto/a, Poco útiles, Nada utiles"
                }
            },
            {
                "id": 44,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Cuan satisfecho/a te encontrás con el material de la cursada (PPT, bibliografia, links, etc.)?",
                "respuesta": {
                    "id": 14,
                    "tipoRespuesta": "Valoracion satisfaccion",
                    "opciones": "Muy satisfecho/a, Satisfecho/a, Indistinto/a, Insatisfecho/a, Muy insatisfecho/a"
                }
            },
            {
                "id": 45,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Cuan eficiente te resulto el tutor administrativo de tu comision?",
                "respuesta": {
                    "id": 17,
                    "tipoRespuesta": "Valoracion eficiencia",
                    "opciones": "Muy eficiente, Eficiente, Indistinto/a, Poco eficiente, Nada eficiente"
                }
            },
            {
                "id": 46,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Cuan probable es que recomiendes esta formacion a un amigo/a?",
                "respuesta": {
                    "id": 18,
                    "tipoRespuesta": "Valoracion probabilidad",
                    "opciones": "Muy probable, Probable, Indistinto/a, Improbable, Muy improbable"
                }
            },
            {
                "id": 47,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Que tan facil te resulto el test que realizaste al momento de la inscripcion?",
                "respuesta": {
                    "id": 19,
                    "tipoRespuesta": "Valoracion dificultad",
                    "opciones": "Muy dificil, Dificil, Ni facil ni dificil, Facil, Muy facil"
                }
            },
            {
                "id": 48,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Cuanto crees que Codo a Codo te ayudo a mejorar tu perfil para buscar trabajo o mejorar tu desempeño y crecimiento laboral?",
                "respuesta": {
                    "id": 6,
                    "tipoRespuesta": "Valoracion escala",
                    "opciones": "Muchísimo, Bastante, Poco, Nada, Indistinto"
                }
            },
            {
                "id": 49,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "Si tuvieras que destacar positivamente algun o algunos de los rasgos del curso, ¿Cual o cuales serian?",
                "respuesta": {
                    "id": 20,
                    "tipoRespuesta": "Respuesta multiple sobre rasgos del curso",
                    "opciones": "Carga horaria, Contenidos, Cuerpo docente, Gratuidad, Modalidad de cursada virtual, Otorgamiento de diploma, Vinculacion con la mejora y desarrollo de mi profesion, Otro"
                }
            },
            {
                "id": 50,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Queres realizar algun comentario y/o sugerencia para mejorar el curso?",
                "respuesta": {
                    "id": 7,
                    "tipoRespuesta": "Binaria",
                    "opciones": "Si, No"
                }
            },
            {
                "id": 51,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "¿Sobre que tematica?",
                "respuesta": {
                    "id": 21,
                    "tipoRespuesta": "Respuesta multiple sobre tematicas",
                    "opciones": "Sobre los contenidos, Sobre el aula virtual, Sobre el cuerpo docente, Sobre la dinamica de la clase, Sobre la extensión del curso, Sobre la modalidad de cursada, Sobre otra tematica"
                }
            },
            {
                "id": 52,
                "categoria": {
                    "id": 5,
                    "nombre": "Satisfaccion"
                },
                "texto": "Por favor dejanos tu comentario y/o sugerencia respecto a la tematica seleccionada",
                "respuesta": {
                    "id": 22,
                    "tipoRespuesta": "Respuesta abierta (texto libre)",
                    "opciones": ""
                }
            }
        ]
    }
]