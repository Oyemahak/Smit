import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "radial-gradient(800px 600px at 50% 30%, rgba(184,74,74,0.18), transparent 55%), #050505",
      color: "white",
      padding: "24px"
    }}>
      <div style={{ textAlign: "center", maxWidth: 760 }}>
        <h1 style={{ fontFamily: "Cinzel, serif", letterSpacing: "1px", fontSize: "54px", margin: 0 }}>
          SMIT PATEL
        </h1>
        <p style={{ opacity: 0.78, fontSize: "18px", lineHeight: 1.7, marginTop: 14 }}>
          Designer portfolio — posters, campaigns, brand identity, and social visuals.
        </p>
        <Link
          to="/home"
          style={{
            display: "inline-flex",
            marginTop: 22,
            height: 54,
            padding: "0 28px",
            borderRadius: 16,
            background: "rgba(184,74,74,0.95)",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800
          }}
        >
          Enter Portfolio
        </Link>
      </div>
    </div>
  );
}