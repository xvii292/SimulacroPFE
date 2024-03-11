import './App.css';
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import Navbar from './components/Navbar';
import PiedePagina from './components/footer';
import Portada from './components/Portada';
import Productos from './components/productos';
import CookieBanner from './components/CookieBanner';
import PasosVenta from './components/PasosVenta';
import CarruselImagenes from './components/CarruselImagenes';
import Services from './components/Services';


function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])


  return (
    <div className="App">
      {
        loading ?
          <BounceLoader
            color="#387423"
            cssOverride={{
              display: 'flex',
              marginTop: '20%',
              marginLeft: '45%'
            }}
            loading
            size={100}
          />
          :
          <div>
            <header className="App-header">
              <Navbar />
              <Portada />
              <CookieBanner />
            </header>
            <main>
              <div class="centered-container">
                <h2 className="ServiciosTit">Servicios</h2>
              </div>
              <Services/>
              <div class="centered-container">
                <h2 className="ProductosTit">Productos</h2>
              </div>
              <Productos />
              <PasosVenta />
              <div class="centered-container">
                <h2 className="instalacionesTit">Nuestras Instalaciones</h2>
              </div>
              <CarruselImagenes />

            </main>

            <PiedePagina />
          </div >
      }
    </div >
  );
}

export default App;
