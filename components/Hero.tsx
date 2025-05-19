import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { bashHero, HeroVector } from '@/assets';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black pt-[10rem] pb-[10rem]">
      {/* Background doodles (optional, can be added as SVG or background image) */}
      {/* Greeting */}
      <div className="text-cyan-400 text-lg mb-2 flex items-center gap-2">
        <span >—</span> <span className='text-white'>Hello</span> <span>—</span> 
      </div>
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center leading-tight">
        I&apos;m <span className="text-cyan-400">Bash,</span><br />UI/UX Designer
      </h1>
      {/* Image, Vector, and Buttons Overlap */}
      <div className="relative flex items-center justify-center w-[55.5%] h-[55.5%] mt-20">
        {/* Vector behind the image */}
        <Image
          src={HeroVector}
          alt="Vector"
          className="absolute inset-0 w-[35rem] ml-24 object-cover z-0"
        />
        {/* Main hero image */}
        <Image
          src={bashHero}
          alt="Bash UI/UX Designer"
          className="relative w-[60.5%] h-[60.5%] object-cover rounded-2xl mr-20 -mt-[8rem] z-10"
        />
        {/* Buttons on top of the image */}
        <div className="absolute inset-0 flex items-end justify-center pb-12 z-20">
          <div className="bg-white border-2 p-1 border-cyan-400 rounded-full flex gap-0">
            <button className="flex items-center gap-2 bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition">
              Contact Me  
              <ArrowRight className="w-5 h-5" /> 
            </button>
            <button className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition">
              My Cv <FaDownload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Social Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-40">
        <span className="text-white text-xs rotate-90 mb-2">Follow Me</span>
        <a href="#" className="bg-neutral-800 p-3 rounded-full hover:bg-cyan-400 transition"><FaGithub className="text-xl text-white" /></a>
        <a href="#" className="bg-neutral-800 p-3 rounded-full hover:bg-cyan-400 transition"><FaYoutube className="text-xl text-white" /></a>
        <a href="#" className="bg-neutral-800 p-3 rounded-full hover:bg-cyan-400 transition"><FaXTwitter className="text-xl text-white" /></a>
        <a href="#" className="bg-neutral-800 p-3 rounded-full hover:bg-cyan-400 transition"><FaLinkedin className="text-xl text-white" /></a>
      </div>
    </section>
  );
}

