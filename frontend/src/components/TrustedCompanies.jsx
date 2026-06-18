"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const TrustedCompanies = () => {
  const companies = [
    { name: "Google", logoClass: "font-serif text-gray-600 font-bold text-2xl" },
    { name: "Facebook", logoClass: "font-sans text-gray-600 font-extrabold text-2xl tracking-tighter" },
    { name: "YouTube", logoClass: "font-sans text-gray-700 font-bold text-xl tracking-tight" },
    { name: "Pinterest", logoClass: "font-serif text-gray-600 font-bold text-2xl italic" },
    { name: "Twitch", logoClass: "font-sans text-gray-500 font-black text-2xl tracking-wide uppercase italic border-b-2 border-gray-400" },
    { name: "Webflow", logoClass: "font-sans text-gray-600 font-black text-2xl tracking-tight lowercase" },
  ];

  return (
    <section className="w-full text-center">

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 overflow-hidden">

        <h2 className="text-h2 font-bold text-brand-teal">
          Trusted by 10,000+ companies around the world
        </h2>

        <div className="w-full trusted-swiper-wrapper relative pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            allowTouchMove={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 6, spaceBetween: 50 },
            }}
            className="flex items-center"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index} className="flex! items-center justify-center h-auto!">
                <div className={`${company.logoClass} cursor-pointer hover:opacity-100 opacity-70 transition-opacity duration-300 whitespace-nowrap`}>
                  {company.name}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination flex items-center justify-center gap-2 mt-10"></div>
        </div>

      </div>

      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background-color: #7BC4C4 !important;
          opacity: 0.7 !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          margin: 0 !important;
        }
        
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #008080 !important;
          opacity: 1 !important;
          transform: scale(1.1);
        }
      `}</style>

      <div className="max-w-xl mx-auto flex flex-col gap-4 w-full">
        <h3 className="text-xl md:text-2xl font-bold text-brand-dark">
          Subscribe to our newsletter
        </h3>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center bg-white border border-[#ECECEC] rounded-full p-2 pl-5 shadow-sm max-w-lg mx-auto focus-within:ring-2 focus-within:ring-[#008080] transition-all w-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-sm md:text-base text-gray-700 placeholder-gray-400 focus:outline-none pr-3"
            required
          />

          <button
            type="submit"
            className="px-6 md:px-8 py-3 bg-[#008080] text-white font-semibold rounded-full hover:bg-[#006666] transition-colors duration-300 text-sm md:text-base whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>

    </section>
  );
};

export default TrustedCompanies;