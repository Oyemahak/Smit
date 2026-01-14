import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";

import logo from "../assets/images/logo.png";

export default function Navbar() {
  const location = useLocation();
  const base = import.meta.env.BASE_URL;

  return (
    <header className="nav-shell">
      <div className="nav-inner">
        {/* Left: Logo + Title */}
        <div className="nav-left">
          <Link to="/home" className="nav-brand" aria-label="Go to home">
            <img src={logo} alt="Smit Patel" className="nav-logo" />
            <div className="nav-brand-text">
              <div className="nav-brand-top">Portfolio</div>
              <div className="nav-brand-sub">SMIT PATEL</div>
            </div>
          </Link>
        </div>

        {/* Center: Links */}
        <nav className="nav-center" aria-label="Primary">
          <ul className="nav-links">
            <li>
              <Link
                to="/home#projects"
                className={location.pathname === "/home" ? "" : ""}
              >
                Projects
              </Link>
            </li>
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
          </ul>
        </nav>

        {/* Right: Actions */}
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

          {/* Mobile button */}
          <button className="nav-burger" type="button" aria-label="Open menu" aria-expanded="false">
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* Mobile menu panel (main.js will toggle .open) */}
      <div className="nav-mobile">
        <Link to="/home#projects">Projects</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <a href={`${base}smit-patel-resume.pdf`} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href="https://wa.me/917698641630" target="_blank" rel="noopener noreferrer">
          Hire me
        </a>
      </div>
    </header>
  );
}