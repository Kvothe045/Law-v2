'use client'

import { Shield, Home, Heart, Building, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Criminal Matters',
    description: 'The firm has extensive experience in representing clients\' criminal matters at pan India level across different courts with a proven track record of success.',
    link: '/criminal',
    gradient: 'from-red-500 to-pink-600',
    bgGradient: 'from-red-50 to-pink-50'
  },
  {
    icon: Home,
    title: 'Property Disputes',
    description: 'Disputes may arise regarding the possession of property when it is claimed that the property is not possessed or ownership rights are contested.',
    link: '/property',
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    icon: Heart,
    title: 'Matrimonial Cases',
    description: 'Matrimonial disputes involve emotions, feelings and ego. We deal with matrimonial disputes with sensitivity, providing guidance and advice.',
    link: '/matrimonial',
    gradient: 'from-purple-500 to-violet-600',
    bgGradient: 'from-purple-50 to-violet-50'
  },
  {
    icon: Building,
    title: 'Insolvency Matter',
    description: 'We assist corporate entities, entrepreneurs, banks, financial institutions, bondholders, other lenders and stakeholders in complex insolvency matters.',
    link: '/insolvency',
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50'
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Our Practice Areas</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Legal Services We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Specialize In
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive legal expertise covers a wide range of practice areas, ensuring professional representation for all your legal needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-in slide-in-from-bottom duration-1000`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={service.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-in slide-in-from-bottom duration-1000 delay-700">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our experienced legal team is ready to help you navigate complex legal challenges with expertise and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Call +91-124-4377638
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}