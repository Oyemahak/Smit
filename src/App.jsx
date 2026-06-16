import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const EXTRA_CSS = `.nav-shell{z-index:80!important}.nav-inner{background:rgba(22,22,24,.58)!important;box-shadow:0 18px 70px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,255,255,.12)!important;backdrop-filter:blur(28px) saturate(1.35)!important}.icon-badge,.skill-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:30px!important;height:30px!important;min-width:30px!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important;color:#f8fafc!important}.icon-badge svg{display:block!important;width:24px!important;height:24px!important;fill:currentColor!important;stroke:transparent!important}.hero-highlights .icon-badge{width:22px!important;height:22px!important;min-width:22px!important;color:#fff!important}.hero-highlights .icon-badge svg{display:none!important}.hero-highlights .icon-badge:before{display:inline-grid!important;place-items:center!important;width:22px!important;height:22px!important;border-radius:999px!important;font-size:13px!important;font-weight:900!important;line-height:1!important;box-shadow:0 0 22px rgba(56,189,248,.3)!important}.hero-highlights .icon-graphic:before{content:"✦";color:#38bdf8!important;background:rgba(56,189,248,.16)!important}.hero-highlights .icon-poster:before{content:"▣";color:#facc15!important;background:rgba(250,204,21,.16)!important}.hero-highlights .icon-brand:before{content:"◆";color:#a78bfa!important;background:rgba(167,139,250,.16)!important}.hero-highlights .icon-social:before{content:"↗";color:#4ade80!important;background:rgba(74,222,128,.16)!important}.hero-highlights .icon-campaign:before{content:"◉";color:#fb923c!important;background:rgba(251,146,60,.16)!important}.skill-item{grid-template-columns:38px 1fr!important;align-items:start!important}.icon-photoshop{color:#31a8ff!important}.icon-illustrator{color:#ff9a00!important}.icon-figma{color:#a259ff!important}.icon-canva{color:#00c4cc!important}.icon-poster{color:#38bdf8!important}.icon-brand,.icon-logo{color:#a78bfa!important}.icon-social{color:#4ade80!important}.icon-campaign,.icon-ad{color:#fbbf24!important}.icon-graphic,.icon-design{color:#e5e7eb!important}.hero-section:after{content:"";position:absolute;inset:4% -10% 4% auto;width:70%;z-index:-2;background:radial-gradient(circle at 58% 22%,rgba(56,189,248,.18),transparent 30%),radial-gradient(circle at 75% 72%,rgba(250,204,21,.14),transparent 28%),radial-gradient(circle at 18% 60%,rgba(251,146,60,.12),transparent 32%);filter:blur(24px);pointer-events:none}.hero-content h1{font-size:clamp(2.3rem,3.65vw,3.7rem)!important}.hero-highlights span{gap:9px!important;padding:9px 15px!important;background:rgba(255,255,255,.08)!important;border-color:rgba(255,255,255,.16)!important;backdrop-filter:blur(18px)!important}.hero-showcase{overflow-x:auto!important;scroll-snap-type:x mandatory!important;display:flex!important;gap:14px!important;padding:4px 2px 18px!important}.preview-card{flex:0 0 min(380px,78vw)!important;scroll-snap-align:start!important;aspect-ratio:4/5!important;min-height:360px!important}.preview-card-1{flex-basis:min(520px,86vw)!important;aspect-ratio:16/10!important}.skill-group-card,.service-card,.process-card,.glass-panel{background:rgba(255,255,255,.075)!important;box-shadow:0 18px 60px rgba(0,0,0,.18),inset 0 1px 0 rgba(255,255,255,.09)!important;backdrop-filter:blur(24px) saturate(1.25)!important}.btn-accent,.nav-btn-accent{background:linear-gradient(135deg,#f9735b,#ff9b6a)!important}.process-section{position:relative!important;padding:34px 0!important}.process-section:before{content:"";position:absolute;inset:-40px -8% auto;height:360px;z-index:-1;background:radial-gradient(circle at 18% 28%,rgba(255,206,84,.22),transparent 34%),radial-gradient(circle at 82% 6%,rgba(56,189,248,.18),transparent 32%),radial-gradient(circle at 55% 70%,rgba(251,146,60,.13),transparent 35%);filter:blur(18px)}.process-section .section-heading span{color:#ffd166!important}.process-card{background:linear-gradient(145deg,rgba(255,210,99,.12),rgba(56,189,248,.07),rgba(255,255,255,.06))!important;border-color:rgba(255,211,105,.18)!important}.process-card .icon-badge{width:42px!important;height:42px!important;border-radius:14px!important;background:rgba(255,211,105,.13)!important;color:#ffd166!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.16)!important}.process-card .icon-badge svg{width:22px!important;height:22px!important;stroke:transparent!important}@media(max-width:640px){.hero-content h1{font-size:clamp(2rem,8.6vw,2.65rem)!important}.hero-showcase{display:flex!important}.preview-card{min-height:300px!important}.icon-badge,.skill-icon{width:28px!important;height:28px!important;min-width:28px!important}.icon-badge svg{width:22px!important;height:22px!important}.skill-item{grid-template-columns:36px 1fr!important}.work-grid{display:flex!important;overflow-x:auto!important;gap:10px!important;scroll-snap-type:x mandatory!important;padding:4px 0 18px!important}.work-card,.work-card-wide,.work-card-tall{flex:0 0 72vw!important;grid-column:auto!important;min-height:0!important;aspect-ratio:16/10!important;scroll-snap-align:start!important}.work-card:nth-child(1),.work-card:nth-child(6n){flex-basis:82vw!important;aspect-ratio:16/10!important}.work-card img{object-fit:cover!important}.work-card-copy{padding:11px!important}.work-card-copy h3{font-size:.95rem!important}.work-card-copy p{display:none!important}.process-grid{display:flex!important;overflow-x:auto!important;gap:12px!important;scroll-snap-type:x mandatory!important;padding-bottom:18px!important}.process-card{flex:0 0 76vw!important;scroll-snap-align:start!important}}`;

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
