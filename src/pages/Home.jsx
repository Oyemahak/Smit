import React, { useEffect, useMemo, useState } from "react";
import IconBadge from "../components/IconBadge";
import profileImage from "../assets/images/profile-image.png";
import { featuredItems, filters, portfolioItems } from "../data/portfolio";
import { processSteps, services, skillGroups, socials, whatsappHref } from "../data/site";

const heroHighlights = [
  { label: "Graphic Design", icon: "graphic" },
  { label: "Posters", icon: "poster" },
  { label: "Branding", icon: "brand" },
  { label: "Social Media Creatives", icon: "social" },
  { label: "Campaign Visuals", icon: "campaign" },
];

const workTools = {
  Posters: ["Photoshop", "Layout", "Print"],
  Branding: ["Illustrator", "Identity", "Color"],
  "Social Media Creatives": ["Canva", "Campaign", "Digital"],
  "Campaign Visuals": ["Photoshop", "Ads", "Story"],
  "Logo/Identity": ["Illustrator", "Logo", "Brand"],
  "Typography/Layout": ["Figma", "Layout", "UX"],
};

function useRevealOnScroll(dependencies = []) {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 120px" }
    );

    items.forEach((item) => {
      item.classList.remove("is-visible");
      observer.observe(item);
    });

    window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight + 160) item.classList.add("is-visible");
      });
    }, 180);

    return () => observer.disconnect();
  }, dependencies);
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading" data-reveal>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function PortfolioCard({ item, index, onOpen }) {
  const isPriority = index < 8;

  return (
    <button
      className={`work-card work-card-${item.shape}`}
      type="button"
      aria-label={`Open ${item.title}`}
      onClick={() => onOpen(item)}
      data-reveal
      style={{ "--delay": `${Math.min(index * 35, 220)}ms` }}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading={isPriority ? "eager" : "lazy"}
        fetchPriority={index < 4 ? "high" : "auto"}
        decoding={isPriority ? "sync" : "async"}
        width="900"
        height="1125"
      />
      <span className="work-card-glass" />
      <div className="work-card-copy">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="work-card-tags" aria-label={`${item.title} tools`}>
          {(workTools[item.category] || ["Design"]).map((tool) => (
            <em key={tool}>{tool}</em>
          ))}
        </div>
      </div>
    </button>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  useRevealOnScroll([activeFilter]);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 160);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedWork(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main id="main-content">
      <section className="hero-section">
        <div className="hero-background" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true">
          <span><IconBadge name="photoshop" /></span>
          <span><IconBadge name="illustrator" /></span>
          <span><IconBadge name="figma" /></span>
          <span><IconBadge name="canva" /></span>
        </div>

        <div className="hero-content" data-reveal>
          <p className="eyebrow">Graphic Designer Portfolio</p>
          <h1>Smit Patel — Graphic Designer</h1>
          <p className="hero-lede">
            Creative visuals for brands, campaigns, and social media. Explore selected posters, brand visuals, campaign
            artwork, and digital designs built with clean layout, strong color, and clear storytelling.
          </p>

          <div className="hero-highlights" aria-label="Design focus">
            {heroHighlights.map((item) => (
              <span className={`hero-chip hero-chip-${item.icon}`} key={item.label}>
                <IconBadge name={item.icon} />
                {item.label}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn btn-accent" href="#work">
              Explore Creative Work
            </a>
            <a className="btn btn-ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Hire Me
            </a>
          </div>

          <div className="hero-stats" aria-label="Portfolio highlights">
            <div>
              <strong>6</strong>
              <span>Creative categories</span>
            </div>
            <div>
              <strong>24</strong>
              <span>Selected visuals</span>
            </div>
            <div>
              <strong>Web + Print</strong>
              <span>Delivery-ready files</span>
            </div>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Featured portfolio previews" data-reveal>
          {featuredItems.map((item, index) => (
            <button
              className={`preview-card preview-card-${index + 1}`}
              key={item.title}
              type="button"
              onClick={() => setSelectedWork(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="eager"
                fetchPriority={index === 0 ? "high" : "auto"}
                width="900"
                height="1125"
                decoding={index === 0 ? "sync" : "async"}
              />
              <span>{item.category}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <SectionHeading eyebrow="Selected Work" title="Portfolio Highlights">
          Browse selected poster designs, brand visuals, social media creatives, campaign artwork, and layout systems.
        </SectionHeading>

        <div className="filter-bar" aria-label="Filter selected work" data-reveal>
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="work-grid" key={activeFilter}>
          {visibleItems.map((item, index) => (
            <PortfolioCard key={`${activeFilter}-${item.title}`} item={item} index={index} onOpen={setSelectedWork} />
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <SectionHeading eyebrow="Skills & Tools" title="Design Skills & Tools">
          A focused toolkit for polished poster systems, social creatives, brand visuals, and clean digital delivery.
        </SectionHeading>
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

      <section className="section services-section" id="services">
        <SectionHeading eyebrow="Services" title="Creative Services">
          Clean, useful visual assets for campaigns, launches, events, social media, and print.
        </SectionHeading>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} data-reveal style={{ "--delay": `${index * 45}ms` }}>
              <IconBadge name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <SectionHeading eyebrow="Process" title="How I Design">
          A clean design workflow that moves from visual direction to final delivery without losing detail.
        </SectionHeading>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title} data-reveal style={{ "--delay": `${index * 70}ms` }}>
              <IconBadge name={step.icon} />
              <span className="process-step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-preview" id="about-preview">
        <div className="about-preview-photo" data-reveal>
          <img
            src={profileImage}
            alt="Smit Patel graphic designer portrait"
            loading="lazy"
            width="720"
            height="860"
            decoding="async"
          />
        </div>
        <div className="about-preview-copy" data-reveal>
          <span className="eyebrow">About Smit</span>
          <h2>Clean visual design with a practical, campaign-ready eye.</h2>
          <p>
            Smit designs poster systems, brand visuals, product layouts, and social content with a clean sense of
            hierarchy. His work is crafted to be bold, readable, and ready for real digital or print use.
          </p>
          <div className="about-highlights">
            <span>Poster design</span>
            <span>Brand systems</span>
            <span>Digital campaigns</span>
            <span>Print-ready files</span>
          </div>
          <a className="btn btn-ghost" href="/about">
            More About Smit
          </a>
        </div>
      </section>

      <section className="section contact-section" id="contact" data-reveal>
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Let’s create something bold.</h2>
          <p>
            Need posters, brand visuals, social media creatives, campaign graphics, or print-ready designs? Start the
            conversation on WhatsApp and share the design goal.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-accent" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Hire Me on WhatsApp
          </a>
          <a className="btn btn-ghost" href="#work">
            View My Work
          </a>
        </div>
        <div className="social-links" aria-label="Social links">
          {socials.map((social) => (
            <a className={`social-pill ${social.tone}`} key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              <IconBadge name={social.icon} />
              {social.label}
            </a>
          ))}
        </div>
      </section>

      {selectedWork ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedWork.title}>
          <button className="lightbox-backdrop" type="button" aria-label="Close preview" onClick={() => setSelectedWork(null)} />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" aria-label="Close preview" onClick={() => setSelectedWork(null)}>
              ×
            </button>
            <img src={selectedWork.src} alt={selectedWork.alt} loading="eager" decoding="sync" />
            <div className="lightbox-copy">
              <span>{selectedWork.category}</span>
              <h2>{selectedWork.title}</h2>
              <p>{selectedWork.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
