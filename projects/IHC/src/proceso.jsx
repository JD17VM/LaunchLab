import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { useLocation } from 'react-router-dom';

import { Etapa } from './widgets/Etapa'

import './assets/styles/estilos_proceso.css'

import imageHelper from './utils/imageHelper'

const pageData = [
  { 
      lista_etapas: [
        {
          nombre : "Creacion de la idea",
          texto : "Surge la necesidad de enseñar física de forma interactiva y divertida. Se concibe un juego de aventura con niveles que aplican conceptos como movimiento parabólico, MRUV y caída libre. Surge la necesidad de enseñar física de forma interactiva y divertida. Se concibe un juego de aventura.",
          imagen: imageHelper.imagen_LL_proceso_1
        },
        {
          nombre : "Sketching",
          texto : "Decidimos realizar un ejercicio de sketching para nuestro proyecto con el objetivo de recopilar, explorar y analizar diversas ideas de forma colaborativa. Este enfoque nos ayudó a visualizar conceptos que, de otra manera, podrían haberse perdido en discusiones abstractas o notas textuales.",
          imagen: imageHelper.imagen_LL_proceso_2
        },
        {
          nombre : "Storyboarding",
          texto : "A través del storyboarding, ilustramos paso a paso la historia del usuario: desde el momento en que identifica una necesidad hasta cómo intenta interactuar con el sistema para resolverla. En cada viñeta, destacamos los momentos críticos, como la confusión al navegar por una interfaz compleja, el tiempo perdido buscando una función específica o la frustración ante respuestas poco claras.",
          imagen: imageHelper.imagen_LL_proceso_3
        },
        {
          nombre : "Primera Fase",
          texto : "En esta fase inicial, los usuarios ingresan a un escenario cuidadosamente diseñado que simula un laboratorio interactivo o un entorno natural, dependiendo del tema de física seleccionado. Aquí, tienen la oportunidad de explorar libremente, manipular objetos virtuales y observar cómo se comportan en relación con leyes básicas, como la gravedad, el movimiento o las fuerzas.",
          imagen: ""
        },
      ]
  },
  { 
    lista_etapas: [
      {
        nombre : "Creacion de la idea",
        texto : "En esta fase inicial, los usuarios ingresan a un escenario cuidadosamente diseñado que simula un laboratorio interactivo o un entorno natural, dependiendo del tema de física seleccionado. Aquí, tienen la oportunidad de explorar libremente, manipular objetos virtuales y observar cómo se comportan en relación con leyes básicas, como la gravedad, el movimiento o las fuerzas.",
        imagen: ""
      },
      {
        nombre : "Creacion de la idea",
        texto : "En esta fase inicial, los usuarios ingresan a un escenario cuidadosamente diseñado que simula un laboratorio interactivo o un entorno natural, dependiendo del tema de física seleccionado. Aquí, tienen la oportunidad de explorar libremente, manipular objetos virtuales y observar cómo se comportan en relación con leyes básicas, como la gravedad, el movimiento o las fuerzas.",
        imagen: ""
      },
    ]
  }
];

export function Proceso() {

  const location = useLocation(); // Usa el hook useLocation

  let pageDataToUse;
  if (location.pathname === '/proceso') { // Usa location.pathname
    pageDataToUse = pageData[0];  
  } else if (location.pathname === '/proceso2') {
    pageDataToUse = pageData[1];
  } else {
    // Manejar rutas no encontradas
    pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
  }

  return (
    <>
      <div className="cont_proceso">
        <h1>Proceso</h1>
        {
          pageDataToUse.lista_etapas.map((etapa, index) => (
            <Etapa key={index} contenido={etapa.texto} enlace_imagen={etapa.imagen} >{etapa.nombre}</Etapa>
          ))
        }

      </div>
    </>
  )
}
