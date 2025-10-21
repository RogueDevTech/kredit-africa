"use client";
import React from "react";
import Image from "next/image";
import SubTittle from "@/components/sub-tiltle";
import Card from "@/components/card";
import { motion } from "framer-motion";

type SolutionsProps = {
  imageSrc: string; // e.g. '/assets/Images/your-image.jpg'
  className?: string;
};

const solutions = [
  {
    imageSrc:
      "/assets/Images/analyzing-data-touchscreen1.webpmeoypr.webp-9bf2ce159ea8c729b8851fc0c12db501-doc.webp",
    title: "Credit Intelligence",
    description:
      "Bank-grade encryption and secure access protect sensitive customer data.",
  },

  {
    imageSrc:
      "/assets/Images/warehouse-worker-hand-pointing-inventory-statistics-tablet 1.webp",
    title: "Fraud Detection",
    description:
      "Bank-grade encryption and secure access protect sensitive customer data.",
  },

  {
    imageSrc: "/assets/Images/kredit-american-woman.webp",
    title: "Risk Assessment",
    description:
      "Bank-grade encryption and secure access protect sensitive customer data.",
  },

  {
    imageSrc:
      "/assets/Images/ron-lach-98696261.webpiwd9w6.webp-9bf2ce159ea8c729b8851fc0c12db501-doc.webp",
    title: "Document Verification",
    description:
      "Bank-grade encryption and secure access protect sensitive customer data.",
  },
  {
    imageSrc: "/assets/Images/Screenshot 2025-10-14 at 21.20.11 1.webp",
    title: "Bank Behavior",
    description:
      "Bank-grade encryption and secure access protect sensitive customer data.",
  },
  {
    imageSrc:
      "/assets/Images/biometrics-fingerprint-scan-interactive-screen 1.webp",
    title: "Digital Identity Insight",
    description:
      "Bank-grade encryption and secure access protect sensitive customer data.",
    textColor: "text-black",
  },
];

export default function Solutions({
  imageSrc,
  className = "",
}: SolutionsProps) {
  return (
    <section
      className={`border border-[transparent] relative w-full min-h-screen ${className}`}
    >
      <Image
        src={imageSrc}
        alt="Solutions background"
        fill
        priority
        className="object-cover"
      />
      <div className=" relative z-10 wrapper h-full">
        {/* Add your solutions content here */}
        <motion.div
          className="pt-[50px] sm:pt-[300px] lg:pt-[450px] pb-8 sm:pb-12 lg:pb-16"
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
                delayChildren: 0.12,
                type: "tween",
                ease: [0.16, 1, 0.3, 1],
                duration: 0.9,
              },
            },
          }}
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
            <motion.div
              className="w-full lg:w-auto"
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
              <SubTittle label="Solutions" />
            </motion.div>
            <motion.div
              className="w-full lg:w-[72%]"
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
              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.1] sm:leading-[1.0] font-space font-medium text-[#000]">
                Plug into our infrastructure and unlock the power of secure,
                data-driven financial decision-making.
              </h2>
              <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] lg:text-[18px] w-full lg:w-[95%] font-inter font-medium text-[#586667]">
                We build APIs that simplify credit intelligence, fraud
                prevention, and risk management. Plug into our infrastructure
                and unlock the power of secure, data-driven financial
                decision-making.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-0 sm:mt-12 lg:mt-[80px] py-2 sm:py-4 lg:py-6"
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
                delay: 0.6,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-6 lg:gap-1">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
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
                }}
                // whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
