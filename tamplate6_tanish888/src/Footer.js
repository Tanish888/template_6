import React from 'react';
import './App.css'; // Create and move the relevant CSS here

function Footer() {
  return (
    <div className="mainfooter" id="mainfooter">
      <div className="container">
        <div className="footer">
          <div className="left-footer">
            <h6>MUSICOLOGY</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id
              maximus ex. Etiam nec dignissim elit, at dignissim enim.</p>
            <div className="icons">
              <img src="./img/insta-icon.png" alt="insta icon"></img>
              <img src="./img/facebook.png" alt="facebook icon"></img>
              <img src="./img/twitter.png" alt="twitter icon"></img>
              <img src="./img/whatsapp.png" alt="whatsapp icon"></img>
            </div>
          </div>
          <div className="right-footer">
            <div className="about">
              <h6>About</h6>
              <ul>
                <li><a href="#">History</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Brand Guidelines</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="services">
              <h6>Services</h6>
              <ul>
                <li><a href="#">How to Order</a></li>
                <li><a href="#">Our Product</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Promo</a></li>
                <li><a href="#">Payment Method</a></li>
              </ul>
            </div>
            <div className="other">
              <h6>Other</h6>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
