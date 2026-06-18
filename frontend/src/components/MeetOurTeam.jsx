import { teamData } from '@/lib/data/teamData'
import React from 'react'
import { TeamCard } from './ui/TeamCard'

const MeetOurTeam = () => {
  return (
    <section className="flex flex-col gap-12">
          
          {/* Top Header Section */}
          <div className="flex flex-col gap-4 justify-center items-center text-center max-w-[50%] mx-auto">
            <h2 className="text-h2 font-bold text-brand-teal ">
              Meet our team memebers
            </h2>
            <p className="text-body font-regular text-brand-gray">
              Lorem ipsum dolor sit amet adenocarcinoma adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
            </p>  
          </div>
    
          {/* Fully Responsive Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamData.map((member, index) => (
              <TeamCard
                key={index}
                imageSrc={member.imageSrc}
                name={member.name}
                designation={member.designation}
                description={member.description}
                socials={member.socials}
              />
            ))}
          </div>
    
        </section>
  )
}

export default MeetOurTeam
