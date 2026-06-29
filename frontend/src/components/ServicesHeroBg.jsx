"use client"

import { servicesHeroBgImg } from '@/assets';
import Image from 'next/image';
import React from 'react';

const ServicesHeroBg = () => {
  return (
    // Relative wrapper wrapper taaki Next.js background image iske layout par fit ho sake
    <section className="relative w-full flex items-center justify-center py-16 px-4 md:px-8 xl:px-24 font-montserrat overflow-hidden">
      
      {/* Background Image matching image_b06278.jpg */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={servicesHeroBgImg}
          alt="Hospital Building Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Halki dark overlay taaki white text easily readable rahe */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Main Container - Left: Content, Right: Form */}
      <div className="w-full max-w-300 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Dynamic Text & Buttons */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-white text-left">
          <h1 className="text-montserrat-h1 font-bold leading-tight tracking-tight">
            Meet the Best <br /> Hospital
          </h1>
          <p className="text-h4 font-medium text-white font-montserrat max-w-125">
            We know how large objects will act, but things on a small scale.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-[#00828A] hover:bg-[#006A70] text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm tracking-wide">
              Get Quote Now
            </button>
            <button className="border border-white hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm tracking-wide">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="lg:col-span-5 bg-white rounded-[10px] p-8 md:p-10 shadow-2xl w-full max-w-112.5 mx-auto lg:ml-auto font-montserrat flex flex-col gap-12
        ">
          <h2 className="text-[#252B42] text-h3 font-bold ">
            Book Appointment
          </h2>
          
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#252B42] text-small font-semibold ">Name *</label>
              <input 
                type="text" 
                placeholder="Full Name *" 
                required
                className="w-full px-5 py-3.5 border border-[#E6E6E6] rounded-[5px] bg-white text-small text-[#737373] focus:outline-none focus:border-[#00828A]"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#252B42] text-small font-semibold">Email address *</label>
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                required
                className="w-full px-5 py-3.5 border border-[#E6E6E6] rounded-[5px] bg-white text-small text-[#737373] focus:outline-none focus:border-[#00828A]"
              />
            </div>

            {/* Department Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-[#252B42] text-small font-semibold">Departement *</label>
              <div className="relative">
                <select 
                  required
                  defaultValue=""
                  className="w-full px-5 py-3.5 border border-[#E6E6E6] rounded-[5px] bg-white text-small text-[#737373]  appearance-none focus:outline-none focus:border-[#00828A] cursor-pointer"
                >
                  <option value="" disabled>Please Select</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#737373]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Time Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-[#252B42] text-small font-semibold">Time *</label>
              <div className="relative">
                <select 
                  required
                  defaultValue=""
                  className="w-full px-5 py-3.5 border border-[#E6E6E6] rounded-[5px] bg-white text-small text-[#737373] appearance-none focus:outline-none focus:border-[#00828A] cursor-pointer"
                >
                  <option value="" disabled>4:00 Available</option>
                  <option value="09-am">09:00 AM Available</option>
                  <option value="12-pm">12:00 PM Available</option>
                  <option value="04-pm">04:00 PM Available</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#737373]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#00828A] hover:bg-[#006A70] text-white font-bold py-4 rounded-[5px] transition-all text-sm mt-4 tracking-wide shadow-md"
            >
              Book Appointment
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ServicesHeroBg;