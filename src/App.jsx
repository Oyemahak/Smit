import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const EXTRA_CSS = `.nav-shell{z-index:80!important}.nav-inner{background:rgba(22,22,24,.58)!important;box-shadow:0 18px 70px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,255,255,.12)!important;backdrop-filter:blur(28px) saturate(1.35)!important}.icon-badge,.skill-icon{width:34px!important;height:34px!important;min-width:34px!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;color:rgba(255,255,255,.92)!important}.icon-badge svg{width:24px!important;height:24px!important}.skill-item{grid-template-columns:40px 1fr!important}.hero-highlights .icon-badge{width:22px!important;height:22px!important;min-width:22px!important}.hero-highlights .icon-badge svg{width:16px!important;height:16px!important}.service-card .icon-badge,.process-card .icon-badge{width:42px!important;height:42px!important;border-radius:14px!important;background:rgba(255,255,255,.1)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.14)!important}.service-card .icon-badge svg,.process-card .icon-badge svg{width:23px!important;height:23px!important}.icon-photoshop{color:#31a8ff!important}.icon-illustrator{color:#ff9a00!important}.icon-figma{color:#a259ff!important}.icon-canva{color:#00c4cc!important}.icon-poster{color:#38bdf8!important}.icon-brand,.icon-logo{color:#a78bfa!important}.icon-social{color:#4ade80!important}.icon-campaign,.icon-ad{color:#fbbf24!important}.icon-graphic,.icon-design{color:#e5e7eb!important}.hero-content h1{font-size:clamp(2.3rem,3.65vw,3.7rem)!important}.hero-highlights span{padding:10px 15px!important;background:rgba(255,255,255,.08)!important;backdrop-filter:blur(18px)!important}.hero-showcase{overflow-x:auto!important;scroll-snap-type:x mandatory!important;display:flex!important;gap:14px!important;padding:4px 2px 18px!important}.preview-card{flex:0 0 min(380px,78vw)!important;scroll-snap-align:start!important;aspect-ratio:4/5!important;min-height:360px!important}.preview-card-1{flex-basis:min(520px,86vw)!important;aspect-ratio:16/10!important}.skill-group-card,.service-card,.process-card,.glass-panel{background:rgba(255,255,255,.075)!important;box-shadow:0 18px 60px rgba(0,0,0,.18),inset 0 1px 0 rgba(255,255,255,.09)!important;backdrop-filter:blur(24px) saturate(1.25)!important}.btn-accent,.nav-btn-accent{background:linear-gradient(135deg,#f9735b,#ff9b6a)!important}@media(max-width:640px){.hero-content h1{font-size:clamp(2rem,8.6vw,2.65rem)!important}.hero-showcase{display:flex!important}.preview-card{min-height:300px!important}.icon-badge,.skill-icon{width:32px!important;height:32px!important;min-width:32px!important}.icon-badge svg{width:22px!important;height:22px!important}.skill-item{grid-template-columns:38px 1fr!important}}`;

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <style>{EXTRA_CSS}</style>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/landing" element={<Navigate to="/" replace />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
