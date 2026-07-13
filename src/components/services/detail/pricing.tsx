"use client";

import React from 'react';

interface DBPriceTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
}

interface DetailPricingProps {
  serviceTitle: string;
  pricingTiersData: string; // Accepts the stringified JSON column right from your services table
}

export default function DetailPricing({ serviceTitle, pricingTiersData }: DetailPricingProps) {
  // Safe fallbacks matching database structure seeds in case data fails to parse
  let tiers: DBPriceTier[] = [];

  try {
    if (pricingTiersData) {
      tiers = JSON.parse(pricingTiersData);
    }
  } catch (error) {
    console.error("Failed to parse dynamic database pricing tiers:", error);
    tiers = [];
  }

  if (!tiers || tiers.length === 0) {
    return null; // Return empty space cleanly if no tiers are mapped
  }

  return (
    <section className="bg-gray-50 py-16 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-black tracking-tight text-gray-900">
            Transparent Pricing Plans
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Choose the operational framework tier that perfectly fits your team capacity and long-term development target goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            // Dynamically assign popularity styling framework flag to the middle item array element (Business tier index 1)
            const isPopular = idx === 1;
            const message = encodeURIComponent(`Hello Ascendra, I am interested in the ${tier.name} package for the ${serviceTitle} program.`);
            
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'border-[#0D7C66] shadow-xl md:-translate-y-2 ring-1 ring-[#0D7C66]'
                    : 'border-gray-200/80 shadow-md hover:shadow-lg'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0D7C66] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{tier.description}</p>
                  </div>

                  <div className="border-b border-gray-100 pb-4">
                    <span className="text-4xl font-black text-gray-900 tracking-tight">{tier.price}</span>
                    <span className="text-xs text-gray-500 font-medium block mt-0.5">/ {tier.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {tier.features && tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-gray-600 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-[#0D7C66] font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href={`https://wa.me/6281234567890?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-bold py-3.5 rounded-xl transition-all text-sm shadow-sm ${
                      isPopular
                        ? 'bg-[#0D7C66] hover:bg-[#41B3A2] text-white'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}