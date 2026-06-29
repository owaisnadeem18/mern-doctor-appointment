import CustomersFeedback from '@/components/CustomersFeedback'
import FindDoctor from '@/components/FindDoctor'
import NewsSubscribe from '@/components/NewsSubscribe'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] page-container flex flex-col gap-12 py-12">
      <FindDoctor />
      <Services/>
      <CustomersFeedback />
      <NewsSubscribe />
    </div>
  )
}

export default page
