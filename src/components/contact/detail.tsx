"use client";

import React from 'react';

export default function ContactDetails() {
  const whatsappTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285151767378";
  
  // Format target number for clean visual presentation
  const formattedPhone = whatsappTarget.startsWith('62') 
    ? `+62 ${whatsappTarget.slice(2, 5)}-${whatsappTarget.slice(5, 9)}-${whatsappTarget.slice(9)}`
    : whatsappTarget;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200/60 shadow-sm space-y-6 sm:space-y-8">
      <div>
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">Corporate Channels</h2>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">Reach out directly through our support lines or follow our networks.</p>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* Phone Contact */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-2.5 sm:p-3 bg-[#BDE8CA]/20 rounded-xl text-[#0D7C66] flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <div>
            <h4 className="text-[10px] sm:text-xs font-bold uppercase text-gray-400 tracking-wider">Direct Call / WhatsApp</h4>
            <a href={`https://wa.me/${whatsappTarget}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-extrabold text-gray-800 hover:text-[#0D7C66] transition-colors mt-0.5 block">
              {formattedPhone}
            </a>
          </div>
        </div>

        {/* Email Contact */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-2.5 sm:p-3 bg-[#BDE8CA]/20 rounded-xl text-[#0D7C66] flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <h4 className="text-[10px] sm:text-xs font-bold uppercase text-gray-400 tracking-wider">General Inquiry</h4>
            <a href="mailto:info@ascendra.co.id" className="text-xs sm:text-sm font-extrabold text-gray-800 hover:text-[#0D7C66] transition-colors mt-0.5 block">info@ascendra.co.id</a>
          </div>
        </div>

        {/* Social Networks */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-2.5 sm:p-3 bg-[#BDE8CA]/20 rounded-xl text-[#0D7C66] flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>
          </div>
          <div>
            <h4 className="text-[10px] sm:text-xs font-bold uppercase text-gray-400 tracking-wider">Social Networks</h4>
            <div className="flex gap-3 mt-1 sm:mt-1.5">
              <a href="#linkedin" className="text-xs font-semibold text-gray-600 hover:text-[#0D7C66] underline decoration-[#41B3A2]">LinkedIn</a>
              <span className="text-gray-300 select-none">•</span>
              <a href="#instagram" className="text-xs font-semibold text-gray-600 hover:text-[#0D7C66] underline decoration-[#41B3A2]">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}