"use client";
import React from "react";
import Image from "next/image";
import SubTittle from "@/components/sub-tiltle";
import {
  AiIcon,
  DataSecurityIcon,
  PlugIcon,
  ScalableIcon,
} from "@/components/icons/icons";
import PlatformCard from "@/components/platform-card";
import { motion } from "framer-motion";

type PlatformFeaturesProps = {
  imageSrc: string; // e.g. '/assets/Images/your-image.jpg'
  className?: string;
};

const platformFeatures = [
  {
    icon: <ScalableIcon />,
    title: "Scalable & Secure",
    description:
      "Our infrastructure handles high transaction volumes while safeguarding sensitive data with advanced encryption.",
  },

  {
    icon: <DataSecurityIcon />,
    title: "Data Integrity",
    description:
      "We maintain trust by ensuring the highest standards of data governance and integrity.",
  },

  {
    icon: <AiIcon />,
    title: "AI-Driven Insights",
    description:
      "Machine learning models tailored for African financial data, delivering smarter credit, risk, and fraud intelligence.",
  },

  {
    icon: <PlugIcon />,
    title: "Plug-and-Play APIs",
    description:
      "Simple RESTful endpoints, detailed documentation, and sandbox access so you can integrate in minutes.",
  },
];

export default function PlatformFeatures({
  imageSrc,
  className = "",
}: PlatformFeaturesProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.1,
        type: "tween",
        ease: [0.16, 1, 0.3, 1],
        duration: 0.9,
      },
    },
  } as const;

  const fadeItem = {
    hidden: { opacity: 0, y: -16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 28,
        duration: 0.8,
      },
    },
  } as const;

  const gridContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.12, delay: 0.6 },
    },
  } as const;

  const cardItem = {
    hidden: { opacity: 0, y: -24, scale: 1.04 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 26,
        duration: 0.9,
      },
    },
  } as const;

  return (
    <section className={`relative w-full  pt-8 md:py-4 ${className}`}>
      <Image
        src={imageSrc}
        alt="Solutions background"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 wrapper h-full">
        {/* Header Section */}
        <motion.div
          className="mt-[200px] md:mt-[300px] lg:mt-[400px] flex flex-col items-start justify-between"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={fadeItem}>
            <SubTittle
              label="Platform Features"
              textClass="text-white"
              borderClass="border-white"
              dotClass="bg-white"
            />
          </motion.div>
          <div className="mt-6 w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] w-full lg:w-[60%] leading-tight lg:leading-none font-space font-medium text-[#fff]"
              variants={fadeItem}
            >
              AI-driven platform designed to power the future
            </motion.h2>
            <motion.p
              className="text-[14px] sm:text-[15px] md:text-[16px] w-full lg:w-[30%] font-inter font-medium text-[#fff] leading-relaxed"
              variants={fadeItem}
            >
              Kredit Africa empowers financial institutions with reliable data
              while maintaining the highest ethical standards.
            </motion.p>
          </div>
        </motion.div>

        {/* Platform Features Grid */}
        <motion.div
          className="mt-[40px] py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={gridContainer}
        >
          {platformFeatures.map((item, idx) => (
            <motion.div key={idx} variants={cardItem}>
              <PlatformCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
