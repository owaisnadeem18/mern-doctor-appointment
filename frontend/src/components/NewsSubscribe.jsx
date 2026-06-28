"use client"

import React from 'react'

const NewsSubscribe = () => {
  return (
    
          <div className="max-w-xl mx-auto flex flex-col gap-4 w-full py-8">
            <h3 className="xl:text-[28px] text-[24px]  font-bold text-center">
              Subscribe to our newsletter
            </h3>
    
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white border border-[#ECECEC] rounded-full p-2 pl-5 shadow-sm max-w-lg mx-auto focus-within:ring-2 focus-within:ring-[#008080] transition-all w-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm md:text-base text-gray-700 placeholder-gray-400 focus:outline-none pr-3"
                required
              />
    
              <button
                type="submit"
                className="px-6 md:px-8 py-3 bg-[#008080] text-white font-semibold rounded-full hover:bg-[#006666] transition-colors duration-300 text-sm md:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
    
  )
}

export default NewsSubscribe
