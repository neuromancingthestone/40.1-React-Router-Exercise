import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <Link to="/" style={{marginRight: 5}}>
          Home
        </Link>
        <Link to="/Baja" style={{marginRight: 5}}>
          Baja
        </Link>
        <Link to="/Doritos" style={{marginRight: 5}}>
          Doritos
        </Link>      
        <Link to="/Nerds" style={{marginRight: 5}}>
          Nerds
        </Link>           
      </nav>
    </div>
  );
}

export default NavBar;