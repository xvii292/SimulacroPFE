import React, { useState } from 'react';
import './Contact.css'; // Asegúrate de que el nombre coincida con tu archivo CSS

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-container" id="contacto" style={{ scrollMarginTop: '100px' }}>
      <div className="contact-image">
        <div className="overlay">
          <p>"Tu opinión es valiosa para nosotros"</p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <h2>Escríbenos</h2>
          <input type="text" placeholder="Nombre" name="nombre" />
          <input type="text" placeholder="Apellido" name="apellido" />
          <input type="email" placeholder="Correo electrónico" name="email" />
          <input type="tel" placeholder="Teléfono" name="telefono" />
          <textarea placeholder="Asunto" name="asunto" rows="2" cols="50"></textarea> {/* Cambiado a un textarea */}
          <label>
            <input type="checkbox" name="terms" />
            Acepto los <a onClick={openModal}>Términos y Condiciones</a>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            
            <h2 id="titulo">Términos y Condiciones</h2>
            <p>¡Bienvenido a Hydroponic Manzanares! Por favor, lee detenidamente estos términos y condiciones antes de utilizar nuestro sitio web.
            </p>
            <p>1. Aceptación de los Términos y Condiciones</p>
            <p>Al acceder y utilizar Hydroponic Manzanares, aceptas cumplir con estos términos y condiciones.</p>
            <p> 2. Uso Apropiado del Sitio</p>
            <p>Utiliza el sitio de manera legal y adecuada, sin causar daño a otros usuarios o al sitio mismo.</p>
            <p>3. Propiedad Intelectual</p>
            <p>Todo el contenido del sitio está protegido por derechos de autor y otras leyes de propiedad intelectual. No puedes utilizarlo sin autorización.</p>
            <p>4. Privacidad</p>
            <p>Respetamos tu privacidad y protegemos tus datos personales de acuerdo con nuestra Política de Privacidad.</p>
            <p>5. Enlaces a Sitios de Terceros</p>
            <p>Hydroponic Manzanares puede incluir enlaces a sitios web de terceros, pero no somos responsables de su contenido o políticas de privacidad.</p>
            <p>6. Modificaciones</p>
            <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Te recomendamos revisarlos regularmente.</p>
            <p>7. Ley Aplicable</p>
            <p>Estos términos se rigen por las leyes de Manzanares, sin perjuicio de las normas de conflicto de leyes.</p>
            <p>8. Contacto</p>
            <p>Si tienes preguntas o comentarios sobre estos términos y condiciones, contáctanos.</p>
            <p>Gracias por utilizar Hydroponic Manzanares.</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

