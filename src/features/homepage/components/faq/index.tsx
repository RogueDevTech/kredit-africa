"use client";
import React, { useState } from "react";
import SubTittle from "@/components/sub-tiltle";
import BaseButton from "@/components/BaseButton";
import Link from "next/link";
import { motion } from "framer-motion";

const faqData = [
  {
    id: "integration",
    question: "How do I integrate the APIs?",
    answer: "Detailed logs and reports provide full system accountability.",
  },
  {
    id: "connect",
    question: "Can you explain how to connect the APIs?",
    answer:
      "Our APIs are designed for easy integration with comprehensive documentation and SDKs.",
  },
  {
    id: "data-sources",
    question: "What data sources do you use?",
    answer:
      "We utilize multiple data sources including bank statements, mobile money, and alternative data.",
  },
  {
    id: "data-utilized",
    question: "Which data sources are utilized?",
    answer:
      "We work with traditional financial data, telecom data, and social media insights.",
  },
  {
    id: "data-types",
    question: "What types of data sources are you working with?",
    answer:
      "Our platform integrates with banks, fintechs, telecom providers, and government databases.",
  },
  {
    id: "data-rely",
    question: "What data sources do you rely on?",
    answer:
      "We rely on verified data from financial institutions, mobile operators, and public records.",
  },
];

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState("integration");

  return (
    <section className="mt-8 sm:mt-12 lg:mt-20 relative w-full py-8 sm:py-12 lg:py-20 bg-white">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-[40%]"
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
              <SubTittle label="FAQS" />
            </motion.div>
            <div className="flex flex-col">
              <motion.h2
                className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.1] sm:leading-[1.0] font-space font-medium text-[#000] mt-4 mb-6 sm:mb-8"
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
                Your questions, answered
              </motion.h2>
              <motion.div
                className="self-start"
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
                <Link href="/contact">
                  <BaseButton
                    label="Contact sales"
                    backgroundColor="#000"
                    textColor="#fff"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - FAQ List */}
          <motion.div
            className="w-full lg:w-[60%]"
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
                  delay: 0.3,
                },
              },
            }}
          >
            <div className="space-y-2 sm:space-y-3">
              {faqData.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={{
                    hidden: { opacity: 0, y: -18, scale: 0.99 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 130,
                        damping: 26,
                        duration: 0.9,
                      },
                    },
                  }}
                >
                  <div
                    className={`cursor-pointer transition-all duration-200 ${
                      activeFaq === faq.id
                        ? "bg-gray-100 rounded-lg p-3 sm:p-4"
                        : "p-3 sm:p-4 hover:bg-gray-50 rounded-lg"
                    }`}
                    onClick={() =>
                      setActiveFaq(activeFaq === faq.id ? "" : faq.id)
                    }
                  >
                    <h3 className="text-black font-space font-medium text-[16px] sm:text-[18px] leading-tight mb-2">
                      {faq.question}
                    </h3>
                    {activeFaq === faq.id && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-gray-600 font-inter text-[14px] sm:text-[16px] leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
