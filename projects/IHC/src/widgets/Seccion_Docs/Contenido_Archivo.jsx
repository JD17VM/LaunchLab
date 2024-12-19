import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from '../../assets/styles/estilos_documento.module.css'

export function Contenido_Archivo ({children, img, enlace_doc, id, id_seccion}){
    const location = useLocation(); // Usa el hook useLocation
    console.log("location.pathname:", location.pathname);

    return(
        <Link to={`${location.pathname}/${id_seccion}/${id}`} className={styles.cont_archivo}>
            <img 
                src={img} 
                alt="dsd" 
            />
            <p>{children}</p>
        </Link>
    )
}