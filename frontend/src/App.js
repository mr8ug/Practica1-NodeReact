
import './App.css';
import Alrevez from './components/Alrevez';
import Division from './components/Division';
import Fibonacci from './components/Fibonacci';

//components
import Header from './components/Header';
import Informacion from './components/Informacion';
import Multiplicacion from './components/Multiplicacion';
import ParOImpar from './components/ParOImpar';
import Potencia from './components/Potencia';
import Raiz from './components/Raiz';

function App() {
  return (

    <div className="App">

      <Header />
      <Informacion />
      <div className='Funciones'>
        <ParOImpar />
        <Fibonacci />
        <Alrevez />
        <Potencia />
        <Raiz />
        <Multiplicacion />
        <Division />
      </div>

    </div>
  );
}

export default App;
