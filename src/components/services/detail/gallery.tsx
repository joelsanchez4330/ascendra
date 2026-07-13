import React from 'react';

interface DetailGalleryProps {
  images: string[];
  title: string;
}

export default function DetailGallery({ images, title }: DetailGalleryProps) {
  // Use fallbacks if only one image exists in the database column string split
  const displayImages = images.length > 1 ? images : [
    images[0],
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-xl font-bold text-gray-900 text-center">Inside the Program</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayImages.map((imgUrl, index) => (
            <div 
              key={index} 
              className="h-64 bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={imgUrl} 
                alt={`${title} view ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}