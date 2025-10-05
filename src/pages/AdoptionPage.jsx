import React from 'react';

function AdoptionPage() {
  const steps = [
    {
      id: 1,
      title: '1. Explora nuestros perfiles',
      description: 'Navega por las fichas de los animales disponibles para adopción. Conoce su historia, personalidad y necesidades especiales.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD8beAr8NrT7R5wuzTvQzWC2BPUQJGtNV0w&s'
    },
    {
      id: 2,
      title: '2. Envía tu solicitud',
      description: 'Llena un formulario de adopción. Es un paso importante para que podamos asegurarnos de que el animal irá a un hogar seguro y lleno de amor.',
      image: 'https://purina.com.pe/sites/default/files/2022-10/mascotas-en-adopcion-beneficios-y-requisitos-para-adoptar-un-perro-o-gato.png'
    },
    {
      id: 3,
      title: '3. Entrevista y visita',
      description: 'Una vez aprobada tu solicitud, te contactaremos para una entrevista y, si es posible, una visita para conocernos mejor.',
      image: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_entrevista__small/public/media/0d/entrevistas/carlos_rodriguez.jpg.webp'
    },
    {
      id: 4,
      title: '4. ¡Bienvenido a casa!',
      description: 'Una vez que todo esté en orden, te ayudaremos con el proceso para que tu nuevo compañero pueda ir a casa contigo. ¡Prepárate para una nueva vida juntos!',
      image: 'https://peru21.pe/sites/default/efsfiles/2025-05/perroton-2025-3.jpg'
    }
  ];

  const headerImage = 'https://unamglobal.unam.mx/wp-content/uploads/2024/02/destacada-perros-adoptados.jpg';

  return (
    <div className="adoption-page">
      <div className="page-header" style={{ backgroundImage: `url('${headerImage}')` }}>
        <h2>Conoce cómo Adoptar</h2>
      </div>
      <section className="adoption-intro container">
        <h3>Un amigo te está esperando</h3>
        <p>Adoptar una mascota es un acto de amor que cambia vidas. En Pet Shop, creemos que cada animal merece un hogar. Aquí te guiamos a través de nuestro sencillo proceso de adopción para que encuentres a tu compañero ideal.</p>
      </section>
      <section className="adoption-steps container">
        <h3>Nuestro proceso de adopción</h3>
        <div className="steps-container">
          {steps.map(step => (
            <div key={step.id} className="step-card">
              <img src={step.image} alt={step.title} className="step-image" />
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdoptionPage;