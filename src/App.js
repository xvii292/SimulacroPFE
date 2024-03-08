import './App.css';
import Navbar from './components/Navbar';
import PiedePagina from './components/footer';
import Portada from './components/Portada';
import Productos from './components/productos';
import Instalaciones from './components/instalacion';
import CookieBanner from './components/CookieBanner';
import PasosVenta from './components/PasosVenta';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Portada />
        <CookieBanner />
      </header>
      <main>
        <PasosVenta />
        <Productos />
        <Instalaciones />

      </main>

      <PiedePagina />
    </div>
  );
}

export default App;
