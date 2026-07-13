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
        <p className="text-sm text-gray-500">Loading gallery images...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center bg-white rounded-3xl p-12 border border-gray-100 max-w-md mx-auto shadow-md">
        <p className="text-base font-bold text-gray-900">No images found</p>
        <p className="text-xs text-gray-500 mt-1">There are currently no photos uploaded under this specific filter tag.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div 
          key={item.id}
          className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative"
        >
          {/* Main Visual Image Window */}
          <div className="h-64 w-full bg-gray-50 overflow-hidden relative">
            <img 
              src={item.url} 
              alt={`Gallery snapshot ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Tag Chips displayed underneath inside the white container base */}
          <div className="p-4 bg-white flex flex-wrap gap-1.5">
            {item.tags.split(',').map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="text-[10px] font-bold uppercase tracking-wider text-[#41B3A2] bg-[#BDE8CA]/20 px-2 py-0.5 rounded"
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