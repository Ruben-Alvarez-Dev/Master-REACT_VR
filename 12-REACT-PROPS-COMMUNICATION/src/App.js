import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
  
  const ficha_medica={
    altura: "175cm",
    grupo: "A+",
    estado: "bueno",
    alergias: "ninguna"
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Word, from React!
        </p>
      {/* Cargo MiComponente */}
      
      <div className='componentes'>
        <hr/>
        <TercerComponente
            nombre="Ruben"
            apellidos="Alvarez"
            ficha={ficha_medica}
  
            />
        <hr/>
        <SegundoComponente/>
        <hr/>
        <MiComponente/>
      </div>
      
      </header>
    </div>
  );
}

export default App;
