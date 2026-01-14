import React, { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const base = import.meta.env.BASE_URL;

  const navItems = useMemo(
    () => [
      { label: "Projects", to: "/home#projects", isHash: true },
      { label: "Home", to: "/home" },
      { label: "About", to: "/about" },
    ],
    []
  );

  const handleNavClick = (item) => {
    setOpen(false);

    if (item.isHash) {
      // Support /home#projects smoothly
      const [path, hash] = item.to.split("#");

      // If already on /home, just scroll
      if (location.pathname === "/home") {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      // Otherwise go to /home then scroll after navigation
      window.location.href = `${path}#${hash}`;
    }
  };

  return (
    <header className="nav-shell">
      <nav className="nav-inner" aria-label="Primary navigation">
        {/* Left: Brand */}
        <div className="nav-left">
          <NavLink className="nav-brand" to="/home" onClick={() => setOpen(false)}>
            <img className="nav-logo" src={logo} alt="Smit Patel logo" />
            <div className="nav-brand-text">
              <div className="nav-brand-top">Portfolio</div>
              <div className="nav-brand-sub">SMIT PATEL</div>
            </div>
          </NavLink>
        </div>

        {/* Center: Links */}
        <div className="nav-center">
          <ul className="nav-links">
            {navItems.map((item) => {
              if (item.isHash) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.to}
                      className={location.pathname === "/home" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Buttons + Burger */}
        <div className="nav-right">
          <a
            className="nav-btn nav-btn-ghost"
            href={`${base}smit-patel-resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <a
            className="nav-btn nav-btn-accent"
            href="https://wa.me/917698641630"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire me
          </a>

          <button
            className="nav-burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {navItems.map((item) => {
          if (item.isHash) {
            return (
              <a
                key={item.label}
                href={item.to}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.label}
              </a>
            );
          }
          return (
            <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
}