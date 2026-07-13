import React from 'react';
import Link from 'next/link';

export default function Footer() {
  // Hardcoded service list with matching database IDs to generate exact dynamic slugs
  const servicesList = [
    { id: 1, title: "Workplace Wellness Bootcamps" },
    { id: 2, title: "Resilient Talent Head Hunting" },
    { id: 3, title: "Confidential 1on1 Coaching" }
  ];

  // Helper function to build dynamic details page URLs matching your slug patterns
  const generateSlugUrl = (title: string, id: number) => {
    const cleanSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `/services/${cleanSlug}-${id}`;
  };

  return (
    <footer className="bg-[#0D7C66] text-[#BDE8CA] pt-16 pb-8 border-t-4 border-[#41B3A2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Column: Rebranded Logo & Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,12 L16,84 L28,84 L50,34 L72,84 L84,84 Z" fill="#FFFFFF"/>
                <circle cx="50" cy="48" r="7.5" fill="#BDE8CA"/>
                <path d="M32,66 C40,56 60,56 68,66" stroke="#41B3A2" strokeWidth="6" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-bold tracking-tight text-white">
                ASCEND<span className="text-[#41B3A2]">RA</span>
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              We connect organizations with high-performing resilient talent and specialized mental health support frameworks. Discover how understanding true intrinsic drive shifts performance metrics.
            </p>
          </div>

          {/* Center Column: List of Services linked to detail pages */}
          <div className="flex flex-col space-y-4 md:items-center">
            <div>
              <h3 className="text-white font-semibold text-lg tracking-wide uppercase text-xs mb-4 border-b border-[#41B3A2] pb-1">
                Our Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {/* CHANGED: Dynamic Link map generating individual product details endpoints */}
                {servicesList.map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={generateSlugUrl(service.title, service.id)} 
                      className="hover:text-white transition-colors duration-150"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-1.5">
                  <Link href="/faq" className="text-white hover:text-[#41B3A2] transition-colors duration-150 font-medium">
                    Frequently Asked Questions (FAQ)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Socials & Phone Number */}
          <div className="flex flex-col space-y-4 md:items-end">
            <div className="w-full md:max-w-[240px]">
              <h3 className="text-white font-semibold text-lg tracking-wide uppercase text-xs mb-4 border-b border-[#41B3A2] pb-1">
                Connect With Us
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-[#41B3A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:+1234567890" className="text-white/90 hover:text-white font-medium">+1 (234) 567-890</a>
                </div>

                <div className="flex gap-4 pt-2">
                  <a href="#linkedin" className="p-2 bg-[#26667F]/40 hover:bg-[#41B3A2] text-white rounded-full transition-all duration-200" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </a>
                  <a href="#instagram" className="p-2 bg-[#26667F]/40 hover:bg-[#41B3A2] text-white rounded-full transition-all duration-200" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-[#41B3A2]/40 pt-8 flex flex-col sm:flex-row justify-between text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Ascendra Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}