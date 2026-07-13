import React from 'react';

export default function AboutCause() {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <div className="border-b border-gray-100 pb-6 space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/20 px-3 py-1.5 rounded-full inline-block">
            Our Purpose
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2">
            What Drives Us Forward
          </h2>
        </div>

        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
            At Ascendra, we believe that organizational growth is fundamentally linked to human resiliency. Too often, corporate environments design performance frameworks without considering the intrinsic psychological forces that dictate day-to-day human drive.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-[#0D7C66] uppercase tracking-wider mb-2">Psychological Foundation</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                We remove the guesswork from workplace performance by analyzing and optimizing intrinsic motivators like target alignment, role autonomy, and true psychological safety.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-[#0D7C66] uppercase tracking-wider mb-2">Sustainable Retention</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                By solving underlying communication and mental friction points, we build sustainable retaining structures where teams don't just endure their work, but excel within it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}