import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({ image, title, review, name, role }) => {
  return (
    <div className="bg-white rounded-2xl p-10 flex flex-col h-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      
        {/* User Avatar Image */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 bg-gray-100">
        <Image
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Review Title */}
      <h4 className="text-brand-dark font-bold text-[16px] md:text-[20px] xl:text-[22px]">
        “{title}”
      </h4>

      {/* Review Body Text */}
      <p className="text-body text-brand-gray font-regular">
        {review}
      </p>

      {/* User Info (Pinned to bottom via flex-grow) */}
      <div className="pt-6">
        <h5 className="text-brand-teal font-bold text-body">
          {name}
        </h5>
        <p className="text-body text-brand-gray font-regular">
          {role}
        </p>
      </div>

    </div>
  )
}

export default TestimonialCard
