import React from 'react';

interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
}

interface ServicesListProps {
  services: ServiceItem[];
  loading: boolean;
}

export default function ServicesList({ services, loading }: ServicesListProps) {
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0D7C66] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-500">Updating listings...</p>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center bg-white rounded-3xl p-12 border border-gray-100 max-w-md mx-auto shadow-md">
        <p className="text-base font-bold text-gray-900">No matching services found</p>
        <p className="text-xs text-gray-500 mt-1">Try adjusting your search keywords or choosing a different filter category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        // Generate clean URL slug format matching our dynamic router parser (e.g., "workplace-bootcamps-1")
        const urlSlug = `${service.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')}-${service.id}`;

        return (
          <div 
            key={service.id} 
            className="bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
          >
            <div className="bg-white">
              <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-6 sm:p-8 space-y-3 bg-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#41B3A2]">
                  {service.subtitle}
                </span>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="pt-2 space-y-1.5">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-[#0D7C66] font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CHANGED: Dynamic route path to details page instead of home section */}
            <div className="p-6 sm:p-8 pt-0 bg-white">
              <a 
                href={`/services/${urlSlug}`}
                className="block w-full text-center bg-[#0D7C66] hover:bg-[#41B3A2] text-white font-bold px-4 py-3.5 rounded-xl transition-all text-sm shadow-sm"
              >
                View Program Details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}