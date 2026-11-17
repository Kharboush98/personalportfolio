"use client";
import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";

interface SkillListProps {
  title?: string;
  skills: string[];
}

export default function SkillList({ title, skills }: SkillListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div ref={containerRef} className="space-y-5 mb-10">
      <div className="flex items-center justify-start gap-1 font-semibold text-secondary-accent dark:text-secondary text-2xl">

      <GoDotFill />
      {title && <h3 className="text-5xl font-semibold text-secondary-accent dark:text-secondary">{title}</h3>}
      </div>
      
      <div className="flex flex-wrap gap-4 font-jetbrains">
        {skills.map((skill, i) => (
          <span
            key={skill}
            data-pill
            style={{ animationDelay: `${i * 100}ms` }}
            className={`rounded-full px-4 py-2 border-2  border-secondary text-secondary cursor-pointer
              dark:hover:bg-secondary hover:bg-secondary-accent hover:text-background dark:hover:text-secondary-accent hover:border-primary hover:scale-115 transition-all duration-200 relative z-10 ${
              revealed
                ? "animate-pill-in motion-reduce:animate-none "
                : "opacity-0"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
    </>
  )
}
