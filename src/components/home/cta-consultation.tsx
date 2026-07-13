"use client";

import React, { useState } from 'react';

export default function BookingForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    serviceOfInterest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', company: '', teamSize: '', serviceOfInterest: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-white py-16 sm:py-24 border-t border-gray-100" id="contact">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-left relative">
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#BDE8CA]/30 text-[#0D7C66] rounded-full flex items-center justify-center mx-auto text-2xl">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">Message Sent Successfully</h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you. We will get back to you shortly by email.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-extrabold text-gray-900">Contact Our Team</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Your Name</label>
                        <input 
                          type="text" required value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Work Email</label>
                        <input 
                          type="email" required value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Company Name</label>
                        <input 
                          type="text" required value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Company Size</label>
                        <select 
                          value={formData.teamSize} required
                          onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-650 transition-colors"
                        >
                          <option value=""></option>
                          <option value="10-50">10 - 50 employees</option>
                          <option value="51-200">51 - 200 employees</option>
                          <option value="201-500">201 - 500 employees</option>
                          <option value="500+">More than 500 employees</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Service Interest</label>
                      <select 
                        value={formData.serviceOfInterest} required
                        onChange={(e) => setFormData({...formData, serviceOfInterest: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-650 transition-colors"
                      >
                        <option value=""></option>
                        <option value="bootcamp">Workplace Wellness Bootcamps</option>
                        <option value="headhunting">Talent Recruiting & Head Hunting</option>
                        <option value="coaching">1-on-1 Employee Coaching</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Message</label>
                      <textarea 
                        rows={3} required value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#0D7C66] focus:bg-white outline-none rounded-xl px-4 py-2.5 text-sm text-gray-900 transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#0D7C66] hover:bg-[#41B3A2] text-white font-bold py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md text-center mt-2 text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}