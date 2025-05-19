import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatIDo from '@/components/WhatIDo'
import Skill from '@/components/Skill'
import RecentWork from '@/components/RecentWork'
import ContactUs from '@/components/ContactUs'
import React from 'react'
import Message from '@/components/Message'
export default function page() {
  return (
    <div>
      <Hero />
      <About />
      <Message /> 
      <WhatIDo />
      <Skill />
      <RecentWork />
      <ContactUs />
    </div>
  )
}
