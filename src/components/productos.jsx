import React, { useState } from 'react';
import './productos.css';

const Productos = () => {
  // La estructura inicial de las tarjetas, incluyendo propiedades para enCarrito y esFav
  const [cards] = useState([
    { nombre: 'TOMATE PERA (950g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 1.99, oferta: 2.99, claseImg: 'Tomate' },
    { nombre: 'LECHUGA ROMANA (250g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 2.99, color: '#a5cc43', claseImg: 'Lechuga' },
    { nombre: 'NARANJAS (1050g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 2.99, color: '#a5cc43', claseImg: 'Naranja' },
    { nombre: 'PLÁTANO (250g)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 2.99, color: '#a5cc43', claseImg: 'Platano' },
  ]);

  return (
    <div className="contenedorCards">
      {cards.map((card) => (
        <div className='card'>
          <div className="wrapper">
            <div className="colorProd"></div>
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
                <div className="icono action aFavs">
                  {/* Icono de favorito, asegúrate de tener SVG o un componente Icon aquí */}
                </div>
                <div className="icono action alCarrito">
                  {/* Icono de carrito, asegúrate de tener SVG o un componente Icon aquí */}
                </div>
                <div className='comprarya'>
                  <input type='button' value={"COMPRAR YA"}/>
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
