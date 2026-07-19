"use client";

import React from 'react';
import Link from 'next/link';

interface DetailCTAProps {
  title: string;
}

export default function DetailCTA({ title }: DetailCTAProps) {
  const message = encodeURIComponent(`Hello Ascendra, I am looking to schedule a consultation regarding your ${title} solution.`);
  const whatsappTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285151767378";

  return (
    <section className="bg-gray-50 py-12 sm:py-16 text-center">
      <div className="max-w-3xl mx-auto px-4 space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Ready to Improve Your Work Environment?
        </h2>
        
        <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
          Schedule a brief call with our team to find the best approach for your workspace.
        </p>
        
        <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto">
          <a 
            href={`https://wa.me/${whatsappTarget}?text=${message}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm text-xs sm:text-sm w-full sm:w-auto min-w-[200px] border-none cursor-pointer"
          >
            Chat on WhatsApp
          </a>
          
          <Link 
            href="/services" 
            className="inline-flex justify-center items-center border-2 border-gray-200 hover:border-[#0D7C66] text-gray-700 hover:text-[#0D7C66] font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-xs sm:text-sm w-full sm:w-auto min-w-[200px] bg-white text-center cursor-pointer"
          >
            Back to All Services
          </Link>
        </div>
      </div>
    </section>
  );
}