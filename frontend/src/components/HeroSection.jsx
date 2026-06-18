import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Clock, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import { doctorImage, vector } from '@/assets'
import { arrayOfDoctorsImages } from '@/lib/data/doctorsImagesData'

// Replace with your actual image imports
// import heroBg from '@/assets/hero-bg.jpg'
// import doctorImage from '@/assets/doctor-image.png'

const HeroSection = () => {
  return (
    <section className="relative py-10">
      
      {/* Background Decorative Elements */}
      

      <div className="relative flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          
          {/* Left Content */}
          <div className="flex flex-col justify-end gap-12 sm:gap-24">
            
            
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
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
              
              <Button href={"/appointments"} children={"Appointments"} className='px-[40px] py-[13px]' />
              
              <Link 
                href="#" 
                className="group inline-flex items-center gap-3 hover:text-brand-teal transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-brand-teal rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-0.5 " />
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
          
          <div className="relative flex justify-start sm:justify-center w-full max-w-125 mx-auto">

  <Image
    src={doctorImage}
    alt="Doctor Image"
    className="w-full max-w-105 h-auto object-contain z-10 "
  />

  <Image
    src={vector}
    alt="Vector Image"
    className="absolute top-28 left-3 sm:left-7 w-full max-w-112.5 object-contain"
  />

  {/* Badge 1 */}
  <div className="absolute top-6 right-0 top-42 sm:right-2 bg-white border-2 border-[#ECECEC] rounded-xl px-3 py-2 z-20 font-poppins">
    <span className="font-bold text-brand-teal ">24/7</span> Service
  </div>

  {/* Badge 2 */}
  <div className="absolute bottom-6 left-0 sm:bottom-21 sm:left-0 bg-white border-2 border-[#ECECEC] rounded-xl px-3 py-2 z-20 ">
    <div className="text-center font-poppins">
      <div>Our Professionals</div>

      <div className="flex items-center ">
        {arrayOfDoctorsImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Doctor ${index + 1}`}
            width={28}
            height={28}
            className="rounded-full border-2 border-white shadow-md -ml-3 first:ml-0"
          />
        ))}
      </div>
    </div>
  </div>

</div>

        </div>
      </div>

      

    </section>
  )
}

export default HeroSection