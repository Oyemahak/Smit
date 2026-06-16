import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { featuredItems } from "../data/portfolio";
import { whatsappHref } from "../data/site";

const highlights = ["Graphic Designer", "Posters", "Branding", "Social Media Creatives", "Campaign Visuals"];

export default function Landing() {
  return (
    <main id="main-content" className="landing-page">
      <section className="landing-shell">
        <div className="landing-copy" data-reveal>
          <Link className="landing-brand" to="/portfolio" aria-label="Enter Smit Patel portfolio">
            <img src={logo} alt="Smit Patel logo" />
            <span>Smit Patel</span>
          </Link>

          <p className="eyebrow">Graphic Designer Portfolio</p>
          <h1>Visual Design for Brands, Campaigns & Digital Stories</h1>
          <p className="landing-lede">
            Explore selected posters, brand visuals, social media creatives, and campaign artwork by Smit Patel.
          </p>

          <div className="landing-highlights" aria-label="Portfolio highlights">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="landing-actions">
            <Link className="btn btn-accent" to="/portfolio">
              Explore Visual Work
            </Link>
            <a className="btn btn-ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Hire Me
            </a>
          </div>
        </div>

        <div className="landing-preview" aria-label="Selected portfolio preview" data-reveal>
          <figure className="landing-preview-main">
            <img src={featuredItems[0].src} alt={featuredItems[0].alt} width="920" height="394" decoding="async" />
            <figcaption>
              <span>{featuredItems[0].category}</span>
              <strong>{featuredItems[0].title}</strong>
            </figcaption>
          </figure>
          <div className="landing-preview-strip">
            {featuredItems.slice(1).map((item) => (
              <img key={item.title} src={item.src} alt={item.alt} width="420" height="520" decoding="async" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
