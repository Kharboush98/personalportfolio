"use client";
import React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Links() {
  return (
    <>
      <div className="section-container md:justify-center lg:justify-start py-0 px-20 flex flex-col md:flex-row items-center gap-8 mb-7">
        <button
          onClick={() =>
            window.open(
              "/AbdelrhmanKharboushCV.pdf",
              "_blank",
              "noopener,noreferrer",
            )
          }
          type="button"
          className="group shadow-md/30 hover:scale-110 h-14 px-8 cursor-pointer border-2 border-secondary-accent dark:border-secondary-accent rounded-full flex items-center justify-center gap-2
                 text-secondary-accent dark:text-secondary-accent text-sm font-semibold uppercase tracking-[2px] 
                 hover:bg-primary hover:text-background hover:border-primary transition-all duration-200 relative z-10 
                 active:text-background active:border-primary active:bg-primary active:scale-110"
        >
          <div className="flex flex-row items-center justify-center font-bold">
            <span>View CV</span>
            <BiChevronRight className="text-2xl group-hover:translate-x-3 group-hover:scale-150 duration-400 " />
          </div>
        </button>
        <div>
          <div className="flex gap-6">
            <a
              className="group shadow-md/30 w-9 h-9 border-2 border-secondary-accent dark:border-secondary-accent rounded-full flex justify-center items-center text-secondary-accent
               dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-background hover:transition-all duration-500 hover:scale-125
               active:text-background active:border-primary active:bg-primary active:scale-125"

              href="https://www.facebook.com/19kh98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="transition-transform duration-300 group-hover:scale-150" />
            </a>
            <a
              className="group shadow-md/30 w-9 h-9 border-2 border-secondary-accent dark:border-secondary-accent rounded-full flex justify-center items-center text-secondary-accent
               dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-background hover:transition-all duration-500 hover:scale-125
               active:text-background active:border-primary active:bg-primary active:scale-125"

              href="https://www.instagram.com/kharboush98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="transition-transform duration-300 group-hover:scale-150" />
            </a>
            <a
              className="group shadow-md/30 w-9 h-9 border-2 border-secondary-accent dark:border-secondary-accent rounded-full flex justify-center items-center text-secondary-accent
               dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-background hover:transition-all duration-500 hover:scale-125
               active:text-background active:border-primary active:bg-primary active:scale-125"

              href="https://www.linkedin.com/in/abdelrhman-kharboush/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="transition-transform duration-300 group-hover:scale-150" />
            </a>
            <div>
              <a
                className="group shadow-md/30 w-9 h-9 border-2 border-secondary-accent dark:border-secondary-accent rounded-full flex justify-center items-center text-secondary-accent
               dark:text-secondary-accent hover:border-primary text-base hover:bg-primary hover:text-background hover:transition-all duration-500 hover:scale-125
               active:text-background active:border-primary active:bg-primary active:scale-125"

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
    </>
  );
}
