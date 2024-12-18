import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { useLocation } from 'react-router-dom';


import { Cabecera } from './widgets/Cabecera'
import { Seccion } from './widgets/Seccion_Docs/Seccion'

import styles from './assets/styles/estilos_documento.module.css'

import imageHelper from './utils/imageHelper'


const pageData = [[
    {
        titulo: "Documentos 1",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/24-ponder_9-05-2007_14-22-44-crop.jpg/800px-24-ponder_9-05-2007_14-22-44-crop.jpg"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 4",
                enlace: "enlace 4",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
        ]
    },
    {
        titulo: "Documento 2",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
        ]
    },
    {
        titulo: "Documento 3",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 4",
                enlace: "enlace 4",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 5",
                enlace: "enlace 5",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
        ]
    },
    {
        titulo: "Documento 4",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
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
                enlace: "enlace 1",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 3",
                enlace: "enlace 3",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 4",
                enlace: "enlace 4",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
        ]
    },
    {
        titulo: "Documento 2 -p2",
        archivos: [
            {
                nombre: "Nombre Archivo 1",
                enlace: "enlace 1",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
            },
            {
                nombre: "Nombre Archivo 2",
                enlace: "enlace 2",
                imagen: "./assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
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
