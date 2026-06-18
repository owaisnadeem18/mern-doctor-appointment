"use client";
import React, { useState } from 'react';

const FindDoctor = () => {

  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="w-full page-container bg-brand-offwhite border-2 border-brand-offwhite rounded-2xl p-6 md:p-8 font-primary shadow-sm flex flex-col gap-4 md:gap-6 ">
      {/* Heading */}
      <h2 className="text-h2 font-primary font-bold">
        Find A Doctor
      </h2>

      {/* Form Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
        
        {/* Name Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-brand-teal rounded-lg text-sm md:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008080] bg-white transition-all"
          />
        </div>

        {/* Speciality Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Speciality"
            className="w-full px-4 py-3 border border-brand-teal rounded-lg text-sm md:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008080] bg-white transition-all"
          />
        </div>

        {/* Available Toggle Switch */}
        <div className="flex items-center gap-3 min-w-fit cursor-pointer select-none" onClick={() => setIsAvailable(!isAvailable)}>
          <span className="text-sm md:text-base font-medium text-gray-700">
            Available
          </span>
          <div className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${isAvailable ? 'bg-[#008080]' : 'bg-gray-300'}`}>
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isAvailable ? 'translate-x-7' : 'translate-x-0'}`} />
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button className="w-full md:w-auto px-8 py-3 bg-[#008080] text-white font-semibold rounded-lg hover:bg-[#006666] transition-colors duration-300 text-sm md:text-base shadow-sm">
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default FindDoctor;