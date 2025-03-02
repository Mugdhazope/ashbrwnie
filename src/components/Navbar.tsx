import React, { useState } from "react";
// Assuming AppContext provides cart & wishlist data
import "../styles/Navbar.css";
import logo from "../images/logo.png"; 
import bag from "../images/bag.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // Get cart and wishlist counts from context

  return (
    <>
      <div className="block">Coming Soon...</div>
      
      <div className="navbar-block">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="AshBrownie Logo" />
          <p>AshBrownie</p>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/ShopAll">Shop All</Link>
          <Link to="/Reviews">Reviews</Link>
          <Link to="/track">Track Order</Link>
          <Link to="/AboutUSpage">About Us</Link>
          <Link to="/ContactUsPage">Contact Us</Link>
        </div>

        {/* Icons Section */}
        <div className="nav-icons">
          <Link to="/search" className="nav-icon">
            <i className="bi bi-search"></i>
          </Link>
          <Link to="/Profile" className="nav-icon">
            <i className="bi bi-person"></i>
          </Link>
          <Link to="/favorites" className="nav-icon">
            <i className="bi bi-heart"></i>
            
          </Link>

          <img style={{height:"50px", width:"50px"}} src={bag} alt="bag" />
          
        </div>
      </div>

      {/* Bottom Border */}
      <div className="block" style={{ backgroundColor: "#7b594e", height: "2px" }} />
    </>
  );
};

export default Navbar;
