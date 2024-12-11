import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'
import { Cabecera } from './widgets/Cabecera'

import './assets/styles/estilos_nosotros.css'

import Nosotros from './assets/imgs/nosotros.png';

import imageHelper from './utils/imageHelper'

createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>

    <Cabecera background_image="background_nosotros.webp">Nosotros</Cabecera>

    <div className="contenedor">

      <p className="texto">
        Como estudiantes de la carrera de Ciencias de la Computación en la Universidad Nacional de San Agustín, nos encontramos profundamente interesados en el diseño y desarrollo de aplicaciones basadas en realidad virtual (VR). Este proyecto representa una oportunidad emocionante para poner en práctica nuestros conocimientos, superar desafíos tecnológicos y potenciar nuestras habilidades técnicas y creativas.
      </p>

      <div className="cont_integrantes">

        <div className="integrante">
          <img src={imageHelper.foto_JuanDiego} alt="" />
          <div>
            <p>Juan Diego Valdivia Mendoza</p>
            <p>Full Stack Developer</p>
          </div>
        </div>

        <div className="integrante">
          <img src={imageHelper.foto_Alex} alt="" />
          <div>
            <p>Alex Enrique Mamani Quispe</p>
            <p>Full Stack Developer</p>
          </div>
        </div>

      </div>

    </div>

    <Footer></Footer>
  </>
)
