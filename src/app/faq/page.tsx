"use client";

import React, { useState, useEffect } from 'react';
import { fetchFAQs, FAQItem } from '@/db/query/faq';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import FAQHero from '@/components/faq/hero';
import FAQFilter from '@/components/faq/filter';
import FAQList from '@/components/faq/list';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFAQs(activeCategory).then((data) => {
      setFaqs(data);
      setLoading(false);
    });
  }, [activeCategory]);

  return (
    // FIX: Added overflow-x-hidden to prevent negative sub-component margins from breaking the page width boundary
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="flex-grow">
        <FAQHero />
        
        <FAQFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FAQList faqs={faqs} loading={loading} />
        </main>
      </div>

      <Footer />
    </div>
  );
}