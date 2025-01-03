import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador } from './widgets/Navegador'
import { Footer } from './widgets/Footer'
import { Cabecera } from './widgets/Cabecera'
import { Seccion } from './widgets/Seccion_Docs/Seccion'

import './assets/styles/estilos_documento.css'

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


const currentPath = window.location.pathname;

let pageDataToUse;
if (currentPath === '/' || currentPath === '/documentos.html') {
  pageDataToUse = pageData[0]; 
} else if (currentPath === '/documentos2.html') {
  pageDataToUse = pageData[1];
} else {
  // Manejar rutas no encontradas
  pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
}

createRoot(document.getElementById('root')).render(
    <>
        <Navegador></Navegador>
        <Cabecera background_image="background_escuela.png">Documentos</Cabecera>

        <div className="contenido">
            {
                pageDataToUse.map(({ titulo, archivos }) => (
                    <Seccion props={archivos}>{titulo}</Seccion>
                ))
            }
        </div>

        <div className="documento_especifico" id="overlay">
            <div className="contenedor">
                <img src="" alt="" id="selectedImage" />
            </div>
            <button id="button_cerrar">
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
        </div>

        <Footer></Footer>
    </>
)
