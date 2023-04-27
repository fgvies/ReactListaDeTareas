import freecodecamplogo from "./imagenes/logo-freecodecampok.jpeg";
import './App.css';
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freecodecamplogo}
          className='freecodecamp-logo'
          alt="logo"
          />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas!</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
