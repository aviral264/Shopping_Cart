import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
