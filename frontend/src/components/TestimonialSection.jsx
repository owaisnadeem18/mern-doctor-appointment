import React from 'react'
import TestimonialCard from './ui/TestimonialCard'
import { testimonialsData } from '@/lib/data/testimonialsData'


const TestimonialsSection = () => {
  return (
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    
  )
}

export default TestimonialsSection