"use client"
import React, { useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const works = [
  [
    {
      img: '/kadsubeb.svg',
      title: 'Kad-SUBEB-Plus — Education Management System for Kaduna State',
      desc: 'Designed a digital system for Kaduna State to streamline teacher HR, attendance, infrastructure, and performance tracking—improving transparency, data-driven decisions, and service delivery in basic education.',
      link: 'https://www.figma.com/design/lNQHBGOKpMaNvMAmvFk8NU/KAD-SUBEB-PLUS?node-id=0-1&t=COTrbs3R2vX6yTGM-1'
    },
    {
      img: '/power.svg',
      title: 'Powermate – Social Media Time Management App',
      desc: 'Powermate is a gamified screen time manager that helps you beat phone addiction with the support of friends. Block distracting apps, set custom limits, and stay accountable through group challenges and time requests. Build better habits, together.',
      link: 'https://www.figma.com/design/83CO9839O9EfElMYXcu40C/Powermate-App-Design?m=auto&t=mtlfE2nkWqK5i8xa-6'
    },
    {
      img: '/safe.svg',
      title: 'Safe Heaven Exchanger – Crypto Exchange Platform UI',
      desc: 'Designed a secure, modern interface for a crypto exchange platform. Focused on clarity, trust, and ease of use—featuring real-time rates, transaction flows, and intuitive onboarding.',
      link: 'https://www.figma.com/design/IHhIgsKCsoM7OV2svgoYsb/Safe-Heaven-Exchanger?m=auto&t=mtlfE2nkWqK5i8xa-6'
    },
    {
      img: '/game.svg',
      title: 'MyGamer Heaven – Game Review Website',
      desc: 'MyGamer Heaven – Game Review Website. Designed a clean, engaging platform for gamers to explore reviews, ratings, and featured titles—focused on readability, bold visuals, and smooth navigation.',
      link: 'https://www.figma.com/design/zhofrYbXnTS5tekg8qQNIW/MyGamer-Heaven-website?m=auto&t=mtlfE2nkWqK5i8xa-6'
    },
  ],
  [
    {
      img: '/asmo.svg',
      title: 'Asmo Bank – Digital Banking App UI',
      desc: 'Designed a sleek, user-focused banking app with intuitive navigation, clean dashboards, and smart money management features for a seamless digital finance experience.',
      link: 'https://www.figma.com/design/W33X0jHMZjY9yVNG7bADJI/Asmo-Bank?m=auto&t=mtlfE2nkWqK5i8xa-6'
    },
    {
      img: '/unvibe.svg',
      title: 'Unvibe – Landing Page Design',
      desc: 'Designed a bold, expressive landing page for Unvibe—a dev-focused platform with personality. The design captures the brand\'s energy while clearly showcasing features and driving sign-ups.',
      link: 'https://www.figma.com/design/fcgtAmLrWiq9JtiSrL4WQV/Unvibe-landing-page-Design?m=auto&t=mtlfE2nkWqK5i8xa-6'
    },
    {
      img: '/intel.svg',
      title: 'IntelliSales – E-commerce App for Selling Projects',
      desc: 'Designed a streamlined app for buying and selling projects, featuring easy browsing, secure transactions, and clear product details.',
      link: 'https://www.figma.com/design/7xL5KJeHBmtVF2UyaSEiKN/IntelliSales-App?m=auto&t=mtlfE2nkWqK5i8xa-6'
    },
    {
      img: '/scale.svg',
      title: 'Evaramedia – Snapchat Media Agency Website',
      desc: 'Designed a sleek, dynamic website for a Snapchat-focused media agency, showcasing their expertise, campaigns, and client success with a vibrant, engaging layout.',
      link: 'https://www.figma.com/design/JZYP56KW5TlD0yfKF2N4yz/Evaramedia-website?m=auto&t=mtlfE2nkWqK5i8xa-6'
    },
  ],
];

export default function RecentWork() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNavigation = (navDirection: 'next' | 'prev') => {
    setDirection(navDirection === 'next' ? 1 : -1);
    setPage((prev) => {
      const totalPages = works.length;
      if (navDirection === 'next') {
        return (prev + 1) % totalPages;
      }
      return (prev - 1 + totalPages) % totalPages;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section
      id="recentwork"
      className="w-full min-h-screen bg-black flex flex-col items-center py-16 px-4"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-8">
          <FaBoxOpen className="text-cyan-400 text-2xl" />
          Recent Works
        </h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-[-8rem] text-white top-1/2 -translate-y-1/2 bg-cyan-400 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => handleNavigation('prev')}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute right-[-8rem] text-white top-1/2 -translate-y-1/2 bg-cyan-400 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => handleNavigation('next')}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Works Grid with Animation */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {works[page].map((work, idx) => (
                  <motion.div
                    key={`${page}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#353B41] rounded-xl p-6 flex flex-col shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <div className="w-full h-48 md:h-56 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                      <Image
                        src={work.img}
                        alt={work.title}
                        width={400}
                        height={220}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-white text-lg font-bold mb-2">{work.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{work.desc}</p>
                    <a 
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View Design <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}