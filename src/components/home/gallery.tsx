"use client";

import React from 'react';

const galleryImages = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <div className="bg-white py-16 sm:py-20 overflow-hidden">
      
      {/* Top Heading Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full">
          Ecosystem Footprint
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mt-4">
          Ascendra In Action
        </h2>
      </div>

      {/* Global CSS keyframes injected to drive the hardware-accelerated scroll track loops */}
      <style jsx global>{`
        @keyframes customMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-marquee {
          display: flex;
          width: max-content;
          animation: customMarquee 35s linear infinite;
        }
      `}</style>

      {/* SINGLE LINE MARQUEE WRAPPER WITH DEEP TRANSPARENT MASK COVERS */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none">
        
        {/* Deep Left Edge Overlay Mask - Extends up to ~380px inwards */}
        <div className="absolute top-0 left-0 w-[240px] sm:w-[380px] h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        
        {/* Deep Right Edge Overlay Mask - Extends up to ~380px inwards */}
        <div className="absolute top-0 right-0 w-[240px] sm:w-[380px] h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous Autoplaying Image Track */}
        <div className="animate-scroll-marquee gap-4 flex">
          {[...galleryImages, ...galleryImages].map((url, idx) => (
            <div 
              key={idx} 
              className="w-[240px] sm:w-[320px] h-[160px] sm:h-[220px] rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm border border-gray-100/40"
            >
              <img 
                src={url} 
                alt="Ascendra corporate ecosystem thumbnail catalog asset" 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Central Action CTA Link */}
      <div className="w-full flex justify-center pt-12">
        <a 
          href="/gallery" 
          className="inline-flex items-center gap-2 bg-[#0D7C66] hover:bg-[#41B3A2] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-[#0D7C66]/10"
        >
          See All Images
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

    </div>
  );
}