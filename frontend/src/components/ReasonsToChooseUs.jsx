import React from 'react';
import Image from 'next/image';
import { surgeryRoomImg } from '@/assets';
import Button from './ui/Button';

const ReasonsToChooseUs = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left gap-10">

        <div className='flex flex-col gap-3' >

          
          {/* Main Heading */}
          <h2 className="text-h2 font-bold text-brand-teal">
            You have lots of reasons to choose us
          </h2>
          
          {/* Subtext Description */}
          <p className="text-body text-brand-gray font-regular">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
          </p>
        
        </div>
          
          {/* Action Buttons */}
          <div className=" flex flex-wrap items-center gap-4">
            {/* Get Started Button */}
            <button className="px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-full hover:bg-[#006666] transition-all duration-300 shadow-sm text-body min-w-35">
              Get started
            </button>
            
            {/* Talk to Sales Button */}
            <button className="px-8 py-3.5 bg-white border border-[#ECECEC] brand-teal font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm text-body min-w-35 text-brand-teal">
              Talk to sales
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 relative h-75 md:h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-md">
          <Image
            src= {surgeryRoomImg}
            alt="Doctors in surgery room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
        </div>

      </div>
    </div>
  );
};

export default ReasonsToChooseUs;