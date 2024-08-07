import React from 'react';
import '../styles/Product.css';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
