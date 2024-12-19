import styles from '../../assets/styles/estilos_documento.module.css'

import { Contenido_Archivo } from "./Contenido_Archivo";

export function Seccion ({props,children,id_seccion}){
    return(
        <div className={styles.seccion}>
            <h2>{children}</h2>
            <div className={styles.contenido_seccion}>
                {
                    props.map(({nombre, imagen, enlace_doc, id}) => (
                        <Contenido_Archivo key={id} id={id} id_seccion={id_seccion} enlace_doc={enlace_doc} img={imagen}>{nombre}</Contenido_Archivo>
                    ))
                }
            </div>

        </div>
    )
}