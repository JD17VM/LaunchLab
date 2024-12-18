import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'
import { Footer } from './widgets/Footer'
import { Slider } from './Slider'

import { Inicio } from './index'
import { Nosotros } from './nosotros'
import { Documentos } from './documentos'
import { Proceso } from './proceso'
import { Proyectos } from './proyectos'


const App = () => {

  const pageData = [
    [
        {
            titulo: "Documentos 1",
            archivos: [
                {
                    nombre: "Nombre Archivo 1",
                    enlace: "enlace 1",
                    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/24-ponder_9-05-2007_14-22-44-crop.jpg/800px-24-ponder_9-05-2007_14-22-44-crop.jpg"
                },
                {
                    nombre: "Nombre Archivo 2",
                    enlace: "enlace 2",
                    imagen: "https://raw.githubusercontent.com/JD17VM/LaunchLab/refs/heads/main/projects/IHC/src/assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
                },
                {
                    nombre: "Nombre Archivo 3",
                    enlace: "enlace 3",
                    imagen: "https://github.com/JD17VM/LaunchLab/blob/main/projects/IHC/src/assets/imgs/Imagenes_Cara_Documentos/imagen_carro.jpg"
                }
            ]
        },
        {
            titulo: "Documentos 2",
            archivos: [
                {
                    nombre: "Nombre Archivo 1",
                    enlace: "enlace 1",
                    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/24-ponder_9-05-2007_14-22-44-crop.jpg/800px-24-ponder_9-05-2007_14-22-44-crop.jpg"
                }
            ]
        }
    ],
    [
        {
            titulo: "Documentos 1 - Parte 2",
            archivos: [
                {
                    nombre: "Nombre Archivo 1",
                    enlace: "enlace 1",
                    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/24-ponder_9-05-2007_14-22-44-crop.jpg/800px-24-ponder_9-05-2007_14-22-44-crop.jpg"
                }
            ]
        }
    ]
];


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

          <Route path="/index2" element={<Inicio />} />
          <Route path="/documentos2" element={<Documentos />} />
          <Route path="/proceso2" element={<Proceso />} />
          <Route path="/nosotros2" element={<Nosotros />} />
          <Route path="/proyectos2" element={<Proyectos />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
