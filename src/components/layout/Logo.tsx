"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  className = "",
  size = "md",
}) => {
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-20 w-auto",
  };

  const imageSrc = isDark
    ? "/assets/logo/matshepo_logo_white.png"
    : "/assets/logo/matshepo_logo.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="Matshepo Africa Ltd Home"
    >
      <div className="relative flex items-center justify-center shrink-0">
        <Image
          src={imageSrc}
          alt="Matshepo Africa Ltd"
          width={924}
          height={1100}
          className={`${sizeClasses[size]} object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105`}
          priority
        />
      </div>
    </Link>
  );
};

