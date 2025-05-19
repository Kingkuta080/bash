"use client"
import React, { useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const works = [
  [
    {
      img: '/kadsubeb.svg',
      title: 'Kad-SUBEB-Plus — Education Management System for Kaduna State',
      desc: 'Designed a digital system for Kaduna State to streamline teacher HR, attendance, infrastructure, and performance tracking—improving transparency, data-driven decisions, and service delivery in basic education.',
    },
    {
      img: '/power.svg',
      title: 'Powermate – Social Media Time Management App',
      desc: 'Powermate is a gamified screen time manager that helps you beat phone addiction with the support of friends. Block distracting apps, set custom limits, and stay accountable through group challenges and time requests. Build better habits, together.',
    },
    {
      img: '/safe.svg',
      title: 'Safe Heaven Exchanger – Crypto Exchange Platform UI',
      desc: 'Designed a secure, modern interface for a crypto exchange platform. Focused on clarity, trust, and ease of use—featuring real-time rates, transaction flows, and intuitive onboarding.',
    },
    {
      img: '/game.svg',
      title: 'MyGamer Heaven – Game Review Website',
      desc: 'MyGamer Heaven – Game Review Website. Designed a clean, engaging platform for gamers to explore reviews, ratings, and featured titles—focused on readability, bold visuals, and smooth navigation.',
    },
  ],
  [
    {
      img: '/asmo.svg',
      title: 'Asmo Bank – Digital Banking App UI',
      desc: 'Designed a sleek, user-focused banking app with intuitive navigation, clean dashboards, and smart money management features for a seamless digital finance experience.',
    },
    {
      img: '/unvibe.svg',
      title: 'Unvibe – Landing Page Design',
      desc: 'Designed a bold, expressive landing page for Unvibe—a dev-focused platform with personality. The design captures the brand\'s energy while clearly showcasing features and driving sign-ups.',
    },
    {
      img: '/intel.svg',
      title: 'IntelliSales – E-commerce App for Selling Projects',
      desc: 'Designed a streamlined app for buying and selling projects, featuring easy browsing, secure transactions, and clear product details.',
    },
    {
      img: '/scale.svg',
      title: 'Evaramedia – Snapchat Media Agency Website',
      desc: 'Designed a sleek, dynamic website for a Snapchat-focused media agency, showcasing their expertise, campaigns, and client success with a vibrant, engaging layout.',
    },
  ],
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } })
};

export default function RecentWork() {
  const [page, setPage] = useState(0);

  return (
    <motion.section
      id="recentwork"
      className="w-full min-h-screen bg-black flex flex-col items-center py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-8">
          <FaBoxOpen className="text-cyan-400 text-2xl" />
          Recent Works
        </h2>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 bg-cyan-400 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => setPage((p) => (p === 0 ? works.length - 1 : p - 1))}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 bg-cyan-400 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => setPage((p) => (p === works.length - 1 ? 0 : p + 1))}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {works[page].map((work, idx) => (
              <motion.div
                key={idx}
                className="bg-[#353B41] rounded-xl p-6 flex flex-col shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                tabIndex={0}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx}
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
                <p className="text-gray-300 text-sm">{work.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
