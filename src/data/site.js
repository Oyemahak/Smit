export const SITE_URL = "https://www.patelsmit.in/";
export const WHATSAPP_NUMBER = "917698641630";
export const WHATSAPP_MESSAGE =
  "Hi Smit, I saw your graphic design portfolio and I’m interested in working with you. I’d like to discuss a design project with you.";

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const seo = {
  title: "Smit Patel | Graphic Designer Portfolio",
  description:
    "Explore the graphic design portfolio of Smit Patel, featuring poster designs, brand identity, social media creatives, campaign visuals, and digital artwork.",
  keywords:
    "Smit Patel graphic designer, graphic designer portfolio, poster design, brand identity design, social media creatives, campaign design, visual designer, digital designer",
  url: SITE_URL,
};

export const socials = [
  { label: "Instagram", icon: "instagram", tone: "instagram", href: "https://www.instagram.com/smit8._/" },
  { label: "Facebook", icon: "facebook", tone: "facebook", href: "https://www.facebook.com/profile.php?id=100007030568764" },
  { label: "WhatsApp", icon: "whatsapp", tone: "whatsapp", href: whatsappHref },
];

export const socialPlaceholders = {
  email: "ADD_EMAIL_HERE",
  linkedin: "#",
  behance: "#",
  dribbble: "#",
  github: "#",
};

export const skillGroups = [
  {
    title: "Design Tools",
    items: [
      { label: "Adobe Photoshop", icon: "photoshop", description: "Image editing, compositing, posters" },
      { label: "Adobe Illustrator", icon: "illustrator", description: "Vector graphics, logo ideas, layouts" },
      { label: "Figma", icon: "figma", description: "Visual systems and clean presentation" },
      { label: "Canva", icon: "canva", description: "Fast social and campaign variations" },
    ],
  },
  {
    title: "Design Skills",
    items: [
      { label: "Poster Design", icon: "poster", description: "Bold event and campaign layouts" },
      { label: "Brand Identity", icon: "brand", description: "Color, type, and visual direction" },
      { label: "Social Media Design", icon: "social", description: "Feed-ready creatives and ad posts" },
      { label: "Typography", icon: "typography", description: "Readable hierarchy and type pairing" },
      { label: "Layout Design", icon: "layout", description: "Clean composition and spacing" },
      { label: "Color Theory", icon: "color", description: "Balanced, high-impact palettes" },
    ],
  },
  {
    title: "Creative Services",
    items: [
      { label: "Campaign Design", icon: "campaign", description: "Launch visuals and marketing assets" },
      { label: "Visual Storytelling", icon: "story", description: "Clear ideas through strong visuals" },
      { label: "Print & Digital Design", icon: "print", description: "Files prepared for screen and print" },
    ],
  },
];

export const services = [
  {
    title: "Poster Design",
    icon: "poster",
    description: "Bold event, fashion, sale, and announcement posters built around strong hierarchy.",
  },
  {
    title: "Social Media Creatives",
    icon: "social",
    description: "Scroll-ready campaign posts, stories, reels covers, and launch visuals.",
  },
  {
    title: "Brand Identity",
    icon: "brand",
    description: "Visual systems, mood, typography, colors, and branded creative direction.",
  },
  {
    title: "Logo Design",
    icon: "logo",
    description: "Clean logo and identity concepts for modern digital-first brands.",
  },
  {
    title: "Marketing Campaign Visuals",
    icon: "campaign",
    description: "Conversion-focused graphics for offers, promotions, drops, and launches.",
  },
  {
    title: "Event Posters",
    icon: "event",
    description: "High-impact compositions for music, fashion, cultural, and community events.",
  },
  {
    title: "Digital Ads",
    icon: "ad",
    description: "Premium static ad creatives sized for paid and organic digital channels.",
  },
  {
    title: "Print-ready Designs",
    icon: "print",
    description: "Sharp layouts prepared for banners, catalog visuals, flyers, and print output.",
  },
];

export const processSteps = [
  {
    step: "01",
    icon: "discover",
    title: "Discover",
    description: "Understand the brand, audience, visual references, and goal of the design.",
  },
  {
    step: "02",
    icon: "concept",
    title: "Concept",
    description: "Build a direction around layout, typography, color, message, and mood.",
  },
  {
    step: "03",
    icon: "design",
    title: "Design",
    description: "Craft polished visuals with strong hierarchy, detail, and platform fit.",
  },
  {
    step: "04",
    icon: "deliver",
    title: "Deliver",
    description: "Export clean final files for social, web, campaign, and print use.",
  },
];
