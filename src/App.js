import './App.css';
import PiedePagina from './components/footer';
import Productos from './components/productos';
import Instalaciones from './components/instalacion';


function App() {
  return (
    <div className="App">
      <header className="App-header">

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
