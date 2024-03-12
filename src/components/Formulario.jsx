import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Formulario.css';


export const Formulario = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_baexp3e', 'template_x0rleco', form.current, 'fHO8Ye_YygdwmeuYY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='cuadro'>
      <div class="formulario">

        <div class="cuadro_formulario">

          <form ref={form} onSubmit={sendEmail}>

            <label for="nombre">Nombre:</label>
            <input type="text" name="user_name" required />

            <label for="apellidos">Apellidos:</label>
            <input type="text" name="apellidos" required />

            <label for="correo">Correo:</label>
            <input type="email" name="user_email" required />

            <label for="comentario">Comentario:</label>
            <textarea id="comentario" name="message" rows="4" required></textarea>

            <div class="boton_contenedor">
              <button class="boton" type="submit" value="Send">Enviar</button>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Formulario;