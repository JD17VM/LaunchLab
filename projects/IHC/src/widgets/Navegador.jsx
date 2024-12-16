import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'
import '../assets/styles/estilos_navegador.css'

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
    const currentPath = window.location.pathname;

    let pageDataToUse;
    if (currentPath === '/' || currentPath === '/index'| currentPath.includes('/') || currentPath.includes('/nosotros') || currentPath.includes('/proceso') || currentPath.includes('/proyectos')) {
    pageDataToUse = pageData[0]; 
    } else if (currentPath === '/index2' || currentPath.includes('/documentos2') || currentPath.includes('/nosotros2') || currentPath.includes('/proceso2') || currentPath.includes('/proyectos2')) {
    pageDataToUse = pageData[1];
    } else {
    pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
    }

    return(
        <>
            <nav id="navbar">
                <div className="cont_logos">
                    <div className="cont_logo_general">
                        <img src={imageHelper.logo_IHC_normal} alt="" />
                    </div>
                    <div className="division"></div>
                    <Link to={pageDataToUse.enlace_index} className="cont_logo_uno">
                        <img src={pageDataToUse.enlace_logo_proyecto} alt="" />
                    </Link>
                </div>
                
                <button id="boton_hamburguesa">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <ul id="menu">
                    <li><Link to={pageDataToUse.enlace_documentos}>Documentos</Link></li>
                    <li><Link to={pageDataToUse.enlace_proceso}>Proceso</Link></li>
                    <li><Link to={pageDataToUse.enlace_nosotros}>Nosotros</Link></li>
                    <li><Link to={pageDataToUse.enlace_proyectos}>Proyectos</Link></li>
                </ul>
            </nav>
            <div className="espacio_nav"></div>
        </>
    )
}