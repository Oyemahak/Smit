import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

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
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))} />

      <Routes>
        <Route path="/" element={<Landing />} />
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
