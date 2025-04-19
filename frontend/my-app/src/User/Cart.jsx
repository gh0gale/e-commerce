// import React, { useEffect, useState } from 'react';
// import './Cart.css';
// import axios from 'axios';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchCart = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         alert("Please login to view your cart.");
//         return;
//       }

//       try {
//         const res = await axios.get('http://localhost:4001/cart', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setCartItems(res.data.items);
//       } catch (err) {
//         console.error("Error fetching cart:", err);
//         alert("Failed to load cart");
//       }
//     };

//     fetchCart();
//   }, []);

//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.quantity * (item._id.price || 0),
//     0
//   );

//   return (
//     <div className="cart-container">
//       <h2 className="cart-heading">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="empty-cart">Your cart is currently empty.</p>
//       ) : (
//         <div className="cart-table">
//           {cartItems.map((item, index) => (
//             <div className="cart-row" key={index}>
//               <div className="cart-item">{item._id.name}</div>
//               <div className="cart-qty">Qty: {item.quantity}</div>
//               <div className="cart-price">
//                 ₹{(item._id.price || 0) * item.quantity}
//               </div>
//             </div>
//           ))}
//           <div className="cart-total">
//             <span>Total:</span>
//             <span>₹{totalAmount}</span>
//           </div>
//           <button className="checkout-btn">Proceed to Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import './Cart.css';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await axios.get('http://localhost:4001/cart', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCartItems(res.data.items || []);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchCart();
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.quantity * (item.productId?.price || 0)),
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
              <div className="cart-item">{item.productId?.name || "No name"}</div>
              <div className="cart-qty">Qty: {item.quantity}</div>
              <div className="cart-price">
                ₹{item.quantity * (item.productId?.price || 0)}
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <span>₹{totalAmount}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
