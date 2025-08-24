// WorkedFor.jsx — Glassy Flip Cards for Smit 💼

import React from "react";

import cocoonLogo from '../assets/images/cocoon.png';
import boobooLogo from '../assets/images/booboo.png';
import tirthLogo from '../assets/images/canstem.png'; // Replace with correct Tirth logo
import freelanceLogo from '../assets/images/freelance.png';

const companies = [
  {
    name: "Cocoon Care",
    role: "Graphic Designer",
    description:
      "Crafted Amazon product posters and polished visuals for wellness campaigns. Assisted with UI screens for mobile booking flows.",
    logo: cocoonLogo,
    website: "https://www.cocooncare.com/"
  },
  {
    name: "BooBoo Club",
    role: "Graphic Designer",
    description:
      "Designed Amazon promo posters, digital brand kits, and illustrations for telehealth campaigns and Instagram branding.",
    logo: boobooLogo,
    website: "https://www.instagram.com/theboobooclub"
  },
  {
    name: "Tirth Thermocol Decoration",
    role: "Web Designer",
    description:
      "Designed responsive pages for showcasing customized decorative products for events and exhibitions.",
    logo: tirthLogo,
    website: "#"
  },
  {
    name: "Freelancing",
    role: "Web & Graphic Designer",
    description:
      "Delivered websites, branding kits, and social assets for small businesses using Wix, WordPress, and Canva.",
    logo: freelanceLogo,
    website: "#"
  }
];

const WorkedFor = () => {
  return (
    <section>
      <h2>Worked For</h2>
      <div className="workedfor-grid">
        {companies.map((company, index) => (
          <div key={index} className="flip-card">
            <div className="flip-inner">
              {/* Front */}
              <div className="flip-front">
                <img src={company.logo} alt={company.name} className="company-logo" />
                <h3>{company.name}</h3>
                <p className="role">{company.role}</p>
              </div>

              {/* Back */}
              <div className="flip-back">
                <p className="description">{company.description}</p>
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  <button className="visit-btn">Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkedFor;