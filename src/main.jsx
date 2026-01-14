import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./styles/global.css";
import "./styles/theme-switcher.css";
import "./styles/landing.css";
import "./styles/slider.css";
import "./styles/trash.css";

// ✅ Run minimal DOM helpers (mobile menu + hash scroll + prevent theme flash)
import "./js/main.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);