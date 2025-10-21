"use client";
import React, { useState } from "react";
import BaseButton from "@/components/BaseButton";
import SubTittle from "@/components/sub-tiltle";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <div className="space-y-3">
        <p className="font-inter text-[14px] text-[#2b2b2b]">
          Kredit Africa APIs let you securely access intelligence for
          onboarding, risk, and fraud workflows. Use our sandbox to start in
          minutes.
        </p>
        <div className="rounded-md bg-black text-white p-4">
          <pre className="text-[12px] leading-relaxed font-ibm whitespace-pre-wrap">
            {`GET https://api.kredit.africa/v1/health
Authorization: Bearer YOUR_API_KEY`}
          </pre>
        </div>
      </div>
    ),
  },
  {
    id: "auth",
    title: "Authentication",
    content: (
      <div className="space-y-3">
        <p className="font-inter text-[14px] text-[#2b2b2b]">
          Authenticate using your API key in the Authorization header.
        </p>
        <div className="rounded-md bg-black text-white p-4">
          <pre className="text-[12px] leading-relaxed font-ibm whitespace-pre-wrap">
            {`curl -X GET \
  -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.kredit.africa/v1/health`}
          </pre>
        </div>
      </div>
    ),
  },
  {
    id: "kyc",
    title: "KYC Lookup",
    content: (
      <div className="space-y-3">
        <p className="font-inter text-[14px] text-[#2b2b2b]">
          Verify identities with BVN, NIN, or passport numbers.
        </p>
        <div className="rounded-md bg-black text-white p-4">
          <pre className="text-[12px] leading-relaxed font-ibm whitespace-pre-wrap">
            {`POST https://api.kredit.africa/v1/kyc/lookup
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{ "bvn": "22123456789" }`}
          </pre>
        </div>
      </div>
    ),
  },
  {
    id: "webhooks",
    title: "Webhooks",
    content: (
      <div className="space-y-3">
        <p className="font-inter text-[14px] text-[#2b2b2b]">
          Receive asynchronous updates for long-running checks via webhooks.
        </p>
        <div className="rounded-md bg-black text-white p-4">
          <pre className="text-[12px] leading-relaxed font-ibm whitespace-pre-wrap">
            {`POST https://yourapp.com/webhooks/kredit
Header: X-Kredit-Signature: t=...,v1=...`}
          </pre>
        </div>
      </div>
    ),
  },
];

export default function Documentation() {
  const [active, setActive] = useState<string>(sections[0].id);

  return (
    <section className="min-h-screen w-full bg-white">
      <div className="wrapper py-10 sm:py-14 lg:py-20">
        {/* Header */}
        <div
          className="mb-8 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
          <SubTittle label="API Docs" />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <h1
              className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[56px] leading-[1.05] font-space font-medium text-[#000] animate-fade-up"
              style={{ animationDelay: "140ms" }}
            >
              Build with confidence
            </h1>
            <BaseButton
              label="Get API key"
              backgroundColor="#000"
              textColor="#fff"
              className="px-5 py-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
          {/* Sidebar */}
          <aside
            className="space-y-1 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            {sections.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full text-left rounded-md px-3 py-2 font-inter text-[14px] transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-[#f6f6f6] hover:bg-[#efefef] text-[#111]"
                  }`}
                >
                  {s.title}
                </button>
              );
            })}
          </aside>

          {/* Content */}
          <div
            className="min-h-[320px] animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {sections.map((s) => (
              <div key={s.id} className={s.id === active ? "block" : "hidden"}>
                <h2 className="font-space text-[22px] sm:text-[26px] text-[#000] mb-3">
                  {s.title}
                </h2>
                {s.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
