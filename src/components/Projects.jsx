// Projects.jsx — Toggle between UX and Dev Projects 🎯
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image imports for consistency across environments
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

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ux");
  const navigate = useNavigate();

  // Switch between UX and Dev tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // UX Projects List
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
      route: "/citi",
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
      desc: "User Research, Wireframing and Prototyping, Usability Testing",
      link: "https://www.figma.com/design/ElcB4T9sPcy7yVv1fZLoex/Styleshphere---Interaction-Design?node-id=0-1&t=kBth2aAOiCUj6fNe-1",
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
      link: "https://www.figma.com/proto/WVLZIhxFNq74AdLDYFXozu/Humber-E-Sports---Group-11?page-id=429%3A1772&node-id=651-25648&node-type=FRAME&viewport=2202%2C741%2C0.06&t=AUrt3LUCrploccBq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=651%3A25648",
    },
  ];

  // Web Dev Projects List
  const devProjects = [
    {
      img: project7,
      title: "Qronster",
      desc: "QR Code Generator with Branding and Download",
      route: "/qronster",
    },
    {
      img: project8,
      title: "SMS",
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
      img: project12,
      title: "Vibe Coding",
      desc: "Built in 2 hours with AI: Match Emoji Game",
      route: "/vibecoding",
    },
  ];

  // Decide which set of projects to show
  const projectsToShow = activeTab === "ux" ? uxProjects : devProjects;

  return (
    <section id="projects">
      {/* Header & Tabs */}
      <div className="projects-header-centered">
        <h2 id="projects-title">
          {activeTab === "ux"
            ? "Featured UX Projects"
            : "Featured Web Dev Projects"}
        </h2>

        <div className="project-toggle">
          <button
            className={`tab-toggle ${activeTab === "ux" ? "active" : ""}`}
            onClick={() => handleTabChange("ux")}
          >
            UX Projects
          </button>
          <button
            className={`tab-toggle ${activeTab === "dev" ? "active" : ""}`}
            onClick={() => handleTabChange("dev")}
          >
            Web Dev Projects
          </button>
        </div>
      </div>

      {/* 🧊 Project Cards */}
      <div className="projects-grid">
        {projectsToShow.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-content">
              <img
                src={project.img}
                alt={`${project.title} project screenshot`}
              />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>

            {/* View Project Button */}
            {project.route ? (
              <button
                className="view-project-btn"
                onClick={() => navigate(project.route)}
              >
                View Project
              </button>
            ) : project.link ? (
              <a
                className="view-project-btn"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;