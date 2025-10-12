// ProjectPage.jsx — Case Study Page Featuring Before/After Comparison 🧠

import React from "react";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import Footer from "../../components/Footer";
import "../../styles/webProjects.css"; // for centering structure

const ProjectPage = () => {
  return (
    <main className="case-study-page">
      {/* Header */}
      <section className="case-study-intro">
        <h1>Amazon Product Poster Redesign</h1>
        <p className="project-type">E-Commerce · UI Enhancement</p>
      </section>

      {/* Before/After Component */}
      <BeforeAfterSlider />

      {/* Case Study Outro */}
      <section className="case-study-section">
        <h3>Project Highlights</h3>
        <ul className="project-list">
          <li>Improved readability with typography adjustments</li>
          <li>Optimized white balance and color vibrance</li>
          <li>Layered visual hierarchy for product focus</li>
          <li>Responsive design applied for mobile users</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="case-study-nav">
        <a href="/home" className="cs-button outline back-btn">
          <i className="fas fa-arrow-left"></i> Back to Home
        </a>
        <a href="/oyeclicker" className="cs-button next-btn">
          Next Project <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default ProjectPage;