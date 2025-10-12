// Projects.jsx — Final Toggle Between UX and Dev Projects 🎯
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image imports
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";
import project9 from "../assets/images/project9.png";
import project10 from "../assets/images/project10.png";
import project11 from "../assets/images/project11.png";
import project12 from "../assets/images/project12.png";
import beforeAfterPreview from "../assets/images/before.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ux");
  const navigate = useNavigate();

  // UX Projects
  const uxProjects = [
    {
      img: project1,
      title: "Byblos",
      desc: "User Research, Wireframing, Usability Testing",
      route: "/byblos",
    },
    {
      img: project2,
      title: "Citi Bank 🔒",
      desc: "Front-End Development, Heuristic Evaluation, Prototyping",
      route: "/citibank",
    },
    {
      img: project3,
      title: "Amazon Prime",
      desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping",
      route: "/amazonprime",
    },
    {
      img: project4,
      title: "Style Sphere",
      desc: "User Research, Wireframing, Usability Testing",
      link: "https://www.figma.com/design/ElcB4T9sPcy7yVv1fZLoex/Styleshphere---Interaction-Design",
    },
    {
      img: project5,
      title: "Accenture 🔒",
      desc: "Front-End Development, Heuristic Evaluation, Prototyping",
      route: "/accenture",
    },
    {
      img: project6,
      title: "Humber Esports",
      desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping",
      link: "https://www.figma.com/proto/WVLZIhxFNq74AdLDYFXozu/Humber-E-Sports---Group-11",
    },
  ];

  // Web Dev Projects
  const devProjects = [
    {
      img: project7,
      title: "Qronster",
      desc: "QR Code Generator with Branding and Download",
      route: "/qronster",
    },
    {
      img: project8,
      title: "School Management System",
      desc: "Admin Dashboard using ASP.NET Core MVC",
      route: "/schoolsystem",
    },
    {
      img: project9,
      title: "OyeClicker Extension",
      desc: "Chrome SEO CTR Simulator using JavaScript",
      route: "/oyeclicker",
    },
    {
      img: project10,
      title: "Dazzling Smile",
      desc: "Client Website Built with WordPress & Elementor",
      route: "/dazzlingsmile",
    },
    {
      img: project11,
      title: "Admin CMS Panel",
      desc: "Express + MongoDB CMS to Manage Portfolio Data",
      route: "/admincms",
    },
    {
      img: beforeAfterPreview,
      title: "Before/After Poster Redesign",
      desc: "Interactive Amazon Poster Comparison — Drag to Reveal Design Transformation",
      route: "/project-demo",
    },
  ];

  const projectsToShow = activeTab === "ux" ? uxProjects : devProjects;

  return (
    <section id="projects">
      <div className="projects-header-centered">
        <h2 id="projects-title">
          {activeTab === "ux"
            ? "Featured UX Projects"
            : "Featured Web Dev Projects"}
        </h2>

        <div className="project-toggle">
          <button
            className={`tab-toggle ${activeTab === "ux" ? "active" : ""}`}
            onClick={() => setActiveTab("ux")}
          >
            UX Projects
          </button>
          <button
            className={`tab-toggle ${activeTab === "dev" ? "active" : ""}`}
            onClick={() => setActiveTab("dev")}
          >
            Web Dev Projects
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="projects-grid">
        {projectsToShow.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-content">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>

            {project.route ? (
              <button
                className="view-project-btn"
                onClick={() => navigate(project.route)}
              >
                View Project
              </button>
            ) : (
              <a
                className="view-project-btn"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;