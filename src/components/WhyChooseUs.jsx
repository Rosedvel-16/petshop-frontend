import React from 'react';
import { FaShippingFast, FaPaw, FaShieldAlt } from 'react-icons/fa'; // Necesitarás instalar react-icons

function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h3>¿Por qué elegirnos?</h3>
        <div className="features-list">
          <div className="feature-item">
            <FaShippingFast size={50} color="#012454" />
            <h4>Envío Rápido</h4>
            <p>Entrega en 24-48 horas en todo el país. ¡Tu mascota no tendrá que esperar!</p>
          </div>
          <div className="feature-item">
            <FaPaw size={50} color="#012454" />
            <h4>Productos de Calidad</h4>
            <p>Solo trabajamos con las mejores marcas, garantizando el bienestar de tus mascotas.</p>
          </div>
          <div className="feature-item">
            <FaShieldAlt size={50} color="#012454" />
            <h4>Compra Segura</h4>
            <p>Nuestra plataforma cuenta con la más alta seguridad para proteger tus datos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;