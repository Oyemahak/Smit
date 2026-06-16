import React from "react";
import {
  FaBullhorn,
  FaGem,
  FaGlobe,
  FaImages,
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
  SiGithub,
  SiGmail,
  SiGoogleanalytics,
  SiHtml5,
  SiInstagram,
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
      <rect x="2.5" y="2.5" width="27" height="27" rx="7" fill="#001e36" />
      <rect x="4" y="4" width="24" height="24" rx="5.5" fill="none" stroke="#31a8ff" strokeWidth="2" />
      <text x="7.5" y="21.8" fill="#31a8ff" fontFamily="Arial, Helvetica, sans-serif" fontSize="11.4" fontWeight="800">
        Ps
      </text>
    </svg>
  );
}

function IllustratorLogo() {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <rect x="2.5" y="2.5" width="27" height="27" rx="7" fill="#330000" />
      <rect x="4" y="4" width="24" height="24" rx="5.5" fill="none" stroke="#ff9a00" strokeWidth="2" />
      <text x="8.8" y="21.8" fill="#ff9a00" fontFamily="Arial, Helvetica, sans-serif" fontSize="11.4" fontWeight="800">
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
  github: SiGithub,
  seo: FaSearch,
  analytics: SiGoogleanalytics,
  node: SiNodedotjs,
  mongodb: SiMongodb,
  xd: TbBrandAdobeXd,
  photoshop: PhotoshopLogo,
  illustrator: IllustratorLogo,
  figma: SiFigma,
  canva: SiCanva,
  instagram: SiInstagram,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  email: SiGmail,
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
