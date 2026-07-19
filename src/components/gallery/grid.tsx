"use client";

import React from 'react';
import { GalleryItem } from '@/db/query/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
  loading: boolean;
}

export default function GalleryGrid({ items, loading }: GalleryGridProps) {
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0D7C66] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-500">Loading gallery...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center bg-white rounded-3xl p-8 border border-gray-100 max-w-md mx-auto shadow-sm">
        <p className="text-base font-bold text-gray-900">No photos found</p>
        <p className="text-xs text-gray-500 mt-1">There are no photos under this filter category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {items.map((item) => (
        <div 
          key={item.id}
          className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          {/* Main Photo Container */}
          <div className="h-36 sm:h-56 md:h-64 w-full bg-gray-50 overflow-hidden relative">
            <img 
              src={item.url} 
              alt="Gallery photo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
          </div>

          {/* Tags list container */}
          <div className="p-2 sm:p-4 bg-white flex flex-wrap gap-1">
            {item.tags.split(',').map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#41B3A2] bg-[#BDE8CA]/20 px-1.5 sm:px-2 py-0.5 rounded"
              >
                #{tag.trim()}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}