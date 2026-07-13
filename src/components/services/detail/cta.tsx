import React from 'react';

interface DetailCTAProps {
  title: string;
}

export default function DetailCTA({ title }: DetailCTAProps) {
  const message = encodeURIComponent(`Hello Ascendra, I am looking to schedule a consultation regarding your ${title} solution.`);
  
  return (
    <section className="bg-gray-50 py-16 text-center">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Ready to Improve Your Work Environment?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Schedule a brief discovery call with our experts to adapt this framework specifically to your corporate structure.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={`https://wa.me/6281234567890?text=${message}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md text-sm w-full sm:w-auto min-w-[220px]"
          >
            Chat on WhatsApp
          </a>
          <a 
            href="/services" 
            className="inline-flex justify-center items-center border-2 border-gray-200 hover:border-[#0D7C66] text-gray-700 hover:text-[#0D7C66] font-bold px-8 py-4 rounded-xl transition-all duration-200 text-sm w-full sm:w-auto min-w-[220px] bg-white"
          >
            Back to All Services
          </a>
          </div>
      </div>
    </section>
  );
}