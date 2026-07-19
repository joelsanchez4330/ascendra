"use client";

import React, { useState, useEffect } from 'react';
// FIX: Imports updated frontend architecture and schema type definitions cleanly
import { fetchServices, FrontendServiceItem } from '@/db/query/services';
import Navbar from '@/components/shared/navbar';
import ServicesHero from '@/components/services/type/hero';
import SearchBar from '@/components/services/type/search';
import ServicesList from '@/components/services/type/item-list';
import Footer from '@/components/shared/footer';

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [serviceItems, setServiceItems] = useState<FrontendServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchServices(search, activeCategory).then((data) => {
      // Data format includes parsed arrays ready for list items mapping
      setServiceItems(data as any); 
      setLoading(false);
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />
      
      <div className="flex-grow">
        <ServicesHero />
        
        <SearchBar 
          search={search} 
          setSearch={setSearch} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ServicesList services={serviceItems} loading={loading} />
        </main>
      </div>

      <Footer />
    </div>
  );
}