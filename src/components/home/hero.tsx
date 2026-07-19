"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    tag: "Workplace Wellness",
    title: "Help Your Team Stay Motivated and Energized",
    subtitle: "Better Leadership. Happier Teams. Healthy Culture.",
    description: "When managers understand what their team members need, productivity goes up. Learn how to support your employees, fix communication issues, and stop burnout before it starts.",
    cta: "Explore Programs",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "Talent Acquisition",
    title: "Hire the Right People Who Will Stay Long-Term",
    subtitle: "Finding a Great Team Match",
    description: "We look past just matching words on a resume. We screen candidates to make sure they handle pressure well and fit your company values, ensuring they succeed in your daily work environment.",
    cta: "Find the Right Talent",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "Team Support",
    title: "Private Support for Everyday Work Challenges",
    subtitle: "Exclusively for Your Staff",
    description: "Give your team a safe, private space to talk through work worries, overcome everyday stress, and find clear answers so they can focus on doing their best work.",
    cta: "Learn About Support Plans",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const whatsappTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285151767378";
  const startMessage = encodeURIComponent(`Hello Ascendra, I am reviewing the ${slides[current].tag} solutions from your homepage and would like to arrange a consultation call.`);

  return (
    <div className="relative w-full bg-white overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#BDE8CA]/20 to-[#D7C3F1]/10 rounded-full filter blur-3xl pointer-events-none -z-10 transform translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text and Interactive Column */}
          <div className="flex flex-col space-y-6 z-10 min-h-[400px] justify-center order-2 lg:order-1">
            <div className="inline-flex items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/20 px-3 py-1.5 rounded-full">
                {slides[current].tag}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              {slides[current].title}
            </h1>

            <h2 className="text-base sm:text-lg font-semibold text-[#0D7C66] tracking-wide">
              {slides[current].subtitle}
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              {slides[current].description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              {/* Aligned unified link directly routing to catalog browse path */}
              <Link 
                href="/services" 
                className="inline-flex justify-center items-center bg-[#0D7C66] hover:bg-[#41B3A2] text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-[#0D7C66]/10 text-center text-sm"
              >
                {slides[current].cta}
              </Link>
              {/* Aligned secondary trigger directly firing verification chat message stream */}
              <a 
                href={`https://wa.me/${whatsappTarget}?text=${startMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center border-2 border-gray-200 hover:border-[#0D7C66] text-gray-700 hover:text-[#0D7C66] font-medium px-8 py-3.5 rounded-xl transition-all duration-200 text-center text-sm bg-white cursor-pointer"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Slider Navigation Dots */}
            <div className="flex items-center space-x-3 pt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    current === index ? 'w-8 bg-[#0D7C66]' : 'w-2.5 bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Animated Carousel Image Column */}
          <div className="relative w-full h-[260px] sm:h-[440px] rounded-3xl overflow-hidden shadow-lg border border-gray-100/50 group order-1 lg:order-2">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  current === index ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0D7C66]/10 to-transparent mix-blend-multiply pointer-events-none z-10" />
                <img
                  src={slide.image}
                  alt={slide.tag}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}