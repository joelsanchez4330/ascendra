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
      showToast("Thank you for your message, we will reply soon to your email");
      setIsModalOpen(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      showToast(response.error || "Unable to send message.", true);
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24 border-t border-gray-100" id="contact">
      
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
        
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 max-w-2xl leading-tight">
          Build a Healthier, More Productive Workplace
        </h2>
        
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
          Every company faces different team challenges. Chat with us directly on WhatsApp to get started quickly, or fill out our form to share details about your team.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <a 
            href="https://wa.me/6281234567890?text=Hello%20Ascendra%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md text-center text-sm w-full sm:w-auto min-w-[220px]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.4 0 9.792-4.386 9.795-9.779.002-2.612-1.008-5.07-2.846-6.906C16.328 2.083 13.864 1.07 11.251 1.07 5.855 1.07 1.465 5.457 1.463 10.852c-.001 1.629.431 3.218 1.251 4.63l-1.013 3.7 3.788-.993zm10.73-4.872c-.304-.153-1.8-.886-2.077-.988-.278-.102-.48-.153-.682.153-.202.304-.783.988-.96 1.192-.177.204-.355.228-.659.076-1.066-.534-1.857-1.001-2.597-1.683-.68-.626-1.155-1.391-1.29-1.62-.135-.228-.015-.351.107-.472.11-.11.253-.304.38-.456.126-.152.169-.253.253-.418.084-.165.042-.304-.021-.431-.063-.127-.48-1.156-.659-1.586-.174-.419-.348-.362-.48-.369-.124-.006-.266-.007-.407-.007-.142 0-.372.053-.566.266-.194.213-.742.726-.742 1.77 0 1.045.76 2.053.866 2.193.106.141 1.494 2.28 3.618 3.193.505.218.9.348 1.208.445.508.162.97.139 1.334.085.407-.06 1.8-.736 2.053-1.445.253-.708.253-1.316.177-1.445-.076-.127-.278-.203-.582-.356z"/>
            </svg>
            Chat on WhatsApp
          </a>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex justify-center items-center border-2 border-gray-200 hover:border-[#0D7C66] text-gray-700 hover:text-[#0D7C66] font-bold px-8 py-4 rounded-xl transition-all duration-200 text-center text-sm w-full sm:w-auto min-w-[220px]"
          >
            Fill Out Contact Form
          </button>
        </div>

        {/* POPUP MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-2xl max-w-xl w-full text-left relative">
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-gray-900">Contact Our Team</h3>
                <p className="text-xs text-gray-400 mt-1">Submit your request below to map performance frameworks with our specialists.</p>
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
                    placeholder="Organization or entity name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Message</label>
                  <textarea 
                    rows={4} required value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors resize-none"
                    placeholder="Tell us about your team size and targeted wellness or headhunting objectives..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0D7C66] hover:bg-[#41B3A2] disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md text-center mt-2 text-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Saving to secure DB...</span>
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