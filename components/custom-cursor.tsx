"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 450, mass: 0.45 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    // Apply global cursor hide styles
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      a, button, select, input, textarea, [role="button"], label {
        cursor: none !important;
      }
      body, html {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleHoverStart = () => setIsHoveringLink(true);
    const handleHoverEnd = () => setIsHoveringLink(false);

    const updateHoverListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button'], label, .hover-target"
      );
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleHoverStart);
        target.removeEventListener("mouseleave", handleHoverEnd);
        target.addEventListener("mouseenter", handleHoverStart);
        target.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    updateHoverListeners();
    const interval = setInterval(updateHoverListeners, 1000);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
      clearInterval(interval);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-violet-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHoveringLink ? 1.6 : 1,
          backgroundColor: isHoveringLink ? "rgba(139, 92, 246, 0.25)" : "transparent",
          borderColor: isHoveringLink ? "rgba(139, 92, 246, 0.8)" : "rgb(139, 92, 246)",
        }}
      />
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-violet-400 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
