import React from 'react';

interface FAQFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function FAQFilter({ activeCategory, setActiveCategory }: FAQFilterProps) {
  // Matched exactly to the values in your database entry rows
  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'Philosophy', label: 'Philosophy' },
    { id: 'Coaching', label: 'Coaching' },
    { id: 'Head Hunting', label: 'Head Hunting' },
  ];

  return (
    <section className="bg-white border-b border-gray-100 pb-8 sticky top-16 z-30 shadow-sm shadow-gray-50/10">
      <div className="flex flex-wrap gap-2 justify-center px-4 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all border ${
              activeCategory === cat.id
                ? 'bg-[#0D7C66] border-[#0D7C66] text-white'
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}