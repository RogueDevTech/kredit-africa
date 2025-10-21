"use client";
import React from "react";
import Image from "next/image";
import SubTittle from "@/components/sub-tiltle";
import BaseButton from "@/components/BaseButton";
import { motion } from "framer-motion";
import Link from "next/link";

const developerFeatures = [
  {
    id: "sandbox",
    title: "Sandbox Access",
    description:
      "Experiment in a safe environment before moving to production.",
  },
  {
    id: "docs",
    title: "Docs You'll Love",
    description:
      "Clear and concise documentation with examples for every endpoint.",
  },
  {
    id: "support",
    title: "Dev Support",
    description:
      "Get technical support from our engineering team and join a growing developer community.",
  },
];

export default function BuildDevelopers() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Content Section */}
      <motion.div
        className="relative z-10 wrapper py-6 sm:py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
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
        <div className="flex flex-col items-start justify-between">
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
            <SubTittle label="Built for Developers" />
          </motion.div>
          <div className="mt-6 w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] w-full lg:w-[65%] leading-tight lg:leading-[55px] font-space font-medium text-[#000]"
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
              Go from concept to production in days
            </motion.h2>
            <motion.div
              className="flex justify-start lg:justify-end"
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
              <Link href="/docs">
                <BaseButton
                  label="View Docs"
                  backgroundColor="#000"
                  textColor="#fff"
                  className="lg:ml-8"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <div className="wrapper sm:px-0">
        <motion.div
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] relative"
          initial={{ opacity: 0, y: -12, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/assets/Images/Block 1.jpg"
            alt="Build Developers"
            fill
            priority
            className="object-cover rounded-[8px] sm:rounded-[12px]"
          />
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="wrapper sm:px-0">
        <motion.div
          className="mt-8 sm:mt-4 lg:mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2 lg:gap-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 1 },
            show: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.12,
                delay: 0.4,
              },
            },
          }}
        >
          {developerFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              className="bg-gray-200 h-[180px] sm:h-[190px] lg:h-[200px] flex flex-col justify-end rounded-[6px] sm:rounded-[8px] p-4 sm:p-5 lg:p-6"
              custom={idx}
              variants={{
                hidden: (i: number) => ({
                  opacity: 0,
                  y: -20,
                  x: i % 2 === 0 ? -14 : 14,
                  scale: 0.98,
                }),
                show: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 26,
                    duration: 0.9,
                  },
                },
              }}
              // whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-black font-space font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-tight mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="w-full sm:w-[90%] text-gray-600 font-inter text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
