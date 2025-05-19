"use client"

import React from 'react';
import { Users, Layers, Monitor, PenTool, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: <PenTool className="text-cyan-400 w-8 h-8 mb-2" />,
    title: 'UI/UX Design',
    desc: 'Creating intuitive and visually appealing interfaces that enhance user experience.',
  },
  {
    icon: <Users className="text-cyan-400 w-8 h-8 mb-2" />,
    title: 'User Research',
    desc: 'Conducting interviews and usability tests to understand user needs and behaviors.',
  },
  {
    icon: <Layers className="text-cyan-400 w-8 h-8 mb-2" />,
    title: 'Design Systems',
    desc: 'Building scalable and consistent design systems for seamless product development.',
  },
  {
    icon: <LayoutDashboard className="text-cyan-400 w-8 h-8 mb-2" />,
    title: 'Prototyping',
    desc: 'Creating interactive prototypes to test and validate design solutions.',
  },
  {
    icon: <Monitor className="text-cyan-400 w-8 h-8 mb-2" />,
    title: 'Responsive Design',
    desc: 'Ensuring perfect user experience across all devices and screen sizes.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } })
};

export default function WhatIDo() {
  return (
    <motion.section
      id="whatido"
      className="w-full min-h-screen bg-black flex flex-col items-center py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="text-white text-3xl font-bold mb-12 text-center">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-[#353B41] rounded-xl p-8 flex flex-col items-start shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            tabIndex={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={idx}
          >
            {skill.icon}
            <h3 className="text-white text-xl font-bold mb-2">{skill.title}</h3>
            <p className="text-gray-300 text-base">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
