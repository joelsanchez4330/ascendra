"use client";

import React, { useState } from 'react';
import { createFormSubmission } from '@/db/action/submit';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } else {
      showToast(response.error || "Failed to process form entry.", true);
    }
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-gray-200/60 shadow-sm relative">
      
      {/* GLOBAL TOAST FLOATER WINDOW */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] w-full max-w-sm px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className={`rounded-xl sm:rounded-2xl p-4 shadow-xl border flex items-center gap-3 text-xs font-bold uppercase tracking-wider ${
            toastMessage.isError 
              ? 'bg-red-50 border-red-200 text-red-800' 
              : 'bg-[#BDE8CA] border-[#41B3A2]/35 text-[#0D7C66]'
          }`}>
            <span className="text-sm">{toastMessage.isError ? '✕' : '✓'}</span>
            <p className="leading-snug">{toastMessage.text}</p>
          </div>
        </div>
      )}

      {submitted ? (
        <div className="text-center py-12 sm:py-16 space-y-3 animate-in fade-in duration-300">
          <div className="w-12 h-12 bg-[#BDE8CA]/30 text-[#0D7C66] rounded-full flex items-center justify-center mx-auto font-bold text-xl">✓</div>
          <h3 className="text-lg font-extrabold text-gray-900">Inquiry Received Successfully</h3>
          <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">Our consultants will review your request and reply within 24 business hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5">
              <label className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
              <input 
                type="text" 
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-950 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all disabled:opacity-60"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide">Corporate Email</label>
              <input 
                type="email" 
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-950 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all disabled:opacity-60"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide">Company / Organization Name</label>
            <input 
              type="text" 
              required
              disabled={isSubmitting}
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-950 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all disabled:opacity-60"
              placeholder="e.g. Acme Corp"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide">How can we assist your team?</label>
            <textarea 
              rows={4}
              required
              disabled={isSubmitting}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-950 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all resize-none disabled:opacity-60"
              placeholder="Outline your team size, goals, or current workplace challenges..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0D7C66] hover:bg-[#41B3A2] disabled:bg-gray-300 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-sm transition-colors duration-150 text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed border-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <span>Submit Inquiry</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}