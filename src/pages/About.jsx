import React from "react";
import aboutImage from "../assets/images/about-image.png";
import { processSteps, skills, whatsappHref } from "../data/site";

export default function About() {
  return (
    <main id="main-content">
      <section className="about-page">
        <div className="about-page-copy" data-reveal>
          <span className="eyebrow">About</span>
          <h1>
            Smit Patel is a graphic designer focused on posters, brand visuals, and digital campaigns.
          </h1>
          <p>
            He creates visuals that feel bold, polished, and useful across social media, web, advertising, and print.
            His style leans into clear hierarchy, cinematic contrast, careful typography, and memorable campaign
            compositions.
          </p>
          <p>
            The portfolio highlights poster systems, social creatives, product layouts, identity-led visuals, and
            campaign artwork designed to stand out without becoming messy.
          </p>
          <div className="about-actions">
            <a className="btn btn-accent" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Let’s work together
            </a>
            <a className="btn btn-ghost" href="/#work">
              View Projects
            </a>
          </div>
        </div>

        <div className="about-page-photo" data-reveal>
          <img src={aboutImage} alt="Portrait of Smit Patel, graphic designer" loading="eager" decoding="async" />
          <div className="about-photo-label">
            <strong>Smit Patel</strong>
            <span>Graphic Designer</span>
          </div>
        </div>
      </section>

      <section className="section about-detail-grid">
        <article className="glass-panel" data-reveal>
          <h2>Design Focus</h2>
          <p>
            Poster design, brand identity, social media creatives, typography-led layouts, campaign visuals, and
            print/digital design systems.
          </p>
        </article>
        <article className="glass-panel" data-reveal>
          <h2>Personality</h2>
          <p>
            Bold, detail-focused, visual-first, and practical about making designs work for real campaigns and fast
            digital browsing.
          </p>
        </article>
        <article className="glass-panel" data-reveal>
          <h2>Tools</h2>
          <p>Photoshop, Illustrator, Figma, Canva, layout systems, color theory, typography, and visual storytelling.</p>
        </article>
      </section>

      <section className="section skills-section">
        <div className="section-heading" data-reveal>
          <span>Highlights</span>
          <h2>Skills and creative strengths</h2>
        </div>
        <div className="skills-grid" data-reveal>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading" data-reveal>
          <span>Workflow</span>
          <h2>How future projects move</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.title} data-reveal>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
