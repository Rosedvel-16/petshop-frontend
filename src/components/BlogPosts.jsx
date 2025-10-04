import React from 'react';

function BlogPosts() {
  const posts = [
    { id: 1, title: '5 Consejos para la alimentación de tu cachorro', image: 'https://cdn0.expertoanimal.com/es/posts/5/6/1/que_pueden_comer_los_perros_de_comida_humana_4165_orig.jpg' },
    { id: 2, title: 'Cómo adiestrar a tu gato para usar el arenero', image: 'https://cdn0.expertoanimal.com/es/posts/1/2/2/como_ensenar_a_un_gato_a_usar_el_arenero_21221_orig.jpg' },
    { id: 3, title: 'La importancia de los paseos diarios para tu perro', image: 'https://www.cijarsa.com.mx/wp-content/uploads/2022/11/perritos-2-min-scaled.jpg' },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h3>Últimos artículos del blog</h3>
        <div className="blog-posts-list">
          {posts.map(post => (
            <div key={post.id} className="blog-post-card">
              <img src={post.image} alt={post.title} />
              <h4>{post.title}</h4>
              <a href="#" className="read-more-button">Leer más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;