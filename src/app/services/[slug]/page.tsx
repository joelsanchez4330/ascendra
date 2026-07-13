"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchServiceBySlug, ServiceItem } from '@/db/query/services';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import DetailHero from '@/components/services/detail/hero';
import DetailContent from '@/components/services/detail/content';
import DetailGallery from '@/components/services/detail/gallery';
import DetailPricing from '@/components/services/detail/pricing';
import DetailCTA from '@/components/services/detail/cta';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [service, setService] = useState<ServiceItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchServiceBySlug(slug).then((data) => {
        setService(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-32">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0D7C66] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-gray-500">Loading details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-32 text-center max-w-md mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900">Service Not Found</h2>
          <p className="text-xs text-gray-500 mt-1 mb-6">The workspace program you are searching for does not exist.</p>
          <a href="/services" className="bg-[#0D7C66] text-white px-6 py-2.5 rounded-xl font-bold text-sm">Return to Services</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-grow">
        <DetailHero 
          title={service.title} 
          subtitle={service.subtitle} 
          coverImage={service.image} 
        />
        <DetailContent 
          title={service.title}
          subtitle={service.subtitle}
          description={service.description} 
        />
        <DetailGallery 
          images={service.benefits} 
          title={service.title} 
        />
        
        {/* NEW PACKAGES LAYER ADDED HERE */}
        <DetailPricing 
          serviceTitle={service.title} 
        />
        
        <DetailCTA 
          title={service.title} 
        />
      </main>

      <Footer />
    </div>
  );
}