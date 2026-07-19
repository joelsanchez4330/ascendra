"use client";

import React from 'react';

interface DetailHeroProps {
  title: string;
  subtitle: string;
  coverImage: string;
}

export default function DetailHero({ title, subtitle, coverImage }: DetailHeroProps) {
  return (
    <header className="relative w-full h-[40vh] min-h-[280px] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Panel */}
      <div className="absolute inset-0 z-0">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover object-center opacity-40 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      </div>

      {/* Typography Layout Container */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-3">
        <div className="inline-block">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#BDE8CA] bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {subtitle}
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h1>
      </div>
    </header>
  );
}