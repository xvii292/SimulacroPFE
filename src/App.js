import './App.css';
import Navbar from './components/Navbar';
import PiedePagina from './components/footer';
import Portada from './components/Portada';
import Productos from './components/productos';
import CookieBanner from './components/CookieBanner';
import PasosVenta from './components/PasosVenta';
import CarruselImagenes from './components/CarruselImagenes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Portada />
        <CookieBanner />
      </header>
      <main>
        <Productos />
        <PasosVenta />
        <h2 id="instalaciones">Nuestras Instalaciones</h2>
        <CarruselImagenes/>

      </main>

      <PiedePagina />
    </div>
  );
}

export default App;
