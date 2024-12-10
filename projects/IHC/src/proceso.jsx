import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'

import './assets/styles/estilos_proceso.css'

createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>

    <div className="cont_proceso">
        <h1>Proceso</h1>

        <div className="etapa">
            <div className="texto">
                <h2>Creacion de la idea</h2>
                <p>Surge la necesidad de enseñar física de forma interactiva y divertida. Se concibe un juego de aventura con niveles que aplican conceptos como movimiento parabólico, MRUV y caída libre. Surge la necesidad de enseñar física de forma interactiva y divertida. Se concibe un juego de aventura </p>
            </div>
            <div className="division"></div>
            <div className="cont_imagen">
                <img src="../static/imgs/image_19.png" alt=""/>
            </div>
        </div>

        <div className="etapa">
            <div className="texto">
                <h2>Sketching</h2>
                <p>Decidimos realizar un ejercicio de sketching para nuestro proyecto con el objetivo de recopilar, explorar y analizar diversas ideas de forma colaborativa. Este enfoque nos ayudó a visualizar conceptos que, de otra manera, podrían haberse perdido en discusiones abstractas o notas textuales.</p>
            </div>
            <div className="division"></div>
            <div className="cont_imagen">
                <img src="../static/imgs/Proceso/img1.jpg" alt=""/>
            </div>
        </div>

        <div className="etapa">
            <div className="texto">
                <h2>Storyboarding</h2>
                <p>A través del storyboarding, ilustramos paso a paso la historia del usuario: desde el momento en que identifica una necesidad hasta cómo intenta interactuar con el sistema para resolverla. En cada viñeta, destacamos los momentos críticos, como la confusión al navegar por una interfaz compleja, el tiempo perdido buscando una función específica o la frustración ante respuestas poco claras.  </p>
            </div>
            <div className="division"></div>
            <div className="cont_imagen">
                <img src="../static/imgs/Proceso/img2.jpg" alt=""/>
            </div>
        </div>

        <div className="etapa">
            <div className="texto">
                <h2>Primera Fase</h2>
                <p>En esta fase inicial, los usuarios ingresan a un escenario cuidadosamente diseñado que simula un laboratorio interactivo o un entorno natural, dependiendo del tema de física seleccionado. Aquí, tienen la oportunidad de explorar libremente, manipular objetos virtuales y observar cómo se comportan en relación con leyes básicas, como la gravedad, el movimiento o las fuerzas.  </p>
            </div>
            <div className="division"></div>
            <div className="cont_imagen">
                <img src="../static/imgs/Ejemplo/image 4.png" alt=""/>
            </div>
        </div>
    </div>

    <Footer></Footer>
  </>
)
