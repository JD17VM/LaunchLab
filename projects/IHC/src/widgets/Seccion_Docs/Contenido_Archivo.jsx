import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from '../../assets/styles/estilos_documento.module.css'

import imageHelper from '../../utils/imageHelper'

export function Contenido_Archivo ({children, img, enlace_doc, id, id_seccion, tipo}){
    const location = useLocation(); // Usa el hook useLocation
    console.log("location.pathname:", location.pathname);

    let tipoFondo;
    let tipoTexto = "n";
    let img_default;

    if (tipo === "pdf"){
        tipoFondo = styles.tipoPDF;
        tipoTexto = "PDF";
        img_default = imageHelper.PDF_default
    } else if (tipo === "imagen"){
        tipoFondo = styles.tipoImagen
        tipoTexto = "IMG"
        img_default = imageHelper.Image_default
    } else if (tipo === "video"){
        tipoFondo = styles.tipoVideo
        tipoTexto = "VID"
        img_default = imageHelper.Video_default
    }

    if(!img){
        img = img_default;
    }

    return(
        <Link to={`${location.pathname}/${id_seccion}/${id}`} className={styles.cont_archivo}>
            <img 
                src={img} 
                alt={children} 
            />
            <p>{children}</p>
            <div className={tipoFondo}>
                <p>{tipoTexto}</p>
            </div>
        </Link>
    )
}