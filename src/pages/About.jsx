import React from "react";

export default function About() {
  return (
    <main id="main-content">
      <section className="about-section">
        <h2>About Me</h2>

        <p className="about-text">
          Hi, I’m Smit Patel — a web designer focused on clean typography, premium layouts,
          and modern UI. I work with design tools and website platforms to build designs that
          look sharp and feel easy to use.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>What I Do</h3>
            <ul>
              <li>Web Design (landing pages, portfolios, small business sites)</li>
              <li>UI layouts + responsive design</li>
              <li>Brand visuals + social media creatives</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Tools</h3>
            <ul>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>WordPress</li>
              <li>Wix Studio</li>
              <li>Canva</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Design Style</h3>
            <p>Minimal, modern, and structured — with clean spacing and strong hierarchy.</p>
          </div>
        </div>
      </section>

      <div className="separator"></div>
    </main>
  );
}