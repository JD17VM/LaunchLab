import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react"

import { useLocation } from 'react-router-dom';

import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'
import styles from '../assets/styles/estilos_navegador.module.css'

import imageHelper from '../utils/imageHelper'

const pageData = [
    { 
        enlace_logo_proyecto: imageHelper.logo_LaunchLab_blanco,
        enlace_index: "/",
        enlace_documentos: "/documentos",
        enlace_proceso: "/proceso",
        enlace_nosotros: "/nosotros",
        enlace_proyectos: "/proyectos",
    },
    { 
        enlace_logo_proyecto: imageHelper.logo_ArrowAscend_fondoNegro,
        enlace_index: "/index2",
        enlace_documentos: "/documentos2",
        enlace_proceso: "/proceso2",
        enlace_nosotros: "/nosotros2",
        enlace_proyectos: "/proyectos2",
    },
];

export function Navegador (){
    const location = useLocation(); // Usando useLocation

    const [activeLink, setActiveLink] = useState('');


    let pageDataToUse;

    // Simplificando la lógica con un switch
    switch (location.pathname) {
        case '/':
        case '/index': 
        case '/nosotros':
        case '/proceso':
        case '/proyectos':
            pageDataToUse = pageData[0];
            break;
        case '/index2':
        case '/documentos2':
        case '/nosotros2':
        case '/proceso2':
        case '/proyectos2':
            pageDataToUse = pageData[1];
            break;
        default:
            pageDataToUse = pageData[0];
    }

    useEffect(() => {
        // Se actualiza el estado cuando cambia la ubicación (pathname)
        setActiveLink(location.pathname);
      }, [location.pathname]); // Dependencia en location.pathname para que se ejecute cuando cambia

    return(
        <>
            <nav id="navbar">
                <div className={styles.cont_logos}>
                    <div className={styles.cont_logo_general}>
                        <img src={imageHelper.logo_IHC_normal} alt="" />
                    </div>
                    <div className={styles.division}></div>
                    <Link to={pageDataToUse.enlace_index} className={styles.cont_logo_uno}>
                        <img src={pageDataToUse.enlace_logo_proyecto} alt="" />
                    </Link>
                </div>
                
                <button id="boton_hamburguesa">
                    <span className={styles['material-symbols-outlined']}>
                        menu
                    </span>
                </button>
                <ul id="menu">
                    <li><Link to={pageDataToUse.enlace_documentos} className={activeLink === '/documentos' ? styles['active'] : ''}>Documentos</Link></li>
                    <li><Link to={pageDataToUse.enlace_proceso} className={activeLink === '/proceso' ? styles['active'] : ''}>Proceso</Link></li>
                    <li><Link to={pageDataToUse.enlace_nosotros} className={activeLink === '/nosotros' ? styles['active'] : ''}>Nosotros</Link></li>
                    <li><Link to={pageDataToUse.enlace_proyectos} className={activeLink === '/proyectos' ? styles['active'] : ''}>Proyectos</Link></li>
                </ul>
            </nav>
            <div className={styles.espacio_nav}></div>
        </>
    )
}