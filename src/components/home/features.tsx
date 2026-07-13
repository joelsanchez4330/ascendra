"use client";

import React, { useEffect, useState, useRef } from 'react';

const features = [
  {
    id: "leadership",
    title: "Supportive Leadership",
    subtitle: "Pillar 01 — Spotting Burnout Early",
    description: "Help your managers spot warning signs of stress and heavy workloads before people decide to quit. Leaders will learn how to move past just looking at basic output numbers and build real trust that helps employees do their best work.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    tags: ["Prevent Burnout", "Build Trust", "Better Managers"]
  },
  {
    id: "transformation",
    title: "Personal Growth",
    subtitle: "Pillar 02 — Handling Workplace Stress",
    description: "Give your employees practical ways to manage daily stress. This module helps team members understand what truly motivates them at work, overcome performance anxiety, and set healthy boundaries so they can stay focused and clear-headed.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    tags: ["Manage Stress", "Stay Focused", "Work Motivation"]
  },
  {
    id: "culture",
    title: "Better Team Habits",
    subtitle: "Pillar 03 — Healthier Daily Rhythms",
    description: "Improve the way your company operates day-to-day. We help you update everything from internal communication styles to how you praise good work, creating a supportive environment where people actually enjoy working and want to stay long-term.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    tags: ["Good Habits", "Better Communication", "Keep Your Talent"]
  }
];

export default function BootcampFeatures() {
  const [activeId, setActiveId] = useState(features[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    features.forEach((feature) => {
      const element = sectionRefs.current[feature.id];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12">
      <div className="flex flex-col lg:flex-row gap-12 relative">
        
        {/* LEFT COLUMN: Sticky Pathway Navigator */}
        <div className="lg:w-1/3 lg:sticky lg:top-36 lg:h-fit z-10 py-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/20 px-3 py-1.5 rounded-full">
            Our Program
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-4 mb-2">
            Bootcamp Structure
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
            When teams feel supported and understood, they do better work. Explore the three main pillars we use to improve your workplace culture.
          </p>

          {/* Interactive Path Timeline Component */}
          <div className="relative pl-6 border-l-2 border-gray-100 space-y-6">
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => scrollToSection(feature.id)}
                  className="group flex flex-col items-start text-left focus:outline-none relative w-full transition-all"
                >
                  <span className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-white transition-all duration-300 ${
                    isActive 
                      ? 'border-[#0D7C66] scale-125 shadow-sm' 
                      : 'border-gray-200 group-hover:border-gray-400'
                  }`}>
                    {isActive && (
                      <span className="absolute inset-0.5 rounded-full bg-[#0D7C66]" />
                    )}
                  </span>

                  <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-[#0D7C66]' : 'text-gray-400'
                  }`}>
                    {feature.subtitle.split(' — ')[0]}
                  </span>
                  <span className={`text-base font-semibold mt-0.5 transition-colors duration-200 ${
                    isActive ? 'text-gray-900 font-bold' : 'text-gray-500 group-hover:text-gray-700'
                  }`}>
                    {feature.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Borderless, High-Distance Scrolling Panels */}
        <div className="lg:w-2/3 space-y-[40vh] pb-[20vh]">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              ref={(el) => { sectionRefs.current[feature.id] = el; }}
              className="scroll-mt-36 flex flex-col space-y-4 bg-white max-h-[580px] overflow-hidden justify-between"
            >
              {/* Capped Image Height */}
              <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-sm bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Typography Layout */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#41B3A2] uppercase tracking-wider">
                  {feature.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Micro Tag Cloud */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {feature.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-150 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}