import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
