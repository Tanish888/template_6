import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="All">
        <div className="slider-new">
          <div className="laptop-slider">
            <div className="container">
              <div className="slider">
                <h2>Title Here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                  vestibulum vestibulum. </p>
                <a href="#">REGISTER NOW</a>
              </div>
            </div>
          </div>
          <div className="main-slider">
            <div className="slider-img">
              <img src="./img/mainslider.png" alt=""></img>
            </div>
            <div className="container">
              <div className="slider">
                <h2>Title Here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                  vestibulum vestibulum. </p>
                <a href="#">REGISTER NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-slider" id="main-slider">
          <div className="container">
            <div className="content">
              <h3>DANCE TOUR</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
              <p>lacinia odio vitae vestibulum vestibulum. </p>
            </div>
            <div className="cards">
              <div className="card">
                <img src="./img/card1.png" alt="card1"></img>
                <h2>AMERICA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="card">
                <img src="./img/card2.png" alt="card2"></img>
                <h2>ASIA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="card">
                <img src="./img/card3.png" alt="card3"></img>
                <h2>AUSTRALIA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-slider2" id="main-slider2">
          <div className="container">
            <div className="content">
              <h3>PRICING</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p>Vivamus lacinia odio vitae vestibulum vestibulum. </p>
            </div>
            <div className="pricing">
              <div className="card">
                <img src="./img/icon1.png" alt=""></img>
                <h2>BASIC</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#">$150.00</a>
              </div>
              <div className="card">
                <img src="./img/icon1.png" alt=""></img>
                <h2>PROFESSIONAL</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#">$200.00</a>
              </div>
              <div className="card">
                <img src="./img/icon1.png" alt=""></img>
                <h2>ULTIMATE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#">$250.00</a>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth-slider">
          <div className="left-img">
            <img src="./img/leftimg1.png" alt=""></img>
            <div className="text">
              <div className="container">
                <h2>AMAZING DANCE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
                  vestibulum. </p>
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>
          <div className="right-img">
            <div className="text">
              <div className="container">
                <h2>BEST DANCE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
                  vestibulum. </p>
                <a href="#">READ MORE</a>
              </div>
            </div>
            <img src="./img/fourthimg2.png" alt=""></img>
          </div>
        </div>
        <div className="fifth-slider" id="fifth-slider">
          <div className="container">
            <div className="title">
              <h2>OUR STATISTICS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p>Vivamus lacinia odio vitae vestibulum vestibulum. </p>
            </div>
            <div className="number">
              <div className="one1">
                <h3>1240+</h3>
                <h5>Club</h5>
              </div>
              <div className="one1">
                <h3>2000+</h3>
                <h5>Active Member</h5>
              </div>
              <div className="one1">
                <h3>1.000+</h3>
                <h5>Community</h5>
              </div>
            </div>
            <div className="sub"></div>
          </div>
        </div>
        <div className="sixth-slider">
          <div className="container">
            <div className="sixthcontent">
              <p>Lorem ipsum dolor sit amet, consectetur </p>
              <p>adipiscing elit. Vivamus lacinia odio vitae </p>
              <p>vestibulum vestibulum.</p>
              <h3>Herbert Simon</h3>
            </div>
          </div>
        </div>
        <div className="sevenslider">
          <div className="content">
            <h2>SUBSCRIBE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p>Vivamus lacinia odio vitae vestibulum vestibulum. </p>
          </div>
          <div className="forms">
            <div className="form">
              <form>
                <input type="email" name="em" id="em" className="email" placeholder="Your Email" style={{ fontSize: 'xx-large' }} />
                <a href="#" id="sb" className="subs" >SUBSCRIBE</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
