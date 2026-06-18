import FindDoctor from '@/components/FindDoctor'
import HeroSection from '@/components/HeroSection'
import ResultsInNumbers from '@/components/ResultsInNumbers'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] page-container flex flex-col gap-12 py-12"  >
      <HeroSection/> 
      <FindDoctor/>
      <ResultsInNumbers/>
    </div>
  )
}

export default page
