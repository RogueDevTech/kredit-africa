"use client";
import React, { useState } from "react";
import BaseButton from "@/components/BaseButton";
import SubTittle from "@/components/sub-tiltle";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = email && password && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      // TODO: Integrate real sign-in API
      alert("Signed in! (Demo)");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen w-full bg-white">
      <div className="wrapper py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: Intro */}
          <div
            className="w-full lg:w-[45%] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
            <SubTittle label="Welcome back" />
            </div>
            <h1
              className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.05] font-space font-medium text-[#000] animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Sign in to Kredit Africa
            </h1>
            <p
              className="mt-4 text-[14px] sm:text-[16px] font-inter text-[#2b2b2b] animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Access your dashboard, manage API keys, and continue building.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-[55%]">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a0a0a] text-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div className="col-span-1">
                  <label className="block text-[13px] font-ibm mb-1">
                    Work email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-[14px] font-inter outline-none focus:border-white/40 placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-[13px] font-ibm mb-1">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-[14px] font-inter outline-none focus:border-white/40 placeholder:text-white/40"
                    minLength={8}
                    required
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-[13px] font-inter text-white/90">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-[16px] w-[16px] rounded border-white/30 bg-white/0"
                  />
                  Remember me
                </label>
                <a className="text-[13px] font-inter text-white/80 underline cursor-pointer">
                  Forgot password?
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <BaseButton
                  label={submitting ? "Signing in..." : "Sign in"}
                  backgroundColor="#fff"
                  textColor="#000"
                  className="px-6 py-3"
                  disabled={!canSubmit}
                />
                <span className="text-[13px] font-inter text-white/70">
                  New to Kredit Africa?
                  <a href="/sign-up" className="ml-1 underline">
                    Create an account
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
