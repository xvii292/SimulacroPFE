import './App.css';

import Navbar from './components/Navbar';
import PiedePagina from './components/footer';

import Portada from './components/Portada';
import Productos from './components/productos';
import CarruselImagenes from './components/CarruselImagenes';




function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        <Navbar/>
        <Portada/>

      </header>
      <main>

        <Productos />
        <h2 id="instalaciones">Nuestros Orígenes</h2>
       
        <CarruselImagenes />
      </main>

      <PiedePagina />
    </div>
  );
}

export default App;
