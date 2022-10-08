import logo from './logoWpp.png';
import './App.css';

//importamos los componentes
import CompShowClients from './components/ShowClients';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Autentication from './components/Autentication';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Autentication /> } />
          <Route path='/home' element={ <CompShowClients /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
