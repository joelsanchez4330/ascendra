"use client";

import React from 'react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import ContactHero from '@/components/contact/hero';
import ContactDetails from '@/components/contact/detail';
import ContactForm from '@/components/contact/form';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        {/* Full Bleed Image Cover Header */}
        <ContactHero />
        
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side: Communication channels (1 Column wide) */}
          <div className="lg:col-span-1">
            <ContactDetails />
          </div>

          {/* Right Side: Interactive Submit Form (2 Columns wide) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}