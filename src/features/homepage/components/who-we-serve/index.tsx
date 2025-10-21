"use client";
import React from "react";
import Image from "next/image";
import SubTittle from "@/components/sub-tiltle";
import Card from "@/components/card";
import NewCard from "@/components/new-card";
import { motion } from "framer-motion";

// type WhoWeServeProps = {
//   imageSrc: string; // e.g. '/assets/Images/your-image.jpg'
//   className?: string;
// };

const solutions = [
  {
    imageSrc: "/assets/Images/Block 1 (1).webp",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },

  {
    imageSrc: "/assets/Images/Block 2.svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },

  {
    imageSrc: "/assets/Images/Block 3.svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },

  {
    imageSrc: "/assets/Images/Block 1 (2).svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },
  {
    imageSrc: "/assets/Images/Block 2 (1).svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },
];

export default function WhoWeServe() {
  return (
    <section
      className={` border border-[transparent] relative w-full min-h-screen py-8 sm:py-12 lg:py-16`}
    >
      <div className="relative z-10 wrapper h-full">
        {/* Add your solutions content here */}
        <motion.div
          className="pt-[30px] sm:pt-[120px] lg:pt-[30px] pb-8 sm:pb-12 lg:pb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
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
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -12 },
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
            }}
          >
            <SubTittle label="Who We Serve" />
          </motion.div>
          <div className="mt-6 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
            <motion.h2
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] w-full lg:w-[60%] leading-[1.1] sm:leading-[1.0] font-space font-medium text-[#000]"
              variants={{
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
              }}
            >
              Built for the Financial Ecosystem
            </motion.h2>
            <motion.p
              className="text-[14px] sm:text-[16px] lg:text-[18px] w-full lg:w-[30%] font-inter font-medium text-[#000]"
              variants={{
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
              }}
            >
              Our APIs are designed to power Africa&apos;s financial
              infrastructure, enabling innovation and responsible growth across
              the ecosystem.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="mt-4 sm:mt-12 lg:mt-[80px] py-2 sm:py-4 lg:py-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 1 },
            show: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.12,
                delay: 0.5,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-1">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={{
                  hidden: (i: number) => ({
                    opacity: 0,
                    y: -28,
                    x: i % 2 === 0 ? -20 : 20,
                    scale: 0.96,
                    rotateZ: i % 2 === 0 ? -1.5 : 1.5,
                  }),
                  show: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    rotateZ: 0,
                    transition: {
                      type: "spring",
                      stiffness: 130,
                      damping: 24,
                      mass: 0.9,
                      duration: 1.0,
                    },
                  }),
                }}
                // whileHover={{
                //   y: -6,
                //   scale: 1.03,
                //   rotateZ: idx % 2 === 0 ? -0.6 : 0.6,
                // }}
                whileTap={{ scale: 0.98 }}
              >
                <NewCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
