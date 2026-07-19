"use client";

import React, { useState } from 'react';
import { FAQItem } from '@/db/query/faq';

interface FAQListProps {
  faqs: FAQItem[];
  loading: boolean;
}

export default function FAQList({ faqs, loading }: FAQListProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0D7C66] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-500">Loading questions...</p>
      </div>
    );
  }

  if (faqs.length === 0) {
    return (
      <div className="text-center bg-white rounded-3xl p-8 border border-gray-100 max-w-md mx-auto shadow-sm">
        <p className="text-base font-bold text-gray-900">No questions found</p>
        <p className="text-xs text-gray-500 mt-1">There are no frequently asked questions in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        
        return (
          <div 
            key={faq.id}
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(faq.id)}
              className="w-full text-left p-4 sm:p-6 flex justify-between items-center gap-4 bg-white hover:bg-gray-50/50 transition-colors cursor-pointer focus:outline-none"
            >
              <span className="font-extrabold text-gray-900 text-xs sm:text-base leading-snug">
                {faq.question}
              </span>
              <span className={`text-[#0D7C66] font-bold text-lg sm:text-xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[1000px] border-t border-gray-100' : 'max-h-0'
              }`}
            >
              <div className="p-4 sm:p-6 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white whitespace-pre-line">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}