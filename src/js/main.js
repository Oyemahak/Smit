// src/js/main.js — Smit Portfolio DOM Helpers 🎩
// Minimal + safe for React SPA.
// ✅ Sets initial theme class (light/dark) to prevent flash
// ✅ Mobile menu open/close
// ✅ Smooth scroll to #contact / #work anchors
// ✅ Auto-close menu on outside click + link click

(function () {
  let bound = false;

  function applySavedTheme() {
    // Navbar.jsx uses localStorage key: "theme"
    const saved = localStorage.getItem("theme") || "dark";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${saved}-theme`);
  }

  function smoothScrollToHash(hash) {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // Small delay helps when route changed and React is still rendering
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }

  function bindMobileMenu() {
    const menuBtn = document.querySelector(".mobile-menu-icon");
    const menu = document.querySelector(".desktop-menu");

    if (!menuBtn || !menu) return;

    const icon = menuBtn.querySelector("i");

    const openMenu = () => {
      menu.classList.add("active");
      menuBtn.setAttribute("aria-expanded", "true");
      if (icon) icon.className = "fas fa-times";
    };

    const closeMenu = () => {
      menu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      if (icon) icon.className = "fas fa-bars";
    };

    const toggleMenu = (e) => {
      e.preventDefault();
      const isOpen = menu.classList.toggle("active");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (icon) icon.className = isOpen ? "fas fa-times" : "fas fa-bars";
    };

    // Avoid double-binding if React re-renders
    if (!menuBtn.dataset.bound) {
      menuBtn.addEventListener("click", toggleMenu);
      menuBtn.dataset.bound = "true";
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Toggle navigation menu");
    }

    // Close menu on link click
    if (!menu.dataset.bound) {
      menu.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.tagName === "A") closeMenu();
      });
      menu.dataset.bound = "true";
    }

    // Close menu on outside click
    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("active")) return;
      const clickedInside = menu.contains(e.target) || menuBtn.contains(e.target);
      if (!clickedInside) closeMenu();
    });

    // Close menu on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Optional: if switching from desktop -> mobile, start closed
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });

    // Helper for hash links within SPA
    window.addEventListener("hashchange", () => smoothScrollToHash(window.location.hash));

    // If user loads with hash
    smoothScrollToHash(window.location.hash);
  }

  function init() {
    applySavedTheme();
    bindMobileMenu();
  }

  // Run once on load
  window.addEventListener("DOMContentLoaded", () => {
    init();

    // Also re-run once after React mounts (safe)
    setTimeout(() => {
      init();
    }, 300);
  });

  // Observe DOM changes (React SPA safety)
  if (!bound) {
    bound = true;
    const observer = new MutationObserver(() => {
      // If header/menu re-rendered, re-bind
      bindMobileMenu();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();