import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'
import { Cabecera } from './widgets/Cabecera'
import { Seccion } from './widgets/Seccion_Docs/Seccion'

import './assets/styles/estilos_documento.css'

const secciones = [
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
]

createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>
    <Cabecera background_image="background_escuela.png">Documentos</Cabecera>
    
    <div className="contenido">
        {
            secciones.map(({titulo, archivos}) => (
                <Seccion props={archivos}>{titulo}</Seccion>
            ))
        }
    </div>

    <div className="documento_especifico" id="overlay">
        <div className="contenedor">
            <img src="" alt="" id="selectedImage"/>
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
