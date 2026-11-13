"use client";
import React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Introduction() {
  return (
    <>
      <section id="intro" className="font-playfair font-bold">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left order-2 md:order-0">
            <span className="font-extrabold text-2xl text-primary">
              Full-Stack Developer
            </span>
            <h1 className="flex flex-col items-center md:items-start gap-0 leading-3">
              <span className="lg:text-4xl text-3xl text-secondary-accent dark:text-white">
                Hello! I'm
              </span>

              <br />
              <div
                className="lg:text-8xl md:text-7xl text-5xl text-primary
                relative isolate w-fit overflow-hidden transition-colors duration-300
                hover:text-background after:absolute after:inset-0 after:-z-10 after:origin-left cursor-pointer
                after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                <span>Abdelrhman </span>
                <br />
                <span>Kharboush</span>
              </div>
            </h1>
          </div>

          <div className="flex w-full justify-center ">
            <div className="relative size-70 md:size-60 lg:size-80">
              <div
                className="absolute flex items-center justify-centern inset-0 z-0 rounded-4xl
                    bg-primary-accent dark:bg-primary rotate-12"
              ></div>
              <div
                className="relative z-10 flex items-center justify-center  overflow-hidden rounded-4xl
              border-6 border-primary-accent bg-primary dark:border-primary dark:bg-primary-accent -rotate-3"
              >
                <img
                  src="/profile.jpeg"
                  alt="Abdelrhman Kharboush"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="section-container md:justify-center lg:justify-start py-0 px-20 flex flex-col md:flex-row items-center gap-8
            text-primary-accent dark:text-secondary-accent mb-7"
        >
          <button
            onClick={() =>
              window.open(
                "/AbdelrhmanKharboushCV.pdf",
                "_blank",
                "noopener,noreferrer",
              )
            }
            type="button"
            className="group h-14 px-8 cursor-pointer border-2 border-primary-accent dark:border-secondary-accent rounded-full flex items-center justify-center gap-2
            text-primary-accent dark:text-secondary-accent text-sm font-semibold uppercase tracking-[2px] 
            hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-200 relative z-10"
          >
            <div className="flex flex-row items-center justify-center font-bold">
              <span>View CV</span>
              <BiChevronRight className="text-2xl group-hover:translate-x-3 group-hover:scale-150 duration-400 " />
            </div>
          </button>
          <div>
            <div className="flex gap-6">
              <a
                className="group w-9 h-9 border-2 border-primary-accent dark:border-secondary-accent rounded-full flex justify-center items-center
                text-primary-accent dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-secondary hover:transition-all duration-500"
                href="https://www.facebook.com/19kh98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="transition-transform duration-300 group-hover:scale-150" />
              </a>
              <a
                className="group w-9 h-9 border-2 border-primary-accent dark:border-secondary-accent rounded-full flex justify-center items-center
                text-primary-accent dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-secondary hover:transition-all duration-500"
                href="https://www.instagram.com/kharboush98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="transition-transform duration-300 group-hover:scale-150" />
              </a>
              <a
                className="group w-9 h-9 border-2 border-primary-accent dark:border-secondary-accent rounded-full flex justify-center items-center
                text-primary-accent dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-secondary hover:transition-all duration-500"
                href="https://www.linkedin.com/in/abdelrhman-kharboush/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="transition-transform duration-300 group-hover:scale-150" />
              </a>
              <div>
                <a
                  className="group w-9 h-9 border-2 border-primary-accent dark:border-secondary-accent rounded-full flex justify-center items-center
                text-primary-accent dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-secondary hover:transition-all duration-500"
                  href="https://github.com/Kharboush98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="transition-transform duration-300 group-hover:scale-150" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-18 bg-background">
          <div className="absolute inset-x-0 bottom-0 z-10 h-0">
            <svg
              aria-hidden
              viewBox="0 0 400 96"
              fill="currentColor"
              className="absolute -top-px left-1/2 w-72 -translate-x-1/2 text-background md:w-100"
            >
              <path d="M0 0C50 0 70 10 90 30C120 60 150 96 200 96C250 96 280 60 310 30C330 10 350 0 400 0Z" />
            </svg>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Scroll to projects"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="grid size-20 place-items-center rounded-full border border-primary-accent text-primary-accent text-5xl animate-bounce motion-reduce:animate-none">
                <BiChevronDown />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
