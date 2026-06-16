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
  { label: "Instagram", href: "https://www.instagram.com/smit8._/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100007030568764" },
  { label: "WhatsApp", href: whatsappHref },
];

export const skills = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "Canva",
  "Poster Design",
  "Brand Identity",
  "Social Media Design",
  "Typography",
  "Layout Design",
  "Color Theory",
  "Campaign Design",
  "Visual Storytelling",
  "Print & Digital Design",
];

export const services = [
  {
    title: "Poster Design",
    description: "Bold event, fashion, sale, and announcement posters built around strong hierarchy.",
  },
  {
    title: "Social Media Creatives",
    description: "Scroll-ready campaign posts, stories, reels covers, and launch visuals.",
  },
  {
    title: "Brand Identity",
    description: "Visual systems, mood, typography, colors, and branded creative direction.",
  },
  {
    title: "Logo Design",
    description: "Clean logo and identity concepts for modern digital-first brands.",
  },
  {
    title: "Marketing Campaign Visuals",
    description: "Conversion-focused graphics for offers, promotions, drops, and launches.",
  },
  {
    title: "Event Posters",
    description: "High-impact compositions for music, fashion, cultural, and community events.",
  },
  {
    title: "Digital Ads",
    description: "Premium static ad creatives sized for paid and organic digital channels.",
  },
  {
    title: "Print-ready Designs",
    description: "Sharp layouts prepared for banners, catalog visuals, flyers, and print output.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the brand, audience, visual references, and goal of the design.",
  },
  {
    step: "02",
    title: "Concept",
    description: "Build a direction around layout, typography, color, message, and mood.",
  },
  {
    step: "03",
    title: "Design",
    description: "Craft polished visuals with strong hierarchy, detail, and platform fit.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Export clean final files for social, web, campaign, and print use.",
  },
];
