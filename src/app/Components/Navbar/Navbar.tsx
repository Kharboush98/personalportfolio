"use client"
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '../Context/ThemeToggle'
import { usePathname } from 'next/navigation';

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {

     const pathname = usePathname();

    return (
        <>
            <header className='sticky top-0 shadow-sm bg-primary-accent dark:bg-secondary font-playfair md:text-xl lg:text-2xl z-50'>
                    <div className="nav-container">
                        <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
                            <Link href={"/"} className='lg:text-5xl md:text-3xl text-secondary dark:text-primary'>Personal Portfolio</Link>

                            <nav className='flex items-center justify-between gap-6'>
                                {links.map(({href , label}) => (
                                    <Link 
                                        href={href}
                                        key={href}
                                        className={`nav-link ${pathname.startsWith(href) ? "active" : ""}`}>
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
            </header>
        </>
    )
}
