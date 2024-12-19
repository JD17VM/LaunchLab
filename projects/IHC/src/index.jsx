import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import styles from './assets/styles/estilos_index.module.css'

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import imageHelper from './utils/imageHelper'

import pageData from './data/index';


export function Inicio() {
    useEffect(() => {
        document.title = "Inicio";
      }, []);

    const location = useLocation(); // Usa el hook useLocation

    let pageDataToUse;
    if (location.pathname === '/' || location.pathname === '/index') { // Usa location.pathname
        pageDataToUse = pageData[0];  
    } else if (location.pathname === '/index2') {
        pageDataToUse = pageData[1];
    } else {
        // Manejar rutas no encontradas
        pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
    }

    return (
        <>

            <div className={styles.presentacion}>
                <div className={styles.cont_texto}>
                    <h1>{pageDataToUse.titulo}</h1>
                    <p>{pageDataToUse.texto_titulo}</p>
                </div>
                <div className={styles.cont_imagen}>
                    <img src={imageHelper.imagen_LL_index} alt="" />
                </div>
            </div>


            <div className={styles.contenedor_info}>
                <div className={styles.barra_izquierda}>
                    <div className={styles.cont_corre}>
                        <h2>{pageDataToUse.nombre_proyecto}</h2>
                        <a href={pageDataToUse.enlace_probar_ahora} target="_blank">
                            <p>Probar Ahora</p>
                        </a>
                        <div className={styles.cont_imagen}>
                            <img src={imageHelper.imagen_LL_index} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.informacion}>
                    <h2>Capturas</h2>
                    <div className={styles.grid_imgs}>
                        <div className={styles.cont_imagen}>
                            <img src={imageHelper.imagen_LL_index} alt="" />
                        </div>
                        <div className={styles.cont_imagen}>
                            <img src={imageHelper.imagen_LL_index} alt="" />
                        </div>
                        <div className={styles.cont_imagen}>
                            <img src={imageHelper.imagen_LL_index} alt="" />
                        </div>
                        <div className={styles.cont_imagen}>
                            <img src={imageHelper.imagen_LL_index} alt="" />
                        </div>
                    </div>

                    <h2>Detalles</h2>
                    <div className={styles.cont_datos}>
                        <h3>Desarrolladores:</h3> <p>{pageDataToUse.detalles_desarrolladores}</p>

                        <h3>Dispositivos:</h3> <p>{pageDataToUse.detalles_dispositivos}</p>

                        <h3>Lanzamiento:</h3> <p>{pageDataToUse.detalles_lanzamiento}</p>

                        <h3>Rating:</h3> <div><img src={imageHelper.Rating_12} alt="" /></div>
                    </div>

                </div>
            </div>

        </>
    )

}
