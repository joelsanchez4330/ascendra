import React from 'react';

export default function AboutTeam() {
  const team = [
    {
      name: "Dian Utami",
      position: "Managing Director & Executive Coach",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Reza Mahendra",
      position: "Head of Talent Acquisition & Retention Strategy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Siti Rahma",
      position: "Lead Clinical Psychologist & Training Facilitator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-black tracking-tight text-gray-900">
            The Team Behind Ascendra
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Meet the organizational psychologists, recruitment strategists, and executive advisors working together to rebuild workplace dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Image Window */}
              <div className="h-72 w-full bg-gray-100 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                />
              </div>

              {/* Text Base */}
              <div className="p-6 bg-white text-center flex-grow flex flex-col justify-center space-y-1">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#41B3A2] tracking-wide">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}