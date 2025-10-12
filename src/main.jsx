// main.jsx — The Launchpad 🚀
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// 🧼 Global styles first!
import './styles/global.css';
import './styles/theme-switcher.css';
import './styles/projects.css';
import './styles/webProjects.css';
import './styles/trash.css';
import './styles/landing.css';
import './styles/slider.css';

// 🌍 GitHub Pages base path
const isGitHubPages = import.meta.env.BASE_URL !== '/';
const baseName = isGitHubPages ? '/mahak' : '';

// 🌟 Render the app!
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={baseName}>
    <App />
  </BrowserRouter>
);