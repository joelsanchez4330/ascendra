"use client";

import React from 'react';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  title: string;
  coverImage: string;
  shortDetail: string;
  benefits: string[];
}

interface ServicesListProps {
  services: ServiceItem[];
  loading: boolean;
}

export default function ServicesList({ services, loading }: ServicesListProps) {
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0D7C66] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-500">Loading services...</p>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center bg-white rounded-3xl p-6 border border-gray-100 max-w-md mx-auto shadow-sm">
        <p className="text-base font-bold text-gray-900">No services found</p>
        <p className="text-xs text-gray-500 mt-1">Try adjusting your keywords or selecting a different category.</p>
      </div>
    );
  }

  return (
    // Hardened structural container using explicit flex tracking fallback alongside grid controls
    <div className="w-full flex flex-wrap gap-3 sm:gap-6 justify-start items-stretch max-w-7xl mx-auto md:grid md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const urlSlug = `${service.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')}-${service.id}`;

        return (
          <div 
            key={service.id} 
            className="bg-white rounded-xl sm:rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between w-[calc(50%-6px)] sm:w-[calc(50%-12px)] md:w-auto flex-shrink-0"
          >
            <div>
              <div className="h-24 sm:h-44 md:h-48 w-full bg-gray-50 relative overflow-hidden">
                <img 
                  src={service.coverImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              
              <div className="p-2 sm:p-6 space-y-1 sm:space-y-2.5 bg-white">
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[#41B3A2]">
                  Program
                </span>
                <h3 className="text-xs sm:text-xl font-extrabold text-gray-900 tracking-tight leading-tight sm:leading-snug line-clamp-2 min-h-[2rem] sm:min-h-0">
                  {service.title}
                </h3>
                <p className="text-[10px] sm:text-sm text-gray-600 leading-normal sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {service.shortDetail}
                </p>

                {/* Checklist matches structural heights on larger grids */}
                <ul className="hidden sm:block pt-2 space-y-1.5">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <li key={bIdx} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-[#0D7C66] font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-2 sm:p-6 pt-0 bg-white">
              <Link 
                href={`/services/${urlSlug}`}
                className="block w-full text-center bg-[#0D7C66] hover:bg-[#41B3A2] text-white font-bold py-2 sm:py-3.5 rounded-lg sm:rounded-xl transition-colors text-[10px] sm:text-sm shadow-sm cursor-pointer border-none"
              >
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}