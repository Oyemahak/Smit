import React from 'react';
import Contact from '../components/Contact';
import { useNavigate } from 'react-router-dom';

import aboutImage from '../assets/images/about-image.png'; // Replace if needed

const About = () => {
  const navigate = useNavigate();

  const handleMyWorkClick = (e) => {
    e.preventDefault();
    navigate('/home');
    setTimeout(() => {
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <main>
      <section id="intro">
        {/* Left Section */}
        <div className="intro-left">
          <h1>Smit Patel</h1>
          <p className="bio">
            I'm a passionate <span className="highlight">web designer</span> dedicated to creating visually stunning and user-friendly websites.
            I have a sharp eye for detail and a love for clean, modern design.
          </p>
          <p className="bio">
            With experience in teaching, decoration art, and branding, I bring creativity and technical knowledge into every project I design.
          </p>
          <p className="bio">
            I guide students and clients in building websites, portfolios, and strong digital identities.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div className="tooltip-bottom">
              <a
                href={`${import.meta.env.BASE_URL}smit-patel-resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume-button">Resume</button>
              </a>
              <span className="tooltiptext-bottom">Click here to view or download my resume.</span>
            </div>

            <div className="tooltip-bottom">
              <button className="resume-button" onClick={handleMyWorkClick}>
                My Work
              </button>
              <span className="tooltiptext-bottom">Check out my projects and client work.</span>
            </div>
          </div>

          {/* Socials */}
          <div className="connect-container">
            <p className="connect">Connect with me:</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/smit8._/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.twitter.com/WixStudio" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100007030568764" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://wa.me/917698641630" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="intro-right">
          <img src={aboutImage} alt="Web designer and educator illustration" />
          <p className="cta">
            Outside of work, I enjoy mentoring, decorating, and solving real-world problems through design.
          </p>
        </div>
      </section>

      {/* Contact + Footer */}
      <Contact />
      <div className="separator"></div>
    </main>
  );
};

export default About;