import React from "react";
import {
  FaBullhorn,
  FaEnvelope,
  FaGem,
  FaGithub,
  FaGlobe,
  FaImages,
  FaInstagram,
  FaLayerGroup,
  FaLightbulb,
  FaLinkedinIn,
  FaMagic,
  FaPaintBrush,
  FaPalette,
  FaPenNib,
  FaPrint,
  FaSearch,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCanva,
  SiCss,
  SiElementor,
  SiFigma,
  SiGit,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { TbBrandAdobeXd } from "react-icons/tb";

function PhotoshopLogo() {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="6" fill="#001e36" />
      <rect x="4.5" y="4.5" width="23" height="23" rx="4.5" fill="none" stroke="#31a8ff" strokeWidth="1.8" />
      <text x="8" y="21.5" fill="#31a8ff" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="800">
        Ps
      </text>
    </svg>
  );
}

function IllustratorLogo() {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="6" fill="#330000" />
      <rect x="4.5" y="4.5" width="23" height="23" rx="4.5" fill="none" stroke="#ff9a00" strokeWidth="1.8" />
      <text x="9" y="21.5" fill="#ff9a00" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="800">
        Ai
      </text>
    </svg>
  );
}

const iconMap = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  wordpress: SiWordpress,
  elementor: SiElementor,
  git: SiGit,
  github: FaGithub,
  seo: FaSearch,
  analytics: SiGoogleanalytics,
  node: SiNodedotjs,
  mongodb: SiMongodb,
  xd: TbBrandAdobeXd,
  photoshop: PhotoshopLogo,
  illustrator: IllustratorLogo,
  figma: SiFigma,
  canva: SiCanva,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  portfolio: FaGlobe,
  graphic: FaPalette,
  poster: FaImages,
  brand: FaGem,
  social: FaShareAlt,
  campaign: FaBullhorn,
  typography: FaPenNib,
  layout: FaLayerGroup,
  color: FaPalette,
  story: FaLightbulb,
  print: FaPrint,
  logo: FaGem,
  event: FaImages,
  ad: FaBullhorn,
  discover: FaSearch,
  concept: FaLightbulb,
  design: FaMagic,
  deliver: FaPrint,
  brush: FaPaintBrush,
};

export default function IconBadge({ name, className = "" }) {
  const Icon = iconMap[name] || FaPalette;
  return (
    <span className={`icon-badge icon-${name} ${className}`.trim()} aria-hidden="true">
      <Icon />
    </span>
  );
}
