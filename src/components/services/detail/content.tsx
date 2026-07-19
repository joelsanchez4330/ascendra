"use client";

import React from 'react';

interface DetailContentProps {
  title: string;
  shortDetail: string;
  longDetail: string;
}

export default function DetailContent({ title, shortDetail, longDetail }: DetailContentProps) {
  return (
    <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 space-y-6 sm:space-y-8">
        
        {/* Title and Introduction Block */}
        <div className="border-b border-gray-100 pb-6 space-y-3">
          <div className="inline-block">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/20 px-3 py-1.5 rounded-full">
              Program Details
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Overview: {title}
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 leading-normal">
            {shortDetail}
          </p>
        </div>

        {/* Narrative Description Content */}
        <div className="space-y-6">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {longDetail}
          </p>
          
          {/* Key takeaway card summary */}
          <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200/60 mt-6 sm:mt-8">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
              Why this program matters
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every initiative we deploy is structured around practical workplace application. Rather than offering temporary motivational boosts, we focus on introducing reproducible habits, improving leadership communication channels, and helping teams build clear operational boundaries to maximize retention and daily engagement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}