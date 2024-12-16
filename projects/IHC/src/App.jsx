import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'

import { Inicio } from './index'
import { Nosotros } from './nosotros'
import { Documentos } from './documentos'
import { Proceso } from './proceso'
import { Proyectos } from './proyectos'


//const Inicio = () => <h1>Inicio</h1>;
//const Documentos = () => <h1>Documentos</h1>;



const App = () => {
  return (
    <BrowserRouter>
      <Navegador></Navegador>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
