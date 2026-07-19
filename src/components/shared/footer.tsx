"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  // CLOUDINARY CONFIGURATION: Put your direct Cloudinary image URL between the quotes
  const logoUrl = "https://res.cloudinary.com/ws5jqxi7/image/upload/v1784478507/logo-no-bg_a7tiij.png"; 

  // Updated to list all 7 of your active corporate services
  const servicesList = [
    { id: 8, title: "Business Strategic Alignment" },
    { id: 9, title: "Corporate Talent Assessment" },
    { id: 10, title: "Corporate Culture Alignment" },
    { id: 11, title: "Corporate Training & Development" },
    { id: 12, title: "Corporate Talent Acquisition" },
  ];

  const generateSlugUrl = (title: string, id: number) => {
    const cleanSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `/services/${cleanSlug}-${id}`;
  };

  const whatsappTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285151767378";
  const startMessage = encodeURIComponent("Hello Ascendra, I would like to get in touch regarding your workplace team programs.");

  return (
    <footer className="bg-[#0D7C66] text-[#BDE8CA] pt-12 pb-8 border-t-4 border-[#41B3A2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 sm:mb-12">
          
          {/* Brand Presentation Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              {logoUrl ? (
                <img 
                  src={logoUrl} 
                  alt="Ascendra Logo" 
                  className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <svg className="w-8 h-8 text-white transition-transform duration-200 group-hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50,12 L16,84 L28,84 L50,34 L72,84 L84,84 Z" fill="currentColor"/>
                  <circle cx="50" cy="48" r="7.5" fill="#BDE8CA"/>
                  <path d="M32,66 C40,56 60,56 68,66" stroke="#41B3A2" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              )}
              <span className="text-xl font-bold tracking-tight text-white">
                ASCEND<span className="text-[#41B3A2]">RA</span>
              </span>
            </Link>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              We connect organizations with high-performing talent and provide dedicated mental health support frameworks to reduce stress and improve team longevity.
            </p>
          </div>

          {/* Quick Services Navigation Column */}
          <div className="flex flex-col space-y-4 md:items-center">
            <div className="w-full sm:max-w-[240px]">
              <h3 className="text-white font-black tracking-widest uppercase text-[10px] mb-3 border-b border-[#41B3A2] pb-1">
                Our Services
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {servicesList.map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={generateSlugUrl(service.title, service.id)} 
                      className="hover:text-white transition-colors block py-0.5"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link href="/faq" className="text-white font-bold hover:text-[#41B3A2] transition-colors block">
                    Frequently Asked Questions (FAQ)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Engagement Channels Column */}
          <div className="flex flex-col space-y-4 sm:col-span-2 md:col-span-1 md:items-end">
            <div className="w-full md:max-w-[240px]">
              <h3 className="text-white font-black tracking-widest uppercase text-[10px] mb-3 border-b border-[#41B3A2] pb-1">
                Connect With Us
              </h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#41B3A2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a 
                    href={`https://wa.me/${whatsappTarget}?text=${startMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/95 hover:text-white font-bold transition-colors"
                  >
                    +62 851-5176-7378
                  </a>
                </div>

                {/* Social Platform Links */}
                <div className="flex gap-3 pt-1">
                  <a href="#linkedin" className="p-2 bg-white/10 hover:bg-[#41B3A2] text-white rounded-full transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </a>
                  <a href="#instagram" className="p-2 bg-white/10 hover:bg-[#41B3A2] text-white rounded-full transition-colors" aria-label="Instagram">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Bottom Copyright Section Without Privacy or Terms Links */}
        <div className="border-t border-[#41B3A2]/30 pt-6 text-center text-[11px] text-white/70">
          <p>&copy; {new Date().getFullYear()} Ascendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}