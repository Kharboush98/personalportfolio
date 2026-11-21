"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosCodeWorking } from "react-icons/io";
import { projects } from "@/app/Content/projects";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import SectionScroller from "../../ui/SectionScroller/SectionScroller";
import { motion, useInView, Variants } from "framer-motion";

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

// const HoverAnim = [
//   "lg:hover:-translate-x-2 lg:hover:-translate-y-2 lg:hover:shadow-[8px_8px_0_0] lg:hover:shadow-secondary-accent lg:dark:hover:shadow-secondary",
//   "lg:hover:-translate-y-3 lg:hover:shadow-[0px_8px_0_0] lg:hover:shadow-secondary-accent lg:dark:hover:shadow-secondary",
//   "lg:hover:translate-x-2 lg:hover:-translate-y-2 lg:hover:shadow-[-8px_8px_0_0] lg:hover:shadow-secondary-accent lg:dark:hover:shadow-secondary",
//   "lg:hover:-translate-x-2 lg:hover:translate-y-2 lg:hover:shadow-[8px_-8px_0_0] lg:hover:shadow-secondary-accent lg:dark:hover:shadow-secondary",
//   "lg:hover:translate-y-2 lg:hover:shadow-[0px_-8px_0_0] lg:hover:shadow-secondary-accent lg:dark:hover:shadow-secondary",
//   "lg:hover:translate-x-2 lg:hover:translate-y-2 lg:hover:shadow-[-8px_-8px_0_0] lg:hover:shadow-secondary-accent lg:dark:hover:shadow-secondary",
// ];

const HoverAnim = [
  "lg:hover:-translate-x-2 lg:hover:-translate-y-2 ",
  "lg:hover:-translate-y-4 ",
  "lg:hover:translate-x-2 lg:hover:-translate-y-2",
  "lg:hover:-translate-x-2 lg:hover:translate-y-2 l",
  "lg:hover:translate-y-4",
  "lg:hover:translate-x-2 lg:hover:translate-y-2",
];


const LG_REVEAL_ORDER = [2, 5, 3, 4, 1, 6 ];

const SLOT_OFFSETS: Record<number, { x?: number; y?: number }> = {
  1: { x: -30, y: 0 },
  2: { x: 0, y: -30 },
  3: { x: 30, y: 0 },
  4: { x: -30, y: 20 },
  5: { x: 0, y: 30 },
  6: { x: 30, y: 20 },
};

const lgCellVariants: Variants = {
  hidden: (slotNumber: number) => {
    const offset = SLOT_OFFSETS[slotNumber] ?? { x: 0, y: 20 };
    return {
      opacity: 0,
      x: offset.x ?? 0,
      y: offset.y ?? 0,
    };
  },
  visible: (slotNumber: number) => {
    const step = LG_REVEAL_ORDER.indexOf(slotNumber);

    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: (step === -1 ? 0 : step) * 0.15,
      },
    };
  },
};

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isLgScreen, setIsLgScreen] = useState(false);

  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLgScreen(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLgScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-fit scroll-mt-16 pt-32 pb-16 border-b-4 border-secondary bg-primary-accent font-playfair bg-diagonal-hatch"
    >
      <div className="container selection:bg-background selection:text-primary-accent">
        <h1 className="mb-18 text-shadow-lg/30 text-5xl sm:text-[66px] text-secondary dark:text-secondary font-bold text-center">
          <div className="flex items-center justify-center gap-4">
            <IoIosCodeWorking className="text-4xl sm:text-6xl drop-shadow-lg drop-shadow-black/50" />
            Projects
          </div>
        </h1>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-16 lg:grid-rows-18 mb-12"
        >
          {slots.map((slotClass, i) => {
            const slotNumber = i + 1;
            const project = projects.find((p) => p.slot === slotNumber);
            if (!project) return null;

            const order = project.mobileOrder ?? project.slot ?? slotNumber;

            if (isLgScreen) {
              return (
                <motion.div
                  key={`${project.slug}-lg`}
                  custom={slotNumber}
                  variants={lgCellVariants}
                  initial="hidden"
                  animate={isGridInView ? "visible" : "hidden"}
                  className={`${slotClass} ${orderClasses[order - 1]}`}
                >
                  <ProjectCard
                    project={project}
                    className={HoverAnim[i] ?? ""}
                  />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={`${project.slug}-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`${slotClass} ${orderClasses[order - 1]}`}
              >
                <ProjectCard
                  project={project}
                  className={HoverAnim[i] ?? ""}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* <SectionScroller
        targetId="skills"
        bgClass="bg-primary-accent bg-linen-weave"
        accentClass="border-primary text-primary"
        curveColorClass="text-primary-accent"
      /> */}
    </section>
  );
}
