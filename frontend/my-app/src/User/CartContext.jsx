import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCartItems([]);
      return;
    }

    try {
      const res = await axios.get("http://localhost:4001/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
      setCartItems([]); // fallback to empty if unauthorized
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to add items to cart");

    try {
      const res = await axios.post(
        "http://localhost:4001/cart",
        { productId: product._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.items);
      alert("Item added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart");
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, fetchCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};



  