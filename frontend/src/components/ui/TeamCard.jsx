import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// Individual Team Member Card Component
export const TeamCard = ({ imageSrc, name, designation, description, socials }) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 gap-2">
      
      {/* Round Image Section */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={name} 
            fill 
            className="object-cover"
          />
        ) : (
          /* Placeholder background if image is downloading or empty as seen in Patrick's card initially */
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* Content Section */}
      <h3 className="text-[28px] font-bold text-brand-teal">
        {name}
      </h3>
      
      <p className="text-body font-bold text-brand-dark">
        {designation}
      </p>
      
      <p className="text-brand-gray font-regular px-2 grow">
        {description}
      </p>

      {/* Social Icons Container */}
      <div className="flex items-center gap-3 py-4">
        {Object.entries(socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            className="w-8 h-8 rounded-lg bg-[#EBF7F7] flex items-center justify-center text-[#409B9B] hover:bg-[#409B9B] hover:text-white transition-colors duration-200 font-bold text-xs"
            aria-label={platform}
          >
            {/* Soft code placeholders for platforms (F, T, I, In) */}
            {platform === 'facebook' && <FaFacebook className='w-3 h-3' />}
            {platform === 'twitter' && <FaTwitter className='w-3 h-3' /> }
            {platform === 'instagram' && <FaInstagram className="w-3 h-3" />}
            {platform === 'linkedin' && <FaLinkedinIn className="w-3 h-3" />}
          </a>
        ))}
      </div>

    </div>
  );
};