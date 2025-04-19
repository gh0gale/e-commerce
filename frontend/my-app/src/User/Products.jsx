import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../User/CartContext';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:4001/product')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-heading">Our Collection</h2>
      <p className="products-subtext">Where elegance meets craftsmanship.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
