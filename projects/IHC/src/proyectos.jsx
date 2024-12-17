import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cabecera } from './widgets/Cabecera'


import styles from './assets/styles/estilos_proyectos.module.css'

export function Proyectos() {
    return (
        <>
            <Cabecera background_image="s.webp">Proyectos</Cabecera>
            <div className={styles.contenido}>
                <div className={styles.seccion}>
                    <div className={styles.contenido_seccion}>
                        <a href="../" className={styles.cont_archivo}>
                            <img src="../static/imgs/Imagen_Archivos.PNG" alt="" />
                            <p>Launch Lab VR</p>
                        </a>

                        <a href="../index2" className={styles.cont_archivo}>
                            <img src="../static/imgs/Imagen_Archivos.PNG" alt="" />
                            <p>Arrow Ascend</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}