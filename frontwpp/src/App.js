import logo from './logoWpp.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//importamos los componentes
import CompShowClients from './components/ShowClients';
import Autentication from './components/Autentication';
import Menu from './components/Menu';
import ControlEnviados from './components/ControlEnviados';
import EnviarMasivo from './components/EnviarMasivo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <BrowserRouter>
  
        <Routes>
        <Route patc='/' element={<Menu/>} >  
          <Route path='/' element={ <Autentication /> } />
          <Route path='/listaClientes' element={ <CompShowClients />} />
          <Route path='/controlEnviados' element={ <ControlEnviados />  } />
          <Route path='/EnviarMasivo' element={ <EnviarMasivo />  } />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
