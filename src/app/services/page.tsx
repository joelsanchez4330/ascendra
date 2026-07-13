"use client";

import React, { useState, useEffect } from 'react';
import { fetchServices, ServiceItem } from '@/db/query/services';
import Navbar from '@/components/shared/navbar';
import ServicesHero from '@/components/services/type/hero';
import SearchBar from '@/components/services/type/search';
import ServicesList from '@/components/services/type/item-list';
import Footer from '@/components/shared/footer';

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchServices(search, activeCategory).then((data) => {
      setServices(data);
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
          <ServicesList services={services} loading={loading} />
        </main>
      </div>

      <Footer />
    </div>
  );
}