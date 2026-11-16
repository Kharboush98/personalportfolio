import React from "react";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa6";

export default function Education() {
  return (
    <>
      <section
        id="education"
        className="min-h-fit scroll-mt-16 py-32 bg-primary-accent font-playfair "
      >
        <div className="container selection:bg-background selection:text-primary-accent">
          <h1 className="mb-6 text-shadow-lg/30 text-5xl sm:text-[66px] text-secondary font-bold text-center">
            <div className="flex items-center justify-center gap-4">
              <FaUserGraduate className="text-4xl sm:text-6xl drop-shadow-lg drop-shadow-black/30" />
              Education
            </div>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 py-5">
            
            <div className="relative group isolate block p-2 h-full w-full min-h-64">
                <div
                    className="pointer-events-none absolute inset-0 -z-20 rounded-2xl bg-secondary opacity-0 blur-2xl scale-95
                    transition-all duration-300 group-hover:opacity-40 group-hover:scale-100 group-active:opacity-60 group-active:scale-125"
                />

              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-secondary opacity-0 scale-95
                 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              ></div>

              <div
                className="relative rounded-2xl h-full w-full p-4 bg-primary-accent border-3
                border-secondary group-hover:border-secondary-accent z-10 transition-colors duration-300 group-hover:bg-transparent
                 group-active:bg-transparent"
              >
                <div className="relative z-50 p-4">
                  <div className="text-2xl font-bold my-1 duration-500 text-secondary group-hover:text-primary group-hover:text-shadow-lg/10">
                    Bachelors degree in Computer Engineering
                  </div>

                  <div className="text-sm font-jetbrains font-semibold mb-10 text-secondary/70 duration-500 group-hover:text-secondary-accent">
                    Sep 2017 - Jun 2022
                  </div>

                  <div className="text-lg duration-500 text-secondary dark:group-hover:text-secondary-accent group-hover:text-primary font-jetbrains">
                    Pharos University &  KTH Royal Institute of Technology
                  </div>
                </div>
                <div className="absolute bottom-2 right-3 flex flex-row items-center justify-center gap-2 duration-500 text-secondary group-hover:text-primary">
                  <FaGraduationCap  className="text-[18px]" />
                  <div className="font-bold font-jetbrains">3.0</div>
                </div>
              </div>
            </div>

            <div className="relative group isolate block p-2 h-full w-full min-h-64">
                <div
                    className="pointer-events-none absolute inset-0 -z-20 rounded-2xl bg-secondary opacity-0 blur-2xl scale-95
                    transition-all duration-300 group-hover:opacity-40 group-hover:scale-100 group-active:opacity-60 group-active:scale-125"
                />

              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-secondary opacity-0 scale-95
                 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              ></div>

              <div
                className="relative rounded-2xl h-full w-full p-4 bg-primary-accent border-3
                border-secondary group-hover:border-secondary-accent z-10 transition-colors duration-300 group-hover:bg-transparent
                 group-active:bg-transparent"
              >
                <div className="relative z-50 p-4">
                  <div className="text-2xl font-bold my-1 duration-500 text-secondary group-hover:text-primary group-hover:text-shadow-lg/10">
                    ReactJS Front-End Development Course
                  </div>

                  <div className="text-sm font-jetbrains font-semibold mb-10 text-secondary/70 duration-500 group-hover:text-secondary-accent">
                    Nov 2025 - Mar 2026
                  </div>

                  <div className="text-lg duration-500 text-secondary dark:group-hover:text-secondary-accent group-hover:text-primary font-jetbrains">
                    Route Academy | Programming & Web Development Courses

                  </div>
                </div>
              </div>
            </div>

            <div className="relative group isolate block p-2 h-full w-full min-h-64 ">
                <div
                    className="pointer-events-none absolute inset-0 -z-20 rounded-2xl bg-secondary opacity-0 blur-2xl scale-95
                    transition-all duration-300 group-hover:opacity-40 group-hover:scale-100 group-active:opacity-60 group-active:scale-125"
                />

              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-secondary opacity-0 scale-95
                 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              ></div>

              <div
                className="relative rounded-2xl h-full w-full p-4 bg-primary-accent border-3
                border-secondary group-hover:border-secondary-accent z-10 transition-colors duration-300 group-hover:bg-transparent
                 group-active:bg-transparent"
              >
                <div className="relative z-50 p-4">
                  <div className="text-2xl font-bold my-1 duration-500 text-secondary group-hover:text-primary group-hover:text-shadow-lg/10">
                    .Net Back-End Development Course
                  </div>

                  <div className="text-sm font-jetbrains font-semibold mb-10 text-secondary/70 duration-500 group-hover:text-secondary-accent">
                    Jun 2026 - Dec 2026
                  </div>

                  <div className="text-lg duration-500 text-secondary dark:group-hover:text-secondary-accent group-hover:text-primary font-jetbrains">
                    Route Academy | Programming & Web Development Courses
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
