export function Contenido_Archivo ({children, enlace}){
    return(
        <a href={enlace} className="cont_archivo">
            <img src="src/assets/imgs/Imagen_Archivos.PNG" alt="" onclick="showImage(this)"/>
            <p>{children}</p>
        </a>
    )
}