import React from 'react'
import SkillsDemo from '../SkillsDemo/SkillsDemo'

export default function Projects() {
  return (
    <section id="projects" className='min-h-screen scroll-mt-16 pt-24 bg-primary-accent '>
      <div className="container">
        <h1 className='text-shadow-lg/30 text-8xl text-secondary font-bold font-playfair'>Projects</h1>
      </div>
      <div>
        <SkillsDemo/>
      </div>
    </section>
  )
}
