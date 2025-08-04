"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-3/4 px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center bg-white relative mx-auto">
      
      <img
        src="/assets/logo.png"
        alt="BraiEvo Logo"
        className="w-20 sm:w-24 h-auto"
      />
      <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex gap-8 sm:gap-12 items-center text-gray-700 text-base font-medium font-lato">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/careers", label: "Careers" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative 
                  ${
                    isActive(href)
                      ? "text-gray-900 after:absolute after:-bottom-1 after:left-5 after:w-1 items-center after:h-1 after:bg-gray-900 after:rounded"
                      : "hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:h-0.5 hover:after:bg-gray-700 hover:after:rounded"
                  }
                  transition-all duration-300`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Link
        href="/contact"
        className="hidden md:inline-block bg-gradient-to-r from-[#022F8C] to-[#019CD4] text-white px-6 sm:px-10 md:px-12 py-2 rounded-[10px] text-sm sm:text-md font-medium font-lato"
      >
        Reach Us
      </Link>

      {/* Mobile toggle button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Fullscreen mobile dropdown menu */}
{isOpen && (
  <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-md flex flex-col items-center px-6 py-8 z-50">
    
    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-6 right-8 text-gray-700 text-3xl focus:outline-none"
      aria-label="Close Menu"
    >
      &times;
    </button>

    <div className="mt-16 flex flex-col gap-8 items-center w-full">
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/careers", label: "Careers" },
        { href: "/blog", label: "Blog" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={() => setIsOpen(false)}
          className={`text-2xl font-medium ${
            isActive(href) ? "text-blue-700" : "text-gray-800 hover:underline"
          }`}
        >
          <div className="flex flex-col items-center">
            <span>{label}</span>
            {isActive(href) && (
              <span className="w-1 h-1 mt-1 bg-blue-700 rounded-full" />
            )}
          </div>
        </Link>
      ))}

      <Link
        href="/contact"
        className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
        onClick={() => setIsOpen(false)}
      >
        Reach Us
      </Link>
    </div>
  </div>
)}

    </header>
  );
}
