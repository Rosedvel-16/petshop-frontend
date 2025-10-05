import React from 'react';
import Banner from '../components/banner';
import PetGallery from '../components/PetGallery';
import WhyChooseUs from '../components/WhyChooseUs'; // Nuevo componente
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import BlogPosts from '../components/BlogPosts';
import Brands from '../components/Brands';
import MissionVision from '../components/MissionVision';

function HomePage() {
  const products = [
    { id: 1, name: 'Comida para perro premium', description:"Alimento de alta calidad para un pelaje brillante y digestión saludable", price: 25.99, image: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dwe1b94d22/images/canbo-dog-food-cachorros-sb-pollo-rz-pq-x-1-kg.jpg' },
    { id: 2, name: 'Juguete para gato',description:'Que tu gato no se aburra! Adquiere este producto', price: 9.50, image: 'https://www.lacuracao.pe/media/catalog/product/j/u/jugmas8787_01.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700' },
    { id: 3, name: 'Collar ajustable',description: 'Lleva contigo el collar ajustable para que tu mascota siempre este segura y comoda', price: 15.00, image: 'https://img.kwcdn.com/product/fancy/e336978d-d92a-4ab7-805c-cd2f4497c249.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },
    { id: 4, name: 'Bebedero automático', description: 'Fuente de agua silenciosa y con filtro para mantener a tu mascota hidratada.', price: 35.00, image: 'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/1223/PMP20000316654/full_image-1.jpeg' },
    { id: 5, name: 'Cepillo especial para baños', description: 'Cuida el pelaje de tu mascota con este cepillo especial.', price: 8.00, image:'https://buypal.com.pe/wp-content/uploads/2024/09/QUITA-PELUSAS-VAPOR-800x800.jpg.webp'},

  ];

  return (
  <main className="home-page">
    <Banner />
    <PetGallery />
    <WhyChooseUs />
    <section className="featured-products" id="productos">
        <h3>Productos Destacados</h3>
        <div className="product-list">
          {products.slice(0, 4).map(product => ( // .slice(0, 3) muestra solo los 3 primeros productos
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="view-all-button-container">
          <a href="/productos" className="view-all-button">Ver todos los productos</a>
        </div>
    </section>
    <MissionVision />
    <Testimonials />
    <BlogPosts />
    <Brands />
  </main>
);
}

export default HomePage;