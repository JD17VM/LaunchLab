import React from "react";
import { useParams } from "react-router-dom";

import { useLocation } from 'react-router-dom';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import styles from './assets/styles/estilos_item_page.module.css'

import pageData from './data/documentos';


const ItemPage = () => {
  const { id_seccion, id } = useParams();

  
  const location = useLocation(); // Usa el hook useLocation
  console.log("location.pathname:", location.pathname);
  let pageDataToUse;
  let enlace_principal;
  if (location.pathname.startsWith('/documentos')) { // Usa location.pathname
    pageDataToUse = pageData[0];  
    enlace_principal = '/documentos';
  } else if (location.pathname.startsWith('/documentos2')) {
    pageDataToUse = pageData[1];
    enlace_principal = '/documentos2';
  } else {
    // Manejar rutas no encontradas
    pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
  }
  
  console.log('pageDataToUse:', pageDataToUse);
  
  const seccion = pageDataToUse.find(seccion => seccion.id_seccion == id_seccion);
  console.log(seccion)
  

  const archivo = seccion?.archivos.find((archivo) => archivo.id == id);
  
  if (!archivo) {
    console.log(`No se encontró un archivo con id ${id} en la sección ${id_seccion}.`);
  } else {
    console.log("Archivo encontrado:", archivo);
  }

  const currentIndex = seccion?.archivos.findIndex((archivo) => archivo.id == id);
  const prevEnabled = currentIndex > 0;
  const nextEnabled = currentIndex < seccion?.archivos.length - 1;

  return (
    <div className={styles.contenedor}>
      <h1>{archivo.enlace_doc}</h1>
      <div>
        <Link 
        to={`${enlace_principal}/${id_seccion}/${parseInt(id) - 1}`} 
        className={styles.boton}
        style={{ visibility: prevEnabled ? "visible" : "hidden" }}
        >
          <span class="material-symbols-outlined">
            arrow_back_ios
          </span>
        </Link>

        <div className={styles.documento_especifico}></div>

        <Link 
        to={`${enlace_principal}/${id_seccion}/${parseInt(id) + 1}`} 
        className={styles.boton}
        style={{ visibility: nextEnabled ? "visible" : "hidden" }}
        >
          <span class="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ItemPage;
