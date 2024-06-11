import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import '../pages/home/home.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-flex">
        <div className="hero-content">
          <div className="hero-text">
            <span>Hello, I'm</span>
            <h1 className="animate__animated animate__fadeInLeft" id="hero-name">Julia Kalvik,</h1>
            <div className="photog-fed">
              <span className="animate__animated animate__fadeInRight">a photographer and <span id="hero-fed">FRONT END DEVELOPER</span></span>
            </div>
            <span className="hero-oslo">from Oslo, Norway</span>
          </div>
          <div className="hero-img">
            <img src="/main-portrait-resized.png" alt="Julia Kalvik" />
          </div>
        </div>
      </div>
    {/* <div className="scroll-to-projects">
        Scroll down to see my projects so far
        <img src="public/double-arrow.png" className="double-arrow" alt="Scroll" />
    </div> */}
    </section>
  );
};

export default HeroSection;
