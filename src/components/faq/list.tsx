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
      <div className="text-center bg-white rounded-3xl p-12 border border-gray-100 max-w-md mx-auto shadow-md">
        <p className="text-base font-bold text-gray-900">No questions found</p>
        <p className="text-xs text-gray-500 mt-1">There are no FAQs posted matching this category right now.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        
        return (
          <div 
            key={faq.id}
            className="bg-white rounded-2xl border border-gray-200/60 shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleAccordion(faq.id)}
              className="w-full text-left p-6 flex justify-between items-center gap-4 bg-white hover:bg-gray-50/50 transition-colors duration-150 focus:outline-none"
            >
              <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                {faq.question}
              </span>
              <span className={`text-[#0D7C66] font-bold text-xl transition-transform duration-200 ${isOpen ? 'rotate-185 transform' : ''}`}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${
                isOpen ? 'max-h-[500px] border-t border-gray-100' : ''
              }`}
            >
              <div className="p-6 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white whitespace-pre-line font-medium">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}