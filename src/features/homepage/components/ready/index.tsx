"use client";
import React from "react";
import BaseButton from "@/components/BaseButton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Ready() {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-50 bg-white">
      <div className="wrapper px-4 sm:px-0">
        <motion.div
          className="flex flex-col items-center text-center"
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
          {/* Main Heading */}
          <motion.h2
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight sm:leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[65px] font-space font-medium text-[#000] mb-8 sm:mb-6 max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]"
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
            Ready to take the next step with your finance
          </motion.h2>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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
              <Link
                href="/book-session"
                className="inline-block w-full sm:w-auto"
              >
                <BaseButton
                  label="Book a Demo"
                  backgroundColor="#F5F5F5"
                  textColor="#000"
                  borderColor="#000"
                  className="w-full sm:w-auto"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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
              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <BaseButton
                  label="Contact Sales"
                  backgroundColor="#000"
                  textColor="#fff"
                  className="w-full sm:w-auto"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
