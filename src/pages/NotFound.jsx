import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="not-found-wrapper">
        <h1>404</h1>
        <p className="project-description">
          This page doesn’t exist. Let’s take you back home.
        </p>

        <div className="button-group">
          <Link to="/home" className="button-glass">Go Home</Link>
          <Link to="/about" className="button-glass">About</Link>
        </div>
      </section>
    </main>
  );
}