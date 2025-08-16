// Navbar.jsx — Now with glassy sun/moon switch 🌗☀️

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/theme-switcher.css';

import logo from '../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.body.className = `${saved}-theme`;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = `${newTheme}-theme`;
    localStorage.setItem('theme', newTheme);
  };

  const handleContactClick = () => {
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header>
      <div className="header-grid glassy-header">
        {/* Logo */}
        <div className="header-col logo-col">
          <Link to="/">
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
                checked={theme === 'light'}
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
              <li className="tooltip-bottom">
                <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
              </li>
              <li className="tooltip-bottom">
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              </li>
              <li className="tooltip-bottom">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick();
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mobile-menu-icon">
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;