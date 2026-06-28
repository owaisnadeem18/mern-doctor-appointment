import React from 'react'
import TestimonialsSection from './TestimonialSection'

const Testimonial = () => {
  return (
    <section className='flex flex-col gap-12' >
      {/* Top Header Section */}
          <div className="flex flex-col gap-4 justify-center items-center text-center md:max-w-[70%] xl:max-w-[50%] mx-auto">
            <h2 className="text-h2 font-bold text-brand-teal ">
              Testimonial
            </h2>
            <p className="text-body font-regular text-brand-gray">
              Lorem ipsum dolor sit amet adenocarcinoma adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
            </p>  
          </div>

        {/* Testimonial Cards Section */}
        <TestimonialsSection />

    </section>
  )
}

export default Testimonial
