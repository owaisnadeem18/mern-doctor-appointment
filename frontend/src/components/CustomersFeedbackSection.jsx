import { customersFeedbackData } from '@/lib/data/customersFeedbackData'
import React from 'react'
import CustomersFeedbackCard from './ui/CustomersFeedbackCard'

const CustomersFeedbackSection = () => {
  return (

    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
        {customersFeedbackData.map(feedback => <CustomersFeedbackCard key={feedback?.id} {...feedback}  />  )}
    </div>
  )
}

export default CustomersFeedbackSection
