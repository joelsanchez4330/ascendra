"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#BDE8CA]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Left Side: Rebranded Logo (Redirects Home) */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <svg className="w-9 h-9 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,12 L16,84 L28,84 L50,34 L72,84 L84,84 Z" fill="#0D7C66"/>
              <circle cx="50" cy="48" r="7.5" fill="#BDE8CA"/>
              <path d="M32,66 C40,56 60,56 68,66" stroke="#41B3A2" strokeWidth="6" strokeLinecap="round"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#0D7C66]">
              ASCEND<span className="text-[#41B3A2]">RA</span>
            </span>
          </Link>

          {/* Center/Right: Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-[#0D7C66] font-medium transition-colors duration-200">Services</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-[#0D7C66] font-medium transition-colors duration-200">Gallery</Link>
            <Link href="/about-us" className="text-gray-600 hover:text-[#0D7C66] font-medium transition-colors duration-200">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0D7C66] font-medium transition-colors duration-200">Contact</Link>
            
            <a href="#wa" className="bg-[#0D7C66] hover:bg-[#41B3A2] text-white px-5 py-2.5 rounded-full font-medium shadow-sm transition-all duration-200 transform hover:-translate-y-0.5">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#0D7C66] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3 sm:px-3 shadow-inner">
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-[#0D7C66] font-medium">Services</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-[#0D7C66] font-medium">Gallery</Link>
            <Link href="/about-us" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-[#0D7C66] font-medium">About Us</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-[#0D7C66] font-medium">Contact</Link>
            <a href="#wa" onClick={() => setIsOpen(false)} className="block text-center bg-[#0D7C66] text-white mx-3 px-4 py-2.5 rounded-full font-medium">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}