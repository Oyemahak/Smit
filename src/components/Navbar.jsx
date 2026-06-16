import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { whatsappHref } from "../data/site";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = useMemo(
    () => [
      { label: "Work", to: "/#work", isHash: true },
      { label: "Services", to: "/#services", isHash: true },
      { label: "Process", to: "/#process", isHash: true },
      { label: "About", to: "/about" },
    ],
    []
  );

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setOpen(false);
    if (!item.isHash) return;

    const [path, hash] = item.to.split("#");

    const scrollToSection = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname === path) {
      scrollToSection();
      return;
    }

    navigate(path);
    window.setTimeout(scrollToSection, 120);
  };

  return (
    <header className="nav-shell">
      <nav className="nav-inner" aria-label="Primary navigation">
        <div className="nav-left">
          <Link className="nav-brand" to="/" onClick={() => setOpen(false)}>
            <img className="nav-logo" src={logo} alt="Smit Patel logo" />
            <div className="nav-brand-text">
              <span className="nav-brand-top">Smit Patel</span>
              <span className="nav-brand-sub">Graphic Designer</span>
            </div>
          </Link>
        </div>

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

        <div className="nav-right">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
          >
            <span aria-hidden="true">{theme === "dark" ? "☾" : "☀"}</span>
          </button>

          <a
            className="nav-btn nav-btn-accent hide-on-mobile"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire me
          </a>

          <button
            className="nav-burger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

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
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          Hire me
        </a>
      </div>
    </header>
  );
}
