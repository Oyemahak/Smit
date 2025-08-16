// SchoolSystem.jsx — ASP.NET Core CMS
import React from 'react';
import '../../styles/webProjects.css';
import Footer from '../../components/Footer';

const SchoolSystem = () => {
  return (
    <main className="case-study-page">
      <section className="case-study-intro">
        <h1>🏫 School Enrollment System – Full Stack CMS</h1>
        <p className="project-type">Academic Project – Back-End Web Development 2 (HTTP-5226)</p>
        <p className="project-description">
          A custom-built CMS for managing students, courses, and enrollments, showcasing a full-stack approach using ASP.NET Core MVC, Entity Framework, and secure user authentication. Developed as a major course assignment to demonstrate production-grade back-end skills and data handling.
        </p>
      </section>

      <section className="case-study-section">
        <h3>Key Features</h3>
        <ul className="project-list">
          <li>Code-first database with Entity Framework Core</li>
          <li>Full CRUD for Students, Courses & Enrollments</li>
          <li>ASP.NET Identity-based authentication</li>
          <li>RESTful APIs with Swagger documentation</li>
          <li>MVC architecture and Bootstrap-based UI</li>
          <li>DTOs for secure and efficient API responses</li>
        </ul>
        <h3>Links</h3>
        <a
          className="button-glass"
          href="https://github.com/Oyemahak/SchoolEnrollmentSystem-ASP.NET"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 View Full Source Code
        </a>
        <a
          className="button-glass"
          href="https://padlet.com/christinebittle/passion-project-async-presentations-jn16e3wljfv2nju7/wish/LNV1Q7dpqxwPZmq3"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Live Demo
        </a>
      </section>

      {/* Optional Video Placeholder */}
      {/* <section className="case-study-section">
        <h3>📹 Demo Walkthrough</h3>
        <p>Watch the 5-minute demo (Coming soon)</p>
      </section> */}

      {/* ↩️ Navigation */}
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

export default SchoolSystem;