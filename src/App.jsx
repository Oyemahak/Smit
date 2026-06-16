import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const EXTRA_CSS = `.icon-badge,.skill-icon{width:56px!important;height:56px!important;border-radius:18px!important}.icon-badge svg{width:28px!important;height:28px!important}.hero-highlights .icon-badge{width:42px!important;height:42px!important}.hero-highlights .icon-badge svg{width:20px!important;height:20px!important}.icon-photoshop{background:#001e36!important;color:#31a8ff!important}.icon-illustrator{background:#330000!important;color:#ff9a00!important}.icon-figma{background:linear-gradient(135deg,#f24e1e,#a259ff 45%,#0acf83)!important}.icon-canva{background:linear-gradient(135deg,#00c4cc,#7d2ae8)!important}.icon-poster{background:#e0f2fe!important;color:#0369a1!important}.icon-brand,.icon-logo{background:#ede9fe!important;color:#6d28d9!important}.icon-social{background:#dcfce7!important;color:#15803d!important}.icon-campaign,.icon-ad{background:#fef3c7!important;color:#b45309!important}.icon-graphic,.icon-design{background:#f1f5f9!important;color:#334155!important}.hero-content h1{font-size:clamp(2.35rem,3.9vw,3.85rem)!important}`;

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
