import { faqData } from '@/lib/data/faqData';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi'; 

const FAQ = () => {
  return (
    <section className="flex flex-col gap-12 md:gap-18 xl:gap-24 py-4 md:py-8 xl:py-12 px-4 max-w-300 mx-auto font-montserrat">
      
      {/* Top Header Section */}
      <div className="flex flex-col gap-4 justify-center items-center text-center md:max-w-[70%] xl:max-w-[50%] mx-auto">
        <h1 className="text-h1 font-bold text-[#252B42]">
          FAQ
        </h1>
        <p className="text-body font-medium text-brand-gray">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
        </p>  
      </div>

      {/* Grid Layout matching image_af6a7d.png */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-montserrat">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-[9px] p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.05)] border border-white flex gap-4 items-start"
          >
            {/* Bright blue right angle bracket/arrow */}
            <HiChevronRight className="text-[#23A6F0] text-xl shrink-0 mt-1" />
            
            <div className="flex flex-col gap-2">
              {/* Question */}
              <h3 className="text-[#252B42] font-bold text-body ">
                {item.question}
              </h3>
              {/* Answer */}
              <p className="text-[#737373] text-small leading-5 font-semibold">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;