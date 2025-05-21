"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa";

const skills = [
  { label: "UI Design", value: 95 },
  { label: "UX Design", value: 90 },
  { label: "Figma", value: 95 },
  { label: "Design Systems", value: 85 },
  { label: "User Research", value: 85 },
  { label: "Prototyping", value: 90 },
];

// Smooth animation curve
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Skill() {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateAllSkills();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateAllSkills = () => {
    skills.forEach((skill, index) => {
      const duration = 2000 + Math.random() * 1500; // Slower: 2s–3.5s
      let start: number | null = null;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentValue = Math.floor(skill.value * easedProgress);

        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[index] = currentValue;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full bg-[#353B41] flex flex-col items-center py-16 px-4"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-10">
          <FaCode className="text-cyan-400 text-2xl" />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <div key={skill.label} className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-base font-medium">
                  {skill.label}
                </span>
                <span className="text-white text-sm font-semibold">
                  {animatedValues[index]}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-cyan-400 rounded-full transition-[width] ease-out duration-300"
                  style={{ width: `${animatedValues[index]}%` }}
                  tabIndex={0}
                  aria-label={`${skill.label} proficiency ${animatedValues[index]}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
