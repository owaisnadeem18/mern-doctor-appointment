import Image from "next/image";
import React from "react";
// Swap to FontAwesome for cleaner solid/outline stars
import { FaStar, FaRegStar } from "react-icons/fa"; 

const CustomersFeedbackCard = ({ customerImg, comments, rating }) => {
  return (
    <div className="bg-white border border-white rounded-[5px] shadow-md py-7.5 px-8.75 flex flex-col gap-6">

      {/* Render exactly 5 stars matching image_aeee38.png */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, index) => {
        console.log('Rating:', rating, 'Index:', index); // Debugging line  
          const isFilled = index < rating;
          return isFilled ? (
            <FaStar key={index} size={20} className="text-[#F2C94C]" />
          ) : (
            <FaRegStar key={index} size={20} className="text-[#F2C94C]" />
          );
        })}
      </div>

      <span className="text-small font-semibold font-montserrat text-[#737373]">
        {comments}
      </span>

      <Image
        src={customerImg}
        alt="Customer"
        className="rounded-full object-cover w-12.5"
      />
    </div>
  );
};

export default CustomersFeedbackCard;