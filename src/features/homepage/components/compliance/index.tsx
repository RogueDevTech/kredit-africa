"use client";
import SubTittle from "@/components/sub-tiltle";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const complianceItems = [
  {
    id: "data-privacy",
    title: "Data Privacy & Security",
    description:
      "Bank-grade encryption and secure access protect sensitive customer data.",
    content: {
      title: "Data Privacy & Security",
      description:
        "Robust encryption and secure access protocols are essential for safeguarding sensitive customer information. By implementing bank-grade security measures, businesses can ensure that personal data remains confidential and protected from unauthorized access.",
    },
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance",
    description:
      "Fully compliant with NDPR, GDPR, and local financial regulations.",
    content: {
      title: "Regulatory Compliance",
      description:
        "Our platform ensures full compliance with international and local regulations including NDPR, GDPR, and financial sector requirements. We maintain the highest standards of regulatory adherence.",
    },
  },
  {
    id: "ethical-ai",
    title: "Ethical AI & Transparency",
    description:
      "Transparent AI models ensure fair, unbiased lending insights.",
    content: {
      title: "Ethical AI & Transparency",
      description:
        "Our AI models are designed with transparency and fairness at their core. We ensure unbiased decision-making processes that promote equitable access to financial services.",
    },
  },
  {
    id: "responsible-lending",
    title: "Responsible Lending Infrastructure",
    description:
      "Support lenders making informed decisions protecting borrowers and institutions.",
    content: {
      title: "Responsible Lending Infrastructure",
      description:
        "We provide infrastructure that supports responsible lending practices, helping financial institutions make informed decisions that protect both borrowers and lending institutions.",
    },
  },
  {
    id: "audit",
    title: "Audit & Reporting",
    description:
      "Detailed logs and reports provide full system accountability.",
    content: {
      title: "Audit & Reporting",
      description:
        "Comprehensive audit trails and detailed reporting capabilities ensure full system accountability and transparency for all stakeholders.",
    },
  },
];

export default function Compliance() {
  const [activeTab, setActiveTab] = useState("data-privacy");

  const activeItem = complianceItems.find((item) => item.id === activeTab);

  return (
    <section className={`relative w-full min-h-screen py-4 sm:py-12 lg:py-16`}>
      <div className="relative z-10 wrapper h-full">
        <motion.div
          className="pt-[30px] sm:pt-[120px] lg:pt-[150px] pb-8 sm:pb-12 lg:pb-16"
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
              <SubTittle label="Compliance & Trust at Our Core" />
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
                We build our infrastructure with security, transparency, and
                regulatory compliance.
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
                Kredit Africa empowers financial institutions with reliable data
                while maintaining the highest ethical standards.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Tab Component */}
        <motion.div
          className=" mt-8 sm:mt-12 lg:mt-16"
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
                delay: 0.4,
              },
            },
          }}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-1">
            {/* Left Sidebar */}
            <motion.div
              className="w-full lg:w-[25%] space-y-2"
              variants={{
                hidden: { opacity: 1 },
                show: { opacity: 1, transition: { staggerChildren: 0.08 } },
              }}
            >
              {complianceItems.map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 sm:px-6 pt-6 sm:pt-8 pb-4 sm:pb-6 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: -12 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 160,
                        damping: 26,
                        duration: 0.8,
                      },
                    },
                  }}
                >
                  <div className="mt-2 sm:mt-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`leading-none font-space font-medium text-[16px] sm:text-[18px] mb-2 ${
                          activeTab === item.id ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`flex-shrink-0 ${
                          activeTab === item.id ? "text-white" : "text-[#000]"
                        }`}
                      >
                        <svg
                          width="32"
                          height="18"
                          viewBox="0 0 40 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-10 sm:h-[22px]"
                        >
                          <path
                            d="M0 10.7998H39M39 10.7998L28.875 0.799805M39 10.7998L28.875 20.7998"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <p
                      className={`font-inter text-[12px] sm:text-[14px] ${
                        activeTab === item.id
                          ? "text-white/80"
                          : "text-[#787878]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Content Area */}
            <motion.div className="w-full lg:w-[75%] flex flex-col items-start justify-between rounded-[8px] bg-gray-200 py-6 sm:py-8 px-4 sm:px-6">
              <AnimatePresence mode="wait">
                {activeItem && (
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-space font-bold text-gray-800 mb-6 sm:mb-8">
                      {activeItem.content.title}
                    </h2>

                    {/* Privacy Icon */}
                    <div className="mb-6 sm:mb-8 w-full flex items-center justify-center">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 240 240"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]"
                      >
                        <path
                          d="M107.429 50.9232C111.494 50.3223 115.686 50 120.004 50C171.054 50 204.553 95.0484 215.807 112.868C217.169 115.025 217.85 116.103 218.231 117.767C218.518 119.016 218.517 120.987 218.231 122.236C217.849 123.899 217.164 124.985 215.792 127.156C212.793 131.901 208.222 138.571 202.165 145.805M67.2432 67.1504C45.6225 81.817 30.9445 102.194 24.2111 112.853C22.8428 115.019 22.1587 116.102 21.7774 117.765C21.491 119.014 21.4909 120.984 21.7771 122.234C22.1583 123.897 22.8393 124.975 24.2013 127.132C35.4554 144.952 68.9541 190 120.004 190C140.588 190 158.319 182.676 172.888 172.766M30.0042 30L210.004 210M98.791 98.7868C93.362 104.216 90.0042 111.716 90.0042 120C90.0042 136.569 103.436 150 120.004 150C128.288 150 135.788 146.642 141.217 141.213"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] w-full max-w-[700px] font-inter text-gray-700 leading-relaxed">
                      {activeItem.content.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
