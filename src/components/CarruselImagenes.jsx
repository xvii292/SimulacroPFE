import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarruselImagenes.css';
import { Zoom } from 'react-reveal';
import Imagen1 from '../assets/invernadero.jpg';
import almacen from '../assets/almacen.jpg';
import Imagen3 from '../assets/oficina.jpg';



const CarruselImagenes = () => {
  const imagenes = [
    {
      url: Imagen1,
      descripcion: 'Nuestros invernaderos son una infraestructura clave que crea un ambiente controlado y eficiente para el crecimiento de plantas sin suelo. En un entorno donde factores como la temperatura, la humedad y la luz son rigurosamente regulados, nuestras instalaciones permiten maximizar el rendimiento y la calidad de los cultivos.  ',
    },
    {
      url: almacen,
      descripcion: 'Nuestro Almacén es un espacio estratégicamente organizado y equipado para atender las necesidades específicas de nuestros clientes. Este lugar desempeña un papel crucial en el suministro de insumos .',
    },
    {
      url: Imagen3,
      descripcion: 'Nuestras oficinas son un reflejo de la cultura vibrante y la innovación que define a nuestra empresa. Ubicadas en Manzanares, nuestras instalaciones han sido diseñadas para fomentar la creatividad, la colaboración y el bienestar de nuestros empleados.',
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Zoom>
      <div className="custom-arrows">
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <div className="imagen-container">
              <img className="imagen-carrusel" src={imagen.url} alt={`Imagen ${index + 1}`} />
              <div className="descripcion-container">

                <p className="descripcion-carrusel">{imagen.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </Zoom>
  );
};

export default CarruselImagenes;


