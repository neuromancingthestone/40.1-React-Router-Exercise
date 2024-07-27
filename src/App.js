import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import NavBar from "./NavBar";
import VendingMachine from './VendingMachine';
import Baja from './BajaBlast'
import Doritos from "./Doritos";
import Nerds from "./Nerds";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />        
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/Baja" element={<Baja/>} />
          <Route path="/Doritos" element={<Doritos/>} />
          <Route path="/Nerds" element={<Nerds/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
