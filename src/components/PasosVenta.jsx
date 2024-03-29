import React from 'react';
import './PasosVenta.css';
import { Zoom } from 'react-reveal';
import recolecta from '../assets/recolecta.png';
import transporte from '../assets/transporte.png';
import comer from '../assets/comer.png';

const PasosVenta = () => {
    return (
        <section className="shipping-steps">
            <Zoom>
            <div className="step">
                <p className='Tit'>Recolecta</p>
                <img src={recolecta} alt="Paso de Recolecta" />
                <p>Nuestros granjeros cogeran tu producto.</p>
            </div>
            <div className="step">
                <p className='Tit'>Envío</p>
                <img src={transporte} alt="Paso de Envío" />
                <p>Tu producto será enviado a tu casa.</p>
            </div>
            <div className="step">
                <p className='Tit'>Consumo</p>
                <img src={comer} alt="Paso de Consumo" />
                <p>El producto estará listo para el consumo.</p>
            </div>
            </Zoom>
        </section>
    );
};

export default PasosVenta;
