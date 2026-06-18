"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ResultsInNumbers = ({ stats }) => {
  // Detect when section enters viewport
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,    
  });

  return (
    <section
      ref={ref}
      aria-label="Company statistics"
      className="flex flex-col gap-20 text-center select-none"
    >
      {/* Heading */}
      <h2 className="text-h2 font-bold text-brand-teal">
        Our results in numbers
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-start"
          >
            {/* Number */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-baseline justify-center">
              <span className="text-brand-teal">
                {inView ? (
                  <CountUp end={parseInt(stat.value)} duration={2} />
                ) : (
                  0
                )}
              </span>

              <span className="text-brand-light-teal">
                {stat.symbol}
              </span>
            </div>

            {/* Label */}
            <p className="text-h3 text-brand-dark font-bold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsInNumbers;