import './App.css';

import Navbar from './components/Navbar';
import PiedePagina from './components/footer';

import Productos from './components/productos';
import Instalaciones from './components/instalacion';
import CarruselImagenes from './components/CarruselImagenes';



import Portada from './components/Portada';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        <Navbar></Navbar>
        <Portada></Portada>

      </header>
      <main>

        <Productos />
        <h2 id="instalaciones">Instalaciones</h2>
       
        <CarruselImagenes />
      </main>

      <PiedePagina />
    </div>
  );
}

export default App;
