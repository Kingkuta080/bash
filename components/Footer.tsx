import React from 'react';
import { FaXTwitter, FaLinkedin, FaYoutube, FaInstagram, FaFigma } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-800 mt-auto">
      <div className="text-gray-400 text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Bashon Design. All rights reserved.
      </div>
      <div className="flex gap-4 justify-center">
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="X.com">
          <FaXTwitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="LinkedIn">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="YouTube">
          <FaYoutube className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="Instagram">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="Figma">
          <FaFigma className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}