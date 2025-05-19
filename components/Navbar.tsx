import React from 'react';
import { Logo } from '@/assets';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black/90 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-cyan-400 text-2xl font-bold">
        <Image 
        src={Logo} 
        alt="Logo" 
        width={32} 
        height={32} 
        className="w-[5rem] h-[5rem]"
        />
      </div>
      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-white font-medium text-lg">
        <li className="text-cyan-400 border-b-2 border-cyan-400 pb-1">Home</li>
        <li className="hover:text-cyan-400 transition">About Me</li>
        <li className="hover:text-cyan-400 transition">Projects</li>
        <li className="hover:text-cyan-400 transition">Contact Me</li>
      </ul>
      {/* Contact Button */}
      <button className="bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition hidden md:block">
        Contact Me
      </button>
    </nav>
  );
}
