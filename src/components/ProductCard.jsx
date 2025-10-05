import React from 'react';

function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;