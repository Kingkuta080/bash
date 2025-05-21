"use client"
import React from 'react';
import { FaDownload, FaLinkedin, FaXTwitter, FaFigma, FaDiscord, FaInstagram } from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { bashHero, HeroVector, WorkFrame } from '@/assets';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-8 pt-36 pb-16"
    >
      {/* Base background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7
        }}
      />
      
      {/* Secondary background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Greeting */}
      <div className="text-cyan-400 text-base sm:text-lg mb-2 flex items-center gap-2 relative z-10">
        <span>—</span> <span className="text-white">Hello</span> <span>—</span>
      </div>
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white text-center leading-tight tracking-tight mb-4 relative z-10">
        I&apos;m <span className="text-cyan-400">Bash,</span><br className="hidden sm:block" />UI/UX Designer
      </h1>
      {/* Image, Vector, and Buttons Overlap */}
      <div className="relative flex items-center justify-center w-full max-w-lg aspect-square mt-4 sm:-mt-12 mr-12 z-10">
        {/* Vector behind the image */}
        <Image
          src={HeroVector}
          alt="Vector"
          fill
          className="object-contain z-0 rounded-2xl opacity-70"
        />
        {/* Main hero image */}
        <Image
          src={bashHero}
          alt="Bash UI/UX Designer"
          fill
          className="object-cover rounded-2xl shadow-2xl z-10"
        />
        {/* Buttons on top of the image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-2/3 flex flex-col mb-12 bg-white border border-cyan-400 rounded-full p-1 sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <button className="flex items-center gap-2 bg-cyan-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-cyan-500 transition text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Contact Me
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-cyan-400 hover:text-white transition text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400">
            My Cv <FaDownload className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* New image below all hero content */}
      <div className="w-full max-w-[74rem] mx-auto mb-12 relative z-10">
        <Image
          src={WorkFrame}
          alt="WorkFrame"
          className="w-full h-auto object-contain rounded-xl shadow-lg"
        />
      </div>
      {/* Social Sidebar */}
      <div className="fixed right-8 md:right-6 py-18 -translate-y-2/4 flex flex-col items-center gap-3 z-40">
        <span className="text-white text-md font-bold rotate-90 mb-9 hidden md:block">Follow Me</span>
        <a href="https://www.instagram.com/bash_uiux/" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-2 md:p-3 rounded-full hover:bg-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="Instagram"><FaInstagram className="text-lg md:text-xl text-white" /></a>
        <a href="https://x.com/BashirI74692251" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-2 md:p-3 rounded-full hover:bg-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="X"><FaXTwitter className="text-lg md:text-xl text-white" /></a>
        <a href="https://www.linkedin.com/in/bashondesign/" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-2 md:p-3 rounded-full hover:bg-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="LinkedIn"><FaLinkedin className="text-lg md:text-xl text-white" /></a>
        <a href="https://discord.com/users/bash2533" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-2 md:p-3 rounded-full hover:bg-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="Discord"><FaDiscord className="text-lg md:text-xl text-white" /></a>
        <a href="https://www.figma.com/design/ueunVDBAKkeT6EAc4IV7S3?node-id=76-46#1262220332" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-2 md:p-3 rounded-full hover:bg-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="Figma"><FaFigma className="text-lg md:text-xl text-white" /></a>
      </div>
    </section>
  );
}