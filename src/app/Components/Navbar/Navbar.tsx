"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useHideOnScroll } from "@/app/Hooks/NavScroll";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isVisible = useHideOnScroll(100);

  return (
    <>
      <header
        className={`sticky top-0 shadow-md shadow-primary-accent/25 bg-background dark:bg-background font-playfair md:text-xl lg:text-2xl z-50 
                transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="nav-container">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
            <Link
              href={"/"}
              className="lg:text-5xl md:text-3xl text-2xl text-primary font-semibold selection:bg-primary-accent selection:text-background"
            >
              Personal Portfolio
            </Link>

            <nav className="hidden md:flex items-center justify-between gap-6">
              {links.map(({ href, label }) => (
                <Link
                  href={href}
                  key={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = href.slice(1);
                    document
                      .getElementById(targetId)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`nav-link font-semibold ${pathname.startsWith(href) ? "active" : ""}`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <nav
              className="md:hidden w-10 h-10 rounded-full bg-primary hover:bg-primary-accent text-white flex
                            items-center justify-center transition-colors text-2xl"
            >
              <IoReorderThreeOutline />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
