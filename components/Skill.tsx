"use client"

import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { label: 'UI Design', value: 95 },
  { label: 'UX Design', value: 90 },
  { label: 'Figma', value: 95 },
  { label: 'Design Systems', value: 85 },
  { label: 'User Research', value: 85 },
  { label: 'Prototyping', value: 90 },
];

const barVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } })
};

export default function Skill() {
  return (
    <motion.section
      id="skills"
      className="w-full bg-[#353B41] flex flex-col items-center py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-10">
          <FaCode className="text-cyan-400 text-2xl" />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, idx) => (
            <motion.div key={skill.label} className="mb-2" variants={barVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={idx}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-base font-medium">{skill.label}</span>
                <span className="text-white text-sm font-semibold">{skill.value}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full">
                <div
                  className="h-2 bg-cyan-400 rounded-full transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  style={{ width: `${skill.value}%` }}
                  tabIndex={0}
                  aria-label={`${skill.label} proficiency ${skill.value}%`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
