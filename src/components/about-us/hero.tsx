"use client";

import React from 'react';

export default function AboutHero() {
  return (
    <header className="relative w-full h-[35vh] min-h-[260px] sm:h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Cover Image with Dark Tonal Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
          alt="Ascendra Corporate Strategy Teamwork"
          className="w-full h-full object-cover object-center opacity-45 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      </div>

      {/* Typography Block Layer over Image */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-3">
        <div className="inline-block">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#BDE8CA] bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
            About Ascendra
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Shifting Workplace Performance
        </h1>
      </div>
    </header>
  );
}