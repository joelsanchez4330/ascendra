"use client";

import React, { useState, useEffect } from 'react';
import { fetchGalleryItems, GalleryItem } from '@/db/query/gallery';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Queries all gallery data records directly on application component mount
    fetchGalleryItems("all")
      .then((data: GalleryItem[]) => {
        if (data && data.length > 0) {
          // Extracts the active image URLs from database fields
          setImages(data.map(item => item.url));
        }
      })
      .catch((err) => console.error("Marquee initialization failure:", err))
      .finally(() => setLoading(false));
  }, []);

  // Duplicate the target list array inline to feed continuous looping calculations
  const displayImages = [...images, ...images];

  return (
    <div className="bg-white py-16 sm:py-20 overflow-hidden">
      
      {/* Top Heading Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full">
          Visual
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mt-4">
          Gallery
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
        {loading ? (
          <div className="flex gap-4 justify-center py-8">
            <div className="w-5 h-5 border-2 border-gray-200 border-t-[#0D7C66] rounded-full animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center text-xs font-medium text-gray-400 py-10">
            No active portfolio records mapped in repository layers.
          </div>
        ) : (
          <div className="animate-scroll-marquee gap-4 flex">
            {displayImages.map((url, idx) => (
              <div 
                key={idx} 
                className="w-[240px] sm:w-[320px] h-[160px] sm:h-[220px] rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm border border-gray-100/40"
              >
                <img 
                  src={url} 
                  alt="Ascendra corporate ecosystem thumbnail catalog asset" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
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