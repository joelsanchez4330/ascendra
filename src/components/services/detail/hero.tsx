import React from 'react';

interface DetailHeroProps {
  title: string;
  subtitle: string;
  coverImage: string;
}

export default function DetailHero({ title, subtitle, coverImage }: DetailHeroProps) {
  return (
    <header className="relative w-full h-[50vh] min-h-[350px] md:h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Cover Image with Semi-Greyish Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover object-center grayscale-[30%] opacity-40 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
      </div>

      {/* Centered Typography Title over the cover */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#BDE8CA] bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block">
          {subtitle}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight drop-shadow-sm">
          {title}
        </h1>
      </div>
    </header>
  );
}