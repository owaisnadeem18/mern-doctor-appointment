import React from 'react';

const ResultsInNumbers = () => {
  // Statics data array taake code clean aur maintainable rahe
  const stats = [
    { value: "99", symbol: "%", label: "Customer satisfaction" },
    { value: "15", symbol: "k", label: "Online Patients" },
    { value: "12", symbol: "k", label: "Patients Recovered" },
    { value: "240", symbol: "%", label: "Company growth" },
  ];

  return (
    <div className="flex flex-col gap-20 text-center select-none">
      
      {/* Section Heading */}
      <h2 className="text-h2 font-bold text-brand-teal">
        Our results in numbers
      </h2>

      {/* Grid Layout for Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12 items-start justify-start">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            
            {/* Number and Symbol Container */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-baseline justify-center">
              <span className="text-brand-teal">
                {stat.value}
              </span>
              <span className="text-brand-light-teal">
                {stat.symbol}  
              </span>
            </div>

            {/* Label text */}
            <p className="text-h3 text-brand-dark font-bold">
              {stat.label}
            </p>
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default ResultsInNumbers;