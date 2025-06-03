// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const specializedServices = [
    { name: 'Criminal Litigation', href: '/criminal', icon: '⚖️' },
    { name: 'Property Disputes', href: '/property', icon: '🏢' },
    { name: 'Matrimonial Disputes', href: '/matrimonial', icon: '💍' },
    { name: 'Insolvency & Bankruptcy', href: '/insolvency', icon: '📊' },
    { name: 'Arbitration / ADR', href: '/arbitration', icon: '🤝' },
  ];

  const otherServices = [
    {name: 'Corporate & Commercial Matters', href: '/corporate', icon: '🏢' },
    {name: 'Banking Laws & DRT Matters', href: '/banking', icon: '🏦' },
    {name: 'Recovery & Financial Matters', href: '/recovery', icon: '💰' },
    {name: 'Competition Laws', href: '/competition', icon: '📈' },
    {name: 'Information Technology Cyber Cases', href: '/cyber', icon: '💻' } ,
    {name: 'Mergers & Acquisitions', href: '/mergers', icon: '🔗' },
    {name: 'Environmental Law & NGT Matters', href: '/environment_law', icon: '🌍' },
    {name: 'Service, Labour & Industrial Laws Cases', href: '/labour', icon: '👷‍♂️' },
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
        <Link href="/contact">
        <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 text-sm">
          Book Now
        </button>
        </Link>
      </div>

      {/* Other Services */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-cream-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-cream-200 pb-2">
          Other Services
        </h3>
        <div className="space-y-2">
          {otherServices.map((service, index) => (
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
    </div>
  );
};

export default Sidebar;