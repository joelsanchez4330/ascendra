"use client";

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
    <div className="min-h-screen bg-white flex flex-col justify-between">
      
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main className="flex-grow w-full overflow-hidden">
        
        {/* 1. Hero Showcase */}
        <section id="hero" className="w-full bg-white">
          <Hero />
        </section>

        {/* 2. Core Operational Pillars */}
        <section id="services" className="w-full bg-white scroll-mt-20">
          <BootcampFeatures />
        </section>

        {/* 3. Performance Metrics */}
        <section className="w-full bg-gray-50/50">
          <Stats />
        </section>

        {/* 4. Service Navigation Action */}
        <section className="w-full bg-white">
          <ServicesCTA />
        </section>

        {/* 5. Client Testimonials */}
        <section className="w-full bg-gray-50/50">
          <Testimonials />
        </section>

        {/* 6. Media Framework Gallery */}
        <section id="gallery" className="w-full bg-white scroll-mt-20">
          <Gallery />
        </section>

        {/* 7. Corporate Intake Evaluation Form */}
        <section id="contact" className="w-full bg-gray-50/50 scroll-mt-20">
          <BookingForm />
        </section>

      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}