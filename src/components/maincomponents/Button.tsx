import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface ButtonProps {
  icon?: React.ReactNode;
  url?: string;
  className?: string;
}

export const IconButton: React.FC<ButtonProps> = ({ icon, url = '#', className }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition duration-300 ${className}`}
  >
    {icon || (
      <FiArrowUpRight
        className="text-white absolute items-center justify-center w-18 h-18 rounded-full bg-gradient-to-br from-[#019CD4] to-[#022F8C] border-[3px] border-white transition"
      />
    )}
  </a>
);
