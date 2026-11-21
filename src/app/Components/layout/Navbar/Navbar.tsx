"use client";
import Link from "next/link";
import { IoCloseOutline, IoReorderThreeOutline } from "react-icons/io5";
import { useHideOnScroll } from "@/app/Hooks/NavScroll";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const isVisible = useHideOnScroll(100);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.slice(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

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

            {isHome && (
              <nav className="hidden md:flex items-center justify-between gap-6">
                {links.map(({ href, label }) => (
                  <a
                    href={href}
                    key={href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = href.slice(1);
                      document
                        .getElementById(targetId)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`nav-link font-semibold`}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            )}

            {!isHome && (
              <Link href="/" className="nav-link font-semibold text-xl">
                 Home
              </Link>
            )}

            {isHome && (
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden w-10 h-10 rounded-full bg-primary hover:bg-primary-accent text-background flex items-center justify-center transition-colors text-2xl cursor-pointer"
            >
              {menuOpen ? <IoCloseOutline /> : <IoReorderThreeOutline />}
            </button>
          )}
        </div>

            {isHome && menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden absolute inset-x-0 top-full bg-background border-t border-b border-secondary/30 shadow-lg py-4 px-6 flex flex-col gap-4"
          >
            {links.map(({ href, label }) => (
              <a
                href={href}
                key={href}
                onClick={(e) => handleLinkClick(e, href)}
                className="nav-link w-fit font-semibold text-lg py-1 border-b border-secondary/15 last:border-none"
              >
                {label}
              </a>
            ))}
          </nav>
        )}

          </div>
      </header>
    </>
  );
}
