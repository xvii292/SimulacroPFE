import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Zoom } from 'react-reveal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CarruselImagenes.css';

import Imagen1 from '../assets/h1.jpg';
import almacen from '../assets/h2.jpg';
import Imagen3 from '../assets/h3.jpg';

const ArrowContainer = ({ children, onClick, direction }) => (
  <div className={`arrow-container ${direction}`} onClick={onClick}>
    {children}
  </div>
);

const NextArrow = ({ onClick }) => (
  <ArrowContainer onClick={onClick} direction="right">
    <div className="arrow">
      <FaChevronRight />
    </div>
  </ArrowContainer>
);

const PrevArrow = ({ onClick }) => (
  <ArrowContainer onClick={onClick} direction="left">
    <div className="arrow">
      <FaChevronLeft />
    </div>
  </ArrowContainer>
);





const imagenes = [
  {
    url: Imagen1,
    descripcion: 'En los años 60, Eduardo Gómez, un ingeniero agrónomo , fundó "Hydroponics Manzanares" en España. Su visión combinaba la agricultura con la emergente tecnología hidropónica, comenzando con experimentos en un pequeño invernadero.',
  },
  {
    url: almacen,
    descripcion: 'Con el respaldo de inversores, Hydroponics Manzanares expandió sus instalaciones, adoptando tecnologías avanzadas como riego automatizado y soluciones nutricionales personalizadas. Destacaron por un sistema único de reciclaje de agua, minimizando desperdicios.',
  },
  {
    url: Imagen3,
    descripcion: 'Hoy, la empresa es líder mundial en hidroponía, colaborando con agricultores y restaurantes. Su compromiso con la sostenibilidad se refleja en prácticas ecoamigables, estableciendo a "Hydroponics Manzanares" como referente en la innovación y excelencia en el cultivo hidropónico.',
  },
];

const CarruselImagenes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Zoom>
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
    </Zoom>
  );
};

export default CarruselImagenes;
