import React from 'react';

const testimonials = [
  {
    quote: "Ascendra completely changed how our managers handle team problems in Jakarta. By helping us look at what actually motivates our people instead of just tracking numbers, we stopped losing our software engineers.",
    author: "Aditiya Wijaya",
    role: "VP of People Operations",
    company: "GlowMarket Indonesia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The combination of their team workshops and private 1-on-1 coaching completely shifted our work environment here in BSD. Our teams now have a healthy way to manage stress, which drastically improved how fast we launch products.",
    author: "Siti Rahma",
    role: "Chief Operating Officer",
    company: "Nusantara Logistics",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "We worked with Ascendra to hire three critical engineering team leads for our Bandung office. They focused heavily on finding people who handle pressure well and fit our company values. Six months later, all three are doing a fantastic job.",
    author: "Budi Santoso",
    role: "Director of Talent Acquisition",
    company: "Arka Financial Tech",
    avatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-16 sm:py-24 border-t border-gray-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mt-4 mb-4">
            Real Results from Growing Teams
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            See how companies across Indonesia are reducing workplace stress and keeping their best talent by working with Ascendra.
          </p>
        </div>

        {/* Testimonial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between bg-gray-50/40 rounded-3xl p-8 border border-gray-100 shadow-sm relative group hover:border-[#BDE8CA] transition-colors duration-300"
            >
              {/* Giant Stylized Quotation Mark Decorative Graphic */}
              <span className="absolute top-4 right-6 text-7xl font-serif text-[#D7C3F1]/30 select-none pointer-events-none group-hover:text-[#41B3A2]/20 transition-colors duration-300">
                &ldquo;
              </span>

              {/* Review Text Body */}
              <p className="text-gray-600 text-base leading-relaxed mb-8 relative z-10 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author Profile Footer block */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">
                    {item.author}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.role}, <span className="text-[#0D7C66] font-medium">{item.company}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}