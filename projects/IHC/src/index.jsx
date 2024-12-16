import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/estilos_index.css'

import { useLocation } from 'react-router-dom';


const pageData = [
    { 
        nombre_proyecto: "Launch Lab",
        titulo: "Launch Lab transforma el aprendizaje de física en una experiencia VR",
        texto_titulo: "Juego gamificado para aprender introducción a la física usando dinamicas de juego de aventura.",
        enlace_imagen_principal: "./assets/imgs/Persona_con_oculus.png",
        enlace_imagen_izquierda: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_1: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_2: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_3: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_4: "./assets/imgs/Persona_con_oculus.png",
        detalles_desarroladores: "Alex Enrique Mamani, Juan Diego Valdivia Mendoza",
        detalles_dispositivos: "Meta Quest 2, Meta Quest, 3,Meta Quest Pro, HTC Vive y Vive Pro, Valve Index, Windows Mixed Reality (WMR), Pico 4",
        detalles_lanzamiento: "04 de noviembre 2024",
        detalles_rating: "04 de noviembre 2024",
    },
    { 
        nombre_proyecto: "Arrow Ascend",
        titulo: "Arrow Ascend transforma el aprendizaje de física en una experiencia VR",
        texto_titulo: "Juego gamificado para aprender introducción a la física usando dinamicas de juego de aventura.",
        enlace_imagen_principal: "./assets/imgs/Persona_con_oculus.png",
        enlace_imagen_izquierda: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_1: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_2: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_3: "./assets/imgs/Persona_con_oculus.png",
        enlace_grid_imagen_4: "./assets/imgs/Persona_con_oculus.png",
        detalles_desarroladores: "Alex Enrique Mamani, Juan Diego Valdivia Mendoza",
        detalles_dispositivos: "Meta Quest 2, Meta Quest, 3,Meta Quest Pro, HTC Vive y Vive Pro, Valve Index, Windows Mixed Reality (WMR), Pico 4",
        detalles_lanzamiento: "04 de noviembre 2024",
        detalles_rating: "04 de noviembre 2024",
    }
  ];


export function Inicio() {
    const location = useLocation(); // Usa el hook useLocation

    let pageDataToUse;
    if (location.pathname === '/' || location.pathname === '/index') { // Usa location.pathname
        pageDataToUse = pageData[0];  
    } else if (location.pathname === '/index2') {
        pageDataToUse = pageData[1];
    } else {
        // Manejar rutas no encontradas
        pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
    }

    return (
        <>

            <div className="presentacion">
                <div className="cont_texto">
                    <h1>{pageDataToUse.titulo}</h1>
                    <p>{pageDataToUse.texto_titulo}</p>
                </div>
                <div className="cont_imagen">
                    <img src="./assets/imgs/Persona_con_oculus.png" alt="" />
                </div>
            </div>


            <div className="contenedor_info">
                <div className="barra_izquierda">
                    <div className="cont_corre">
                        <h2>Launch Lab</h2>
                        <a href="">
                            <p>Probar Ahora</p>
                        </a>
                        <div className="cont_imagen">
                            <img src="./assets/imgs/Imagen_Izquierda_Launch.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="informacion">
                    <h2>Capturas</h2>
                    <div className="grid_imgs">
                        <div className="cont_imagen">
                            <img src="./assets/imgs/Ejemplo/image 1.png" alt="" />
                        </div>
                        <div className="cont_imagen">
                            <img src="./assets/imgs/Ejemplo/image 2.png" alt="" />
                        </div>
                        <div className="cont_imagen">
                            <img src="./assets/imgs/Ejemplo/image 3.png" alt="" />
                        </div>
                        <div className="cont_imagen">
                            <img src="./assets/imgs/Ejemplo/image 4.png" alt="" />
                        </div>
                    </div>

                    <h2>Detalles</h2>
                    <div className="cont_datos">
                        <h3>Desarrolladores:</h3> <p>Alex Enrique Mamani, Juan Diego Valdivia Mendoza</p>

                        <h3>Dispositivos:</h3> <p>Meta Quest 2, Meta Quest, 3,Meta Quest Pro, HTC Vive y Vive Pro, Valve Index, Windows Mixed Reality (WMR), Pico 4</p>

                        <h3>Lanzamiento:</h3> <p>04 de noviembre 2024</p>

                        <h3>Rating:</h3> <p>Alex Enrique Mamani, Juan Diego Valdivia Mendoza</p>
                    </div>

                </div>
            </div>

        </>
    )

}
