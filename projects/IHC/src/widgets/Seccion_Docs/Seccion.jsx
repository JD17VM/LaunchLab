import { Contenido_Archivo } from "./Contenido_Archivo";

export function Seccion ({props,children}){
    return(
        <div className="seccion">
            <h2>{children}</h2>
            <div className="contenido_seccion">
                {
                    props.map(({nombre, enlace}, index) => (
                        <Contenido_Archivo key={index} enlace={enlace}>{nombre}</Contenido_Archivo>
                    ))
                }
            </div>

        </div>
    )
}