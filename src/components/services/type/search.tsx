import React from 'react';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
}

export default function SearchBar({ search, setSearch, activeCategory, setActiveCategory }: SearchBarProps) {
  return (
    <section className="bg-white border-b border-gray-100 pb-10 sticky top-16 z-30 shadow-sm shadow-gray-50/20">
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        
        {/* Main Search Input */}
        <div className="relative w-full shadow-sm rounded-xl overflow-hidden border border-gray-200 focus-within:border-[#0D7C66] focus-within:ring-1 focus-within:ring-[#0D7C66] transition-all bg-white">
          <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 pointer-events-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </span>
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-base outline-none text-gray-900 bg-transparent"
            placeholder="Search for services, keywords, or topics..."
          />
        </div>

        {/* Quick Pillar Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: 'all', label: 'All Solutions' },
            { id: 'bootcamp', label: 'Bootcamps & Culture' },
            { id: 'recruiting', label: 'Hiring & Recruiting' },
            { id: 'coaching', label: '1-on-1 Coaching' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-[#0D7C66] border-[#0D7C66] text-white'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}