"use client";

import React from 'react';

export default function ServicesHero() {
  return (
    <header className="bg-white pt-10 pb-8 sm:pt-16 sm:pb-12 text-center relative overflow-hidden">
      {/* Background soft glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#BDE8CA]/15 to-transparent rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3 sm:space-y-4">
        <div className="inline-block">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full">
            Our Solutions
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Explore Our Workplace Solutions
        </h1>
        
        <p className="text-gray-600 text-xs sm:text-lg max-w-xl mx-auto leading-relaxed">
          Find the right programs, talent matching, and coaching support to build a healthier, more productive workspace for your team.
        </p>
      </div>
    </header>
  );
}