import React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

import profileImage from "../assets/images/profile-image.png";

// ✅ Auto-load images from folders (Vite import.meta.glob)
// NOTE: Folder names must match EXACTLY as in your project.
const adCampaignImages = Object.values(
  import.meta.glob("../assets/images/ad-campaign-designs/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  })
);

const brandIdentityImages = Object.values(
  import.meta.glob("../assets/images/brand-visual-identity/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  })
);

const ecommerceImages = Object.values(
  import.meta.glob("../assets/images/ecommerce-listing-design/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  })
);

const posterBannerImages = Object.values(
  import.meta.glob("../assets/images/poster-banners/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  })
);

const socialMediaImages = Object.values(
  import.meta.glob("../assets/images/social-media/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  })
);

// ✅ Reusable gallery section
function GallerySection({ id, title, subtitle, images }) {
  const safeImages = images?.filter(Boolean) || [];

  return (
    <section id={id} className="section-wrap">
      <div className="section-head">
        <div className="section-title-row">
          <span className="section-star">✶</span>
          <h2 className="section-title">{title}</h2>
          <span className="section-star">✶</span>
        </div>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>

      {/* If no images yet, show placeholders */}
      {safeImages.length === 0 ? (
        <div className="placeholder-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="img-card placeholder-card ripple-target" key={i}>
              <div className="placeholder-shine" />
              <div className="placeholder-text">Image Placeholder</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="img-grid">
          {safeImages.map((src, i) => (
            <button
              key={i}
              className="img-card ripple-target"
              type="button"
              aria-label={`${title} image ${i + 1}`}
              onClick={() => {
                // Optional: later you can open a lightbox here
              }}
            >
              <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
              <div className="img-overlay" />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <main id="main-content">
      {/* ✅ HERO (matches your Wix reference) */}
      <section id="hero" className="hero-wrap">
        <div className="hero-grid">
          {/* Left Photo */}
          <div className="hero-photo">
            <div className="hero-photo-frame">
              <img src={profileImage} alt="Smit Patel" />
              <div className="hero-photo-fade" />
            </div>
          </div>

          {/* Right Copy */}
          <div className="hero-copy">
            <h1 className="hero-title">
              Hey I&apos;m <span className="accent">Smit</span>
              <br />
              I&apos;m a <span className="accent">Designer</span>
            </h1>

            <p className="hero-quote">
              “Design is where creativity meets strategy, blending aesthetics with functionality for meaningful experiences.
              I craft user-centric designs that inspire, engage, and drive results through compelling storytelling.
              Let’s collaborate to turn your vision into a powerful reality.”
            </p>

            <div className="hero-skills">
              <h3 className="hero-subhead">Skills &amp; Abilities</h3>

              <p className="hero-skill-line">
                <span className="accent">Design Tools:</span> Photoshop, Premiere Pro, Lightroom, WordPress, Canva, Wix Studio.
              </p>

              <ul className="hero-bullets">
                <li>Time Management &amp; Problem Solving</li>
                <li>Customer Service</li>
                <li>Project Coordination</li>
                <li>Technical Troubleshooting</li>
                <li>Database: SQL, MySQL</li>
              </ul>
            </div>

            <div className="hero-actions">
              <a
                className="btn btn-accent"
                href="https://wa.me/917698641630"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me
              </a>

              <a
                className="btn btn-ghost"
                href={`${base}smit-patel-resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="hero-social">
              <a href="https://www.instagram.com/smit8._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.twitter.com/WixStudio" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100007030568764" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://wa.me/917698641630" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ GALLERIES (auto-load from your folders) */}
      <GallerySection
        id="projects"
        title="Posters"
        subtitle="A collection across campaigns, banners, and poster layouts."
        images={posterBannerImages}
      />

      <GallerySection
        id="social"
        title="Social Media Posts"
        subtitle="Short-form, high-impact visuals designed for engagement."
        images={socialMediaImages}
      />

      <GallerySection
        id="brand"
        title="Brand & Visual Identity"
        subtitle="Logo systems, brand assets, and identity design explorations."
        images={brandIdentityImages}
      />

      <GallerySection
        id="ecommerce"
        title="E-commerce Listing Design"
        subtitle="Clean listing visuals and conversion-friendly layouts."
        images={ecommerceImages}
      />

      <GallerySection
        id="ads"
        title="Ad Campaign Designs"
        subtitle="Creative ad variations and campaign-ready exports."
        images={adCampaignImages}
      />

      {/* ✅ Skills + Contact (you can keep or remove) */}
      <Skills />
      <Contact />

      <div className="separator" />
    </main>
  );
}