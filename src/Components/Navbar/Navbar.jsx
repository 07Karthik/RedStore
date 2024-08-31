import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import hamburgerIcon from "../../assets/menu.png"; // Add your hamburger icon
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <Link to={"/"}><img src={logo} alt="logo" height={"30px"} /></Link>
      </div>
      <div className="hamburger" >
        <li className='cartt'><Link to={"/cart"}><img src={cart} alt="cart" height={"25px"} /></Link></li>
        <img onClick={toggleMenu} src={hamburgerIcon} alt="Menu" className={`hamburger-icon ${isOpen ? "open" : ""}`} />
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/products"}>Products</Link></li>
        <li><Link to={"/"}>About</Link></li>
        <li><Link to={"/"}>Contact</Link></li>
        <li><Link to={"/account"}>Account</Link></li>
        <li className='cartt open-c'><Link to={"/cart"}><img src={cart} alt="cart" height={"25px"} /></Link></li>
      </ul>
        
    </div>
  );
};

export default Navbar;
