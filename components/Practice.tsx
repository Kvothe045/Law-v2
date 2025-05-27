"use client"
// components/PracticeAreas.tsx
import React from 'react';
import Link from 'next/link';

const PracticeAreas: React.FC = () => {
  const specializedServices = [
    { name: 'Criminal Litigation', href: '/criminal', icon: '⚖️' },
    { name: 'Property Disputes', href: '/property', icon: '🏢' },
    { name: 'Matrimonial Disputes', href: '/matrimonial', icon: '💍' },
    { name: 'Insolvency & Bankruptcy', href: '/insolvency', icon: '📊' },
    { name: 'Arbitration / ADR', href: '/adr', icon: '🤝' },
  ];

  const otherServices = [
    'Corporate & Commercial Matters',
    'Banking Laws & DRT Matters',
    'Recovery & Financial Matters',
    'Competition Laws',
    'Information Technology Cyber Cases',
    'Mergers & Acquisitions',
    'Environmental Law & NGT Matters',
    'Service, Labour & Industrial Laws Cases'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Practice Areas
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Comprehensive legal services across multiple practice areas with expertise 
            spanning from Supreme Court to District Courts
          </p>
        </div>

        {/* Specialized Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
            Specialized Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <Link href={service.href} key={index}>
                <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer border border-cream-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 group-hover:h-12 transition-all duration-300"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 group-hover:text-amber-600 transition-colors duration-300">
                    {service.name}
                  </h4>
                  <div className="mt-4 flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Online Consultation Card */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-slate-800 to-blue-900 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💻</div>
              <h4 className="text-lg font-semibold text-amber-400 mb-2">
                Online Legal Consultancy
              </h4>
              <p className="text-cream-100 text-sm mb-4">
                Get expert advice through video conferencing from anywhere
              </p>
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-2 px-4 rounded transition-colors duration-300 text-sm">
                Book Session
              </button>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
            Other Services
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-cream-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors duration-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;