"use client";

import React, { useState, useEffect } from 'react';
import { createFormSubmission } from '@/db/action/submit';

export default function BookingForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Locks body scrolling when modal is active, releases it when closed or unmounted
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const showToast = (text: string, isError = false) => {
    setToastMessage({ text, isError });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await createFormSubmission({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message
    });

    setIsSubmitting(false);

    if (response.success) {
      showToast("Thank you for your message, we will reply to your email soon.");
      setIsModalOpen(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      showToast(response.error || "Unable to send message.", true);
    }
  };

  const whatsappTarget = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285151767378";
  const whatsappMessage = encodeURIComponent("Hello Ascendra, I would like to inquire about your corporate services.");

  return (
    <div className="bg-white py-12 sm:py-20 border-t border-gray-100" id="contact">
      
      {/* GLOBAL TOAST FLOATER WINDOW */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] w-full max-w-sm px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className={`rounded-2xl p-4 shadow-xl border flex items-center gap-3 text-xs font-bold uppercase tracking-wider ${
            toastMessage.isError 
              ? 'bg-red-50 border-red-200 text-red-800' 
              : 'bg-[#BDE8CA] border-[#41B3A2]/35 text-[#0D7C66]'
          }`}>
            <span className="text-sm">{toastMessage.isError ? '✕' : '✓'}</span>
            <p className="leading-snug">{toastMessage.text}</p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#41B3A2] bg-[#BDE8CA]/25 px-3 py-1.5 rounded-full inline-block">
          Get in Touch
        </span>
        
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 max-w-2xl leading-tight">
          Build a Healthier, More Productive Workplace
        </h2>
        
        <p className="text-gray-900 text-sm sm:text-base leading-relaxed max-w-2xl">
          Every company faces different team challenges. Chat with us directly on WhatsApp to get started quickly, or fill out our form to share details about your team.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <a 
            href={`https://wa.me/${whatsappTarget}?text=${whatsappMessage}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md text-center text-sm w-full sm:w-auto min-w-[220px]"
          >
            Chat on WhatsApp
          </a>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex justify-center items-center border-2 border-gray-200 hover:border-[#0D7C66] text-gray-700 hover:text-[#0D7C66] font-bold px-8 py-4 rounded-xl transition-all duration-200 text-center text-sm w-full sm:w-auto min-w-[220px] bg-white cursor-pointer"
          >
            Fill Out Contact Form
          </button>
        </div>

        {/* POPUP MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-2xl max-w-xl w-full text-left relative max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-gray-900">Contact Our Team</h3>
                <p className="text-xs text-gray-500 mt-1">Submit your request below to map out the best program option with our specialists.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Your Name</label>
                  <input 
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors"
                    placeholder="Full name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Work Email</label>
                  <input 
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Company Name</label>
                  <input 
                    type="text" required value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Message</label>
                  <textarea 
                    rows={4} required value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors resize-none"
                    placeholder="Tell us about your team size and your goals..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0D7C66] hover:bg-[#41B3A2] disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md text-center mt-2 text-sm flex items-center justify-center gap-2 border-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}