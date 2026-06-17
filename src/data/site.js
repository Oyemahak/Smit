export const SITE_URL = "https://www.patelsmit.in/";
export const WHATSAPP_NUMBER = "917698641630";
export const WHATSAPP_MESSAGE =
  "Hi Smit, I saw your graphic design portfolio and I’m interested in working with you. I’d like to discuss a design project with you.";
export const CONTACT_EMAIL = "ADD_EMAIL_HERE";
export const LINKEDIN_URL = "#";
export const GITHUB_URL = "#";
export const PORTFOLIO_URL = SITE_URL;

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
  { label: "LinkedIn", icon: "linkedin", tone: "linkedin", href: LINKEDIN_URL },
  { label: "GitHub", icon: "github", tone: "github", href: GITHUB_URL },
  { label: "Instagram", icon: "instagram", tone: "instagram", href: "https://www.instagram.com/smit8._/" },
  { label: "Email", icon: "email", tone: "email", href: `mailto:${CONTACT_EMAIL}` },
  { label: "Portfolio", icon: "portfolio", tone: "portfolio", href: PORTFOLIO_URL },
  { label: "WhatsApp", icon: "whatsapp", tone: "whatsapp", href: whatsappHref },
];

export const socialPlaceholders = {
  email: CONTACT_EMAIL,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
};

export const skillGroups = [
  {
    title: "Design Tools",
    accent: "design",
    items: [
      { label: "Adobe Photoshop", icon: "photoshop", description: "Poster polish and image edits" },
      { label: "Adobe Illustrator", icon: "illustrator", description: "Logos and vector graphics" },
      { label: "Figma", icon: "figma", description: "Layouts and visual systems" },
      { label: "Canva", icon: "canva", description: "Fast social variations" },
    ],
  },
  {
    title: "Visual Skills",
    accent: "visual",
    items: [
      { label: "Poster Design", icon: "poster", description: "Bold visual layouts" },
      { label: "Branding", icon: "brand", description: "Color, type, direction" },
      { label: "Social Media", icon: "social", description: "Feed-ready creatives" },
      { label: "Typography", icon: "typography", description: "Clear type hierarchy" },
      { label: "Layout Design", icon: "layout", description: "Balanced spacing" },
      { label: "Color Theory", icon: "color", description: "High-impact palettes" },
    ],
  },
  {
    title: "Creative Workflow",
    accent: "workflow",
    items: [
      { label: "Discover", icon: "discover", description: "Goal, audience, references" },
      { label: "Concept", icon: "concept", description: "Direction, type, color" },
      { label: "Design", icon: "design", description: "Polished campaign visuals" },
      { label: "Deliver", icon: "deliver", description: "Files for web and print" },
    ],
  },
];

export const services = [
  {
    title: "Poster Design",
    icon: "poster",
    description: "Bold posters with sharp hierarchy.",
  },
  {
    title: "Social Media Creatives",
    icon: "social",
    description: "Posts, stories, and launch visuals.",
  },
  {
    title: "Brand Identity",
    icon: "brand",
    description: "Color, type, and visual direction.",
  },
  {
    title: "Logo Design",
    icon: "logo",
    description: "Clean marks and identity ideas.",
  },
  {
    title: "Marketing Campaign Visuals",
    icon: "campaign",
    description: "Offer graphics built to stand out.",
  },
  {
    title: "Event Posters",
    icon: "event",
    description: "Event visuals with strong impact.",
  },
  {
    title: "Digital Ads",
    icon: "ad",
    description: "Static ads for digital channels.",
  },
  {
    title: "Print-ready Designs",
    icon: "print",
    description: "Clean files for screen and print.",
  },
];

export const processSteps = [
  {
    step: "01",
    icon: "discover",
    title: "Discover",
    description: "Goal, audience, and references.",
  },
  {
    step: "02",
    icon: "concept",
    title: "Concept",
    description: "Layout, color, type, and mood.",
  },
  {
    step: "03",
    icon: "design",
    title: "Design",
    description: "Polished visuals with clear hierarchy.",
  },
  {
    step: "04",
    icon: "deliver",
    title: "Deliver",
    description: "Ready files for web, social, and print.",
  },
];
