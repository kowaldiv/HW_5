import React from "react";

export function Button({
  children,
  className,
  type,
  value,
  disabled,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
  value?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      className={`rounded-md p-2 sm:p-3.5 sm:py-2 text-sm 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer hover:opacity-80 active:opacity-70 active:scale-95"} 
        transition duration-100 select-none text-nowrap text-foreground border border-border
        ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {value}
    </button>
  );
}
