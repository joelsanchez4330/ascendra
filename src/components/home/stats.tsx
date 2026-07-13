import React from 'react';

const statistics = [
  {
    value: "$1 Trillion",
    metric: "Lost Global Productivity",
    description: "The estimated annual cost to the global economy due to lower workplace productivity caused by depression and anxiety, according to the WHO."
  },
  {
    value: "5x Higher",
    metric: "Risk of People Quitting",
    description: "Employees who face severe workplace burnout are five times more likely to actively look for a new job immediately."
  },
  {
    value: "4x Return",
    metric: "Return on Investment",
    description: "Every dollar spent on company health and wellbeing programs brings back over four dollars in improved team productivity and focus."
  }
];

export default function Stats() {
  return (
    <div className="bg-white py-16 sm:py-24 border-y border-gray-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full">
            Workplace Facts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mt-4 mb-4">
            The True Cost of Ignoring Team Wellbeing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Mental health at work isn&apos;t just a nice extra—it directly affects how well your team performs. Ignoring stress and burnout slows down your entire business.
          </p>
        </div>

        {/* Dynamic Metric Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {statistics.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center md:items-start text-center md:text-left bg-gray-50/50 rounded-2xl p-6 border border-gray-100/50 shadow-sm"
            >
              {/* Primary Visual Metric Callout */}
              <span className="text-4xl sm:text-5xl font-black text-[#0D7C66] tracking-tight">
                {stat.value}
              </span>
              
              {/* Core Metric Designation Title */}
              <span className="text-md font-bold text-gray-900 mt-2 mb-1.5 min-h-[24px]">
                {stat.metric}
              </span>
              
              {/* Mini Data Profile Paragraph */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}