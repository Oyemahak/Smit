// ✅ FINAL Home.jsx (fixes BRAND section overlap + keeps everything else same)
// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import profileImage from "../assets/images/profile-image.png";

/* =========================================================
   ✅ Helpers
   ========================================================= */
const sortNice = (a, b) =>
  String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });

const uniq = (arr) => Array.from(new Set((arr || []).filter(Boolean)));

/* =========================================================
   ✅ FOLDERS (your final structure)
   ========================================================= */

/** 03 — POSTER & BANNERS ✅ folder: src/assets/images/banners/ */
const posterImages = Object.values(
  import.meta.glob("../assets/images/banners/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

/** 01 — AD CAMPAIGN DESIGNS ✅ folder: src/assets/images/add-camp/ */
const adCampaignImages = uniq([
  ...Object.values(
    import.meta.glob("../assets/images/add-camp/*.{png,jpg,jpeg,webp}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
]);

/** 05 — BRAND & VISUAL IDENTITY ✅ folder: src/assets/images/brand-and-visual-identity/ */
const brandIdentityImages = Object.values(
  import.meta.glob("../assets/images/brand-and-visual-identity/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

/** 04 — E-COMMERCE LISTING DESIGN ✅ folder: src/assets/images/listing/ */
const listingImages = Object.values(
  import.meta.glob("../assets/images/listing/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

/** 02 — SOCIAL MEDIA ✅ folder: src/assets/images/social-media/ */
const socialMediaImages = Object.values(
  import.meta.glob("../assets/images/social-media/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

/* =========================================================
   ✅ Gallery Section (PDF header + grid layouts)
   ========================================================= */
function GallerySection({ id, number, title, description, images, colsDesktop = 4, layoutClass = "" }) {
  const safeImages = useMemo(() => uniq(images).sort(sortNice), [images]);
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
    <section id={id} className="pdf-section">
      {/* ✅ PDF-style header */}
      <div className="pdf-head">
        <h2 className="pdf-title">{title}</h2>

        <div className="pdf-meta">
          <span className="pdf-badge">{number}</span>
          <p className="pdf-desc">{description}</p>
        </div>
      </div>

      {/* ✅ NO placeholders */}
      {safeImages.length === 0 ? (
        <p className="pdf-empty">No images found in this folder yet.</p>
      ) : (
        <div className={`img-grid cols-${colsDesktop} ${layoutClass}`}>
          {safeImages.map((src, i) => {
            const r = ratios[src];

            // ✅ IMPORTANT FIX:
            // Disable banner/portrait auto-spans for special "manual layout" sections
            // so BRAND (layout-brand3) never overlaps.
            const isFixedLayout =
              String(layoutClass || "").includes("layout-brand3") ||
              String(layoutClass || "").includes("layout-brand") ||
              String(layoutClass || "").includes("layout-banners");

            const aspectRatio =
              typeof r === "number" ? `${Math.round(r * 1000) / 1000} / 1` : "16 / 10";

            const isVeryWide = !isFixedLayout && typeof r === "number" && r >= 2.1;
            const isPortrait = !isFixedLayout && typeof r === "number" && r <= 0.85;

            return (
              <button
                key={src + i}
                className={["img-card", "ripple-target", isVeryWide ? "is-banner" : "", isPortrait ? "is-portrait" : ""]
                  .filter(Boolean)
                  .join(" ")}
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

  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
  const [showTop, setShowTop] = useState(false);

  const onMainClick = (e) => {
    if (lightbox.open) return;

    const btn = e.target.closest?.(".img-card[data-full]");
    if (!btn) return;

    const src = btn.getAttribute("data-full");
    const img = btn.querySelector("img");
    const alt = img?.getAttribute("alt") || "Preview";

    setLightbox({ open: true, src, alt });
  };

  const closeLightbox = () => setLightbox({ open: false, src: "", alt: "" });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="main-content" onClick={onMainClick}>
      {/* ✅ HERO (unchanged) */}
      <section id="hero" className="hero-wrap">
        <div className="hero-ambient" aria-hidden="true" />

        <div className="hero-grid">
          <div className="hero-photo">
            <div className="hero-photo-frame">
              <img src={profileImage} alt="Smit Patel" />
              <div className="hero-photo-fade" />
              <div className="hero-photo-shine" />
            </div>

            <div className="hero-social">
              <a
                className="ripple-target"
                href="https://www.instagram.com/smit8._/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>

              <a
                className="ripple-target"
                href="https://www.twitter.com/WixStudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>

              <a
                className="ripple-target"
                href="https://www.facebook.com/profile.php?id=100007030568764"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>

              <a
                className="ripple-target"
                href="https://wa.me/917698641630"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-kicker">Designer Portfolio</span>
              <br />
              Hey I&apos;m <span className="accent glow">Smit.</span> I&apos;m a{" "}
              <span className="accent glow">Designer</span>
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
              <a
                className="btn btn-ghost ripple-target"
                href={`${base}smit-patel-resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>

              <a
                className="btn btn-accent ripple-target btn-mobile-hire"
                href="https://wa.me/917698641630"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ PDF ORDER */}
      <GallerySection
        id="ads"
        number="01"
        title="AD CAMPAIGN DESIGNS"
        description="Strategic ad visuals built to tell a story, grab attention, and drive action. From concept to final artwork, every campaign is designed to maximize reach and brand recall."
        images={adCampaignImages}
        colsDesktop={3}
      />

      <GallerySection
        id="social"
        number="02"
        title="SOCIAL MEDIA"
        description="I design social media creatives that blend strong visuals with clear messaging. Each poster is thoughtfully crafted to catch attention, reflect the brand’s identity, and stand out naturally in a fast-moving social feed."
        images={socialMediaImages}
        colsDesktop={4}
      />

      <GallerySection
        id="posters"
        number="03"
        title="POSTER & BANNERS"
        description="I design social media creatives that blend strong visuals with clear messaging. Each poster is thoughtfully crafted to catch attention, reflect the brand’s identity, and stand out naturally in a fast-moving social feed."
        images={posterImages}
        colsDesktop={2}
        layoutClass="layout-banners"
      />

      <GallerySection
        id="listing"
        number="04"
        title="E-COMMERCE LISTING DESIGN"
        description="Each e-commerce listing is thoughtfully designed to present product details clearly, enhance visual appeal, and help customers make confident buying decisions."
        images={listingImages}
        colsDesktop={2}
      />

      {/* ✅ BRAND (manual layout) */}
      <GallerySection
        id="brand"
        number="05"
        title="BRAND & VISUAL IDENTITY"
        description="I design strong and cohesive brand and visual identities that clearly communicate values, build recognition, and create lasting impressions."
        images={brandIdentityImages}
        colsDesktop={3}
        layoutClass="layout-brand3"
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

      {/* ✅ Go to top */}
      {showTop ? (
        <button
          className="to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      ) : null}
    </main>
  );
}