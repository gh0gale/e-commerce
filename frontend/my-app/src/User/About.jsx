import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Where timeless elegance meets flawless craftsmanship.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Born From Passion</h2>
          <p>
            LuxeWear was founded with a vision — to deliver timeless luxury that blends heritage with modernity. 
            What began as a small artisan studio has grown into a global brand synonymous with refinement and sophistication. 
            Our legacy is built on a foundation of passion, precision, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Craft</h2>
          <p>
            Every bag and wallet is a testament to meticulous craftsmanship. From hand-selecting the finest full-grain leathers 
            to our signature gold-plated hardware, each piece is designed and assembled with the utmost care. We honor time-tested 
            artisanal techniques while embracing subtle innovation to offer a truly premium experience.
          </p>
        </div>

        <div className="about-text">
          <h2>Ethical & Sustainable</h2>
          <p>
            At LuxeWear, luxury doesn’t come at the planet’s expense. We prioritize ethical sourcing, reduce waste through thoughtful 
            production, and collaborate with suppliers who share our values of integrity and sustainability. Because timeless design 
            deserves a timeless planet.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To redefine modern elegance through ethically crafted fashion pieces that inspire confidence, empower individuality, 
            and celebrate the beauty of quality. LuxeWear is more than a brand — it’s a lifestyle, an attitude, and a legacy in the making.
          </p>
        </div>

        <div className="about-text">
          <h2>Meet the Founders</h2>
          <p>
            Our founders — driven by a shared love for design and heritage — brought LuxeWear to life with one goal: 
            to offer the finest accessories to those who value grace and authenticity. Their journey, rooted in family tradition 
            and global inspiration, is reflected in every detail of our collection.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
