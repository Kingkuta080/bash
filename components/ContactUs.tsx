"use client"

import React, { useState, useRef } from 'react';
import { FaXTwitter, FaFigma, FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const socials = [
  { icon: <FaXTwitter className="text-xl" />, label: 'X.com', url: 'https://x.com/BashirI74692251' },
  { icon: <FaFigma className="text-xl" />, label: 'Figma', url: 'https://www.figma.com/design/ueunVDBAKkeT6EAc4IV7S3?node-id=76-46#1262220332' },
  { icon: <FaDiscord className="text-xl" />, label: 'Discord', url: 'https://discord.com/users/bash2533' },
  { icon: <FaInstagram className="text-xl" />, label: 'Instagram', url: 'https://www.instagram.com/bash_uiux/' },
  { icon: <FaLinkedin className="text-xl" />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/bashondesign/' },
];

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_plijf2y',
        'template_lc5ismv',
        formRef.current!,
        'pnriUgarsENG1pehg'
      );

      setForm({
        name: '',
        email: '',
        message: '',
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#353B41] flex flex-col items-center py-16 px-4"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <MdOutlineMail className="text-cyan-400 text-3xl mb-2" />
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Contact Me</h2>
          <p className="text-gray-300 text-base text-center">Let&apos;s work together on your next project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-white text-sm mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md bg-black/80 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="text-white text-sm mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md bg-black/80 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="text-white text-sm mb-1 block">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md bg-black/80 text-white px-4 py-2 h-32 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-base hover:bg-cyan-500 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'} <MdOutlineMail className="text-lg" />
            </button>
          </form>
          {/* Social/Contact Links */}
          <div className="bg-black/80 rounded-xl p-8 flex flex-col gap-4 shadow-md">
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Me</h3>
            <ul className="flex flex-col gap-4">
              {socials.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400" tabIndex={0}>
                  <span className="bg-[#353B41] p-2 rounded-full flex items-center justify-center">{item.icon}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-base">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}