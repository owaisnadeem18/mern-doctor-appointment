"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// Swiper styles import karna zaroori hai
import 'swiper/css'
import 'swiper/css/pagination'

const PartnerLogos = () => {
  // Demo logos array (Inko aap apne actual SVG paths ya Images se replace kar sakte hain)
  const logos = [
    { name: 'Google', className: 'font-semibold text-gray-600 text-xl' },
    { name: 'facebook', className: 'font-bold text-gray-600 text-xl tracking-tighter' },
    { name: 'YouTube', className: 'font-bold text-gray-600 text-xl' },
    { name: 'Pinterest', className: 'font-medium text-gray-600 text-xl' },
    { name: 'twitch', className: 'font-black text-gray-600 text-xl italic' },
    { name: 'webflow', className: 'font-semibold text-gray-600 text-xl' },
    
    { name: 'Google', className: 'font-semibold text-gray-600 text-xl' },
    { name: 'facebook', className: 'font-bold text-gray-600 text-xl tracking-tighter' },
  ]

  return (
    <section className="py-12 w-full">
      <div className="w-full flex flex-col gap-8">
        {/* Heading matching image_2725f9.png */}
        <h2 className=" text-h2 text-brand-teal text-center font-bold ">
          Trusted by 10,000+ companies around the world
        </h2>

        {/* Swiper Slider */}
        <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={2}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    el: '.custom-pagination',
  }}
  breakpoints={{
    480: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 40 },
    1280: { slidesPerView: 6, spaceBetween: 40 },
  }}
  observer={true}
  observeParents={true}
  observeSlideChildren={true}
  className="w-full min-w-0"
>
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center py-4 select-none">
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center grayscale contrast-200">
                {/* Agar images hain to <Image /> tag use karein, abhi k liye placeholder text hai */}
                <span className={`${logo.className} text-center`}>{logo.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Dot Pagination matching the design */}
        <div className="custom-pagination flex justify-center gap-2 " />
      </div>

      {/* Custom Styles for Swiper Pagination Dots */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #008080 !important;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #008080 !important;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  )
}

export default PartnerLogos