import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="index.js">CSGO STORE</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="cuchillos.js">Cuchillos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Guantes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Variedad</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
