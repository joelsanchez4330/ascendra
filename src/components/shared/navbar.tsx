"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Freezes body scrolling when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const whatsappTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285151767378";
  const startMessage = encodeURIComponent("Hello Ascendra, I would like to schedule an initial consultation to discuss your workplace corporate services.");
  const logoUrl = "https://res.cloudinary.com/ws5jqxi7/image/upload/v1784478507/logo-no-bg_a7tiij.png"; 

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            {logoUrl ? (
              <img src={logoUrl} alt="Ascendra Logo" className="w-9 h-9 object-contain" />
            ) : (
              <svg className="w-9 h-9 text-[#0D7C66]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,12 L16,84 L28,84 L50,34 L72,84 L84,84 Z" fill="currentColor"/>
                <circle cx="50" cy="48" r="7.5" fill="#BDE8CA"/>
                <path d="M32,66 C40,56 60,56 68,66" stroke="#41B3A2" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            )}
            <span className="text-xl font-bold tracking-tight text-[#0D7C66]">
              ASCEND<span className="text-[#41B3A2]">RA</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-[#0D7C66] font-medium text-sm transition-colors">Services</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-[#0D7C66] font-medium text-sm transition-colors">Gallery</Link>
            <Link href="/about-us" className="text-gray-600 hover:text-[#0D7C66] font-medium text-sm transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0D7C66] font-medium text-sm transition-colors">Contact</Link>
            <a 
              href={`https://wa.me/${whatsappTarget}?text=${startMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0D7C66] hover:bg-[#41B3A2] text-white px-5 py-2.5 rounded-full font-medium shadow-sm transition-colors text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-gray-600 hover:text-[#0D7C66] p-2 rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* FIXED VIEWPORT MODAL SYSTEM CONTAINER */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
        
        {/* Backdrop Tint Panel */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-350 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Dynamic Slideout panel (Opaque White Background) */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[300px] max-w-[80vw] bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-8">
            {/* Header Control row inside panel */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-xs font-black uppercase tracking-widest text-[#0D7C66]">Navigation</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-900 p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none"
                aria-label="Close Mobile Menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Structured Stack Links */}
            <div className="flex flex-col space-y-2">
              <Link href="/services" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base text-gray-800 hover:text-[#0D7C66] font-bold rounded-xl hover:bg-gray-50 transition-colors block text-left">Services</Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base text-gray-800 hover:text-[#0D7C66] font-bold rounded-xl hover:bg-gray-50 transition-colors block text-left">Gallery</Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base text-gray-800 hover:text-[#0D7C66] font-bold rounded-xl hover:bg-gray-50 transition-colors block text-left">About Us</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="px-4 py-3 text-base text-gray-800 hover:text-[#0D7C66] font-bold rounded-xl hover:bg-gray-50 transition-colors block text-left">Contact</Link>
            </div>
          </div>

          {/* Conversion Footer segment */}
          <div className="pt-6 border-t border-gray-100">
            <a 
              href={`https://wa.me/${whatsappTarget}?text=${startMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#0D7C66] hover:bg-[#41B3A2] text-white py-4 rounded-xl font-bold text-sm shadow-md transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

      </div>
    </>
  );
}