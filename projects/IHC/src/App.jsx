import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'

import { Inicio } from './index'
import { Nosotros } from './nosotros'
import { Documentos } from './documentos'
import { Proceso } from './proceso'
import { Proyectos } from './proyectos'

import ItemPage from "./ItemPage";


const App = () => {

  return (

    <BrowserRouter basename="/LaunchLab">
      <Navegador></Navegador>
      {/*
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/documentos/:id_seccion/:id" element={<ItemPage />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proyectos" element={<Proyectos />} />

          <Route path="/index2" element={<Inicio />} />
          <Route path="/documentos2" element={<Documentos />} />
          <Route path="/documentos2/:id_seccion/:id" element={<ItemPage />} />
          <Route path="/proceso2" element={<Proceso />} />
          <Route path="/nosotros2" element={<Nosotros />} />
          <Route path="/proyectos2" element={<Proyectos />} />
        </Routes>
      </main>*/}

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
