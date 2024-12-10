import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'
import { Cabecera } from './widgets/Cabecera'

import './assets/styles/estilos_nosotros.css'

import Nosotros from './assets/imgs/nosotros.png';


createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>

    <Cabecera background_image="background_nosotros.webp">Nosotros</Cabecera>

    <div class="cont_imagen">
        <img src={Nosotros} alt=""/>
    </div>

    <Footer></Footer>
  </>
)
