  "use client";

  import React, { useState } from "react";
  import Image from "next/image";
  import { Logo } from "@/assets";
  import { Menu, X } from "lucide-react";

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#whatido" },
    { label: "Skills", href: "#skills" },
    { label: "Recent Works", href: "#recentwork" },
  ];

  export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("Home");

    const handleNavClick = (href: string, label: string) => {
      setActive(label);
      setMenuOpen(false);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return (
      <nav className="fixed top-0 left-0 w-[90%] z-50 bg-black/90 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4 h-[72px]">
          {/* Logo */}
          <div
            className="flex items-center gap-2 text-cyan-400 text-2xl font-bold cursor-pointer"
            onClick={() => handleNavClick("#home", "Home")}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-8 items-center text-white font-medium text-lg">
            {navLinks.map((link) => (
              <li
                key={link.label}
                onClick={() => handleNavClick(link.href, link.label)}
                className={`cursor-pointer ${
                  active === link.label
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400 transition"
                } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              >
                {link.label}
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <button
            onClick={() => handleNavClick("#contact", "Contact Me")}
            className="hidden md:inline-block bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Contact Me
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 mt-60 bg-black/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-40 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>

          {/* Menu Links */}
          <ul className="flex flex-col items-center gap-6 text-white text-xl font-semibold">
            {navLinks.map((link) => (
              <li
                key={link.label}
                onClick={() => handleNavClick(link.href, link.label)}
                className={`cursor-pointer ${
                  active === link.label
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
                }`}
              >
                {link.label}
              </li>
            ))}
          </ul>

          {/* Contact Me Button */}
          <button
            onClick={() => handleNavClick("#contact", "Contact Me")}
            className="bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Contact Me
          </button>
        </div>
      </nav>
    );
  }
