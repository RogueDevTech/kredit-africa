"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CursorTrailProps {
  children: React.ReactNode;
}

const AnimatedCursor: React.FC<CursorTrailProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add to trail
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail((prev) => [...prev.slice(-8), newPoint]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {children}

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
      </motion.div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{
            x: point.x - 2,
            y: point.y - 2,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.05,
          }}
        >
          <div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
      ))}

      {/* Magnetic field effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30"
        style={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        animate={{
          scale: isHovering ? 1.2 : 0.8,
          opacity: isHovering ? 0.1 : 0.05,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="w-24 h-24 border border-white/20 rounded-full" />
      </motion.div>
    </>
  );
};

export default AnimatedCursor;
