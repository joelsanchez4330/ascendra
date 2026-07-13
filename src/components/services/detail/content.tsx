import React from 'react';

interface DetailContentProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function DetailContent({ title, subtitle, description }: DetailContentProps) {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        
        {/* Detail Title and Subheading Block */}
        <div className="border-b border-gray-100 pb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/20 px-3 py-1.5 rounded-full inline-block">
            {subtitle}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2">
            Overview: {title}
          </h2>
        </div>

        {/* Narrative Core Body Paragraph */}
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed whitespace-pre-line font-medium">
            {description}
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-150/50 mt-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Why this program matters</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Every initiative we deploy is structured around practical workplace application. Rather than offering temporary motivational boosts, we focus on introducing reproducible habits, improving leadership communication channels, and helping teams build clear operational boundaries to maximize retention and daily engagement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}