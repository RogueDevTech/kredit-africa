import React from "react";

type PlatformCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function PlatformCard({
  icon,
  title,
  description,
  className = "",
}: PlatformCardProps) {
  return (
    <div
      className={`relative w-full h-[280px] sm:h-[300px] lg:h-[340px] flex flex-col justify-between rounded-[12px] sm:rounded-[16px] py-6 px-4 sm:py-8 sm:px-6 shadow-lg ${className}`}
      style={{
        backgroundColor: "#FFFFFF3D",
        backdropFilter: "blur(40px)",
      }}
    >
      {/* Icon */}
      <div className="mb-3 sm:mb-4">{icon}</div>

      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-white font-space font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-tight mb-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white font-inter text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
