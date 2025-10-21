import React from "react";
import Image from "next/image";

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  heightClass?: string; // e.g. 'h-[520px]' (defaults to 'h-[520px]')
  className?: string;
  textColor?: string; // e.g. 'text-white' or 'text-black'
};

export default function Card({
  imageSrc,
  title,
  description,
  heightClass = "h-[300px] sm:h-[400px] lg:h-[520px]",
  className = "",
  textColor = "text-white",
}: CardProps) {
  return (
    <div
      className={`relative w-full ${heightClass} rounded-[12px] overflow-hidden ${className}`}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      {/* border stroke like the mock */}
      <div className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-white/80" />

      {/* content */}
      <div className="relative z-10 py-6 px-4 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-6">
        <h3
          className={`${textColor} font-space font-medium text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 sm:mt-3 md:mt-4 ${
            textColor === "text-white" ? "text-white/85" : "text-black/85"
          } font-inter text-[12px] sm:text-[14px] md:text-[16px] max-w-[300px] sm:max-w-[350px] md:max-w-[400px]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
