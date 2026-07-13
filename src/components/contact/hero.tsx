import React from 'react';

export default function ContactHero() {
  return (
    <header className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
          alt="Ascendra Office Corporate Headquarters"
          className="w-full h-full object-cover object-center grayscale-[20%] opacity-40 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/40 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#BDE8CA] bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block">
          Connect With Us
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight drop-shadow-sm">
          Let's Start the Conversation
        </h1>
      </div>
    </header>
  );
}