import './App.css';
import Footer from './componentes/Footer';
import NavbarBuscador from './componentes/NavbarBuscador';
import Recomendaciones from './componentes/Recomendaciones';
import Reproductor from './componentes/Reproductor';
import Login from './paginas/Login';

function App() {
  return (
    <div>
      <header>
        <NavbarBuscador />  
      </header>
      <div className="containerRepro">
      <Recomendaciones />
        <Reproductor />
      </div>
    </div>
  );
}

export default App;