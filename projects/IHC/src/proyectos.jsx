import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cabecera } from './widgets/Cabecera'

import imageHelper from './utils/imageHelper'

import styles from './assets/styles/estilos_proyectos.module.css'

export function Proyectos() {
    return (
        <>
            <Cabecera background_image="s.webp">Proyectos</Cabecera>
            <div className={styles.contenido}>
                <div className={styles.seccion}>
                    <div className={styles.contenido_seccion}>
                        <a href="../" className={styles.cont_archivo} >
                            <div style={{ backgroundImage: `url(${imageHelper.background_image_AA_proyecto})` }}>
                                <img src={imageHelper.logo_ArrowAscend_fondoNegro} alt=""/>
                            </div>
                            <p>Launch Lab VR</p>
                        </a>

                        <a href="../index2" className={styles.cont_archivo} >
                            <div style={{ backgroundImage: `url(${imageHelper.background_image_LL_proyecto})` }}>
                                <img src={imageHelper.logo_LaunchLab_blanco} alt=""/>
                            </div>
                            <p>Launch Lab VR</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}