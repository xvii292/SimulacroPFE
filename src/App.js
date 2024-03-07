
import './App.css';
import Navbar from './components/Navbar';
import PiedePagina from './components/footer';
import Portada from './components/Portada';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Portada></Portada>
      </header>
      <main></main>

      <PiedePagina/>
    </div>
  );
}

export default App;
