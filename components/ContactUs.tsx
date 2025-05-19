"use client"

import React from 'react';
import { FaXTwitter, FaFigma, FaDiscord, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { motion } from 'framer-motion';

const socials = [
  { icon: <FaXTwitter className="text-xl" />, label: 'X.com', url: '#' },
  { icon: <FaFigma className="text-xl" />, label: 'Figma', url: '#' },
  { icon: <FaDiscord className="text-xl" />, label: 'Discord', url: '#' },
  { icon: <FaInstagram className="text-xl" />, label: 'Instagram', url: '#' },
  { icon: <FaLinkedin className="text-xl" />, label: 'LinkedIn', url: '#' },
  { icon: <FaYoutube className="text-xl" />, label: 'YouTube', url: '#' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } })
};

export default function ContactUs() {
  return (
    <motion.section
      id="contact"
      className="w-full min-h-screen bg-[#353B41] flex flex-col items-center py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <MdOutlineMail className="text-cyan-400 text-3xl mb-2" />
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Contact Me</h2>
          <p className="text-gray-300 text-base text-center">Let&apos;s work together on your next project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form className="flex flex-col gap-4" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0}>
            <div>
              <label className="text-white text-sm mb-1 block">Name</label>
              <input
                type="text"
                className="w-full rounded-md bg-black/80 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-white text-sm mb-1 block">Email</label>
              <input
                type="email"
                className="w-full rounded-md bg-black/80 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="text-white text-sm mb-1 block">Message</label>
              <textarea
                className="w-full rounded-md bg-black/80 text-white px-4 py-2 h-32 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-base hover:bg-cyan-500 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Send Message <MdOutlineMail className="text-lg" />
            </button>
          </motion.form>
          {/* Social/Contact Links */}
          <motion.div className="bg-black/80 rounded-xl p-8 flex flex-col gap-4 shadow-md" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={1}>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Me</h3>
            <ul className="flex flex-col gap-4">
              {socials.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" tabIndex={0}>
                  <span className="bg-[#353B41] p-2 rounded-full flex items-center justify-center">{item.icon}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-base">{item.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* Email at the bottom */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <FaEnvelope className="text-gray-400" />
          <a href="mailto:bashondesign7@gmail.com" className="text-gray-300 underline hover:text-cyan-400 transition">bashondesign7@gmail.com</a>
        </div>
      </div>
    </motion.section>
  );
}