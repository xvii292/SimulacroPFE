import './App.css';
import Navbar from './components/Navbar';
import PiedePagina from './components/footer';
import Portada from './components/Portada';
import Productos from './components/productos';
import Instalaciones from './components/instalacion';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Portada/>
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
