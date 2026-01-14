import React from "react";

export default function Footer() {
  return (
    <footer>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Smit Patel. All rights reserved.
      </p>
    </footer>
  );
}