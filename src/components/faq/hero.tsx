import React from 'react';

export default function FAQHero() {
  return (
    <header className="bg-white pt-20 pb-12 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#BDE8CA]/15 to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full inline-block">
          Support Center
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
          Frequently Asked Questions
        </h1>
      </div>
    </header>
  );
}