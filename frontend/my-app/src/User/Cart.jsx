import React from 'react';
import './Cart.css';

const Cart = () => {
  const cartItems = [
    {
      name: "Heritage Leather Tote",
      quantity: 1,
      price: 1200
    },
    {
      name: "Signature Gold Wallet",
      quantity: 2,
      price: 480
    }
  ];

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
