import React, { useEffect, useState } from 'react';
import './Cart.css';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty.</p>
      ) : (
        <div className="cart-table">
          {cartItems.map((item, index) => (
            <div className="cart-row" key={index}>
              <div className="cart-item">{item.name}</div>
              <div className="cart-qty">Qty: {item.quantity}</div>
              <div className="cart-price">${item.price * item.quantity}</div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
