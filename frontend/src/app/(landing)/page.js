import FindDoctor from '@/components/FindDoctor'
import HeroSection from '@/components/HeroSection'
import MeetOurTeam from '@/components/MeetOurTeam'
import ReasonsToChooseUs from '@/components/ReasonsToChooseUs'
import ResultsInNumbers from '@/components/ResultsInNumbers'
import { Services } from '@/components/Services'
import { statsData } from '@/lib/data/statsData'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] page-container flex flex-col gap-12 py-12"  >
      <HeroSection/> 
      <FindDoctor/>
      <ResultsInNumbers stats={statsData} />
      <ReasonsToChooseUs/>
      <Services  />
      <MeetOurTeam/>
    </div>
  )
}

export default page
