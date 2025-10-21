"use client";
import React, { useState } from "react";
import BaseButton from "@/components/BaseButton";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full h-20 ">
      <div className="wrapper h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="cursor-pointer w-[42px] h-[42px] bg-[#1A1A1A] rounded-lg flex items-center justify-center mr-3 lg:w-[62px] lg:h-[62px]">
              <svg
                width="31"
                height="36"
                viewBox="0 0 31 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.996 18.104L30.4624 0.639915H17.5833L0.119312 18.104L17.5833 35.5704H30.46L12.996 18.104Z"
                  fill="white"
                />
                <path
                  d="M8.42792 35.5703L0.119312 27.2593V35.5703H8.42792Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {/* Semi-transparent navigation bar */}
          <div
            className="rounded-lg px-6 py-4"
            style={{
              background:
                "linear-gradient(0deg, rgba(159, 159, 159, 0.4), rgba(159, 159, 159, 0.4)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))",
              backdropFilter: "blur(40px)",
            }}
          >
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-black font-inter text-sm hover:text-gray-700 transition-colors"
              >
                Company
              </a>
              <a
                href="#"
                className="text-black font-inter text-sm *:hover:text-gray-700 transition-colors"
              >
                Solutions
              </a>
              <Link
                href="/docs"
                className="text-black font-inter text-sm hover:text-gray-700 transition-colors"
              >
                API Docs
              </Link>
              <Link
                href="/book-session"
                className="text-black font-inter text-sm hover:text-gray-700 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <BaseButton
                label="Sign In"
                backgroundColor="#9F9F9FAD"
                textColor="#000"
                className="px-6 py-2"
              />
            </Link>
            <Link href="/sign-up">
              <BaseButton
                label="Get Started"
                backgroundColor="#1A1A1A"
                textColor="#fff"
                className="px-6 py-2"
              />
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/20"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1H17M1 7H17H4M1 13H11"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Mobile slide-out panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 md:hidden transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background:
            "linear-gradient(0deg, rgba(159, 159, 159, 0.4), rgba(159, 159, 159, 0.4)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))",
          backdropFilter: "blur(40px)",
        }}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="font-space text-[#000] text-[18px]">Menu</span>
            <button
              aria-label="Close menu"
              className="w-8 h-8 rounded-md border border-black/20 flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className="text-black font-inter text-[16px]"
            onClick={() => setOpen(false)}
          >
            Company
          </a>
          <a
            href="#"
            className="text-black font-inter text-[16px]"
            onClick={() => setOpen(false)}
          >
            Solutions
          </a>
          <Link
            href="/docs"
            className="text-black font-inter text-[16px]"
            onClick={() => setOpen(false)}
          >
            API Docs
          </Link>
          <Link
            href="/book-session"
            className="text-black font-inter text-[16px]"
            onClick={() => setOpen(false)}
          >
            Book a Demo
          </Link>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/sign-in" onClick={() => setOpen(false)}>
              <BaseButton
                label="Sign In"
                backgroundColor="#F5F5F5"
                textColor="#000"
              />
            </Link>
            <Link href="/sign-up" onClick={() => setOpen(false)}>
              <BaseButton
                label="Get Started"
                backgroundColor="#333"
                textColor="#fff"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
