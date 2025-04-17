import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      name: "Heritage Leather Tote",
      description: "Handcrafted full-grain leather with timeless design.",
      price: "$1,200"
    },
    {
      name: "Minimalist Clutch",
      description: "Compact luxury for formal evenings and classy outings.",
      price: "$750"
    },
    {
      name: "Signature Gold Wallet",
      description: "Elegant and sleek wallet with golden accents.",
      price: "$480"
    },
    {
      name: "Classic Business Bag",
      description: "Refined functionality for professionals.",
      price: "$1,050"
    }
  ];

  return (
    <div className="products-container">
      <h2 className="products-heading">Our Collection</h2>
      <p className="products-subtext">Where elegance meets craftsmanship.</p>
      
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
