import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  // Hide navbar/footer on landing if you want the landing to feel like an intro screen
  const isLanding = location.pathname === "/" || location.pathname === "/landing";

  return (
    <>
      <ScrollToTop />
      {!isLanding ? <Navbar /> : null}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Optional: redirect old hash routes */}
        <Route path="/home#projects" element={<Navigate to="/home" replace />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isLanding ? <Footer /> : null}
    </>
  );
}