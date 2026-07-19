"use client";

import React, { useState } from 'react';

export interface FrontendPricingPlan {
  id: number;
  serviceId: number;
  clientSegment: string;
  priceDisplay: string;
  scopeOfWork: string[];
  outOfScope: string[];
  notes: string | null;
}

interface DetailPricingProps {
  serviceTitle: string;
  pricingPlans: FrontendPricingPlan[];
}

export default function DetailPricing({ serviceTitle, pricingPlans }: DetailPricingProps) {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  if (!pricingPlans || pricingPlans.length === 0) {
    return null;
  }

  const whatsappTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285151767378";

  const parseListItems = (items: string[]): string[] => {
    return items.flatMap(item => 
      item
        .split(/\\n•|\\n|\n•|\n/)
        .map(str => str.replace(/^•\s*/, '').trim())
        .filter(Boolean)
    );
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-20 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Summary */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Transparent Pricing Plans
          </h2>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
            Choose the plan that best fits your team size and organizational goals.
          </p>
        </div>

        {/* Mobile-Only Interactive Tab Switcher */}
        <div className="flex md:hidden justify-center pt-2">
          <div className="bg-gray-200/70 p-1 rounded-xl flex gap-1 relative border border-gray-300/30">
            {pricingPlans.map((plan, idx) => (
              <button
                key={plan.id}
                onClick={() => setActiveMobileIdx(idx)}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer relative z-10 ${
                  activeMobileIdx === idx 
                    ? 'bg-white text-[#0D7C66] shadow-sm scale-[1.02]' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {plan.clientSegment}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Responsive View Grid */}
        <div className="max-w-4xl mx-auto pt-4 md:pt-0">
          {/* Mobile Layout: Shows only the active tab card with a subtle fade-in animation */}
          <div className="block md:hidden animate-in fade-in duration-300">
            {pricingPlans.map((plan, idx) => {
              if (idx !== activeMobileIdx) return null;

              const isCorporate = plan.clientSegment.toLowerCase().includes('corporate');
              const message = encodeURIComponent(`Hello Ascendra, I am interested in the ${plan.clientSegment} plan for the "${serviceTitle}" program.`);
              const cleanScope = parseListItems(plan.scopeOfWork);
              const cleanExclusions = parseListItems(plan.outOfScope);

              return (
                <div
                  key={plan.id}
                  className={`bg-white rounded-3xl p-6 border flex flex-col justify-between relative w-full ${
                    isCorporate
                      ? 'border-[#0D7C66] shadow-xl ring-1 ring-[#0D7C66]'
                      : 'border-gray-200/80 shadow-md'
                  }`}
                >
                  {isCorporate && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0D7C66] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap z-10">
                      Recommended Option
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900">{plan.clientSegment}</h3>
                      {plan.notes && (
                        <p className="text-xs text-amber-800 bg-amber-50/70 rounded-xl p-3 mt-3 border border-amber-100 leading-relaxed">
                          {plan.notes}
                        </p>
                      )}
                    </div>

                    <div className="border-b border-gray-150 pb-4">
                      <span className="text-xl font-black text-gray-900 tracking-tight block leading-tight">
                        {plan.priceDisplay}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <p className="text-[10px] font-black uppercase tracking-wider text-[#0D7C66]">What is included</p>
                      <ul className="space-y-2">
                        {cleanScope.map((feature, fIdx) => (
                          <li key={fIdx} className="text-xs text-gray-600 flex items-start gap-2.5 leading-relaxed">
                            <span className="text-[#0D7C66] font-bold mt-0.5 flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {cleanExclusions.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t border-gray-100">
                        <p className="text-[10px] font-black uppercase tracking-wider text-red-500">What is excluded</p>
                        <ul className="space-y-2">
                          {cleanExclusions.map((exclusion, eIdx) => (
                            <li key={eIdx} className="text-xs text-gray-400 flex items-start gap-2.5 leading-relaxed">
                              <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">×</span>
                              <span className="line-through decoration-gray-200">{exclusion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-8 mt-auto">
                    <a
                      href={`https://wa.me/${whatsappTarget}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center font-bold py-3.5 rounded-xl transition-colors text-xs shadow-sm border-none cursor-pointer ${
                        isCorporate ? 'bg-[#0D7C66] text-white' : 'bg-gray-50 text-gray-700 border border-gray-200'
                      }`}
                    >
                      Inquire About Plan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Layout: Restores full-width side-by-side viewports layout */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-stretch justify-center w-full">
            {pricingPlans.map((plan) => {
              const isCorporate = plan.clientSegment.toLowerCase().includes('corporate');
              const message = encodeURIComponent(`Hello Ascendra, I am interested in the ${plan.clientSegment} plan for the "${serviceTitle}" program.`);
              const cleanScope = parseListItems(plan.scopeOfWork);
              const cleanExclusions = parseListItems(plan.outOfScope);

              return (
                <div
                  key={plan.id}
                  className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                    isCorporate
                      ? 'border-[#0D7C66] shadow-xl -translate-y-1 ring-1 ring-[#0D7C66]'
                      : 'border-gray-200/80 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isCorporate && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0D7C66] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap z-10">
                      Recommended Option
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-gray-900">{plan.clientSegment}</h3>
                      {plan.notes && (
                        <p className="text-xs text-amber-800 bg-amber-50/70 rounded-xl p-3 mt-3 border border-amber-100 leading-relaxed">
                          {plan.notes}
                        </p>
                      )}
                    </div>

                    <div className="border-b border-gray-150 pb-4">
                      <span className="text-3xl font-black text-gray-900 tracking-tight block leading-tight">
                        {plan.priceDisplay}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <p className="text-[10px] font-black uppercase tracking-wider text-[#0D7C66]">What is included</p>
                      <ul className="space-y-2">
                        {cleanScope.map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm text-gray-600 flex items-start gap-2.5 leading-relaxed">
                            <span className="text-[#0D7C66] font-bold mt-0.5 flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {cleanExclusions.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t border-gray-100">
                        <p className="text-[10px] font-black uppercase tracking-wider text-red-500">What is excluded</p>
                        <ul className="space-y-2">
                          {cleanExclusions.map((exclusion, eIdx) => (
                            <li key={eIdx} className="text-sm text-gray-400 flex items-start gap-2.5 leading-relaxed">
                              <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">×</span>
                              <span className="line-through decoration-gray-200">{exclusion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-8 mt-auto">
                    <a
                      href={`https://wa.me/${whatsappTarget}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center font-bold py-3.5 rounded-xl transition-colors text-sm shadow-sm border-none cursor-pointer ${
                        isCorporate
                          ? 'bg-[#0D7C66] hover:bg-[#41B3A2] text-white'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      Inquire About Plan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}