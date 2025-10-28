import { useState, useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-5l6yrowz41";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect touch devices
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobile(hasTouch);
    if (hasTouch) return; // Stop setting up listeners on mobile

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick !== null ||
        target.style.cursor === "pointer" ||
        target.closest("button") !== null ||
        target.closest("a") !== null;
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Don’t render anything on mobile
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10001]"
      style={{
        x: position.x,
        y: position.y,
        width: "32px",
        height: "50px",
        rotate: -30,
      }}
      animate={{
        scale: isHovering ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 326 510"
      >
        <g>
          <path
            d={svgPaths.p3dfac500}
            fill={isHovering ? "#DB4B13" : "white"}
            style={{ transition: "fill 0.2s ease" }}
          />
          <path
            d={svgPaths.p36ff8800}
            fill="#DB4B13"
            style={{ transition: "fill 0.2s ease" }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
