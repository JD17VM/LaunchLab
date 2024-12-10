import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'
import '../assets/styles/estilos_navegador.css'

import logoIHC from '../assets/imgs/logos/Logo_IHC_Normal.png';
import logoLaunchLab from '../assets/imgs/logos/Launch_Lab_Blanco.png';



export function Navegador (){
    return(
        <>
            <nav id="navbar">
                <div className="cont_logos">
                    <div className="cont_logo_general">
                        <img src={logoIHC} alt="" />
                    </div>
                    <div className="division"></div>
                    <a href="index.html" className="cont_logo_uno">
                        <img src={logoLaunchLab} alt="" />
                    </a>
                </div>
                
                <button id="boton_hamburguesa">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>

                <ul id="menu">
                    <li><a href="../documentos.html">Documentos</a></li>
                    <li><a href="../proceso.html">Proceso</a></li>
                    <li><a href="../nosotros.html">Nosotros</a></li>
                    <li><a href="../proyectos.html">Proyectos</a></li>
                </ul>
            </nav>
            <div className="espacio_nav"></div>
        </>
    )
}