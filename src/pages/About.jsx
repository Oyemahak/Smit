import React from "react";
import IconBadge from "../components/IconBadge";
import aboutImage from "../assets/images/about-image.png";
import { processSteps, skillGroups, whatsappHref } from "../data/site";

const aboutStats = [
  { value: "24", label: "selected visuals" },
  { value: "6", label: "creative categories" },
  { value: "Print + Digital", label: "delivery focus" },
];

const whatIDo = [
  { title: "Posters", icon: "poster", text: "Bold layouts for launches, events, and offers." },
  { title: "Brand Visuals", icon: "brand", text: "Color, typography, and identity direction." },
  { title: "Social Creatives", icon: "social", text: "Feed-ready designs that are easy to scan." },
];

const designBadges = ["Photoshop", "Illustrator", "Figma", "Canva"];

export default function About() {
  return (
    <main id="main-content">
      <section className="about-page">
        <div className="about-page-copy" data-reveal>
          <span className="eyebrow">About Smit</span>
          <h1>Graphic designer with a sharp eye for bold visual stories.</h1>
          <p>
            Smit creates poster systems, brand visuals, social creatives, and campaign artwork that feels clean,
            confident, and ready to use.
          </p>

          <div className="about-stat-grid" aria-label="Portfolio quick stats">
            {aboutStats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a className="btn btn-accent" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Let's work together
            </a>
            <a className="btn btn-ghost" href="/#work">
              View Projects
            </a>
          </div>
        </div>

        <div className="about-page-photo" data-reveal>
          <img src={aboutImage} alt="Portrait of Smit Patel, graphic designer" loading="eager" decoding="async" />
          <div className="about-tool-float" aria-hidden="true">
            <IconBadge name="photoshop" />
            <IconBadge name="illustrator" />
            <IconBadge name="figma" />
          </div>
          <div className="about-photo-label">
            <strong>Smit Patel</strong>
            <span>Posters, branding, social visuals</span>
          </div>
        </div>
      </section>

      <section className="section about-do-grid">
        {whatIDo.map((item) => (
          <article className="glass-panel about-do-card" key={item.title} data-reveal>
            <IconBadge name={item.icon} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section about-detail-grid">
        <article className="glass-panel" data-reveal>
          <h2>Design Focus</h2>
          <p>Posters, identity visuals, social campaigns, layout systems, and print-ready artwork.</p>
        </article>
        <article className="glass-panel" data-reveal>
          <h2>Style</h2>
          <p>Bold, clean, high-contrast, and built around clear hierarchy.</p>
        </article>
        <article className="glass-panel" data-reveal>
          <h2>Tools</h2>
          <div className="about-tool-list">
            {designBadges.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="section skills-section">
        <div className="section-heading" data-reveal>
          <span>Toolkit</span>
          <h2>Skills and creative strengths</h2>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article
              className={`skill-group-card skill-group-${group.accent || "default"}${group.featured ? " skill-group-featured" : ""}`}
              key={group.title}
              data-reveal
            >
              <h3>{group.title}</h3>
              <div className="skill-item-grid">
                {group.items.map((item) => (
                  <div className="skill-item" key={item.label}>
                    <IconBadge name={item.icon} className="skill-icon" />
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
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
              <IconBadge name={step.icon} />
              <span className="process-step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
