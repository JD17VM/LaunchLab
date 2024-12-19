import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { useLocation } from 'react-router-dom';

import styles from './assets/styles/estilos_proceso.module.css'

import imageHelper from './utils/imageHelper'

import { Cabecera } from './widgets/Cabecera'

import pageData from './data/proceso';



function Etapa ({children, contenido, enlace_imagen}){
  return(
      <div className={styles.etapa}>
          <div className={styles.texto}>
              <h2>{children}</h2>
              <p>{contenido}</p>
          </div>
          <div className={styles.division}></div>
          <div className={styles.cont_imagen}>
              <img src={enlace_imagen} alt=""/>
          </div>
      </div>
  )
}


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
      <Cabecera background_image="background_proceso.webp">Proceso</Cabecera>
      <div className={styles.cont_proceso}>
        {
          pageDataToUse.lista_etapas.map((etapa, index) => (
            <Etapa key={index} contenido={etapa.texto} enlace_imagen={etapa.imagen} >{etapa.nombre}</Etapa>
          ))
        }

      </div>
    </>
  )
}
