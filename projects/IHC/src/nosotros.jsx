import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Cabecera } from './widgets/Cabecera'

import styles from './assets/styles/estilos_nosotros.module.css'


import imageHelper from './utils/imageHelper'

export function Nosotros() {
  return (
    <>

      <Cabecera background_image="background_nosotros.webp">Nosotros</Cabecera>

      <div className={styles.contenedor}>

        <p className={styles.texto}>
          Como estudiantes de la carrera de Ciencias de la Computación en la Universidad Nacional de San Agustín, nos encontramos profundamente interesados en el diseño y desarrollo de aplicaciones basadas en realidad virtual (VR). Este proyecto representa una oportunidad emocionante para poner en práctica nuestros conocimientos, superar desafíos tecnológicos y potenciar nuestras habilidades técnicas y creativas.
        </p>

        <div className={styles.cont_integrantes}>

          <div className={styles.integrante}>
            <img src={imageHelper.foto_JuanDiego} alt="" />
            <div>
              <p>Juan Diego Valdivia Mendoza</p>
              <p>Full Stack Developer</p>
            </div>
          </div>

          <div className={styles.integrante}>
            <img src={imageHelper.foto_Alex} alt="" />
            <div>
              <p>Alex Enrique Mamani Quispe</p>
              <p>Full Stack Developer</p>
            </div>
          </div>

        </div>

      </div>

    </>
  )

}