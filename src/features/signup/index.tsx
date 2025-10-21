"use client";
import React, { useState } from "react";
import BaseButton from "@/components/BaseButton";
import SubTittle from "@/components/sub-tiltle";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = fullName && email && password && agreed && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      // TODO: Integrate real API endpoint
      alert("Account created! (Demo)");
      setFullName("");
      setEmail("");
      setPassword("");
      setCompany("");
      setAgreed(false);
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
             <SubTittle label="Create an account" />
            </div>
            <h1
              className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.05] font-space font-medium text-[#000] animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Start building with Kredit Africa
            </h1>
            <p
              className="mt-4 text-[14px] sm:text-[16px] font-inter text-[#2b2b2b] animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Create your account to access our dashboard, API keys, and
              sandbox. Integrate in minutes with our plug-and-play SDKs and
              docs.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-[55%]">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a0a0a] text-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-[13px] font-ibm mb-1">
                    Full name
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-[14px] font-inter outline-none focus:border-white/40 placeholder:text-white/40"
                    required
                  />
                </div>
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
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-[13px] font-ibm mb-1">
                    Company
                  </label>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-[14px] font-inter outline-none focus:border-white/40 placeholder:text-white/40"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-[5px] h-[16px] w-[16px] rounded border-white/30 bg-white/0"
                />
                <label
                  htmlFor="terms"
                  className="text-[13px] font-inter text-white/90"
                >
                  I agree to the{" "}
                  <span className="underline cursor-pointer">Terms</span> and{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </label>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <BaseButton
                  label={submitting ? "Creating..." : "Create account"}
                  backgroundColor="#fff"
                  textColor="#000"
                  className="px-6 py-3"
                  disabled={!canSubmit}
                />
                <span className="text-[13px] font-inter text-white/70">
                  No credit card required
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
