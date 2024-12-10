import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'

import './assets/styles/estilos_index.css'

createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>

    <div className="presentacion">
        <div className="cont_texto">
            <h1>Launch Lab transforma el aprendizaje de física en una experiencia VR</h1>
            <p>Juego gamificado para aprender introducción a la física usando dinamicas de juego de aventura,.</p>
        </div>
        <div className="cont_imagen">
            <img src="./assets/imgs/Persona_con_oculus.png" alt=""/>
        </div>
    </div>


    <div className="contenedor_info">
        <div className="barra_izquierda">
            <div className="cont_corre">
                <h2>Launch Lab</h2>
                <a href="">
                    <p>Probar Ahora</p>
                </a>
                <div className="cont_imagen">
                    <img src="./assets/imgs/Imagen_Izquierda_Launch.png" alt=""/>
                </div>
            </div>
        </div>
    
        <div className="informacion">
            <h2>Capturas</h2>
            <div className="grid_imgs">
                <div className="cont_imagen">
                    <img src="./assets/imgs/Ejemplo/image 1.png" alt=""/>
                </div>
                <div className="cont_imagen">
                    <img src="./assets/imgs/Ejemplo/image 2.png" alt=""/>
                </div>
                <div className="cont_imagen">
                    <img src="./assets/imgs/Ejemplo/image 3.png" alt=""/>
                </div>
                <div className="cont_imagen">
                    <img src="./assets/imgs/Ejemplo/image 4.png" alt=""/>
                </div>
            </div>
            
            <h2>Detalles</h2>
            <div className="cont_datos">
                <h3>Desarrolladores:</h3> <p>Alex Enrique Mamani, Juan Diego Valdivia Mendoza</p>

                <h3>Dispositivos:</h3> <p>Meta Quest 2, Meta Quest, 3,Meta Quest Pro, HTC Vive y Vive Pro, Valve Index, Windows Mixed Reality (WMR), Pico 4</p>

                <h3>Lanzamiento:</h3> <p>04 de noviembre 2024</p>

                <h3>Rating:</h3> <p>Alex Enrique Mamani, Juan Diego Valdivia Mendoza</p>
            </div>
        
        </div> 
    </div>


    <Footer></Footer>
  </>
)
