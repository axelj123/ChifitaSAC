import React from 'react';
import '../assets/Hero.css';

function Hero() {
  return (
    <header className="hero">
      
      <div className="hero-overlay"></div>
      <h1 className="hero-subtitle">Industria de alimentos Guerra S.A.C</h1>
      <h2 className="hero-title">SALSAS CHIFITA</h2>
      <div className="hero-svg">
        <svg viewBox="0 0 1500 200" preserveAspectRatio="none">
          <path fill="white" d="M0,240 h1500 v-71.92164 c0,0-286.2763,-81.79324-743.19024,-81.79324 C300.37862,86.28512 0,168.07836 0,168.07836 Z"/>
        </svg>
      </div>
    </header>
  );
}

export default Hero;
