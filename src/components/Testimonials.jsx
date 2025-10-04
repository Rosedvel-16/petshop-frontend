import React from 'react';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'María G.', text: '¡Excelente servicio y productos de la mejor calidad! Mi perro está encantado con su nueva cama.', pet: 'dueña de un Labrador' },
    { id: 2, name: 'Juan C.', text: 'El mejor lugar para encontrar juguetes únicos para mi gato. ¡Nunca se aburre!', pet: 'dueño de un gato' },
    { id: 3, name: 'Sofía L.', text: 'Ropa para mascotas muy bonita y cómoda. Mi perrita se ve adorable con su nuevo abrigo.', pet: 'dueña de un Caniche' },
    { id: 3, name: 'Clara P.', text: 'Todos los productos que compré marcaron un antes y después en la vida de mi gatita.', pet: 'dueña de una gata' },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h3>Lo que dicen nuestros clientes</h3>
        <div className="testimonials-list">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}, <small>{testimonial.pet}</small></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;