import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Import image files for consistent resolution in local + GitHub Pages
import touchMePreview from '../assets/images/touch-me-preview.png';
import emojiPreview from '../assets/images/emogy-preview.png';
import clickrushPreview from '../assets/images/clickrush-preview.png'; // 🆕 Add image for Click Rush

const Play = () => {
  return (
    <main>
      {/* Playground Section */}
      <section id="projects">
        <div className="projects-header-centered playground-header">
          <h2>Mahak's Playground</h2>
          <p className="contact-description">
            Not just code, this is where creativity gets to play! Try out these mini games I built just for fun.
          </p>
        </div>

        <div className="projects-grid playground-grid">
          {/* Touch Me Game Card */}
          <div className="project playground-card">
            <img src={touchMePreview} alt="Touch Me Game Preview" />
            <h3>Touch Me</h3>
            <p>Test your reflexes with this fast-paced game. Ready, set... tap!</p>
            <Link to="/touchme">
              <button className="resume-button center-btn">Play Now</button>
            </Link>
          </div>
          
          {/* Click Rush Game Card */}
          <div className="project playground-card">
            <img src={clickrushPreview} alt="Click Rush Game Preview" />
            <h3>Click Rush</h3>
            <p>How fast are you? Click those emojis before time runs out Go Go..!</p>
            <Link to="/clickrush">
              <button className="resume-button center-btn">Play Now</button>
            </Link>
          </div>

          {/* Emoji Match Game Card */}
          <div className="project playground-card">
            <img src={emojiPreview} alt="Emoji Match Game Preview" loading="lazy" decoding="async"/>
            <h3>Match Emogy</h3>
            <p>Match the emoji pairs fast - fewer moves, less time!</p>
            <Link to="/memorygame">
              <button className="resume-button center-btn">Play Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer + Spacer */}
      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default Play;