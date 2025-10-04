import React, { useState, useEffect } from 'react';

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Aquí pones las URLs de las imágenes que quieres en el carrusel
  const images = [
    'https://sumaqmercados.pe/wp-content/uploads/2023/07/sumaq-mercados-blog-como-poner-una-tienda-de-accesorios-para-mascotas.jpg',
    'https://www.triada.com.pe/noticias/wp-content/uploads/2022/05/MascotasHuesito-1210x700.jpg',
    'https://dojiw2m9tvv09.cloudfront.net/16738/2/comohacercrecertunegociopetshop.jpg',
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="banner-content">
        <h2>Bienvenido a tu tienda de mascotas</h2>
        <p>Encuentra los mejores productos para tus compañeros peludos. <br /> Todo lo que necesitas para tu mascota, ¡lo encuentras aquí!</p>
        <div className="banner-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="#productos" className="banner-button">Explora productos</a>
          <a href="/adoptar" className="banner-button">Conoce cómo Adoptar</a>
          <a href="/contacto" className="banner-button">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}

export default Banner;