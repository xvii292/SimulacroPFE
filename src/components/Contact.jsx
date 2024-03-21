import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null); // Referencia para el formulario

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const form = formRef; // Utilizar la misma referencia para acceder al formulario

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvncscq",
        "template_71usdg7",
        form.current,
        "PN2llZtd2YffyOrXg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Cambia el estado a true cuando se envía correctamente
          formRef.current.reset(); // Restablece el formulario
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Efecto para restablecer el estado isSubmitted después de 3 segundos
  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  return (
    <div className="contact-container" id="contacto" style={{ scrollMarginTop: '100px' }}>
      <div className="contact-image">
        <div className="overlay">
          <p>"Tu opinión es valiosa para nosotros"</p>
        </div>
      </div>
      <div className="contact-form">
        <form ref={formRef} onSubmit={sendEmail}>
          <h2>Escríbenos</h2>
          <input type="text" placeholder="Nombre" name="user_name" required />
          <input type="text" placeholder="Apellido" name="apellido" required />
          <input type="email" placeholder="Correo electrónico" name="user_email" required />
          <input type="tel" placeholder="Teléfono" name="telefono" />
          <textarea placeholder="Asunto" name="asunto" rows="2" cols="50"></textarea>
          <label>
            <input type="checkbox" name="terms" required />
             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url */}
            Acepto los <a onClick={openModal}>Términos y Condiciones</a>
          </label>
          <button type="submit">Enviar</button>
        </form>
        {isSubmitted && <p className="confirmacion">¡El formulario se envió correctamente!</p>}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>

            <h2 id="titulo">Términos y Condiciones</h2>
            <p>¡Bienvenido a Hydroponic Manzanares! Por favor, lee detenidamente estos términos y condiciones antes de utilizar nuestro sitio web.</p>
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

            <button className="Btn-cerrar" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;