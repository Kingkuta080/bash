"use client"

import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-8">
          <FaUser className="text-cyan-400 text-2xl" />
          About Me
        </h2>
        <div className="bg-[#353B41] rounded-xl p-6 md:p-10 text-gray-200 text-base md:text-lg font-normal shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400">
          I&apos;m a UI/UX designer with 3-4 years of experience collaborating with product managers, developers, and other stakeholders to create user interface designs that enhance the usability and accessibility of online learning platforms. I leverage my expertise in design systems, Figma, and user interviews to create wireframes and mockups that illustrate user interface designs and effectively communicate design decisions.
        </div>
      </div>
    </section>
  );
}