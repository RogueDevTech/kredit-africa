"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MorphingShapeProps {
  width?: number;
  height?: number;
  className?: string;
  colors?: string[];
  duration?: number;
}

const MorphingShapes: React.FC<MorphingShapeProps> = ({
  width = 200,
  height = 200,
  className = "",
  colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"],
  duration = 8,
}) => {
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [colors.length, duration]);

  const blobVariants = {
    animate: {
      d: [
        "M40,40 Q60,20 80,40 T120,40 T160,40 T200,40 T240,40 Q260,20 280,40 T320,40 T360,40 T400,40 Q420,20 440,40 T480,40 T520,40 T560,40 Q580,20 600,40 T640,40 T680,40 T720,40 Q740,20 760,40 T800,40",
        "M40,40 Q60,60 80,40 T120,40 T160,40 T200,40 T240,40 Q260,60 280,40 T320,40 T360,40 T400,40 Q420,60 440,40 T480,40 T520,40 T560,40 Q580,60 600,40 T640,40 T680,40 T720,40 Q740,60 760,40 T800,40",
        "M40,40 Q60,20 80,40 T120,40 T160,40 T200,40 T240,40 Q260,20 280,40 T320,40 T360,40 T400,40 Q420,20 440,40 T480,40 T520,40 T560,40 Q580,20 600,40 T640,40 T680,40 T720,40 Q740,20 760,40 T800,40",
      ],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 80"
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M40,40 Q60,20 80,40 T120,40 T160,40 T200,40 T240,40 Q260,20 280,40 T320,40 T360,40 T400,40 Q420,20 440,40 T480,40 T520,40 T560,40 Q580,20 600,40 T640,40 T680,40 T720,40 Q740,20 760,40 T800,40"
          fill={colors[currentColor]}
          variants={blobVariants}
          animate="animate"
        />
      </motion.svg>
    </div>
  );
};

// Morphing icon component
interface MorphingIconProps {
  paths: string[];
  size?: number;
  color?: string;
  duration?: number;
  className?: string;
}

export const MorphingIcon: React.FC<MorphingIconProps> = ({
  paths,
  size = 24,
  color = "#000",
  duration = 2,
  className = "",
}) => {
  const [currentPath, setCurrentPath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPath((prev) => (prev + 1) % paths.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [paths.length, duration]);

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.path
        d={paths[currentPath]}
        fill={color}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
};

// Floating morphing shapes
export const FloatingMorphingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <MorphingShapes
            width={60 + i * 20}
            height={60 + i * 20}
            colors={["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"]}
            duration={8 + i}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MorphingShapes;
