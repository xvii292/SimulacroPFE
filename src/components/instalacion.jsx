import React, { useState, useEffect } from 'react';
import './instalacion.css'; // Asegúrate de tener estilos definidos en este archivo
import imagen1 from "../assets/Imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/Imagen3.jpg";

const Instalacion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imagen1, imagen2, imagen3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

 
    return (
        <div className='bloque'>
          <div className='cuadroTitulo'>
            <h2 className='titulo'>INSTALACIONES</h2>
            <hr className='linea'></hr>
          </div>
    
          <div className='cuadroImagenes'>
            <div className="slider-container">
              <div className="slider">
                <img src={imagen1} alt="Imagen 1" className="slide" />
                <img src={imagen2} alt="Imagen 2" className="slide active" />
                <img src={imagen3} alt="Imagen 3" className="slide" />
                <button className="prev" onClick={prevSlide}>❮</button>
          <button className="next" onClick={nextSlide}>❯</button>
              </div>
             
            </div>
          </div>
        </div>
      );
    };

export default Instalacion;