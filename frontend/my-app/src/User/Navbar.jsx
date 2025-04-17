import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">LuxeWear</Link>
      <div className="nav-links">
        <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
        <NavLink to="/about" activeclassname="active">About Us</NavLink>
        <NavLink to="/products" activeclassname="active">Products</NavLink>
        <NavLink to="/cart" activeclassname="active">Cart</NavLink>
        <NavLink to="/login" activeclassname="active">Login</NavLink>
        <NavLink to="/signup" activeclassname="active">Signup</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
