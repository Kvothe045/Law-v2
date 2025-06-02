'use client'

import { link } from 'fs'
import { 
  Scale, 
  Globe,
  Target,
  Sparkles,
  Star
} from 'lucide-react'
import Link from 'next/link'

const practiceAreas = [
  {
    image: 'criminal.png',
    title: 'Criminal Litigation',
    gradient: 'from-red-600 to-rose-700',
    borderColor: 'border-red-200',
    hoverShadow: 'hover:shadow-red-500/20',
    href: '/criminal'
  },
  {
    image: 'property.png',
    title: 'Property Disputes',
    gradient: 'from-green-600 to-emerald-700',
    borderColor: 'border-green-200',
    hoverShadow: 'hover:shadow-green-500/20',
    href: '/property'
  },
  {
    image: 'matrimonial.png',
    title: 'Matrimonial Disputes',
    gradient: 'from-pink-600 to-rose-700',
    borderColor: 'border-pink-200',
    hoverShadow: 'hover:shadow-pink-500/20',
    href: '/matrimonial'
  },
  {
    image: 'insolvency.png',
    title: 'Insolvency & Bankruptcy',
    gradient: 'from-blue-600 to-indigo-700',
    borderColor: 'border-blue-200',
    hoverShadow: 'hover:shadow-blue-500/20',
    href : '/insolvency'
  },
  {
    image: 'arbitration.png',
    title: 'Arbitration / ADR',
    gradient: 'from-purple-600 to-violet-700',
    borderColor: 'border-purple-200',
    hoverShadow: 'hover:shadow-purple-500/20',
    href: '/arbitration'
  },
  {
    image: 'corporate.png',
    title: 'Corporate & Commercial',
    gradient: 'from-indigo-600 to-blue-700',
    borderColor: 'border-indigo-200',
    hoverShadow: 'hover:shadow-indigo-500/20',
    href: '/corporate'
  },
  {
    image: 'banking.png',
    title: 'Banking Laws & DRT',
    gradient: 'from-amber-600 to-yellow-700',
    borderColor: 'border-amber-200',
    hoverShadow: 'hover:shadow-amber-500/20',
    href: '/banking'
  },
  {
    image: 'recovery.png',
    title: 'Recovery & Financial',
    gradient: 'from-teal-600 to-cyan-700',
    borderColor: 'border-teal-200',
    hoverShadow: 'hover:shadow-teal-500/20',
    href: '/recovery'
  },
  {
    image: 'competition.png',
    title: 'Competition Laws',
    gradient: 'from-cyan-600 to-blue-700',
    borderColor: 'border-cyan-200',
    hoverShadow: 'hover:shadow-cyan-500/20',
    href: '/competition'
  },
  {
    image: 'cyber.png',
    title: 'IT & Cyber Cases',
    gradient: 'from-slate-600 to-gray-700',
    borderColor: 'border-slate-200',
    hoverShadow: 'hover:shadow-slate-500/20',
    href: '/cyber'
  },
  {
    image: 'mergers.png',
    title: 'Mergers & Acquisitions',
    gradient: 'from-violet-600 to-purple-700',
    borderColor: 'border-violet-200',
    hoverShadow: 'hover:shadow-violet-500/20',
    href:'/mergers'
  },
  {
    image: 'environment.png',
    title: 'Environmental Law',
    gradient: 'from-lime-600 to-green-700',
    borderColor: 'border-lime-200',
    hoverShadow: 'hover:shadow-lime-500/20',
    href: '/environment_law'
  },
  {
    image: 'labour.png',
    title: 'Labour & Industrial',
    gradient: 'from-orange-600 to-red-700',
    borderColor: 'border-orange-200',
    hoverShadow: 'hover:shadow-orange-500/20',
    href: '/labour'
  }
]

export default function PracticeAreasSection() {
  return (
    <section className="relative py-6 overflow-hidden bg-gray-50">
      {/* Clean Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-2xl border border-white/10 backdrop-blur-sm hover:shadow-3xl hover:scale-105 hover:from-blue-900 hover:via-slate-800 hover:to-blue-900 transition-all duration-300 ease-in-out cursor-pointer group animate-fade-in-up">
            <Scale className="w-5 h-5 text-amber-300 animate-pulse group-hover:text-amber-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <span className="tracking-wide group-hover:tracking-wider group-hover:text-blue-100 transition-all duration-300">Complete Legal Solutions</span>
            <Star className="w-4 h-4 text-amber-400 animate-spin group-hover:text-amber-300 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Practice Areas
            </span>
          </h2>
          
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Expert legal services across diverse practice areas with deep industry knowledge and unwavering commitment to excellence.
          </p>
        </div>

        {/* Modern Practice Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {practiceAreas.map((area, index) => (
            <Link
              key={area.title}
              href={area.href}
              className={`group relative bg-white rounded-2xl shadow-lg ${area.hoverShadow} hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer border ${area.borderColor} overflow-hidden flex flex-col h-40`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20"></div>
              
              {/* Image Container - Takes most of the card */}
              <div className="flex-1 w-full overflow-hidden rounded-t-2xl relative">
              <img
  src={area.image}
  alt={area.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
  onError={(e) => {
    // Cast to HTMLImageElement to access style and nextSibling
    const imgElement = e.target as HTMLImageElement;
    imgElement.style.display = 'none';
    const fallbackDiv = imgElement.nextSibling as HTMLElement;
    if (fallbackDiv) {
      fallbackDiv.style.display = 'flex';
    }
  }}
/>
                {/* Fallback gradient background */}
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${area.gradient} hidden items-center justify-center`}>
                  <Scale className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title Section - Fixed at bottom */}
              <div className="relative z-10 p-3 bg-white">
                <h3 className="text-xs font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight text-center">
                  {area.title}
                </h3>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30`}></div>
            </Link>
          ))}
        </div>

        {/* Modern Why Choose Us Section */}
        <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700/50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-3 border border-blue-400/20">
                <Sparkles className="w-4 h-4" />
                <span>Why Choose Us</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  GCS Law Firm?
                </span>
              </h3>
              
              <div className="max-w-4xl mx-auto space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  GCS Law Firm is a full-service law firm based in India, offering a cutting-edge blend of capabilities 
                  to corporations, individuals, and international entities across the globe.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We have built a reputation for high-quality work, positive outlook, and the highest 
                  standards of service and ethics.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="group text-center space-y-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-white">Global Reach</h4>
                <p className="text-gray-300 text-xs">International exposure and cross-border expertise</p>
              </div>
              
              <div className="group text-center space-y-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-white">Proven Excellence</h4>
                <p className="text-gray-300 text-xs">High-quality work with ethical standards</p>
              </div>
              
              <div className="group text-center space-y-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-white">Full Service</h4>
                <p className="text-gray-300 text-xs">Comprehensive solutions across all practice areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
