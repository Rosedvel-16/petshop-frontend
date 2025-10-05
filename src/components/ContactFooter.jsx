import React, { useState } from 'react';

function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar el formulario a un servicio de backend, pero por ahora solo mostraremos los datos
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
  };

  const dogImage = 'https://static.vecteezy.com/system/resources/previews/058/701/587/non_2x/cute-dog-puppy-free-png.png'; // Deja el enlace de la imagen aquí

  return (
    <footer className="contact-footer-section">
      <div className="container contact-footer-grid">
        <div className="dog-image-container">
          <img src={dogImage} alt="Un perro amigable" className="dog-image" />
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contáctanos</h3>
            <p>rosecasas1606@gmail.com</p>
            <p>+51 987 654 321</p>
            <p>Víctor Larco Herrera - Trujillo - Perú</p>
          </div>
          <div className="contact-form-container">
            <h4>Envíanos un mensaje</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <input 
                type="text" 
                name="name" 
                placeholder="Tu nombre" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Tu correo" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Tu mensaje" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
              <button type="submit" className="submit-button">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;