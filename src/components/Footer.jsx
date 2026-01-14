import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <p>
          Let’s connect on{" "}
          <a href="https://www.instagram.com/smit8._/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{" "}
          or{" "}
          <a href="mailto:smitpatel@example.com">Email</a>.
        </p>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Smit Patel. All rights reserved.
      </p>
    </footer>
  );
}