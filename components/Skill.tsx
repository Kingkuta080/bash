"use client"

import React from 'react';
import { FaCode } from 'react-icons/fa';

const skills = [
  { label: 'UI Design', value: 95 },
  { label: 'UX Design', value: 90 },
  { label: 'Figma', value: 95 },
  { label: 'Design Systems', value: 85 },
  { label: 'User Research', value: 85 },
  { label: 'Prototyping', value: 90 },
];

export default function Skill() {
  return (
    <section
      id="skills"
      className="w-full bg-[#353B41] flex flex-col items-center py-16 px-4"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-10">
          <FaCode className="text-cyan-400 text-2xl" />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill) => (
            <div key={skill.label} className="mb-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}