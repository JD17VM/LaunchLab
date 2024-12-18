import styles from '../../assets/styles/estilos_documento.module.css'

export function Contenido_Archivo ({children, enlace, img}){
    return(
        <a href={enlace} className={styles.cont_archivo}>
            <img 
                src={img} 
                alt="dsd" 
                onClick={() => showImage(this)}  // Usa onClick en lugar de onclick
            />
            <p>{children}</p>
        </a>
    )
}