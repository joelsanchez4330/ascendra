"use client";

import React, { useEffect, useState, useRef } from 'react';

const statistics = [
  {
    targetValue: 1,
    prefix: "$",
    suffix: " Trillion",
    metric: "Lost Global Productivity",
    description: "The estimated annual cost to the global economy due to lower workplace productivity caused by depression and anxiety, according to the WHO."
  },
  {
    targetValue: 5,
    prefix: "",
    suffix: "x Higher",
    metric: "Risk of People Quitting",
    description: "Employees who face severe workplace burnout are five times more likely to actively look for a new job immediately."
  },
  {
    targetValue: 4,
    prefix: "",
    suffix: "x Return",
    metric: "Return on Investment",
    description: "Every dollar spent on company health and wellbeing programs brings back over four dollars in improved team productivity and focus."
  }
];

function AnimatedCounter({ targetValue, prefix, suffix }: { targetValue: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out calculation
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * targetValue);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <span ref={elementRef} className="text-3xl sm:text-5xl font-black text-[#0D7C66] tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="bg-white py-12 sm:py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full">
            Workplace Facts
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mt-3 mb-3">
            The True Cost of Ignoring Team Wellbeing
          </h2>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
            Mental health at work directly affects how well your team performs. Supporting your employees prevents sudden turnover and protects your output.
          </p>
        </div>

        {/* Unified Responsive Grid (Maintains a tight single-view stack context) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {statistics.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center md:items-start text-center md:text-left bg-gray-50/50 rounded-2xl p-5 sm:p-6 border border-gray-100/70 shadow-sm"
            >
              {/* Dynamic Animated Count Execution */}
              <AnimatedCounter 
                targetValue={stat.targetValue} 
                prefix={stat.prefix} 
                suffix={stat.suffix} 
              />
              
              <span className="text-sm sm:text-base font-bold text-gray-900 mt-2 mb-1.5">
                {stat.metric}
              </span>
              
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}