import React from 'react';
import './Services.css';
// Asegúrate de tener las imágenes importadas correctamente
import consultoriaImg from '../assets/consultoria.jpeg';
import sistemasImg from '../assets/sistemas.jpeg';
import monitoreoImg from '../assets/monitoreo.jpeg';
import suministroImg from '../assets/suministro.jpeg';

const Service = ({ name, description, imageUrl, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`service ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: color,
        flex: isHovered ? 2 : 1, // Controla la expansión de la sección
      }}
    >
      <div className="service-image-container">
        <img src={imageUrl} alt={name} className="service-image" />
      </div>
      <div className="service-text">
        <h2 className="service-title">{name}</h2>
        {isHovered && <p className="service-description">{description}</p>}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services-container" id="servicios" style={{ scrollMarginTop: '100px' }}>
      <Service 
        name="Consultoría en Hidroponía" 
        description="Asesoría personalizada para el diseño y manejo de sistemas hidropónicos, incluyendo selección de cultivos y soluciones nutritivas."
        imageUrl={consultoriaImg}
        color="#A1C181" 
      />
      <Service 
        name="Instalación de Sistemas" 
        description="Instalación profesional de sistemas hidropónicos adaptados a tus necesidades, ya sea para producción comercial o personal."
        imageUrl={sistemasImg}
        color="#79A3B1" 
      />
      <Service 
        name="Monitoreo Inteligente" 
        description="Implementación de sensores y sistemas de IA para el monitoreo en tiempo real de las condiciones del cultivo."
        imageUrl={monitoreoImg}
        color="#F4D35E" 
      />
      <Service 
        name="Suministro de Nutrientes" 
        description="Provisión de soluciones nutritivas personalizadas para maximizar el crecimiento y la salud de tus cultivos hidropónicos."
        imageUrl={suministroImg}
        color="#EE964B" 
      />
    </section>
  );
};

export default Services;
