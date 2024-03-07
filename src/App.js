import './App.css';
import PiedePagina from './components/footer';
import Productos from './components/productos';
import Instalaciones from './components/instalacion';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
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
