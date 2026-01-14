import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="section-wrap">
        <div className="section-head">
          <div className="section-title-row">
            <span className="section-star">✶</span>
            <h2 className="section-title">404</h2>
            <span className="section-star">✶</span>
          </div>
          <p className="section-subtitle">This page doesn’t exist.</p>
        </div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link className="btn btn-accent" to="/home">
            Back to Home
          </Link>
        </div>
      </section>

      <div className="separator" />
    </main>
  );
}