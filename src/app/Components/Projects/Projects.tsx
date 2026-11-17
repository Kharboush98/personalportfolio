"use client"
import React from "react";
import { IoIosCodeWorking } from "react-icons/io";
import { projects } from "@/app/Content/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionScroller from "../SectionScroller/SectionScroller";

const slots = [
  "lg:col-start-2 lg:col-span-4 lg:row-start-1 lg:row-span-7",
  "lg:col-start-6 lg:col-span-6 lg:row-start-1 lg:row-span-9",
  "lg:col-start-12 lg:col-span-5 lg:row-start-2 lg:row-span-7",
  "lg:col-start-1 lg:col-span-5 lg:row-start-8 lg:row-span-8",
  "lg:col-start-6 lg:col-span-6 lg:row-start-10 lg:row-span-9",
  "lg:col-start-12 lg:col-span-4 lg:row-start-9 lg:row-span-8",
];

const orderClasses = [
  "order-1 lg:order-none",
  "order-2 lg:order-none",
  "order-3 lg:order-none",
  "order-4 lg:order-none",
  "order-5 lg:order-none",
  "order-6 lg:order-none",
];

const HoverAnim = [
  "lg:hover:-translate-x-2 lg:hover:-translate-y-2 lg:hover:shadow-[8px_8px_0_0] lg:hover:shadow-secondary",
  "lg:hover:-translate-y-3 lg:hover:shadow-[0px_8px_0_0] lg:hover:shadow-secondary",
  "lg:hover:translate-x-2 lg:hover:-translate-y-2 lg:hover:shadow-[-8px_8px_0_0] lg:hover:shadow-secondary",
  "lg:hover:-translate-x-2 lg:hover:translate-y-2 lg:hover:shadow-[8px_-8px_0_0] lg:hover:shadow-secondary",
  "lg:hover:translate-y-2 lg:hover:shadow-[0px_-8px_0_0] lg:hover:shadow-secondary",
  "lg:hover:translate-x-2 lg:hover:translate-y-2 lg:hover:shadow-[-8px_-8px_0_0] lg:hover:shadow-secondary",
];

export default function Projects() {

  return (
    <section
      id="projects"
      className="min-h-fit scroll-mt-16 pt-32 bg-primary-accent font-playfair "
    >
      <div className="container selection:bg-background selection:text-primary-accent">
        <h1 className="mb-18 text-shadow-lg/30 text-5xl sm:text-[66px] text-secondary font-bold text-center header-underline">
          <div className="flex items-center justify-center gap-4">
            <IoIosCodeWorking className="text-4xl sm:text-6xl drop-shadow-lg drop-shadow-black/50" />
            Projects
          </div>
        </h1>

        <div className="hover:drop-shadow-2xl hover:drop-shadow-black hover:translate-x-1 hover:translate-y-1"></div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-16 lg:grid-rows-18 mb-12">
          {slots.map((slotClass, i) => {
            const project = projects.find((p) => p.slot === i + 1);
            if (!project) return null;

            const order = project.mobileOrder ?? project.slot ?? i + 1;

            return (
              <ProjectCard
                key={project.slug}
                project={project}
                className={`${slotClass}  ${orderClasses[order - 1]} ${HoverAnim[i] ?? ""}`}
              />
            );
          })}
        </div>

      </div>

      <SectionScroller targetId="skills" bgClass="bg-primary-accent" accentClass="border-primary text-primary" curveColorClass="text-primary-accent"/>
    </section>
  );
}
