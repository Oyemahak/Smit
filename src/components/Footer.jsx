import React from "react";
import { socials } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <strong>Smit Patel</strong>
      <p>Graphic Designer focused on posters, brand visuals, social media creatives, and campaigns.</p>
      <nav className="footer-socials" aria-label="Footer social links">
        {socials.map((social) => (
          <a className={`social-pill ${social.tone}`} key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
            <span>{social.icon}</span>
            {social.label}
          </a>
        ))}
      </nav>
      <p className="footer-note">© {new Date().getFullYear()} Smit Patel. All rights reserved.</p>
    </footer>
  );
}
