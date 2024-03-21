import React, { useState } from 'react';
import './productos.css';

const Productos = () => {
  const [cards] = useState([
    { nombre: 'TOMATE BEEF (4Kg)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 11.20, oferta: 15.99, claseImg: 'Tomate', enlace: "https://www.amazon.es/Parcela-Andaluc%C3%ADa-Tropical-Producto-Cooperativa/dp/B0C4THBF5G/ref=sr_1_6?dib=eyJ2IjoiMSJ9.ylsTq2LUhY15OHyBVC4SSHaS_cm_we3TaeD4KJUjDJLkm86E1VLXbywC1ErYjbJTNlZVb1kGH_xCchXpNVM_AA.43nJJEsdYAMH6s1cfGieJ0apLMmgnkjN5jmxvhZ_538&dib_tag=se&keywords=tomate+pera&qid=1710930174&sr=8-6" },
    { nombre: 'CHALOTA (2Kg)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 12.99, color: '#a5cc43', claseImg: 'Chalota', enlace: "https://www.amazon.es/kg-Cebolla-%C3%88chalotte-Chalote-Selecci%C3%B3n/dp/B07M74GSJ8/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2B0CQUGQ3YTEW&dib=eyJ2IjoiMSJ9.bTyIjxSxxjI_Y6I1C4g2C442S0ow3I2BBtmtolFuKTxdQASZiPU4dusvD-BpvnoxmREn1-hPcRLxooi9bUM4ArTbB_RMU2xpmQe7lEiMpLKKeyAKQxEVk221SiGtU3N5-ZjwkX5jFm9y4Jn1eWIP6OstcA6LpGmMGlI_iAglXOdV5n322wW3KYsz-J_3yIhqBVfVOkZeAF5ArftX2N2tsBeolFzG-7iLCEW36kQ-pTo.CFV72h4qAlSaMMsDmi6eVuOc1u1cPpxYG3KXpPhPR6o&dib_tag=se&keywords=chalota&qid=1710930796&sprefix=chalota%2Caps%2C114&sr=8-2" },
    { nombre: 'NARANJAS (10Kg)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 20.95, color: '#a5cc43', claseImg: 'Naranja', enlace: "https://www.amazon.es/NARANJA-SANGUINA-VALENCIANA-RECOGIDAS-MANDADAS/dp/B0CVLDSQLZ/ref=sr_1_14?dib=eyJ2IjoiMSJ9.ogIALwn7K3QAlgz6i6UQgrJeQsBTPc_-69iuqKdOru6rPyzEdiXslG1JNFwN1lNQmkcpxjj0YJrt0mvJ-VxxMhHnSVTlT4WzhjT-1S2gw5rDb6n-hggFVr-RwN1ctKUhkinHyVEDN2V_HTbXtC622Ch6iUSmbZ_uL_wxiSy2BSwKzKOV9CQTDOzOBPiY_7s03kBe1nmi4cjybrVwgYANJQw1UsFcNVB0hzybjL_oa4MzMVKQAcOMC105DtOuIhSn-iQCHHWOrfTItrZfNjh0D_ghejt9A4Ahr1kkP-vBAXQ.coSmosu9rB_YuXl8eTXyjmecV7_Q5vNTdI6zYBK-iGE&dib_tag=se&keywords=naranjas&qid=1710930913&sr=8-14" },
    { nombre: 'AGUACATE (6Kg)', calorías: 670, proteínas: '49g', carbohidratos: '37g', grasas: '34g', precio: 31.00, color: '#a5cc43', claseImg: 'Aguacate', enlace: "https://www.amazon.es/NARANJAS-Aguacates-Valencia-equilibrado-conservantes/dp/B0CKS35V2C/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1BD6BMDECI39N&dib=eyJ2IjoiMSJ9.CfFCZInytQkYz12TiJzT79pB3LPr2XfRCdiJFK4ZxRs3ktskVRp3CaK3uvobEpImGF_4IgRUkqcjLHR7eRX-8gGTRBzzKdNbd99DavsSDPC6NUCzTmJn5QNBqX3ZKLuF3npbJa7t21OqTkNnD0JEJERJELa1E8QpjmIKWhDgR4Fp192AEqMWOFvq98AT_90DkxbibbDAg9z4nzvuCXkMdLKpyRDb8AH-FWXKtbRO1X6t5TpXoMBMWTN-WfhR-nOm3n8b3kJ6wei17CqkSKSClfZt-E3rlAS33B3w0M9cQKI.KcQZWkLpCyzTnohEE05GnDlg-2l2MA1pQBNZpTrodXE&dib_tag=se&keywords=aguacate&qid=1710931397&sprefix=aguacate%2Caps%2C105&sr=8-9" },
  ]);

  return (
    <div className="contenedorCards" id="productos">
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
                  <button onClick={() => { window.open(card.enlace, '_blank') }}>
                    COMPRAR YA
                  </button>
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
