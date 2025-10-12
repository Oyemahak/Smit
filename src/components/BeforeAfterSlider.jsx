import React, { useRef, useEffect, useState } from "react";
import "../styles/slider.css";
import beforeImg from "../assets/images/before.png";
import afterImg from "../assets/images/after.png";

const EnhancedBeforeAfterSlider = () => {
  const containerRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);

  const [percent, setPercent] = useState(50); // control label fade logic

  useEffect(() => {
    const container = containerRef.current;
    const after = afterRef.current;
    const handle = handleRef.current;

    const updatePosition = (x) => {
      const rect = container.getBoundingClientRect();
      const offsetX = Math.max(0, Math.min(x - rect.left, rect.width));
      const newPercent = (offsetX / rect.width) * 100;
      setPercent(newPercent);
      after.style.clipPath = `inset(0 ${100 - newPercent}% 0 0)`;
      handle.style.left = `${newPercent}%`;
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

    // ✅ Center slider after both images load
    const images = container.querySelectorAll("img");
    let loadedCount = 0;

    const tryInit = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        const centerX = container.offsetWidth / 2;
        updatePosition(container.getBoundingClientRect().left + centerX);
      }
    };

    images.forEach((img) => {
      if (img.complete) tryInit();
      else img.onload = tryInit;
    });

    return () => {
      handle.removeEventListener("mousedown", startDrag);
      handle.removeEventListener("touchstart", startDrag);
    };
  }, []);

  // 🧠 Label fade logic (fixed version)
  const afterOpacity = percent < 80 ? 1 : 1 - (percent - 80) / 20; // fades when going right
  const beforeOpacity = percent > 20 ? 1 : percent / 20; // fades when going left

  return (
    <div className="compare-container" ref={containerRef}>
      <img src={beforeImg} alt="Before" className="before-img" />
      <img src={afterImg} alt="After" className="after-img" ref={afterRef} />

      <div className="slider-handle" ref={handleRef}>
        <span className="handle-dot"></span>
      </div>

      {/* 🧩 Corrected label logic */}
      {beforeOpacity > 0 && (
        <div className="label before-label" style={{ opacity: beforeOpacity }}>
          Before
        </div>
      )}
      {afterOpacity > 0 && (
        <div className="label after-label" style={{ opacity: afterOpacity }}>
          After
        </div>
      )}
    </div>
  );
};

export default EnhancedBeforeAfterSlider;