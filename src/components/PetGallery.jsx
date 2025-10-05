import React from 'react';

function PetGallery() {
  const images = [
    'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_640.jpg',
    'https://urosario.edu.co/sites/default/files/2024-07/Las-mascotas-se-visten-a-la-moda.jpg',
    'https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-02-a-las-15.33.21.png',
    'https://www.senasa.gob.pe/senasacontigo/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-28-at-3.16.08-PM.jpeg',
    'https://www.casasnuevasaqui.com/guia/wp-content/uploads/2021/06/pomeranian.jpg.webp',
    'https://okdiario.com/img/2021/03/29/conoces-los-increibles-beneficios-del-spa-para-perros.jpg',
    'https://www.mascotasspa.com/wp-content/uploads/2025/01/Mascotas-Spa-Leon-PELUQUERIA-CANINA-11.jpg',
    'https://muchosnegociosrentables.com/wp-content/uploads/2020/10/franquicias-de-tiendas-para-mascotas.jpg',
  ];

  return (
    <section className="pet-gallery-section">
      <div className="container">
        <h3>Momentos de felicidad</h3>
        <p>Porque su felicidad es nuestra misión.</p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Mascota ${index + 1}`} className="gallery-image" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PetGallery;