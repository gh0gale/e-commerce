import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [localStorage.getItem('token')]); // This might not trigger re-renders, see tip below 👇

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert("You have been logged out!");
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand">LuxeWear</Link>
      <div className="nav-links">
        <NavLink to="/" exact="true">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {!isLoggedIn ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
