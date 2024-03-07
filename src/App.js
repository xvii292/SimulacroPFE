import './App.css';
import Navbar from './components/Navbar';
import PiedePagina from './components/footer';

import Productos from './components/productos';
import Instalaciones from './components/instalacion';
import Navbar from './components/Navbar';


import Portada from './components/Portada';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar/>

        <Navbar></Navbar>
        <Portada></Portada>

      </header>
      <main>

        <Productos />
        <Instalaciones />
      </main>

      <PiedePagina />
    </div>
  );
}

export default App;
