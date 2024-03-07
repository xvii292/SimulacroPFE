import React, { useState } from 'react';
import './productos.css';

const Productos = () => {
  // La estructura inicial de las tarjetas, incluyendo propiedades para enCarrito y esFav
  const [cards, setCards] = useState([
    { id: 1, enCarrito: false, esFav: false, nombre: 'Tomate Pera (950g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 1.99, oferta: 2.99, claseImg: 'Tomate' },
    { id: 2, enCarrito: false, esFav: false, nombre: 'LECHUGA ROMANA (250g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 2.99, color: '#a5cc43', claseImg: 'Lechuga' },
    { id: 3, enCarrito: false, esFav: false, nombre: 'Naranjas (1050g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 2.99, color: '#a5cc43', claseImg: 'Naranja' },
    { id: 4, enCarrito: false, esFav: false, nombre: 'Plátano (250g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 2.99, color: '#a5cc43', claseImg: 'Platano' },
  ]);

  // Función para manejar el estado de enCarrito
  const toggleCarrito = (id) => {
    setCards(cards.map(card =>
      card.id === id ? { ...card, enCarrito: !card.enCarrito } : card
    ));
  };

  // Función para manejar el estado de esFav
  const toggleFav = (id) => {
    setCards(cards.map(card =>
      card.id === id ? { ...card, esFav: !card.esFav } : card
    ));
  };

  return (
    <div className="contenedorCards">
      {cards.map((card) => (
        <div className={`card ${card.enCarrito ? 'enCarrito' : ''} ${card.esFav ? 'esFav' : ''}`} key={card.id}>
          <div className="wrapper">
            <div className="colorProd" style={{ backgroundColor: card.color || 'transparent' }}></div>
            <div className={`imgProd ${card.claseImg}`}></div>
            <div className="infoProd">
              <div className="textProd">
                <p className="nombreProd">{card.nombre}</p>
                <div className="infoNutricional">
                  <p className="nutricionalItem">
                    {card.calorías} <span className="nutricionalLabel">Calorías</span>
                  </p>
                  <p className="nutricionalItem">
                    {card.proteínas} <span className="nutricionalLabel">Proteínas</span>
                  </p>
                  <p className="nutricionalItem">
                    {card.carbohidratos} <span className="nutricionalLabel">Carbohidratos</span>
                  </p>
                  <p className="nutricionalItem">
                    {card.grasas} <span className="nutricionalLabel">Grasas</span>
                  </p>
                </div>
              </div>
              <div className="actions">
                <div className="preciosGrupo">
                  {card.oferta && <p className="precio precioOferta">{card.oferta}</p>}
                  <p className="precio precioProd">{card.precio}</p>
                </div>
                <div className="icono action aFavs" onClick={() => toggleFav(card.id)}>
                  {/* Icono de favorito, asegúrate de tener SVG o un componente Icon aquí */}
                </div>
                <div className="icono action alCarrito" onClick={() => toggleCarrito(card.id)}>
                  {/* Icono de carrito, asegúrate de tener SVG o un componente Icon aquí */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productos;
