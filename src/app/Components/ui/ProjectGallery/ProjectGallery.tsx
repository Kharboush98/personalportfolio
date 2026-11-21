"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BiX } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProjectImage } from "@/app/DataTypes/ProjectType";

export default function ProjectGallery({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (images.length === 0) return null;

  const openModal = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          aria-label="Open image full screen text"
          className="text-primary font-bold cursor-pointer mb-2"
        >
          View in full Screen
        </button>

        <button
          type="button"
          onClick={openModal}
          aria-label="Open image full screen"
          className="relative mb-4 block aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl border-2 border-primary bg-secondary/50 dark:border-primary-accent"
        >
          <Image
            src={images[current].src}
            alt={`${title} screenshot ${current + 1}`}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className={
              images[current].fit === "contain"
                ? "object-contain"
                : "object-cover"
            }
          />
        </button>

        {images.length > 1 && (
          <div className="flex mb-2 gap-2 overflow-x-auto touch-pan-x pb-2 pt-1 px-1 scroll-smooth">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                aria-current={i === current}
                className={`relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-secondary/50 transition-opacity sm:w-28 ${
                  i === current
                    ? "border-primary dark:border-primary-accent"
                    : "border-transparent opacity-60 hover:opacity-100 active:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="112px"
                  className={
                    img.fit === "contain" ? "object-contain" : "object-cover"
                  }
                />
              </button>
            ))}
          </div>
        )}

        <dialog
          ref={dialogRef}
          onClose={() => {
            setIsOpen(false);
            document.body.style.overflow = "";
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          className="fixed inset-0 m-0 size-full max-h-none max-w-none items-center justify-center bg-black/90 p-4 open:flex sm:p-8"
        >
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/15 text-3xl text-white transition-colors hover:bg-white/30 active:bg-white/30"
          >
            <BiX />
          </button>

          {images.length > 1 && (
            <p className="absolute left-4 top-4 z-10 rounded-full bg-white/15 px-3 py-1 text-sm text-white">
              {current + 1} / {images.length}
            </p>
          )}

          {isOpen && (
            <Swiper
              modules={[Navigation, Keyboard]}
              initialSlide={current}
              onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
              navigation={images.length > 1}
              keyboard={{ enabled: true }}
              spaceBetween={24}
              style={
                {
                  "--swiper-navigation-color": "#ffffff",
                } as React.CSSProperties
              }
              className="h-full w-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={img.src}>
                  <Image
                    src={img.src}
                    alt={`${title} screenshot ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </dialog>
      </div>
    </>
  );
}
