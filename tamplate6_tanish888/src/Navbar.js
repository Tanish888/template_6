import React, { useState } from 'react';
import './App.css'; 
import './Navbar.css';

function Navbar() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="main-header">
      <div className="container">
        <header>
          <div className="desktop">
            <div className="logo">
              <a href="#"><img src="/img/Logo.png" alt="LOGO"></img></a>
            </div>
            <div className="mobilebar"></div>
            <div className="nav">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#main-slider">PRODUCT</a></li>
                <li><a href="#main-slider2">PROMO</a></li>
                <li><a href="#fifth-slider">ABOUT</a></li>
                <li><a href="#mainfooter">CONTACT</a></li>
              </ul>
            </div>
            <div className="search">
              <a href="#"><img src="/img/search.png" alt="SEARCH"></img></a>
            </div>
          </div>
          <div className="mobilenav">
            <div className="mobilebar">
              <button  onClick={toggleMobileMenu} id="bars">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height:"20px"}}>
          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path fill='white' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
              </button>
            </div>
            <div className="logo">
              <img src="/img/Logo.png" alt="LOGO"></img>
            </div>
          </div>
          {isMobileMenuVisible && (
            <div className="monav">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#main-slider">PRODUCT</a></li>
                <li><a href="#main-slider2">PROMO</a></li>
                <li><a href="#fifth-slider">ABOUT</a></li>
                <li><a href="#mainfooter">CONTACT</a></li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default Navbar;
