import './App.css';
<<<<<<< HEAD

=======
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
>>>>>>> c20dd5f7f207c108711ddbf8a9186379209567e5
import Navbar from './components/Navbar';
import PiedePagina from './components/footer';

import Portada from './components/Portada';
import Productos from './components/productos';
<<<<<<< HEAD
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
=======
import CookieBanner from './components/CookieBanner';
import PasosVenta from './components/PasosVenta';
import CarruselImagenes from './components/CarruselImagenes';
import Services from './components/Services';
import Contact from './components/Contact';


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
                <h2 className="instalacionesTit">Sobre nosotros</h2>
              </div>
              <CarruselImagenes />
              <Contact/>
            </main>
>>>>>>> c20dd5f7f207c108711ddbf8a9186379209567e5

            <PiedePagina />
          </div >
      }
    </div >
  );
}

export default App;
