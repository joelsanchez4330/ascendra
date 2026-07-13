import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/60 shadow-md">
      {submitted ? (
        <div className="text-center py-16 space-y-3">
          <div className="w-12 h-12 bg-[#BDE8CA]/30 text-[#0D7C66] rounded-full flex items-center justify-center mx-auto font-bold text-xl">✓</div>
          <h3 className="text-lg font-bold text-gray-900">Inquiry Received Successfully</h3>
          <p className="text-xs text-gray-500 max-w-xs mx-auto">Our organizational consultants will review your workforce request metrics and reply within 24 business hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Corporate Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Company / Organization Name</label>
            <input 
              type="text" 
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all"
              placeholder="PT Example Indonesia"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">How can we assist your team?</label>
            <textarea 
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0D7C66] focus:bg-white transition-all resize-none"
              placeholder="Outline your capacity goals, team count, or specific structural challenges..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0D7C66] hover:bg-[#41B3A2] text-white font-bold py-4 rounded-xl shadow-sm transition-colors duration-150 text-sm tracking-wide uppercase"
          >
            Submit Corporate Inquiry
          </button>
        </form>
      )}
    </div>
  );
}