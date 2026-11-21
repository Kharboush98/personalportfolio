"use client";
import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Links from "../../ui/Links/Links";
import SectionScroller from "../../ui/SectionScroller/SectionScroller";

export default function Introduction() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <section id="intro" className="font-playfair font-bold bg-background">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left order-2 md:order-0 selection:bg-primary-accent selection:text-background">
            <h1 className="flex flex-col items-center md:items-start gap-0 leading-1">
              <span className="lg:text-4xl text-3xl text-primary-accent ">
                Hello! I'm
              </span>

              <br />
              <div
                onClick={() => setIsActive((prev) => !prev)}
                className={`text-5xl md:text-6xl lg:text-8xl
                    relative isolate w-fit cursor-pointer select-none
                    transition-colors duration-300
                    after:absolute after:-inset-x-2 after:inset-y-0 after:-z-10
                    after:bg-primary after:origin-left after:transition-transform after:duration-300
                    hover:text-background hover:text-shadow-black hover:after:scale-x-100
                    ${
                        isActive
                        ? "text-background text-shadow-lg/15 text-shadow-black after:scale-x-100"
                        : "text-secondary-accent text-shadow-lg/15 text-shadow-black after:scale-x-0"
                    }`}
              >
                <span>Abdelrhman </span>
                <br />
                <span>Kharboush</span>
              </div>
            </h1>
            <span className="font-extrabold text-4xl text-primary-accent">
              Full-Stack Developer
            </span>
          </div>

          <div className="flex w-full justify-center ">
            <div className="relative size-70 md:size-60 lg:size-80">
              <div
                className="absolute flex items-center justify-centern inset-0 z-0 rounded-3xl
                    bg-primary rotate-12"
              ></div>
              <div
                className="relative z-10 flex items-center justify-center overflow-hidden rounded-3xl ring-4 ring-primary
              border-6 border-primary-accent bg-primary-accent -rotate-3 "
              >
                <img
                  src="/profile.jpeg"
                  alt="Abdelrhman Kharboush"
                  className="w-full h-full object-cover rounded-2xl selection:bg-primary-accent"
                />
              </div>
            </div>
          </div>
        </div>

        <Links />

        <SectionScroller targetId="projects"/>
      </section>
    </>
  );
}
