import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function ProductsPage() {
  const [cart, setCart] = useState([]);

  // Lista de todos los productos (puedes añadir más)
  const products = [
    { id: 1, name: 'Comida para perro premium', description:"Alimento de alta calidad para un pelaje brillante y digestión saludable", price: 25.99, image: 'https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dwe1b94d22/images/canbo-dog-food-cachorros-sb-pollo-rz-pq-x-1-kg.jpg' },
    { id: 2, name: 'Juguete para gato',description:'Que tu gato no se aburra! Adquiere este producto', price: 9.50, image: 'https://www.lacuracao.pe/media/catalog/product/j/u/jugmas8787_01.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700' },
    { id: 3, name: 'Collar ajustable',description: 'Lleva contigo el collar ajustable para que tu mascota siempre este segura y comoda', price: 15.00, image: 'https://img.kwcdn.com/product/fancy/e336978d-d92a-4ab7-805c-cd2f4497c249.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },
    { id: 4, name: 'Bebedero automático', description: 'Fuente de agua silenciosa y con filtro para mantener a tu mascota hidratada.', price: 35.00, image: 'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/1223/PMP20000316654/full_image-1.jpeg' },
    { id: 5, name: 'Cepillo especial para baños', description: 'Cuida el pelaje de tu mascota con este cepillo especial.', price: 8.00, image:'https://buypal.com.pe/wp-content/uploads/2024/09/QUITA-PELUSAS-VAPOR-800x800.jpg.webp'},
];

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Si el producto ya está en el carrito, solo actualiza la cantidad
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Si no, añade un nuevo producto al carrito
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const clearCart = () => {
    setCart([]);
  };

  const generateWhatsAppLink = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos para hacer tu pedido.");
      return;
    }
    
    // Generar el mensaje con la lista de productos
    const cartItems = cart.map(item => 
      `${item.quantity} x ${item.name} ($${(item.price * item.quantity).toFixed(2)})`
    ).join('\n');
    
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    
    const message = `Hola, me gustaría hacer un pedido:\n\n${cartItems}\n\nTotal: $${totalPrice}\n\n¡Gracias!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    // Abrir el enlace en una nueva ventana
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="products-page">
      <div className="page-header" style={{ backgroundImage: `url('https://img77.uenicdn.com/image/upload/v1580708254/category/shutterstock_1525458542.jpg')` }}>
        <h2>Todos nuestros productos</h2>
      </div>
      <div className="products-container container">
        <div className="product-list-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="cart-summary">
          <h3>Carrito de Compras ({cart.length})</h3>
          <ul className="cart-items">
            {cart.map(item => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <div className="cart-actions">
              <button onClick={generateWhatsAppLink} className="whatsapp-button">
                Hacer pedido por WhatsApp
              </button>
              <button onClick={clearCart} className="clear-cart-button">
                Limpiar carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;