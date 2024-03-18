import React from 'react';
import logoEmp from "../assets/logov1.png";
import logoInsta from "../assets/instagram.png";
import logoFace from "../assets/facebook.png";
import logoX from "../assets/x.png";
import './footer.css';

const Pie = () => {

  const abrirPoliticaCookies = () => {
    window.open('./Cookies.html', '_blank');
  };
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h4>Hydroponic MnZ</h4>
          <img src={logoEmp} alt="Hydroponic MnZ logo" class="footer-logo"/>
        </div>
        <div class="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li>Consultoría Comercial de Venta</li>
            <li>Consultoría de cultivo</li>
            <li>Aviso legal</li>
            <li>Política de Privacidad</li>
            <li onClick={abrirPoliticaCookies} style={{cursor: "pointer"}}>Política de Cookies</li>

          </ul>
        </div>
        <div class="footer-section">
          <h4>¡Encuéntranos!</h4>
          <ul>
            <li>Teléfono: +34 926263456</li>
            <li>Email: hydroPonicsMnZ@gmail.com</li>
            <li>Dirección: Calle 45, Manzanares (13200) Ciudad Real</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Redes Sociales</h4>
          <div class="social-media-links">
            <a href="your_facebook_profile" target="_blank"><img src={logoFace} alt="Facebook"/></a>
            <a href="your_twitter_profile" target="_blank"><img src={logoX} alt="X"/></a>
            <a href="your_instagram_profile" target="_blank"><img src={logoInsta} alt="Instagram"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Pie;