

import React from 'react';
import imagenPortada from '../assets/portada.jpg';
import './Portada.css'; 

const Portada = () => {
  return (
    <div className="portada">
      <img src={imagenPortada} className="portada-imagen" alt="Portada" />
      <div className="contenido">
        <h1>HydroPonic Manzanares</h1>
        <p>"La salud hecha hojas"</p>
        <button>Compra ya</button>
      </div>
    </div>
  );
}

export default Portada;