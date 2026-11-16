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
      className={`group relative block min-h-64 overflow-hidden transition-all text-secondary dark:text-secondary-accent border-3 border-secondary ${className}`}
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <h3 className="font-heading text-xl font-bold">{project.title}</h3>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-secondary/80 text-secondary dark:text-secondary-accent dark:border-secondary-accent/80">
          <BiChevronRight className='text-2xl'/>
        </span>
      </div>
    </Link> 
    </>
  )
}
