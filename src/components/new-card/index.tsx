import React from "react";
import Image from "next/image";

type NewCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  heightClass?: string; // e.g. 'h-[520px]' (defaults to 'h-[520px]')
  className?: string;
  textColor?: string; // e.g. 'text-white' or 'text-black'
};

export default function NewCard({
  imageSrc,
  title,
  description,
  heightClass = "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]",
  className = "",
  textColor = "text-white",
}: NewCardProps) {
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
      <div className="relative z-10 py-6 px-4 sm:py-4 sm:px-4 md:py-6 md:px-6 lg:py-8 lg:px-6">
        <p
          className={`${textColor} font-space font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-tight`}
        >
          {title}
        </p>
        <p
          className={`mt-2 sm:mt-3 ${
            textColor === "text-white" ? "text-white/85" : "text-black/85"
          } font-inter text-[12px] sm:text-[14px] md:text-[16px] max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
