import React from 'react'
import CustomersFeedbackSection from './CustomersFeedbackSection'

const CustomersFeedback = () => {
  return (

    <section className="flex flex-col gap-12">

        
      {/* Top Header Section */}
      <div className="flex flex-col gap-4 justify-center items-center text-center md:max-w-[70%] xl:max-w-[50%] mx-auto font-montserrat">
        <h1 className="text-h1 font-bold text-brand-teal">
          what our customers say
        </h1>
        <p className="text-body font-medium text-brand-gray">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
        </p>  
      </div>

        {/* Customers Feedback Cards Section */}

        <CustomersFeedbackSection />      

    </section>
  )
}

export default CustomersFeedback
