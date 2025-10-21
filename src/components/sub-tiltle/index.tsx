import React from "react";

type SubTittleProps = {
  label: string;
  textClass?: string; // Tailwind text color class
  borderClass?: string; // Tailwind border color class
  dotClass?: string; // Tailwind bg color class for dot
  className?: string;
};

export default function SubTittle({
  label,
  textClass = "text-[#0a0a0a]",
  borderClass = "border-[#0a0a0a]",
  dotClass = "bg-[#0a0a0a]",
  className = "",
}: SubTittleProps) {
  return (
    <div
      className={
        ` inline-flex items-center gap-3 rounded-[8px] border px-3 py-3 ${borderClass}` +
        (className ? ` ${className}` : "")
      }
    >
      <span
        className={`text-[13px] uppercase tracking-wider font-ibm ${textClass}`}
      >
        {label}
      </span>
      <span className={`inline-block h-1 w-1 rounded-full ${dotClass}`} />
    </div>
  );
}
