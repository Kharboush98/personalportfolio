import { Project } from '@/app/DataTypes/ProjectType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <>
     <Link
      href={`/projects/${project.slug}`}
      className={`group relative block h-full min-h-64 w-full overflow-hidden rounded-xl border-4 border-secondary text-secondary transition-all dark:text-secondary-accent ${className}`}
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/90"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4">
        <h3 className="font-heading text-xl font-bold leading-snug group-hover:text-2xl duration-300">
          {project.title}
        </h3>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-secondary text-secondary transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-background dark:border-secondary-accent/80 dark:text-secondary-accent dark:group-hover:border-secondary-accent dark:group-hover:bg-secondary-accent dark:group-hover:text-background">
          <BiChevronRight className="text-2xl" />
        </span>
      </div>
    </Link>
    </>
  )
}
