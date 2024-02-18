import React from "react";
import "./../Style/Navbar.css";
import Logo from "./../Assets/Logo.png";
import Heart from "./../Assets/heart-icon.png";
import Admin from "./../Assets/admin-icon.png";
import Cart from "./../Assets/cart-icon.png";
import Search from "./../Assets/search-icon.png";

function Navbar() {
  return (
    <>
      <div className="nav-content">
        <a href="Logo">
          <img className="logo" src={Logo} alt="" />
        </a>
        <nav className="nav-anchor">
          <a href="Shop">Shop</a>
          <a href="Men">Men</a>
          <a href="Women">Women</a>
          <a href="Combos">Combos</a>
          <a href="Joggers">Joggers</a>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <img src={Search} alt="" />
        </div>
        <div className="nav-icons">
          <a href="heart">
            <img className="icon" src={Heart} alt="" />
          </a>
          <a href="Admin">
            <img className="icon" src={Admin} alt="" />
          </a>
          <a href="Cart">
            <img className="icon" src={Cart} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
