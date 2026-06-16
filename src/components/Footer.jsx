import React from "react";
import { socials, whatsappHref } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Smit Patel</strong>
          <p>Graphic Designer focused on posters, brand visuals, and digital campaigns.</p>
        </div>
        <nav aria-label="Footer links">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          {socials.slice(0, 2).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Smit Patel. All rights reserved.</p>
    </footer>
  );
}
