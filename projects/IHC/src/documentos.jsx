import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { useLocation } from 'react-router-dom';


import { Cabecera } from './widgets/Cabecera'
import { Seccion } from './widgets/Seccion_Docs/Seccion'

import styles from './assets/styles/estilos_documento.module.css'
import { useEffect } from 'react';
import pageData from './data/documentos';

import imageHelper from './utils/imageHelper'

export function Documentos() {

    useEffect(() => {
        document.title = "Documentos";
      }, []);

    const location = useLocation(); // Usa el hook useLocation

    let pageDataToUse;
    if (location.pathname === '/documentos') { // Usa location.pathname
        pageDataToUse = pageData[0];  
    } else if (location.pathname === '/documentos2') {
        pageDataToUse = pageData[1];
    } else {
        // Manejar rutas no encontradas
        pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
    }
    return (
    <>
        <Cabecera background_image={imageHelper.background_cabecera_documentos}>Documentos</Cabecera>

        

        <div className={styles.contenido}>
            {
                pageDataToUse.map(({ titulo, archivos, id_seccion }) => (
                    <Seccion key={id_seccion} id_seccion={id_seccion} props={archivos}>{titulo}</Seccion>
                ))
            }
        </div>


        <div className={styles.documento_especifico} id="overlay">
            <div className={styles.contenedor}>
                <img src="" alt="" id="selectedImage" />
            </div>
            <button id="button_cerrar">
                <span className={styles['material-symbols-outlined']}>
                    close
                </span>
            </button>
        </div>

    </>
)

}
