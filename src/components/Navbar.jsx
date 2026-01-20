import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { label: "Projects", to: "/home#projects", isHash: true },
      { label: "Home", to: "/home" },
      { label: "About", to: "/about" },
    ],
    []
  );

  // ✅ close menu whenever route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setOpen(false);

    if (!item.isHash) return;

    const [path, hash] = item.to.split("#");

    // If already on /home, just scroll
    if (location.pathname === "/home") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Otherwise navigate to /home#section
    window.location.href = `${path}#${hash}`;
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

        {/* Center: Links (hidden on mobile by your CSS) */}
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

        {/* Right */}
        <div className="nav-right">
          {/* ✅ Desktop only */}
          <a
            className="nav-btn nav-btn-accent hide-on-mobile"
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