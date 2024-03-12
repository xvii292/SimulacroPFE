import React, { useState, useEffect } from 'react';
import './CookieBanner.css'; // Importa el archivo CSS
import txt from '../assets/politica_de_cookies.txt';

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [rejectedCookies, setRejectedCookies] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    // Aquí puedes agregar la lógica para guardar la preferencia del usuario en el almacenamiento local o en una cookie
  };

  const rejectCookies = () => {
    setRejectedCookies(true);
    // Aquí puedes agregar la lógica para rechazar las cookies
    // Por ejemplo, podrías establecer un estado o limpiar las preferencias de cookies guardadas
  };

  useEffect(() => {
    setShowBanner(true);
  }, []);

  const openTxtInNewWindow = () => {
    fetch(txt)
      .then(response => response.text())
      .then(text => {
        const newWindow = window.open();
        newWindow.document.write(`<pre>${text}</pre>`);
      })
      .catch(error => console.error('Error al cargar el archivo de texto:', error));
  };

  if (acceptedCookies) {
    return null; // No mostrar el banner si las cookies han sido aceptadas
  }

  if (rejectedCookies) {
    return null; // No mostrar el banner si las cookies han sido aceptadas
  }

  return (
    <div className={`cookie-banner ${showBanner ? 'show' : ''}`}>
      <label>
        <p>Este sitio web utiliza cookies. Al continuar navegando, aceptas nuestro uso de cookies.</p>
      </label>
      <a href={txt} target="_blank" rel="noreferrer" onClick={openTxtInNewWindow}>Leer nuestra Política de Cookies</a> 
      <button onClick={rejectCookies} className="reject-button">Rechazar Cookies</button>
      <button onClick={acceptCookies}>Aceptar Cookies</button>
    </div>
  );
};

export default CookieBanner;