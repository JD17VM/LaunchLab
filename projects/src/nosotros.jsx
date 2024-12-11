import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'
import { Cabecera } from './widgets/Cabecera'





createRoot(document.getElementById('root')).render(
  <>
    <Navegador></Navegador>

    <Footer></Footer>
  </>
)
