import React from "react";
import profileImage from "../assets/images/about-image.png";

export default function About() {
  return (
    <main id="main-content">
      <section className="about-wrap">
        <div className="about-head">
          <div className="section-title-row">
            <span className="section-star">✶</span>
            <h1 className="section-title">About</h1>
            <span className="section-star">✶</span>
          </div>
          <p className="section-subtitle">
            A quick look at my background, tools, and the kind of work I love creating.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-photo">
            <div className="about-photo-frame">
              <img src={profileImage} alt="Smit Patel" />
              <div className="about-photo-fade" />
            </div>
          </div>

          <div className="about-copy">
            <h2 className="about-title">
              Hi, I&apos;m <span className="accent glow">Smit Patel</span>.
            </h2>

            <p className="about-text">
              I’m a designer focused on clean visuals, strong typography, and modern layouts. I enjoy creating posters,
              campaign creatives, brand assets, and web-ready designs that look premium and communicate clearly.
            </p>

            <div className="about-tools-card">
              <div className="about-tools-label">Core Tools</div>
              <div className="about-tools-list">
                Figma • Photoshop • Illustrator • Canva • WordPress • Wix Studio
              </div>
            </div>

            <div className="about-actions">
              <a
                className="btn btn-accent"
                href="https://wa.me/917698641630"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let’s work together
              </a>

              <a className="btn btn-ghost" href="/home#projects">
                View Projects
              </a>
            </div>

            <div className="about-notes">
              <div className="about-note">
                <span className="about-dot" />
                Posters, banners, and ads are designed to be “scroll-stopping” but still clean & readable.
              </div>
              <div className="about-note">
                <span className="about-dot" />
                I prefer glassy UI, subtle gradients, and crisp typography for premium brand feel.
              </div>
            </div>
          </div>
        </div>

        <div className="separator" />
      </section>
    </main>
  );
}