// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
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
    <div className="space-y-6">
      {/* Specialized Services */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-cream-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-cream-200 pb-2">
          Specialized Services
        </h3>
        <div className="space-y-2">
          {specializedServices.map((service, index) => (
            <Link href={service.href} key={index}>
              <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-all duration-300 cursor-pointer group">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
                <span className="text-slate-700 text-sm group-hover:text-amber-600 transition-colors duration-300">
                  {service.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Online Consultation */}
      <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-slate-900 p-6 rounded-lg shadow-lg">
        <div className="text-2xl mb-3">💻</div>
        <h3 className="text-lg font-semibold mb-2">Online Legal Consultancy</h3>
        <p className="text-slate-800 text-sm mb-4">
          Video conferencing consultations available
        </p>
        <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 text-sm">
          Book Now
        </button>
      </div>

      {/* Other Services */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-cream-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-cream-200 pb-2">
          Other Services
        </h3>
        <div className="space-y-2">
          {otherServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
              <span className="text-slate-600 text-xs">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;