import React from "react";
import { useState } from "react";
import "./../Style/Navbar.css";
import Logo from "./../Assets/Logo.png";
import Heart from "./../Assets/heart-icon.png";
import Admin from "./../Assets/admin-icon.png";
import Cart from "./../Assets/cart-icon.png";
import Search from "./../Assets/search-icon.png";
import Ham from "./../Assets/hamburger.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu1 = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked");
  };
  return (
    <>
      <div className="nav-content">
        <Link className="logo" to="/home">
          <img src={Logo}/>
        </Link>

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
          <Link className="icon" to="/cart">
            <img src={Cart} alt="Cart" />
          </Link>
        </div>
        {/* <button className='menu-button'>
        <a href="#"><img src={Ham}/></a>
        </button> */}
        <div>
          <button className="menu-button" onClick={toggleMenu1}>
            <img src={Ham} alt="Menu" />
          </button>
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <a href="Shop">Shop</a>
            <a href="Men">Men</a>
            <a href="Women">Women</a>
            <a href="Combos">Combos</a>
            <a href="Joggers">Joggers</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
