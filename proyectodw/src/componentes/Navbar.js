import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../src/imgs/JS.png';
import { Imagen } from './Imagen';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <ul className="container">
          <div className="container-logo">
              <Imagen className="logo" descripcion='' imageUrl={logo} />
          </div>

          <ul className={`links ${isOpen ? 'active' : ''}`}>
            <li className="link">
              <Link to="/">Informacion</Link>
            </li>
            <li className="link">
              <Link to="/Empresa">Carne</Link>
            </li>
            <li className="link">
              <Link to="/Contacto">Hamburguesa</Link>
            </li>
            <li className="link">
              <Link to="/Conocenos">Bebidas</Link>
            </li>

            


          </ul>

          <div className="toggle" onClick={toggleMenu}>
            |||
          </div>
        </ul>
      </nav>
    </div>
  );
};
