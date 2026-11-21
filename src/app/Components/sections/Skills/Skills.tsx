"use client"
import React from "react";
import { BiSitemap } from "react-icons/bi";
import SkillList from "../../ui/SkillsList/SkillList";
import SectionScroller from "../../ui/SectionScroller/SectionScroller";

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Express.js",
  "Razor pages",
  "Tailwind CSS",
  "Bootstrap",
  "jQuery",
  "NextAuth.js",
  "React Hook Form",
  "Zod Validation",
];
const backendSkills = [
  "C#",
  "PHP",
  "ASP.NET",
  "Node.js",
  "SQL",
  "SQL Server",
  "MVC",
  "REST API design",
  "MongoDB",
];
const tools = ["Git","Github", "Unity", "Figma", "Wordpress", "WooCommerce", "Elementor" , "Kirki Customizer"];

export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="min-h-fit scroll-mt-16 pt-22 pb-16 bg-primary font-playfair bg-grid-pattern border-b-4 border-secondary"
      >
        <div className="container selection:bg-background selection:text-primary-accent">
          <h1 className="mb-18 text-shadow-lg/30 text-5xl sm:text-[66px] text-secondary font-bold text-center">
            <div className="flex items-center justify-center gap-4">
              <BiSitemap className="text-4xl sm:text-6xl drop-shadow-lg drop-shadow-black/50" />
              Skills
            </div>
          </h1>

          <SkillList title="Frontend" skills={frontendSkills} />
          <SkillList title="Backend" skills={backendSkills} />
          <SkillList title="Tools" skills={tools} />

        </div>
        {/* <SectionScroller targetId="education" bgClass="bg-primary" accentClass="border-primary-accent text-primary-accent" curveColorClass="text-primary"/> */}
      </section>
    </>
  );
}
