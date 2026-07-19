"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
// FIX: Imports updated frontend schemas and new companion relational pricing plans queries
import { fetchServiceBySlug, FrontendServiceItem } from '@/db/query/services';
import { fetchPricingPlansByService, FrontendPricingPlan } from '@/db/query/pricing';
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
  
  const [service, setService] = useState<FrontendServiceItem | null>(null);
  const [pricingPlans, setPricingPlans] = useState<FrontendPricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function loadDataPipeline() {
      setLoading(true);
      const serviceData = await fetchServiceBySlug(slug);
      
      if (serviceData) {
        setService(serviceData);
        // Hydrates relational investment plans dynamically using the item identity primary key
        const plans = await fetchPricingPlansByService(serviceData.id);
        setPricingPlans(plans);
      } else {
        setService(null);
        setPricingPlans([]);
      }
      setLoading(false);
    }

    loadDataPipeline();
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
          subtitle="Corporate Strategy Portfolio" 
          coverImage={service.coverImage} 
        />
        <DetailContent 
          title={service.title}
          shortDetail={service.shortDetail}
          longDetail={service.longDetail} 
        />
        <DetailGallery 
          images={service.galleryImages} 
          title={service.title} 
        />
        
        {/* FIX: Feeds the actual relational dataset cleanly instead of string tokens */}
        <DetailPricing 
          serviceTitle={service.title} 
          pricingPlans={pricingPlans}
        />
        
        <DetailCTA 
          title={service.title} 
        />
      </main>

      <Footer />
    </div>
  );
}