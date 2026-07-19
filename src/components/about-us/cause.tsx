"use client";

import React from 'react';

export default function AboutCause() {
  const missions = [
    "Deliver strategic people and culture solutions tailored to organizational needs",
    "Develop inspiring leaders and highly engaged employees",
    "Foster healthy workplace cultures through wellbeing and organizational development initiatives",
    "Enable sustainable business growth"
  ];

  const values = [
    { letter: "R", name: "Reinvention", desc: "Helping organizations create a clear, strategic, and better direction forward." },
    { letter: "I", name: "Impact", desc: "Focusing on delivering measurable, tangible, and real results." },
    { letter: "S", name: "Synergy", desc: "Building strong performance through meaningful collaboration." },
    { letter: "E", name: "Empowerment", desc: "Unlocking hidden capabilities to elevate teams to their highest potential." }
  ];

  return (
    <section className="bg-white py-12 sm:py-20 border-b border-gray-100">
      {/* Container aligned to max-w-3xl to ensure uniform indentation across all sections */}
      <div className="max-w-3xl mx-auto px-4 space-y-12">
        
        {/* Section A: Title turned into normal text with Purpose as the standard heading */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-wider text-[#0D7C66]">
            Our Purpose
          </p>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
            To help organizations build thriving workplaces where people grow, leaders inspire, and business flourishes.
          </p>
        </div>

        {/* Section B: Vision section reworked to remove container border/background, match indent exactly, and set weights to regular text */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-wider text-[#0D7C66]">
            Our Vision
          </p>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
            To become a trusted strategic partner in creating healthier, stronger, and higher-performing organizations.
          </p>
        </div>

        {/* Mission Roadmap Layout */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-wider text-[#0D7C66]">
            Our Mission
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {missions.map((mission, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-4 rounded-xl flex items-start gap-3">
                <span className="text-[#0D7C66] font-extrabold text-sm mt-0.5">✓</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">{mission}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Structure */}
        <div className="space-y-6 pt-4 border-t border-gray-100">
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-[#0D7C66] mb-1">
              Core Values
            </p>
            <h3 className="text-xl font-black text-gray-900 tracking-tight">The RISE Framework</h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200/40 rounded-xl p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#0D7C66]/30 leading-none">{val.letter}</span>
                  <span className="text-xs font-bold text-gray-900 tracking-tight">{val.name}</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-normal">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}