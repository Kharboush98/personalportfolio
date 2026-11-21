"use client";

import React, { ReactNode, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface CardsSwiperProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => ReactNode;
  getKey?: (item: T, index: number) => string | number;
  loop?: boolean;
  className?: string;
}

const arrowClass =
  "hidden size-8 text-xl md:size-10 md:text-2xl lg:size-15 lg:text-5xl shrink-0 place-items-center rounded-full border-2 border-secondary text-secondary transition-colors hover:bg-secondary hover:text-primary dark:hover:text-secondary-accent sm:grid [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-30";


export default function CardsSwiper<T>({
  items,
  renderCard,
  getKey,
  loop = false,
  className = "",
}: CardsSwiperProps<T>) {
  const canLoop = loop && items.length >= 6;

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div className="flex items-center gap-3">
      <button ref={setPrevEl} aria-label="Previous" className={arrowClass}>
        <BiChevronLeft />
      </button>

      <Swiper
        modules={[FreeMode, Navigation, Pagination, Autoplay, Mousewheel]}
        slidesPerView={1}
        spaceBetween={16}
        loop={canLoop}
        grabCursor={true}
        freeMode={{ enabled: true, sticky: true }}
        navigation={{ prevEl, nextEl }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        mousewheel={{ forceToAxis: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className={`min-w-0 flex-1 pb-10 ${className}`}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={getKey ? getKey(item, idx) : idx} className="h-auto!">
            {renderCard(item, idx)}
          </SwiperSlide>
        ))}
      </Swiper>

      <button ref={setNextEl} aria-label="Next" className={arrowClass}>
        <BiChevronRight />
      </button>
    </div>
  );
}