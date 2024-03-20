import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoEmp from "../assets/logov1.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setNavbarVisible(false);
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${navbarVisible ? '' : 'hide'}`}>
      <div className="contenedor">
        <img src={logoEmp} alt="Logo" className="footer-logo"/>
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
          <a className="nav-link" href="#servicios" onClick={toggleMenu}>Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#productos" onClick={toggleMenu}>Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#carrusel" onClick={toggleMenu}>Sobre Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto" onClick={toggleMenu}>Contáctanos</a>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
