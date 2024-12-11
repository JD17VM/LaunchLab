import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'
import { Etapa } from './widgets/Etapa'

import './assets/styles/estilos_proceso.css'

import imageHelper from './utils/imageHelper'

/*const currentPath = window.location.pathname;

let pageDataToUse;
if (currentPath === '/proceso.html') {
  pageDataToUse = pageData[0]; 
} else if (currentPath === '/proceso2.html') {
  pageDataToUse = pageData[1];
} else {
  // Manejar rutas no encontradas
  pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
}*/

createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>

    <div className="cont_proceso">
        <h1>Proceso</h1>

        <Etapa contenido="En esta fase inicial, los usuarios ingresan a un escenario cuidadosamente diseñado que simula un laboratorio interactivo o un entorno natural, dependiendo del tema de física seleccionado. Aquí, tienen la oportunidad de explorar libremente, manipular objetos virtuales y observar cómo se comportan en relación con leyes básicas, como la gravedad, el movimiento o las fuerzas."
        enlace_imagen = {imageHelper.imagen_AA_proceso_1}
        >Creación de la Idea</Etapa>  

        <Etapa contenido="En esta fase inicial, los usuarios ingresan a un escenario cuidadosamente diseñado que simula un laboratorio interactivo o un entorno natural, dependiendo del tema de física seleccionado. Aquí, tienen la oportunidad de explorar libremente, manipular objetos virtuales y observar cómo se comportan en relación con leyes básicas, como la gravedad, el movimiento o las fuerzas."
        enlace_imagen = {imageHelper.imagen_AA_proceso_2}
        >Otro</Etapa> 
        
    </div>

    <Footer></Footer>
  </>
)
