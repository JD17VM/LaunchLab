import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './assets/styles/estilos_proyectos.css'

export function Proyectos() {
    return (
        <>
            <div className="contenido">
                <div className="seccion">
                    <div className="contenido_seccion">
                        <a href="../index.html" className="cont_archivo">
                            <img src="../static/imgs/Imagen_Archivos.PNG" alt="" />
                            <p>Launch Lab VR</p>
                        </a>

                        <a href="../index2.html" className="cont_archivo">
                            <img src="../static/imgs/Imagen_Archivos.PNG" alt="" />
                            <p>Arrow Ascend</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}