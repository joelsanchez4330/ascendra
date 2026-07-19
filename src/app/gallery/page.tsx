"use client";

import React, { useState, useEffect } from 'react';
import { fetchGalleryItems, fetchExistingGalleryCategories, GalleryItem } from '@/db/query/gallery';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import GalleryHero from '@/components/gallery/hero';
import GalleryFilter from '@/components/gallery/filter';
import GalleryGrid from '@/components/gallery/grid';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch unique categories once when the page component mounts
  useEffect(() => {
    fetchExistingGalleryCategories().then((catData) => {
      setCategories(catData || []);
    });
  }, []);

  // Fetch gallery images whenever the active category changes
  useEffect(() => {
    setLoading(true);
    fetchGalleryItems(activeCategory).then((data) => {
      setImages(data);
      setLoading(false);
    });
  }, [activeCategory]);

  return (
    // FIX: Added overflow-x-hidden to isolate internal responsive sub-component scroll elements
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="flex-grow">
        <GalleryHero />
        
        {/* FIX: Categories array bound explicitly down to the updated filter parameters */}
        <GalleryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          categories={categories}
        />

        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <GalleryGrid items={images} loading={loading} />
        </main>
      </div>

      <Footer />
    </div>
  );
}