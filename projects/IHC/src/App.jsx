import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'



const Home = () => <h1>Home</h1>;
const Documentos = () => <h1>Documentos</h1>;
const Proceso = () => <h1>Proceso</h1>;
const Nosotros = () => <h1>Nosotros</h1>;
const Proyectos = () => <h1>Proyectos</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Navegador></Navegador>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
