import React from 'react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import Hero from '@/components/home/hero';
import Stats from '@/components/home/stats';
import BootcampFeatures from '@/components/home/features';
import ServicesCTA from '@/components/home/cta-services';
import Gallery from '@/components/home/gallery';
import Testimonials from '@/components/home/testimonials';
import BookingForm from '@/components/home/cta-consultation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased selection:bg-[#BDE8CA] selection:text-[#0D7C66]">
      
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main className="w-full">
        
        {/* 1. HERO CAROUSEL */}
        <section id="hero">
          <Hero />
        </section>

        {/* 2. BOOTCAMP FEATURES (With anchor scroll tracking setup) */}
        <section id="services" className="bg-white scroll-mt-20">
          <BootcampFeatures />
        </section>

        {/* 3. METRICS & SYSTEMIC REALITY */}
        <Stats />

        {/* 4. REMAINING SERVICES COMPASS CTA */}
        <ServicesCTA />

        {/* 5. SOCIAL IMPACT AND WORKPLACE TESTIMONIALS */}
        <Testimonials />

        {/* 6. THE MEDIA GRID MATRIX */}
        <section id="gallery" className="bg-white">
          <Gallery />
        </section>

        {/* 7. INTAKE EVALUATION FORM */}
        <section id="contact" className="bg-white scroll-mt-20">
          <BookingForm />
        </section>

      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}