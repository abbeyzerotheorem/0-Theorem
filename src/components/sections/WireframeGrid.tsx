import React, { useEffect, useState } from "react";

// Grid size and spacing
const ROWS = 10;
const COLS = 16;
const SPACING = 32;
const GRID_WIDTH = COLS * SPACING;
const GRID_HEIGHT = ROWS * SPACING;

export default function WireframeGrid({ tilt }: { tilt: { x: number; y: number } }) {
  const [visible, setVisible] = useState(false);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    setVisible(true);
    // Parallax float animation
    let frame: number;
    let t = 0;
    function animate() {
      setParallax(Math.sin(t) * 10); // 10px up/down
      t += 0.02;
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // SVG grid lines
  const lines = [];
  for (let i = 0; i <= ROWS; i++) {
    lines.push(
      <line
        key={`h-${i}`}
        x1={0}
        y1={i * SPACING}
        x2={COLS * SPACING}
        y2={i * SPACING}
        stroke="#bbb"
        strokeWidth={1}
        opacity={0.5}
      />
    );
  }
  for (let j = 0; j <= COLS; j++) {
    lines.push(
      <line
        key={`v-${j}`}
        x1={j * SPACING}
        y1={0}
        x2={j * SPACING}
        y2={ROWS * SPACING}
        stroke="#bbb"
        strokeWidth={1}
        opacity={0.5}
      />
    );
  }

  return (
    <div
      style={{
        perspective: "800px",
        width: "100%",
        height: "100%",
        maxWidth: "clamp(320px, 90vw, 512px)",
        maxHeight: "clamp(200px, 50vw, 340px)",
        margin: "0 auto",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transform: `translateY(${parallax}px)`,
        transition: "opacity 1.2s cubic-bezier(.4,2,.6,1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="absolute inset-0 flex items-center justify-center select-none z-0"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${GRID_WIDTH} ${GRID_HEIGHT}`}
        style={{
          transform: `rotateX(${-tilt.y * 12}deg) rotateY(${tilt.x * 12}deg)`,
          transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
          display: "block",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {lines}
      </svg>
    </div>
  );
}
