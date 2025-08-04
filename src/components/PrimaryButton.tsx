"use client";

import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ fontFamily: "Lato, sans-serif" }}
      className={`mt-4 bg-gradient-to-r from-blue-800 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium shadow-md w-full sm:w-auto hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
