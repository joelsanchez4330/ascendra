"use client";

import React from 'react';

interface DetailGalleryProps {
  images: string[];
  title: string;
}

export default function DetailGallery({ images, title }: DetailGalleryProps) {
  const validImages = images.filter(Boolean);
  
  if (validImages.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 space-y-6 sm:space-y-8">
        
        {/* Simplified Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-lg sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            Program Gallery
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Visual highlights and session photos from our "{title}" program.
          </p>
        </div>

        {/* Responsive Grid Matrix: Stacks to 2 columns on mobile viewports, up to 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {validImages.map((imgUrl, index) => (
            <div 
              key={index} 
              className={`h-32 sm:h-48 md:h-64 bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 ${
                validImages.length === 1 ? 'col-span-2 md:col-span-3 h-48 sm:h-72' : ''
              }`}
            >
              <img 
                src={imgUrl} 
                alt={`Gallery photo ${index + 1} for ${title}`} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}