import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

export default function Message() {
  return (
    <section className="w-full min-h-[40vh] bg-[#353B41] flex flex-col items-center justify-center py-16 px-4">
      <FaQuoteRight className="text-cyan-400 text-4xl mb-6" />
      <blockquote className="text-white text-xl md:text-2xl text-center max-w-2xl mx-auto font-medium mb-6">
        &quot;Great design is not just about aesthetics; it&apos;s about solving problems and creating experiences that make people&apos;s lives better.&quot;
      </blockquote>
      <a href="#" className="text-cyan-400 text-sm md:text-base hover:underline">My Design Philosophy</a>
    </section>
  )
}
