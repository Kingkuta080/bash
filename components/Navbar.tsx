"use client"
import React, { useState } from 'react';
import { Logo } from '@/assets';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#whatido' },
  { label: 'Skills', href: '#skills' },
  { label: 'Recent Works', href: '#recentwork' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  // Smooth scroll handler
  const handleNavClick = (href: string, label: string) => {
    setActive(label);
    setMenuOpen(false);
    if (typeof window !== 'undefined') {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-black/90 fixed top-0 left-0 z-50 shadow-md backdrop-blur">
      {/* Logo */}
      <div className="flex items-center gap-2 text-cyan-400 text-2xl font-bold cursor-pointer" onClick={() => handleNavClick('#home', 'Home')}>
        <Image 
          src={Logo} 
          alt="Logo" 
          width={40} 
          height={40} 
          className="w-12 h-12 object-contain"
        />
      </div>
      {/* Nav Links (Desktop) */}
      <ul className="hidden md:flex gap-8 text-white font-medium text-lg items-center">
        {navLinks.map(link => (
          <li
            key={link.label}
            className={`${active === link.label ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'hover:text-cyan-400 transition'} cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400`}
            onClick={() => handleNavClick(link.href, link.label)}
          >
            {link.label}
          </li>
        ))}
      </ul>
      {/* Contact Button (Desktop) */}
      <button
        className="bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition hidden md:block focus:outline-none focus:ring-2 focus:ring-cyan-400"
        onClick={() => handleNavClick('#contact', 'Contact Me')}
      >
        Contact Me
      </button>
      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden text-cyan-400 text-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-50 md:hidden transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          {/* Close button at top right */}
          <button
            className="absolute top-6 right-6 text-cyan-400 text-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={e => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <ul className="flex flex-col gap-8 text-white font-medium text-2xl items-center">
            {navLinks.map(link => (
              <li
                key={link.label}
                className={`${active === link.label ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'hover:text-cyan-400 transition'} cursor-pointer`}
                onClick={() => handleNavClick(link.href, link.label)}
              >
                {link.label}
              </li>
            ))}
          </ul>
          <button className="bg-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition mt-4 focus:outline-none focus:ring-2 focus:ring-cyan-400" onClick={() => handleNavClick('#contact', 'Contact Me')}>
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
