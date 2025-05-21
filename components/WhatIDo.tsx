"use client"

import React from 'react';
import { Users, Layers, Monitor, PenTool, LayoutDashboard } from 'lucide-react';

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

export default function WhatIDo() {
  return (
    <section
      id="whatido"
      className="w-full min-h-screen bg-black flex flex-col items-center py-16 px-4"
    >
      <h2 className="text-white text-3xl font-bold mb-12 text-center">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-[#353B41] rounded-xl p-8 flex flex-col items-start shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            tabIndex={0}
          >
            {skill.icon}
            <h3 className="text-white text-xl font-bold mb-2">{skill.title}</h3>
            <p className="text-gray-300 text-base">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}