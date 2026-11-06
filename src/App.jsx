
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dudas from './pagina/Dudas';
import Productos from './pagina/productos';
import Header from './componentes/Header';
import Inicio from './pagina/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Dudas" element={<Dudas />} />
        <Route path="/Productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
