import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Clock, ArrowRight } from 'lucide-react'
import Button from './ui/Button'

// Replace with your actual image imports
// import heroBg from '@/assets/hero-bg.jpg'
// import doctorImage from '@/assets/doctor-image.png'

const HeroSection = () => {
  return (
    <section className="relative ">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px]  rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px]  rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        
      </div>

      <div className="relative flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          
          {/* Left Content */}
          <div className="flex flex-col justify-end gap-24">
            
            
            <div className='flex flex-col gap-3' >

            {/* Main Heading */}
            <h1 className="text-display font-secondary font-semibold">

                Providing Quality 
                
                {/* one tab gap */}
                &nbsp;

              <span className="text-brand-teal relative inline-block">
                Healthcare
                
              </span>
              <br />
                For A
                &nbsp;
                 <span className='text-brand-green' >
                    Brighter
                 </span>
                 
                &nbsp;
                  And
              <br />
              <span className="text-brand-green">
                Healthy 
              </span>
              
                &nbsp;
              Future
            </h1>

            {/* Description */}
            <p className="text-paragraph">
              At Our Hospital, We Are Dedicated To Providing Exceptional Medical Care 
              To Our Patients And Their Families. Our Experienced Team Of Medical 
              Professionals, Cutting-Edge Technology, And Compassionate Approach Make 
              Us A Leader In The Healthcare Industry.
            </p>

            </div>

            {/* CTA Buttons */}
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
              
              <Button href={"/appointments"} children={"Appointments"} className='px-[40px] py-[13px]' />
              
              <Link 
                href="#" 
                className="group inline-flex items-center gap-3"
              >
                <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-brand-teal rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-0.5" />
                </span>
                Watch Video
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="flex items-center gap-8 md:gap-12 pt-4 border-t border-gray-200/50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#171717]">24/7</span>
                </div>
                <p className="text-xs md:text-sm text-[#6B7280]">Service Available</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-linear-to-br from-brand-teal/80 to-brand-teal flex items-center justify-center text-white text-xs font-semibold">
                      {i === 3 ? '+' : `0${i}`}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#171717]">500+</p>
                  <p className="text-xs text-[#6B7280]">Happy Patients</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Replace with your actual image */}
                <div className="aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] xl:aspect-[5/4] bg-gradient-to-br from-brand-teal/20 to-blue-400/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full bg-brand-teal/20 flex items-center justify-center mb-4">
                      <span className="text-4xl md:text-5xl">🏥</span>
                    </div>
                    <p className="text-sm md:text-base text-[#4B5563]">
                      Professional Healthcare
                    </p>
                  </div>
                </div>

                {/* Floating Card 1 - Top Right */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-2xl shadow-xl p-3 md:p-4 animate-bounce-slow">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-[#171717]">Healthcare</p>
                      <p className="text-[10px] md:text-xs text-[#6B7280]">Quality Service</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 - Bottom Left */}
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl p-3 md:p-4 animate-bounce-slow animation-delay-200">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-[#171717]">24/7</p>
                      <p className="text-[10px] md:text-xs text-[#6B7280]">Emergency Care</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 bg-brand-teal/5 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#6B7280] uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-8 border-2 border-[#6B7280]/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-brand-teal rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection