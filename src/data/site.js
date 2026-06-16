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
    featured: true,
    items: [
      { label: "Adobe Photoshop", icon: "photoshop", description: "Image editing, poster compositing, campaign polish" },
      { label: "Adobe Illustrator", icon: "illustrator", description: "Vector graphics, logos, identity elements" },
      { label: "Figma", icon: "figma", description: "Presentation layouts, UI boards, visual systems" },
      { label: "Canva", icon: "canva", description: "Fast campaign variations and social-ready formats" },
    ],
  },
  {
    title: "Visual Skills",
    accent: "visual",
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
    title: "Digital Stack",
    accent: "digital",
    items: [
      { label: "HTML5", icon: "html", description: "Semantic landing page structure" },
      { label: "CSS3", icon: "css", description: "Responsive styling and motion polish" },
      { label: "JavaScript", icon: "javascript", description: "Interactive front-end behavior" },
      { label: "React", icon: "react", description: "Component-based portfolio builds" },
      { label: "Vite", icon: "vite", description: "Fast modern build tooling" },
      { label: "Tailwind", icon: "tailwind", description: "Utility-first UI systems" },
    ],
  },
  {
    title: "Workflow",
    accent: "workflow",
    items: [
      { label: "TypeScript", icon: "typescript", description: "Typed interface handoff" },
      { label: "Bootstrap", icon: "bootstrap", description: "Reliable responsive layouts" },
      { label: "WordPress", icon: "wordpress", description: "Editable marketing websites" },
      { label: "Elementor", icon: "elementor", description: "Visual CMS page building" },
      { label: "Git", icon: "git", description: "Version-controlled edits" },
      { label: "GitHub", icon: "github", description: "Code and project hosting" },
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
