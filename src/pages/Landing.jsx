import React from "react";
import { useNavigate } from "react-router-dom";
import Orb from "../components/Orb";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing-container">
      <div className="orb-container">
        <Orb />
      </div>

      <div className="overlay-content">
        <img src="/logo.png" alt="Smit Patel Logo" className="landing-logo" />
        <h1>Smit Patel</h1>
        <p>Web Designer • Visual Design • Modern UI</p>

        <button className="enter-button" onClick={() => navigate("/home")}>
          Enter Portfolio
        </button>
      </div>
    </main>
  );
}