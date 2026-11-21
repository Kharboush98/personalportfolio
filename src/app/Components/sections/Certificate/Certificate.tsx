"use client";
import React from "react";
import { FaCertificate } from "react-icons/fa6";
import CardsSwiper from "../../ui/CardSwiper/CardSwiper";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { Certificate as Cert } from "@/app/DataTypes/CertificateType";
import { certificates } from "@/app/Content/certificates";

export default function Certificate() {
  return (
    <>
      <section
        id="education"
        className="min-h-fit scroll-mt-16 py-22 border-b-4 border-secondary bg-primary font-playfair bg-grid-pattern"
      >
        <div className="container selection:bg-background selection:text-primary-accent">
          <h1 className="mb-6 text-shadow-lg/30 text-5xl sm:text-[66px] text-secondary font-bold text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <FaCertificate className="text-4xl lg:text-6xl drop-shadow-lg drop-shadow-black/30" />
              Certificates
            </div>
          </h1>

          <div className="px-10">
            <CardsSwiper<Cert>
              items={certificates}
              getKey={(cert, idx) => `${cert.Title}-${idx}`}
              renderCard={(cert) => (
                <div
                  className="group relative flex flex-col justify-between rounded-2xl h-full min-h-64 w-full p-6 
              bg-primary-accent border-2 border-secondary text-secondary
              transition-all duration-300 hover:border-secondary-accent dark:hover:border-secondary"
                >
                  <div>
                    <h3 className="text-2xl font-bold my-1">{cert.Title}</h3>
                    <div className="text-sm font-jetbrains font-semibold mb-8 opacity-75">
                      {cert.Date}
                    </div>
                    <p className="text-lg font-jetbrains">{cert.IssuedBy}</p>
                  </div>

                  {cert.Link && (
                    <div className="mt-6 flex justify-end">
                      <Link
                        href={cert.Link}
                        target={
                          cert.Link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          cert.Link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-1.5 text-sm font-jetbrains font-semibold underline-offset-4 hover:underline"
                      >
                        <span>View Credential</span>
                        <BiLinkExternal className="text-base" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </section>
    </>
  );
}
