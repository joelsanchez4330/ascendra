"use client";

import React from 'react';

interface FAQFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function FAQFilter({ activeCategory, setActiveCategory }: FAQFilterProps) {
  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'Philosophy', label: 'Philosophy' },
    { id: 'Coaching', label: 'Coaching' },
    { id: 'Head Hunting', label: 'Head Hunting' },
  ];

  return (
    // FIX: Adjusted top position offset to perfectly clear the h-20 sticky navbar layout boundaries
    <section className="bg-white border-b border-gray-100 pb-6 sticky top-20 z-30 shadow-sm shadow-gray-50/10">
      {/* Horizontally scrolls cleanly on narrow touch devices instead of wrapping awkwardly */}
      <div className="flex overflow-x-auto pb-1 gap-2 -mx-4 px-4 scrollbar-none md:mx-auto md:px-0 md:flex-wrap md:justify-center md:pb-0 max-w-3xl">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-xs font-bold px-5 py-2.5 rounded-full transition-colors border cursor-pointer whitespace-nowrap flex-shrink-0 ${
              activeCategory === cat.id
                ? 'bg-[#0D7C66] border-[#0D7C66] text-white'
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}