"use client";
import React, { useState, useEffect, useRef } from "react";
import SubTittle from "@/components/sub-tiltle";
import BaseButton from "@/components/BaseButton";
import {
  AttacksIcon,
  ClientsIcon,
  PoweredIcon,
} from "@/components/icons/icons";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import AnimatedCursor from "@/components/AnimatedCursor";
import ScrollReveal, { ScrollProgress } from "@/components/ScrollReveal";
import { FloatingMorphingShapes } from "@/components/MorphingShapes";
import "./index.css";

// Modern animation variants with advanced effects
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.8,
    },
  },
};

// 3D card flip effect
const cardFlipVariants = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    scale: 0.8,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
  hover: {
    rotateY: 5,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

// Advanced text reveal with morphing
const textRevealVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
    filter: "blur(10px)",
    scale: 0.8,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      mass: 0.8,
    },
  },
};

// Word-by-word animation with 3D effects
const wordVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -45,
    scale: 0.8,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    rotateY: 10,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

// Floating elements with physics
const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Advanced button hover with ripple effect
const buttonHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -5,
    rotateX: 5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 600, damping: 15 },
  },
};

// Stats with 3D hover effects
const statItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
    rotateY: -15,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
  hover: {
    scale: 1.1,
    y: -10,
    rotateY: 5,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

// Modern interactive components
const MagneticButton = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.1;
      const deltaY = (e.clientY - centerY) * 0.1;
      setPosition({ x: deltaX, y: deltaY });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Particle system component
const ParticleSystem = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; vx: number; vy: number }>
  >([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const particleData = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(particleData);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          style={{ x: particle.x, y: particle.y }}
          animate={{
            x: [particle.x, particle.x + particle.vx * 100, particle.x],
            y: [particle.y, particle.y + particle.vy * 100, particle.y],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Ripple effect component
const RippleButton = ({
  children,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: unknown;
}) => {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <div className="relative overflow-hidden" onClick={handleClick} {...props}>
      {children}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white/20 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

// Parallax background with scroll effects
const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      style={{ y, scale, opacity }}
    >
      <Image
        src="/assets/Images/bg-vector.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
};

const features = [
  {
    icon: <ClientsIcon />,
    amount: "1,000+",
    caption: "clients",
  },
  {
    icon: <PoweredIcon />,
    amount: "1M+",
    caption: "API calls powered by us",
  },
  {
    icon: <AttacksIcon />,
    amount: "50K+",
    caption: "attacks prevented",
  },
];

export default function HeroSection() {
  const titleWords = "Transform data into next-gen financial solutions".split(
    " "
  );
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Enhanced scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatedCursor>
      <div className="relative w-full -mt-20 pt-20 overflow-hidden">
        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Enhanced parallax background */}
        <ParallaxBackground />

        {/* Particle system */}
        <ParticleSystem />

        {/* Floating morphing shapes */}
        <FloatingMorphingShapes />

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-linear-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-linear-to-r from-green-400/20 to-blue-400/20 rounded-full blur-md"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        <div className="wrapper flex justify-center items-center min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] py-8 sm:py-12 lg:py-16">
          <motion.div
            ref={containerRef}
            className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-2 sm:gap-6 lg:gap-3"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerVariants}
            style={{ y, opacity }}
          >
            {/* Enhanced subtitle with 3D morphing */}
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div variants={cardFlipVariants}>
                <SubTittle label="Introducing BizCredit" />
              </motion.div>
            </ScrollReveal>

            {/* Enhanced title with word-by-word 3D animation */}
            <ScrollReveal direction="up" delay={0.4}>
              <motion.h1
                className="w-[95%] max-w-5xl mt-2 mb-4 text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-[1.1] sm:w-[75%] sm:leading-[83px] text-black font-medium text-center font-space"
                variants={textRevealVariants}
              >
                {titleWords.map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    className="inline-block mr-[0.35ch] cursor-pointer"
                    variants={wordVariants}
                    whileHover="hover"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </ScrollReveal>

            {/* Enhanced description with blur reveal */}
            <ScrollReveal direction="up" delay={0.6}>
              <motion.p
                className="text-sm sm:text-base lg:text-[18px] text-[#586667] font-medium text-center font-inter max-w-3xl"
                variants={textRevealVariants}
              >
                APIs and AI-powered tools for credit intelligence, fraud
                prevention, and risk assessment.
              </motion.p>
            </ScrollReveal>

            {/* Enhanced buttons with magnetic and ripple effects */}
            <ScrollReveal direction="up" delay={0.8}>
              <motion.div
                className="mt-0 sm:mt-2 flex flex-row sm:flex-row items-center gap-3 sm:gap-4"
                variants={textRevealVariants}
              >
                <Link href="/docs">
                  <MagneticButton>
                    <RippleButton>
                      <motion.div
                        variants={buttonHoverVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="relative overflow-hidden rounded-lg"
                      >
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        />
                        <BaseButton
                          label="View Docs"
                          backgroundColor="#9F9F9F3D"
                          textColor="#000"
                        />
                      </motion.div>
                    </RippleButton>
                  </MagneticButton>
                </Link>
                <Link href="/book-session">
                  <MagneticButton>
                    <RippleButton>
                      <motion.div
                        variants={buttonHoverVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="relative overflow-hidden rounded-lg"
                      >
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-orange-500/20 to-red-500/20"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        />
                        <BaseButton
                          label="Book Call"
                          backgroundColor="#000"
                          textColor="#fff"
                        />
                      </motion.div>
                    </RippleButton>
                  </MagneticButton>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Enhanced stats with 3D hover effects */}
            <ScrollReveal direction="up" delay={1.0}>
              <motion.div
                className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-4xl no_scroll overflow-x-auto sm:overflow-visible -mx-4 px-4 snap-x snap-mandatory"
                variants={containerVariants}
              >
                <div className="flex flex-row items-center gap-4 sm:gap-4 lg:gap-8 text-black whitespace-nowrap sm:whitespace-normal sm:justify-between">
                  {features.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0 snap-start cursor-pointer"
                      variants={statItemVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.div
                        className="shrink-0"
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                        <motion.span
                          className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-none font-space font-medium text-black"
                          whileHover={{
                            scale: 1.1,
                            color: "#3B82F6",
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            },
                          }}
                        >
                          {item.amount}
                        </motion.span>
                        <span className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-inter text-[#586667] capitalize">
                          {item.caption}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </AnimatedCursor>
  );
}
