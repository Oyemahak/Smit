import React, { useEffect } from 'react';
import Orb from '../components/Orb';
import '../styles/landing.css';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  return (
    <div className="landing-container">
      <div className="orb-container">
        <Orb
          hue={290} // purple-ish for creative/design vibe
          rotateOnHover={true}
          hoverIntensity={0.5}
          forceHoverState={false}
        />
      </div>
      <div className="overlay-content">
        <img src={logo} alt="Smit Patel Logo" className="landing-logo" />
        <h1 className="landing-heading">Step into my design world</h1>
        <p className="landing-subheading">Where creativity meets clean code ✨</p>
        <button className="enter-button" onClick={() => navigate('/home')}>
          Let’s Enter
        </button>
      </div>
    </div>
  );
}