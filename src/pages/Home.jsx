import React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home() {
  const base = import.meta.env.BASE_URL;

  // ✅ Placeholders (replace later with real images)
  const posters = new Array(6).fill(null);
  const albumCovers = new Array(12).fill(null);
  const bookCovers = new Array(6).fill(null);
  const socialPosts = new Array(9).fill(null);
  const editorial = new Array(2).fill(null);

  return (
    <main id="main-content">
      {/* =============================== */}
      {/* HERO / INTRO */}
      {/* =============================== */}
      <section id="intro" className="intro-behance">
        <div className="intro-left">
          <h1>Smit Patel</h1>

          <p className="bio">
            I'm a <span className="highlight">Web Designer</span> who blends creativity with
            user-centered design to build clean, modern, and engaging websites.
          </p>

          <p className="bio">
            <i>Scroll down</i> to explore my work across posters, covers, social media, and editorial layouts.
          </p>

          <div className="hero-actions">
            <a href="#work" className="resume-button hero-btn">
              View Work
            </a>

            <div className="tooltip-bottom">
              <a href={`${base}smit-patel-resume.pdf`} target="_blank" rel="noopener noreferrer">
                <button className="resume-button hero-btn secondary">Resume</button>
              </a>
              <span className="tooltiptext-bottom">Click to open my resume as PDF.</span>
            </div>
          </div>

          <div className="connect-container">
            <p className="connect">Connect with me:</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/smit8._/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.twitter.com/WixStudio" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100007030568764" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://wa.me/917698641630" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="intro-right">
          {/* ✅ Placeholder profile image */}
          <div className="profile-placeholder">
            <span>Profile Image</span>
          </div>

          <p className="cta">
            I create digital designs that are not only beautiful, but purposeful and effective.
          </p>
        </div>
      </section>

      {/* =============================== */}
      {/* WORK SECTIONS */}
      {/* =============================== */}
      <div id="work" className="work-wrap">
        {/* POSTERS */}
        <div className="section-strip">
          <h2>POSTERS</h2>
          <p>Personal projects</p>
        </div>
        <section className="work-section">
          <div className="work-grid grid-3">
            {posters.map((_, idx) => (
              <div className="work-card" key={`poster-${idx}`}>
                <div className="img-placeholder">Poster {idx + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ALBUM COVERS */}
        <div className="section-strip">
          <h2>ALBUM COVERS</h2>
          <p>Of various songs and albums</p>
        </div>
        <section className="work-section">
          <div className="work-grid grid-4">
            {albumCovers.map((_, idx) => (
              <div className="work-card" key={`album-${idx}`}>
                <div className="img-placeholder">Album {idx + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOK COVERS */}
        <div className="section-strip">
          <h2>BOOK COVERS</h2>
          <p>Across various genres</p>
        </div>
        <section className="work-section">
          <div className="work-grid grid-3">
            {bookCovers.map((_, idx) => (
              <div className="work-card" key={`book-${idx}`}>
                <div className="img-placeholder">Book {idx + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SOCIAL MEDIA POSTS */}
        <div className="section-strip">
          <h2>SOCIAL MEDIA POSTS</h2>
          <p>Post designs & thumbnails</p>
        </div>
        <section className="work-section">
          <div className="work-grid grid-3">
            {socialPosts.map((_, idx) => (
              <div className="work-card" key={`social-${idx}`}>
                <div className="img-placeholder">Post {idx + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EDITORIAL SPREAD */}
        <div className="section-strip">
          <h2>EDITORIAL SPREAD</h2>
          <p>Magazine layouts</p>
        </div>
        <section className="work-section">
          <div className="work-grid grid-2">
            {editorial.map((_, idx) => (
              <div className="work-card wide" key={`edit-${idx}`}>
                <div className="img-placeholder">Editorial {idx + 1}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Skills + Contact on Home ✅ */}
      <Skills />
      <Contact />

      <div className="separator"></div>
    </main>
  );
}

export default Home;