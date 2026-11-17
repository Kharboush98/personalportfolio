import React from "react";
import { BiChevronDown } from "react-icons/bi";

interface ScrollDividerProps {
  targetId: string;
  bgClass?: string;
  accentClass?: string;
  curveColorClass?: string;
}

export default function SectionScroller({ 
  targetId ,
  bgClass = "bg-background",
  curveColorClass = "text-background",
  accentClass = "border-primary-accent text-primary-accent",
}: ScrollDividerProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={`relative pb-18 ${bgClass}`}>
      <div className="absolute inset-x-0 bottom-0 z-10 h-0">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 96"
          fill="currentColor"
          className={`absolute -top-px left-1/2 w-72 -translate-x-1/2 md:w-100 ${curveColorClass}`}
        >
          <path d="M0 0C50 0 70 10 90 30C120 60 150 96 200 96C250 96 280 60 310 30C330 10 350 0 400 0Z" />
        </svg>

        <a
          href={`#${targetId}`}
          onClick={handleScroll}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span
            className={`grid size-20 place-items-center rounded-full border-3 text-5xl animate-bounce motion-reduce:animate-none ${accentClass}`}
          >
            <BiChevronDown />
          </span>
        </a>
      </div>
    </div>
    </>
  );
}
