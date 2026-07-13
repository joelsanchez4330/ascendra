"use client";

import React from 'react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import AboutHero from '@/components/about-us/hero';
import AboutCause from '@/components/about-us/cause';
import AboutTeam from '@/components/about-us/team';

export default function AboutPage() {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar />
  
        <main className="flex-grow">
          {/* Full Bleed Banner Header */}
          <AboutHero />
          
          {/* Cause / Drive Segment */}
          <AboutCause />
          
          {/* Team Grid Segment */}
          <AboutTeam />
        </main>
  
        <Footer />
      </div>
    );
  }