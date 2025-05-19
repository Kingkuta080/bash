import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatIDo from '@/components/WhatIDo'
import Skill from '@/components/Skill'
import WorkFlow from '@/components/WorkFlow'
import RecentWork from '@/components/RecentWork'
import ContactUs from '@/components/ContactUs'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skill />
      <WorkFlow />
      <RecentWork />
      <ContactUs />
    </div>
  )
}
