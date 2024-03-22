import React, { useState } from 'react';
import logoEmp from "../assets/logov1.png";
import logoInsta from "../assets/instagram.png";
import logoFace from "../assets/facebook.png";
import logoX from "../assets/x.png";
import './footer.css';

const Pie = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openCookiePolicy = () => {
    openModal();
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Hydroponic MnZ</h4>
          <img src={logoEmp} alt="Hydroponic MnZ logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li>Consultoría Comercial de Venta</li>
            <li>Consultoría de cultivo</li>
            <li>Aviso legal</li>
            <li>Política de Privacidad</li>
            <li onClick={openCookiePolicy} style={{ cursor: 'pointer' }}>Política de Cookies</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>¡Encuéntranos!</h4>
          <ul>
            <li>Teléfono: +34 926263456</li>
            <li>Email: hydroPonicsMnZ@gmail.com</li>
            <li>Dirección: Calle 45, Manzanares (13200) Ciudad Real</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-media-links">
            <a href="your_facebook_profile" target="_blank"><img src={logoFace} alt="Facebook" /></a>
            <a href="your_twitter_profile" target="_blank"><img src={logoX} alt="X" /></a>
            <a href="your_instagram_profile" target="_blank"><img src={logoInsta} alt="Instagram" /></a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className='modal-content'>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 id='titulo-modal'>Política de Cookies</h2>
            <p>El objetivo de la presente Política es trasladar al usuario de manera transparente la existencia y el uso de cookies que realiza HIDROPONIC MANZANARES en su página web, informando sobre su definición, la tipología de cookies utilizadas, identificando quién las utiliza, así como las opciones para gestionar su consentimiento o su rechazo al empleo de las mismas, el periodo de conservación de los datos y aportar información relevante en materia de protección de datos. Le recordamos que, aunque haya otorgado o retirado su consentimiento, podrá modificar sus preferencias en el punto 4 "Declaración de Cookies y Configuración", en concreto, haciendo click en el link para la retirada o cambio del consentimiento a través del Panel de Configuración de Cookies.</p>

            <h3>Información general</h3>
            <h4>1. ¿Qué son las cookies?</h4>
            <br />
            <p>
              Las cookies son ficheros que se descargan en
              el dispositivo del usuario (como un teléfono móvil u ordenador)
              a través de los sitios web que un usuario visita. Las cookies se
              descargan mientras se navega por Internet y su finalidad
              principal es recabar datos de navegación del usuario para mejorar
              los servicios y el funcionamiento de la página web, elaborar
              información estadística y mostrarle contenido personalizado.
              <br />
              Le informamos que en el transcurso de su navegación por este dominio
              de la Entidad se utilizan cookies propias técnicas, que permiten el
              acceso a la navegación y a los servicios que se ofrecen en el sitio web;
              cookies propias de personalización que, si lo autoriza, recordarán sus
              preferencias mientras navega por el sitio web; y cookies propias
              gestionadas por terceros que, si lo autoriza, analizarán su navegación
              con fines estadísticos. Finalmente, si lo consiente, también utilizaremos
              cookies propias gestionadas por terceros y cookies de terceros para
              recabar información sobre su comportamiento en la presente web, con
              el fin de desarrollar un perfil específico sobre usted y mostrarle
              publicidad en función del mismo. Los usos concretos que hacemos de
              estas tecnologías se describen a continuación.
            </p>

            <h4>2. ¿Para qué utilizamos las cookies en este sitio web?</h4>
            <br />
            <p>
              En general, utilizamos las cookies para conocer la
              actividad de los visitantes a nuestra página web,
              en concreto para obtener información relacionada con
              la fecha y hora de visita, así como preferencias en sus
              hábitos de navegación, analizar sus hábitos de navegación
              para introducir cambios en el sitio web que mejoren su rendimiento
              o el acceso a productos en los que se haya mostrado mayor interés.
              <br />
              También se utilizan para proporcionar información sobre la navegación
              de los usuarios a los propietarios de otros sitios web y sus colaboradores,
              con el fin de analizar el uso que realizan nuestra página web.
              No obstante, en esta Política de Cookies encontrará información
              más concreta sobre las cookies que utilizamos y la finalidad de
              uso que tiene cada una (ver apartado 4 "Declaración de Cookies y
              Configuración").
            </p>

            <p>Al navegar por nuestra página web se utilizan cookies que pueden clasificarse de la siguiente manera:<br />

              <h4>Según el plazo de conservación en el dispositivo del usuario:</h4>
              <ul>
                <li>Las cookies de sesión son aquellas cuya persistencia en el dispositivo empleado por el usuario se limita al tiempo que el mismo esté navegando por el presente sitio web. Están diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.</li>
                <li>Las cookies persistentes son aquellas que se mantienen en el dispositivo del usuario más allá de la sesión de navegación. En particular, permiten que los datos sigan almacenados en el terminal y a los que se puede acceder y tratar durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
              </ul>

              <h4>Según la entidad que las gestione:</h4>
              <ul>
                <li>Las cookies propias son aquellas creadas o gestionadas por el responsable de la página web, en este caso, la Entidad, y que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por los usuarios. Utilizamos cookies propias persistentes con fines técnicos para controlar la visualización del banner informativo sobre cookies.</li>
                <li>Las cookies de terceros son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</li>
              </ul>

              <h4>Según la finalizada para la que se traten los datos obtenidos a través de las cookies:</h4>
              <ul>
                <li>Cookies técnicas (necesarias): Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan. Por ejemplo, las utilizamos, principalmente, para el mantenimiento de la sesión, el cálculo de tiempo de respuesta, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante tu navegación y habilitar contenidos dinámicos.</li>
                <li>Cookies de personalización (preferencias): Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas, en función de una serie de criterios en el terminal del usuario (por ejemplo, el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.).</li>
                <li>Cookies de análisis o de medición (estadísticas): Son aquellas que permiten el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</li>
                <li>Cookies publicitarias (marketing): Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, se hayan incluido en una página web, aplicación o plataforma desde la que se presta el servicio solicitado, en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios. Incluye las Cookies de publicidad comportamental que almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
              </ul>
              En el apartado 4 "Declaración de Cookies y Configuración" puede consultar la finalidad concreta de cada una de las cookies utilizadas en nuestra página web.</p>
            <h4>3. ¿Cómo puedo otorgar, denegar o revocar mi consentimiento?</h4>
            <p>
              <br />
              El empleo de cookies imprescindibles y estrictamente necesarias para el correcto funcionamiento del sitio web no se encuentra sujeto a aceptación por parte del usuario. Por este motivo, no podrá modificar su valor en el Panel de Configuración de Cookies.<br />
              La instalación de cualquier otra tipología de cookies empleadas en este sitio web se encuentra sujeto a aceptación expresa y previa por parte del usuario mediante nuestro Panel de Configuración de Cookies situado en el apartado 4 de "Declaración de Cookies y Configuración".
              En el caso de que no desee otorgar su consentimiento, podrá seleccionar la opción retirar el consentimiento que le aparece en el apartado 4 "Declaración de Cookies y Configuración". No obstante, le informamos que, en caso de no seleccionar ninguna opción del Panel de Configuración de Cookies equivale a un rechazo, de modo que no serán instaladas ni empleadas en su dispositivo cookies que no sean indispensables.<br />
              Adicionalmente, en aquellos casos en que con carácter previo haya otorgado o retirado su consentimiento, podrá modificar sus preferencias haciendo uso de nuestro Panel de Configuración de Cookies.
              Finalmente, le informamos que nosotros no controlamos la persistencia de las cookies de terceros, por lo que, si acepta su uso, deberá eliminarlas desde las opciones del navegador o desde el sistema ofrecido por el propio tercero.</p>
            <h4>4. Declaración de Cookies y Configuración</h4>
            <p>
              <br />
              La información recabada por las cookies técnicas o indispensables, analíticas, de personalización, de publicidad y de publicidad comportamental empleadas en esta página web es utilizada por la Entidad en su condición de editor del sitio web. Te facilitamos a continuación, el detalle sobre cómo se utilizan estas cookies.
              Para una mejor aclaración del contenido de cada tipología de cookies, mostramos el listado de cookies utilizado:
              <ul>
                <li>Nombre: identifica el nombre de la cookie.</li>
                <li>Proveedor: se especifica el titular de la cookie para poder diferencias aquellas que son propia de la Entidad o de terceros.</li>
                <li>Propósito: hace referencia a la finalidad del uso de la cookie.</li>
                <li>Caducidad: se especifica el plazo de conservación de la cookie en el dispositivo del usuario.</li>
                <li>Tipo: identifica el tipo técnico de cookie.</li>
              </ul></p>


            <h3>Protección de Datos</h3>
            <p>El empleo de cookies puede implicar la recopilación de datos personales de los usuarios de este sitio web. Por este motivo, en cumplimiento de la legislación vigente, ponemos en su conocimiento la siguiente información:</p>
            <b>1. Responsable de tratamiento</b><br />
            El Responsable del tratamiento de sus datos de navegación, obtenidos a través de las cookies en nuestra página web es HIDROPONIC MANZANARES.<br />
            Datos de contacto del responsable: Calle Industrial I, 2, 13.200 - Manzanares (Ciudad Real).<br />
            Datos de contacto del Delegado de Protección de Datos: hidroponicmnz@gmail.com
            <h4>2. Datos tratados</h4>
            <p>
              <br />
              La tipología de datos que se tratan a través de las cookies son datos identificativos, en concreto, los datos obtenidos de sus navegaciones por el sitio web y la navegación que realice en la misma: historial de navegación (páginas visitadas y clics en contenidos).</p>
            <h4>3. Finalidades del tratamiento y Legitimación</h4>
            <p>
              <br />
              Las finalidades del tratamiento están indicadas en el apartado 4 "Declaración de Cookies y Configuración". Aquellas cookies que sean necesarias para el funcionamiento de nuestra página web se instalarán en su dispositivo. Para todos los demás tipos de cookies necesitamos su consentimiento. En cualquier momento puede cambiar o retirar su consentimiento en el apartado 4 "Declaración de Cookies y Configuración" de la presente Política de Cookies.
              En particular, si consiente las cookies de publicidad y de publicidad comportamental (marketing), podremos utilizar los datos que obtengamos de su navegación para almacenarlos y elaborar un perfil sobre usted, de manera que podamos ofrecerle publicidad que pueda ser de su interés. Para ello, tendremos en cuenta su comportamiento y preferencias a la hora de navegar en este sitio web. De este modo, podremos ofrecerle productos y servicios que creemos que pueden interesarle.
              Asimismo, si nos lo autoriza, utilizaremos sus datos para el seguimiento y análisis estadístico de los usuarios que utilizan nuestro sitio web. Esto nos permitirá mejorar la experiencia del usuario a la hora de utilizar nuestra web. Para ello, contaremos con Google Analytics, cuyas políticas puedes consultar en el siguiente enlace Política de Google Analytics.</p>
            <h4>4. Destinatarios de los datos.</h4>
            <p>
              <br />
              Los destinatarios de la información se encuentran descritos en el apartado 4 "Declaración de Cookies y Configuración", en la columna Proveedor de cada una de las cookies.</p>
            <h4>5. Transferencias a terceros países</h4>
            <p><br />
              El tratamiento de los datos se realiza, con carácter general, en el Espacio Económico Europeo o en países que han sido declarados con un nivel adecuado de protección.</p>
            <h4>6. Periodo de conservación de los datos.</h4>
            <p>
              <br />
              El periodo de conservación de cada una de las cookies se puede consultar en el apartado 4 "Declaración de Cookies y Configuración", en la columna "Persistencia".
              En caso de que usted haya aceptado las cookies de Google Analytics los datos recabados a través de dichas cookies se almacenarán en nuestros sistemas durante un plazo de 26 meses.</p>
            <h4>7. Derechos de los usuarios</h4>
            <p>
              <br />
              Como titular de los datos usted tiene derecho a acceder, actualizar, rectificar y suprimir los datos, así como otros derechos, o solicitar más información sobre el tratamiento que realizamos de las cookies dirigiéndose al correo electrónico hidroponicmnz@gmail.com.
              Tiene derecho a presentar cualquier reclamación ante la autoridad de control competente, considerando que la misma es, en España, la Agencia Española de Protección de Datos. Para poder ejercitar sus derechos en materia de protección de datos puede contactarnos a través de correo electrónico hidroponicmnz@gmail.com, o dirigir su solicitud mediante escrito dirigido al responsable de tratamiento en Calle Puerto, 2, 13.500 - Manzanares (Ciudad Real).</p>
            <p>Actualizaciones y cambios en la Política de Cookies JF PIMI realizará una revisión de la Política de cookies anualmente, salvo que existan exigencias normativas o de otra índole que hagan necesario adaptar la Política con una periodicidad inferior. Por tanto, se aconseja a los usuarios que consulten periódicamente su contenido, con el objetivo de estar informado adecuadamente sobre cómo y para qué utilizamos las cookies.
              Fecha de la última actualización: Marzo de 2024.</p>
              <button className="Btn-cerrar" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Pie;