import styles from '../../assets/styles/estilos_documento.module.css'

import { Contenido_Archivo } from "./Contenido_Archivo";

export function Seccion ({props,children}){
    return(
        <div className={styles.seccion}>
            <h2>{children}</h2>
            <div className={styles.contenido_seccion}>
                {
                    props.map(({nombre, enlace, imagen}, index) => (
                        <Contenido_Archivo key={index} enlace={enlace} img={imagen}>{nombre}</Contenido_Archivo>
                    ))
                }
            </div>

        </div>
    )
}