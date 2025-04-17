import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './User/Navbar';
import Home from './User/Home';
import About from './User/About';
import Footer from './User/Footer';
import Login from './User/Login';
import Signup from './User/SignUp';
import Products from './User/Products';
import Cart from './User/Cart';
import ManageProducts from './Admin/ManageProduct';



const App = () => {
  return (
    // <ManageProducts/>
    <Router>
      <Navbar />
      <Routes>

       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
