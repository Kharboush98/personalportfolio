"use client";
import { useEffect, useRef, useState } from "react";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

export default function SkillsDemo() {
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
     <section className="site-container section-container">
      <div
        ref={containerRef}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill, i) => (
          <span
            key={skill}
            data-pill
            style={{ animationDelay: `${i * 100}ms`}}
            className={`rounded-full border border-secondary px-4 py-2 text-secondary ${
              revealed ? "animate-pill-in motion-reduce:animate-none" : "opacity-0"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
    </>
  )
}
