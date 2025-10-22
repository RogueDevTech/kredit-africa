import React from "react";

type BaseButtonProps = {
  label: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
};

export default function BaseButton({
  label,
  textColor = "#ffffff",
  backgroundColor = "#0a0a0a",
  borderColor,
  className = "",
  onClick,
  disabled = false,
  style,
}: BaseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={
        `inline-flex items-center justify-center rounded-md lg:px-9 lg:py-5 px-7 py-4  text-sm cursor-pointer font-medium transition-colors duration-150` +
        (disabled ? " opacity-60 cursor-not-allowed" : " hover:opacity-90") +
        (className ? ` ${className}` : "")
      }
      style={{
        color: textColor,
        backgroundColor,
        borderColor: borderColor,
        borderStyle: borderColor ? "solid" : undefined,
        borderWidth: borderColor ? 1 : undefined,
        fontFamily: "SpaceMedium",
        ...style,
      }}
    >
      {label}
    </button>
  );
}
