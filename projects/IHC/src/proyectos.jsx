import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'

import './assets/styles/estilos_proyectos.css'

createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>

    <div class="contenido">
        <div class="seccion">
            <div class="contenido_seccion">
                <a href="" class="cont_archivo">
                    <img src="../static/imgs/Imagen_Archivos.PNG" alt=""/>
                    <p>Este es un texto Este es un texto</p>
                </a>

                <a href="" class="cont_archivo">
                    <img src="../static/imgs/Imagen_Archivos.PNG" alt=""/>
                    <p>Este es un texto Este es un texto</p>
                </a>
            </div>
        </div>
    </div>

    <Footer></Footer>
  </>
)