import React from 'react'

import Navigation from '../Navigation/Navigation';

import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero-container">
      <Navigation />
      <h1>We are creatives</h1>
      <div className="hero-icon--arrow"></div>
    </section>
  );
}

export default Hero