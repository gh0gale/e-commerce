import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-text">
          <h1>Timeless Elegance</h1>
          <p>Explore our exclusive collection of luxury bags and wallets.</p>
          <button className="shop-button">Discover Collection</button>
        </div>
      </section>

     
      {/* Featured Products Section */}
      <section className="home-featured">
        <h2>Featured Collections</h2>
        <p>Explore our latest luxury pieces, crafted for elegance and sophistication.</p>
        <div className="product-gallery">
          <div className="product-item">
            <h3>Classic Leather Bag</h3>
            <p>$850</p>
          </div>
          <div className="product-item">
            <h3>Gold-Trimmed Wallet</h3>
            <p>$450</p>
          </div>
          <div className="product-item">
            <h3>Signature Tote</h3>
            <p>$1,200</p>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <h2>Exquisite Craftsmanship</h2>
        <p>Handcrafted with premium materials to redefine luxury and durability.</p>
      </section>
    </div>
  );
};

export default Home;
