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
                <a href="../index.html" class="cont_archivo">
                    <img src="../static/imgs/Imagen_Archivos.PNG" alt=""/>
                    <p>Launch Lab VR</p>
                </a>

                <a href="../index2.html" class="cont_archivo">
                    <img src="../static/imgs/Imagen_Archivos.PNG" alt=""/>
                    <p>Arrow Ascend</p>
                </a>
            </div>
        </div>
    </div>

    <Footer></Footer>
  </>
)