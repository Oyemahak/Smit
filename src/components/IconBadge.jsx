import React from "react";
import {
  FaBehance,
  FaBullhorn,
  FaDribbble,
  FaEnvelope,
  FaFacebookF,
  FaGem,
  FaGithub,
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
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiFigma } from "react-icons/si";

const iconMap = {
  photoshop: SiAdobephotoshop,
  illustrator: SiAdobeillustrator,
  figma: SiFigma,
  canva: SiCanva,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  behance: FaBehance,
  dribbble: FaDribbble,
  github: FaGithub,
  email: FaEnvelope,
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
