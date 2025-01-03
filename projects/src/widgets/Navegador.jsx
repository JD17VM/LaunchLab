import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'
import '../assets/styles/estilos_navegador.css'

import imageHelper from '../utils/imageHelper'

const pageData = [
    { 
        enlace_logo_proyecto: imageHelper.logo_LaunchLab_blanco,
        enlace_index: "../index.html",
        enlace_documentos: "../documentos.html",
        enlace_proceso: "../proceso.html",
        enlace_nosotros: "../nosotros.html",
        enlace_proyectos: "../proyectos.html",
    },
    { 
        enlace_logo_proyecto: imageHelper.logo_ArrowAscend_fondoNegro,
        enlace_index: "../index2.html",
        enlace_documentos: "../documentos2.html",
        enlace_proceso: "../proceso2.html",
        enlace_nosotros: "../nosotros2.html",
        enlace_proyectos: "../proyectos2.html",
    },
];

export function Navegador (){
    const currentPath = window.location.pathname;

    let pageDataToUse;
    if (currentPath === '/' || currentPath === '/index.html' || currentPath.includes('/documentos.html') || currentPath.includes('/nosotros.html') || currentPath.includes('/proceso.html') || currentPath.includes('/proyectos.html')) {
    pageDataToUse = pageData[0]; 
    } else if (currentPath === '/index2.html' || currentPath.includes('/documentos2.html') || currentPath.includes('/nosotros2.html') || currentPath.includes('/proceso2.html') || currentPath.includes('/proyectos2.html')) {
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
                    <a href={pageDataToUse.enlace_index} className="cont_logo_uno">
                        <img src={pageDataToUse.enlace_logo_proyecto} alt="" />
                    </a>
                </div>
                
                <button id="boton_hamburguesa">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <ul id="menu">
                    <li><a href={pageDataToUse.enlace_documentos}>Documentos</a></li>
                    <li><a href={pageDataToUse.enlace_proceso}>Proceso</a></li>
                    <li><a href={pageDataToUse.enlace_nosotros}>Nosotros</a></li>
                    <li><a href={pageDataToUse.enlace_proyectos}>Proyectos</a></li>
                </ul>
            </nav>
            <div className="espacio_nav"></div>
        </>
    )
}