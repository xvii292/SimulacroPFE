import React, { useState } from 'react';
import './Navbar.css';
import logoEmp from "../assets/logov1.png";
import imagenCarrito from '../assets/carrito.jpg';



const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="contenedor">
      <img src={logoEmp} alt="Hydroponic MnZ logo" class="footer-logo"/>
      
      </div>

      <div className={`menu-icon ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-list ${menuVisible ? 'open' : ''}`}>
        <li className="nav-item">
          <a className="nav-link" href="#inicio" onClick={toggleMenu}>Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nuestrosServicios" onClick={toggleMenu}>Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#empleados" onClick={toggleMenu}>Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#empleados" onClick={toggleMenu}>Sobre Nosotros</a>
        </li>
       
        {/* Agrega más elementos del menú según sea necesario */}
      </ul>

      <img src={imagenCarrito} className="carrito-imagen" alt="Carrito" />

      <div className="horizontal-bar"></div>
      
    </div>
  );
};

export default Navbar;