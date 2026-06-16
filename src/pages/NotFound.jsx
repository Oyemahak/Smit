import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="not-found section">
        <div className="glass-panel not-found-panel" data-reveal>
          <span className="eyebrow">404</span>
          <h1>Page not found.</h1>
          <p>This page moved, disappeared, or was never part of the portfolio.</p>
          <Link className="btn btn-accent" to="/">
            Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
