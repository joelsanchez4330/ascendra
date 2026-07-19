"use client";

import React from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0D7C66] to-[#41B3A2] rounded-3xl p-6 sm:p-12 md:p-16 shadow-xl shadow-[#0D7C66]/10 text-center flex flex-col items-center justify-center max-w-4xl mx-auto">
          
          {/* Background Elements */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#BDE8CA]/20 rounded-full filter blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D7C3F1]/10 rounded-full filter blur-3xl pointer-events-none" />

          {/* Content Stack */}
          <div className="relative z-10 space-y-4 sm:space-y-6 max-w-2xl flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BDE8CA] bg-white/10 px-3 py-1.5 rounded-full inline-block">
              More Solutions
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Looking for More Ways to Support Your Team?
            </h2>
            
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Along with our main company workshops, we help you build long-term team stability by <strong className="font-extrabold text-white">hiring the right people</strong> for key roles and providing private <strong className="font-extrabold text-white">1-on-1 coaching</strong> for employees.
            </p>

            {/* Optimized Next.js Link Action Button */}
            <div className="pt-2 w-full flex justify-center">
              <Link 
                href="/services" 
                className="inline-flex justify-center items-center bg-white hover:bg-[#BDE8CA] text-[#0D7C66] font-bold px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md text-center text-sm w-full sm:w-auto min-w-[220px] border-none cursor-pointer"
              >
                Explore All Services
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}