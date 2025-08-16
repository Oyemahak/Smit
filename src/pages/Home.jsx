import React from "react";
import WorkedFor from "../components/WorkedFor";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

import profileImage from "../assets/images/profile-image.png";

function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <main id="main-content">
        {/* Intro Section */}
        <section id="intro">
          <div className="intro-left">
            <h1>Smit Patel</h1>
            <p className="bio">
              I'm a <span className="highlight">Web Designer</span> who blends creativity with user-centered design to build
              clean, modern, and engaging websites.
            </p>
            <p className="bio">
              <i>Scroll Down</i> to see how I combine design tools and digital strategy to deliver results.
            </p>

            <div className="tooltip-bottom">
              <a
                href={`${base}smit-patel-resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume-button">Resume</button>
              </a>
              <span className="tooltiptext-bottom">Click to open my resume as PDF.</span>
            </div>

            {/* Social Links */}
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

          {/* Image Section */}
          <div className="intro-right">
            <img src={profileImage} alt="Smit Patel profile" />
            <p className="cta">
              I build digital solutions that are not only beautiful, but purposeful and effective.
            </p>
          </div>
        </section>

        <WorkedFor />
        <Projects />
        <Skills />
        <Contact />
        <div className="separator"></div>
      </main>

    </>
  );
}

export default Home;