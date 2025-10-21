"use client";
import React, { useState } from "react";
import BaseButton from "@/components/BaseButton";
import SubTittle from "@/components/sub-tiltle";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = fullName && email && message && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      alert("Message sent! (Demo)");
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen w-full bg-white">
      <div className="wrapper py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: Intro & Contact Info */}
          <div
            className="w-full lg:w-[45%] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
            <SubTittle label="Contact us" />
            </div>
            <h1
              className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[56px] leading-[1.05] font-space font-medium text-[#000] animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Let’s talk about your use case
            </h1>
            <p
              className="mt-4 text-[14px] sm:text-[16px] font-inter text-[#2b2b2b] animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Tell us what you’re building and we’ll get back within one
              business day.
            </p>

            <div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-up"
              style={{ animationDelay: "280ms" }}
            >
              <div>
                <p className="font-ibm text-[12.5px] text-[#000] mb-1">Email</p>
                <a
                  className="font-inter text-[14px] text-[#2b2b2b]"
                  href="mailto:hello@kreditafrica.com"
                >
                  hello@kreditafrica.com
                </a>
              </div>
              <div>
                <p className="font-ibm text-[12.5px] text-[#000] mb-1">Phone</p>
                <a
                  className="font-inter text-[14px] text-[#2b2b2b]"
                  href="tel:+10118919090"
                >
                  +1 (011) 891 90 90
                </a>
              </div>
              <div>
                <p className="font-ibm text-[12.5px] text-[#000] mb-1">Lagos</p>
                <p className="font-inter text-[14px] text-[#2b2b2b]">
                  +1 (011) 891 90 90
                </p>
              </div>
              <div>
                <p className="font-ibm text-[12.5px] text-[#000] mb-1">
                  London
                </p>
                <p className="font-inter text-[14px] text-[#2b2b2b]">
                  +1 (846) 231-38-94
                </p>
              </div>
            </div>
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
                    Email
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
                    Subject
                  </label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-[14px] font-inter outline-none focus:border-white/40 placeholder:text-white/40"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-[13px] font-ibm mb-1">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-[14px] font-inter outline-none focus:border-white/40 placeholder:text-white/40 resize-y"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <BaseButton
                  label={submitting ? "Sending..." : "Send message"}
                  backgroundColor="#fff"
                  textColor="#000"
                  className="px-6 py-3"
                  disabled={!canSubmit}
                />
                <span className="text-[13px] font-inter text-white/70">
                  We usually reply within 24 hours
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
