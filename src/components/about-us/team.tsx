"use client";

import React from 'react';

export default function AboutTeam() {
  const team = [
    {
      name: "Dian Utami",
      position: "Managing Director & Executive Coach",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Reza Mahendra",
      position: "Head of Talent Acquisition & Retention Strategy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Siti Rahma",
      position: "Lead Clinical Psychologist & Training Facilitator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Header Summary */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            The Team Behind Ascendra
          </h2>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
            Meet the organizational psychologists, recruitment strategists, and executive advisors working together to rebuild workplace dynamics.
          </p>
        </div>

        {/* Responsive Grid Matrix: Stacks to 2 columns on mobile viewports */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl sm:rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Responsive Scale heights */}
              <div className="h-40 sm:h-72 w-full bg-gray-100 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Text Base Meta Details */}
              <div className="p-3 sm:p-6 bg-white text-center flex-grow flex flex-col justify-center space-y-1">
                <h3 className="text-xs sm:text-lg font-extrabold text-gray-900 tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold text-[#41B3A2] tracking-wide leading-tight">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}