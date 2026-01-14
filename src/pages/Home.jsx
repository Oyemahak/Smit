import React, { useMemo, useState } from "react";

import profileImage from "../assets/images/profile-image.png";

/* ✅ Vite glob: use query/import (fixes deprecation warning) */
const adCampaignImages = Object.values(
  import.meta.glob("../assets/images/ad-campaign-designs/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

const brandIdentityImages = Object.values(
  import.meta.glob("../assets/images/brand-visual-identity/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

const ecommerceImages = Object.values(
  import.meta.glob("../assets/images/ecommerce-listing-design/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

const posterBannerImages = Object.values(
  import.meta.glob("../assets/images/poster-banners/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

const socialMediaImages = Object.values(
  import.meta.glob("../assets/images/social-media/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

function GallerySection({ id, title, subtitle, images, density = "dense" }) {
  const safeImages = useMemo(() => (images?.filter(Boolean) || []).sort(), [images]);

  // Store aspect ratio per image
  const [ratios, setRatios] = useState({});

  const onImgLoad = (src, e) => {
    const img = e.currentTarget;
    const w = img.naturalWidth || 1;
    const h = img.naturalHeight || 1;
    const ratio = w / h;

    setRatios((prev) => {
      if (prev[src]) return prev;
      return { ...prev, [src]: ratio };
    });
  };

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

      {safeImages.length === 0 ? (
        <div className="placeholder-grid">
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="img-card placeholder-card ripple-target" key={i}>
              <div className="placeholder-shine" />
              <div className="placeholder-text">Image Placeholder</div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`img-grid ${density === "super" ? "img-grid-super" : "img-grid-dense"}`}>
          {safeImages.map((src, i) => {
            const r = ratios[src];

            // If ratio unknown yet, use a nice default.
            // Once loaded, this becomes exact, so your cards match posters/banners properly.
            const aspectRatio =
              typeof r === "number"
                ? `${Math.round(r * 1000) / 1000} / 1`
                : "16 / 10";

            const isVeryWide = typeof r === "number" && r >= 2.1; // banners
            const isPortrait = typeof r === "number" && r <= 0.85;

            return (
              <button
                key={src + i}
                className={[
                  "img-card",
                  "ripple-target",
                  isVeryWide ? "is-banner" : "",
                  isPortrait ? "is-portrait" : "",
                ].join(" ")}
                type="button"
                aria-label={`${title} image ${i + 1}`}
                style={{ aspectRatio }}
                data-full={src}
              >
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  loading="lazy"
                  onLoad={(e) => onImgLoad(src, e)}
                />
                <div className="img-overlay" />
                <div className="img-hoverhint">View</div>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default function Home() {
  const base = import.meta.env.BASE_URL;

  // Lightbox using event delegation (simple + fast)
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  const onMainClick = (e) => {
    const btn = e.target.closest?.(".img-card[data-full]");
    if (!btn) return;

    const src = btn.getAttribute("data-full");
    const img = btn.querySelector("img");
    const alt = img?.getAttribute("alt") || "Preview";

    setLightbox({ open: true, src, alt });
  };

  const closeLightbox = () => setLightbox({ open: false, src: "", alt: "" });

  return (
    <main id="main-content" onClick={onMainClick}>
      {/* ✅ HERO */}
      <section id="hero" className="hero-wrap">
        <div className="hero-ambient" aria-hidden="true" />
        <div className="hero-grid">
          {/* Left Photo */}
          <div className="hero-photo">
            <div className="hero-photo-frame">
              <img src={profileImage} alt="Smit Patel" />
              <div className="hero-photo-fade" />
              <div className="hero-photo-shine" />
            </div>

            <div className="hero-social">
              <a href="https://www.instagram.com/smit8._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.twitter.com/WixStudio" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100007030568764"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://wa.me/917698641630" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Right Copy */}
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-kicker">Designer Portfolio</span>
              <br />
              Hey I&apos;m <span className="accent glow">Smit. </span>I&apos;m a <span className="accent glow">Designer</span>
            </h1>

            <p className="hero-quote">
              “Design is where creativity meets strategy — blending aesthetics with functionality for meaningful
              experiences. I create visuals that feel premium, communicate clearly, and convert attention into action.”
            </p>

            <div className="hero-skills">
              <h3 className="hero-subhead">Skills &amp; Abilities</h3>

              <p className="hero-skill-line">
                <span className="accent">Design Tools:</span> Photoshop, Premiere Pro, Lightroom, WordPress, Canva, Wix
                Studio.
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
              <a className="btn btn-accent" href="https://wa.me/917698641630" target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
      </section>

      {/* ✅ GALLERIES */}
      <GallerySection
        id="projects"
        title="Posters"
        subtitle="Banners + posters — click any to view full."
        images={posterBannerImages}
        density="super"
      />

      <GallerySection
        id="social"
        title="Social Media Posts"
        subtitle="Short-form, high-impact visuals designed for engagement."
        images={socialMediaImages}
        density="dense"
      />

      <GallerySection
        id="brand"
        title="Brand & Visual Identity"
        subtitle="Logo systems, brand assets, and identity design explorations."
        images={brandIdentityImages}
        density="dense"
      />

      <GallerySection
        id="ecommerce"
        title="E-commerce Listing Design"
        subtitle="Clean listing visuals and conversion-friendly layouts."
        images={ecommerceImages}
        density="dense"
      />

      <GallerySection
        id="ads"
        title="Ad Campaign Designs"
        subtitle="Creative ad variations and campaign-ready exports."
        images={adCampaignImages}
        density="dense"
      />

      <div className="separator" />

      {/* ✅ Lightbox */}
      {lightbox.open ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="lightbox-close" type="button" aria-label="Close preview" onClick={closeLightbox}>
            ✕
          </button>

          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img className="lightbox-img" src={lightbox.src} alt={lightbox.alt} />
            <div className="lightbox-hint">Press ESC or click outside to close</div>
          </div>
        </div>
      ) : null}
    </main>
  );
}