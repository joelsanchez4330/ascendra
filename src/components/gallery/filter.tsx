"use client";

import React from 'react';

interface GalleryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[]; 
}

// FIX: Set a default parameter fallback to an empty array ([]) to completely shield against undefined variables
export default function GalleryFilter({ 
  activeCategory, 
  setActiveCategory, 
  categories = [] 
}: GalleryFilterProps) {
  return (
    <section className="bg-white border-b border-gray-100 pb-6 sticky top-20 z-30 shadow-sm shadow-gray-50/10">
      <div className="flex overflow-x-auto pb-1 gap-2 -mx-4 px-4 scrollbar-none md:mx-auto md:px-0 md:flex-wrap md:justify-center md:pb-0 max-w-3xl">
        
        <button
          onClick={() => setActiveCategory('all')}
          className={`text-xs font-bold px-5 py-2.5 rounded-full transition-colors border cursor-pointer whitespace-nowrap flex-shrink-0 ${
            activeCategory === 'all'
              ? 'bg-[#0D7C66] border-[#0D7C66] text-white'
              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
          }`}
        >
          All Photos
        </button>

        {/* Maps smoothly without errors because categories is guaranteed to be an array */}
        {categories.map((cat) => {
          const label = cat.charAt(0).toUpperCase() + cat.slice(1);
          
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold px-5 py-2.5 rounded-full transition-colors border cursor-pointer whitespace-nowrap flex-shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#0D7C66] border-[#0D7C66] text-white'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </section>
  );
}