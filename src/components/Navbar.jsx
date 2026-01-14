import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/global.css";
import "../styles/theme-switcher.css";

import logo from "../assets/images/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${saved}-theme`);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${next}-theme`);
    localStorage.setItem("theme", next);
  };

  return (
    <header>
      <div className="header-grid glassy-header">
        {/* Logo */}
        <div className="header-col logo-col">
          <Link to="/home" className="logo-link">
            <img className="logo" src={logo} alt="Smit Patel logo" />
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="header-col role-col">
          <div className="theme-toggle-wrapper" title="Switch Theme">
            <i className="fas fa-moon"></i>
            <label className="switch">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
            <i className="fas fa-cloud-sun"></i>
          </div>
        </div>

        {/* Navigation */}
        <div className="header-col nav-col">
          <nav>
            <ul className="desktop-menu">
              <li>
                <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            {/* main.js controls open/close */}
            <div className="mobile-menu-icon">
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}