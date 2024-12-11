import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'

export function Etapa ({children, contenido, enlace_imagen}){
    return(
        <div className="etapa">
            <div className="texto">
                <h2>{children}</h2>
                <p>{contenido}</p>
            </div>
            <div className="division"></div>
            <div className="cont_imagen">
                <img src={enlace_imagen} alt=""/>
            </div>
        </div>
    )
}