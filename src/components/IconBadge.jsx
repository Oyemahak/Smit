import React from "react";
import {
  FaBehance,
  FaBullhorn,
  FaDribbble,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLayerGroup,
  FaLightbulb,
  FaLinkedinIn,
  FaMagic,
  FaPaintBrush,
  FaPalette,
  FaPenNib,
  FaPrint,
  FaRegEye,
  FaSearch,
  FaShareAlt,
  FaVectorSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { SiCanva, SiFigma } from "react-icons/si";
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";

const iconMap = {
  photoshop: TbBrandAdobePhotoshop,
  illustrator: TbBrandAdobeIllustrator,
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
  graphic: FaPaintBrush,
  poster: FaRegEye,
  brand: FaVectorSquare,
  social: FaShareAlt,
  campaign: FaBullhorn,
  typography: FaPenNib,
  layout: FaLayerGroup,
  color: FaPalette,
  story: FaLightbulb,
  print: FaPrint,
  logo: FaVectorSquare,
  event: FaRegEye,
  ad: FaBullhorn,
  discover: FaSearch,
  concept: FaLightbulb,
  design: FaMagic,
  deliver: FaPrint,
};

export default function IconBadge({ name, className = "" }) {
  const Icon = iconMap[name] || FaPalette;
  return (
    <span className={`icon-badge icon-${name} ${className}`.trim()} aria-hidden="true">
      <Icon />
    </span>
  );
}
