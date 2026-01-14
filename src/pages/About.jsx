import React from "react";
import aboutImg from "../assets/images/about-image.png";

export default function About() {
  return (
    <main id="main-content">
      <section className="section-wrap">
        <div className="section-head">
          <div className="section-title-row">
            <span className="section-star">✶</span>
            <h2 className="section-title">About</h2>
            <span className="section-star">✶</span>
          </div>
          <p className="section-subtitle">
            A quick look at my background, tools, and the kind of work I love creating.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: "26px",
          alignItems: "start"
        }} className="about-grid">
          <div className="img-card ripple-target" style={{ cursor: "default" }}>
            <img src={aboutImg} alt="About Smit Patel" />
            <div className="img-overlay" style={{ opacity: 1 }} />
          </div>

          <div style={{ padding: "6px 4px" }}>
            <h3 style={{ marginTop: 0, fontSize: 28, color: "rgba(255,255,255,0.92)" }}>
              Hi, I’m <span className="accent">Smit Patel</span>.
            </h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontSize: 18 }}>
              I’m a designer focused on clean visuals, strong typography, and modern layouts.
              I enjoy creating posters, campaign creatives, brand assets, and web-ready designs
              that look premium and communicate clearly.
            </p>

            <div style={{
              marginTop: 18,
              padding: 18,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.04)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.55)"
            }}>
              <h4 style={{ margin: 0, fontSize: 18, letterSpacing: 0.3 }}>Core Tools</h4>
              <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.75)", lineHeight: 1.8 }}>
                Figma · Photoshop · Illustrator · Canva · WordPress · Wix Studio
              </p>
            </div>

            <div style={{ marginTop: 18 }}>
              <a
                className="btn btn-accent"
                href="https://wa.me/917698641630"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let’s work together
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px){
            .about-grid{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <div className="separator" />
    </main>
  );
}