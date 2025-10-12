// EnhancedBeforeAfterSlider.jsx — Magical Motion Reveal ✨
import React, { useRef, useEffect } from "react";
import "../styles/slider.css";
import beforeImg from "../assets/images/before.png";
import afterImg from "../assets/images/after.png";

const EnhancedBeforeAfterSlider = () => {
  const containerRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const after = afterRef.current;
    const handle = handleRef.current;

    const updatePosition = (x) => {
      const rect = container.getBoundingClientRect();
      const offsetX = Math.max(0, Math.min(x - rect.left, rect.width));
      const percent = (offsetX / rect.width) * 100;
      after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      handle.style.left = `${percent}%`;
      handle.style.transition = "left 0.15s ease-out";
    };

    const startDrag = (e) => {
      e.preventDefault();
      const move = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        updatePosition(clientX);
      };
      const stop = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", stop);
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchend", stop);
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", stop);
      window.addEventListener("touchmove", move);
      window.addEventListener("touchend", stop);
    };

    handle.addEventListener("mousedown", startDrag);
    handle.addEventListener("touchstart", startDrag);

    // Initial center
    updatePosition(container.offsetWidth / 2);

    return () => {
      handle.removeEventListener("mousedown", startDrag);
      handle.removeEventListener("touchstart", startDrag);
    };
  }, []);

  return (
    <div className="compare-container fancy-blur" ref={containerRef}>
      <img src={beforeImg} alt="Before" className="before-img" />
      <img src={afterImg} alt="After" className="after-img" ref={afterRef} />

      <div className="slider-handle fancy-shadow" ref={handleRef}>
        <span className="handle-dot fancy-glow"></span>
      </div>

      <div className="label before-label">Before</div>
      <div className="label after-label">After</div>
    </div>
  );
};

export default EnhancedBeforeAfterSlider;