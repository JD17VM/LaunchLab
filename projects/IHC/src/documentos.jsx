import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { useLocation } from 'react-router-dom';


import { Cabecera } from './widgets/Cabecera'
import { Seccion } from './widgets/Seccion_Docs/Seccion'

import styles from './assets/styles/estilos_documento.module.css'

const pageData = [[
    {
        titulo: "Documentos 1",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3"
            },
            {
                nombre: "Nombre Archivo 4",
                enlace: "enlace 4"
            },
        ]
    },
    {
        titulo: "Documento 2",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
        ]
    },
    {
        titulo: "Documento 3",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3"
            },
            {
                nombre: "Nombre Archivo 4",
                enlace: "enlace 4"
            },
            {
                nombre: "Nombre Archivo 5",
                enlace: "enlace 5"
            },
        ]
    },
    {
        titulo: "Documento 4",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3"
            },
        ]
    },
],

[
    {
        titulo: "Documentos 1 -p2",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3"
            },
            {
                nombre: "Nombre Archivo 4",
                enlace: "enlace 4"
            },
        ]
    },
    {
        titulo: "Documento 2 -p2",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
        ]
    },
    {
        titulo: "Documento 3 -p2",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3"
            },
            {
                nombre: "Nombre Archivo 4",
                enlace: "enlace 4"
            },
            {
                nombre: "Nombre Archivo 5",
                enlace: "enlace 5"
            },
        ]
    },
    {
        titulo: "Documento 4 -p2",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3"
            },
        ]
    },
],

]

export function Documentos() {
    const location = useLocation(); // Usa el hook useLocation

    let pageDataToUse;
    if (location.pathname === '/documentos') { // Usa location.pathname
        pageDataToUse = pageData[0];  
    } else if (location.pathname === '/documentos2') {
        pageDataToUse = pageData[1];
    } else {
        // Manejar rutas no encontradas
        pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
    }
    return (
    <>
        <Cabecera background_image="background_escuela.png">Documentos</Cabecera>

        

        <div className={styles.contenido}>
            {
                pageDataToUse.map(({ titulo, archivos }, index) => (
                    <Seccion key={titulo || index} props={archivos}>{titulo}</Seccion>
                ))
            }
        </div>


        <div className={styles.documento_especifico} id="overlay">
            <div className={styles.contenedor}>
                <img src="" alt="" id="selectedImage" />
            </div>
            <button id="button_cerrar">
                <span className={styles['material-symbols-outlined']}>
                    close
                </span>
            </button>
        </div>

    </>
)

}
