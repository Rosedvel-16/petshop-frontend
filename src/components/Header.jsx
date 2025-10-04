import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav>
        <h1>Pet Shop</h1>
        <div className="nav-links">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;