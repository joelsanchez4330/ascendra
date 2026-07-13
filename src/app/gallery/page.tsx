"use client";

import React, { useState, useEffect } from 'react';
import { fetchGalleryItems, GalleryItem } from '@/db/query/gallery';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import GalleryHero from '@/components/gallery/hero';
import GalleryFilter from '@/components/gallery/filter';
import GalleryGrid from '@/components/gallery/grid';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchGalleryItems(activeCategory).then((data) => {
      setImages(data);
      setLoading(false);
    });
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow">
        <GalleryHero />
        
        <GalleryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <GalleryGrid items={images} loading={loading} />
        </main>
      </div>

      <Footer />
    </div>
  );
}