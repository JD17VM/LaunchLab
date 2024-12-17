import styles from '../../assets/styles/estilos_documento.module.css'

import { Contenido_Archivo } from "./Contenido_Archivo";

export function Seccion ({props,children}){
    return(
        <div className={styles.seccion}>
            <h2>{children}</h2>
            <div className={styles.contenido_seccion}>
                {
                    props.map(({nombre, enlace}, index) => (
                        <Contenido_Archivo key={index} enlace={enlace}>{nombre}</Contenido_Archivo>
                    ))
                }
            </div>

        </div>
    )
}