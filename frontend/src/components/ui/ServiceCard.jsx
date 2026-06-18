import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// 1. Reusable Card Component (Pure JSX)
export const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col h-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      
      {/* Card Image Container */}
      <div className="relative w-full h-45 rounded-xl overflow-hidden mb-5">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col grow text-left">
        <h3 className="text-h3 font-bold text-brand-teal">
          {title}
        </h3>
        <p className="text-body font-regular text-brand-gray">
          {description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="mt-auto pt-2 text-left">
        <button className="inline-flex items-center gap-2 text-body text-brand-teal font-semibold hover:underline group">
          <span className='text-body font-bold' >

           Learn more 
          </span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">
            <ArrowRight size={18} />
          </span>
        </button>
      </div>

    </div>
  );
};