import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function Header() {
  return (
    <header className="header">
      <nav>
        <h1>Pet Shop</h1>
        <div className="nav-links">
          <Link to="/">Inicio</Link> 
          <Link to="/productos">Productos</Link> 
          <a href="contacto">Contacto</a> 
        </div>
      </nav>
    </header>
  );
}

export default Header;