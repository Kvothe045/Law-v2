// components/ServicesSection.tsx
'use client'

import { Shield, Home, Heart, Building, ArrowRight, Sparkles, Phone, CheckCircle, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Shield,
    title: 'Criminal Matters',
    description: 'The firm has extensive experience in representing clients\' criminal matters at pan India level across different courts with a proven track record of success.',
    link: '/criminal',
    image: 'criminal.png',
    gradient: 'from-red-600 to-pink-700',
    cardGradient: 'from-red-50/90 via-cream-50 to-rose-50/80',
    glowColor: 'shadow-red-200/40',
    accentColor: 'text-red-700',
    category: 'Litigation',
    features: ['High Court Appeals', 'Bail Applications', 'Trial Defense', 'Investigation Support']
  },
  {
    icon: Home,
    title: 'Property Disputes',
    description: 'Disputes may arise regarding the possession of property when it is claimed that the property is not possessed or ownership rights are contested.',
    link: '/property',
    image: 'property.png',
    gradient: 'from-green-600 to-emerald-700',
    cardGradient: 'from-emerald-50/90 via-cream-50 to-green-50/80',
    glowColor: 'shadow-emerald-200/40',
    accentColor: 'text-emerald-700',
    category: 'Property Law',
    features: ['Title Disputes', 'Possession Rights', 'Real Estate Laws', 'Property Documentation']
  },
  {
    icon: Heart,
    title: 'Matrimonial Cases',
    description: 'Matrimonial disputes involve emotions, feelings and ego. We deal with matrimonial disputes with sensitivity, providing guidance and advice.',
    link: '/matrimonial',
    image: 'matrimonial.png',
    gradient: 'from-purple-600 to-violet-700',
    cardGradient: 'from-purple-50/90 via-cream-50 to-violet-50/80',
    glowColor: 'shadow-purple-200/40',
    accentColor: 'text-purple-700',
    category: 'Family Law',
    features: ['Divorce Proceedings', 'Child Custody', 'Alimony Matters', 'Family Counseling']
  },
  {
    icon: Building,
    title: 'Insolvency Matter',
    description: 'We assist corporate entities, entrepreneurs, banks, financial institutions, bondholders, other lenders and stakeholders in complex insolvency matters.',
    link: '/insolvency',
    image: 'insolvency.png',
    gradient: 'from-blue-600 to-indigo-700',
    cardGradient: 'from-blue-50/90 via-cream-50 to-indigo-50/80',
    glowColor: 'shadow-blue-200/40',
    accentColor: 'text-blue-700',
    category: 'Corporate Law',
    features: ['Corporate Insolvency', 'CIRP Process', 'Liquidation', 'Debt Restructuring']
  }
]

export default function ServicesSection() {
  return (
    <section className="relative py-2 overflow-hidden">
      {/* Sophisticated Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-blue-50/40">
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-yellow-100/30 rounded-full -translate-x-48 -translate-y-48 animate-pulse blur-xl"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-100/40 rounded-full translate-x-40 animate-pulse delay-1000 blur-xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-slate-200/20 to-blue-100/30 rounded-full translate-y-36 animate-pulse delay-500 blur-xl"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rotate-45 opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 border-2 border-slate-400/30 rounded-full animate-spin-slow"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51, 65, 85) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-8 animate-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-2xl border border-white/10 backdrop-blur-sm hover:shadow-3xl hover:scale-105 hover:from-blue-900 hover:via-slate-800 hover:to-blue-900 transition-all duration-300 ease-in-out cursor-pointer group">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse group-hover:text-amber-200 group-hover:scale-110 transition-all duration-300" />
            <span className="tracking-wide group-hover:tracking-wider transition-all duration-300">Our Services</span>
            <div className="h-2 w-2 bg-amber-400 rounded-full animate-ping group-hover:bg-amber-300 group-hover:scale-125 transition-all duration-300"></div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Legal Services We{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-800 bg-clip-text text-transparent animate-pulse">
              Specialize In
            </span>
          </h2>

          {/* <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive legal expertise covers a wide range of practice areas, ensuring professional representation for all your legal needs with dedication and excellence.
          </p> */}
        </div>

        {/* Enhanced Services Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative bg-gradient-to-br ${service.cardGradient} rounded-3xl p-6 hover:shadow-2xl ${service.glowColor} transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom border border-white/60 backdrop-blur-sm overflow-hidden h-full`}>
                  {/* Background Effects */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

                  <div className="relative z-20 h-full flex flex-col">
                    {/* Category Badge */}
                    {/* <div className="inline-flex items-center mb-4">
                      <span className="text-xs font-semibold text-slate-500 bg-white/60 px-3  rounded-full border border-slate-200/50">
                        {service.category}
                      </span>
                    </div> */}

                    <img
  src={service.image}
  alt={service.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  onError={(e) => {
    // Cast to HTMLImageElement to access style and nextSibling
    const imgElement = e.target as HTMLImageElement;
    // Fallback to icon if image fails to load
    imgElement.style.display = 'none';
    const fallbackDiv = imgElement.nextSibling as HTMLElement;
    if (fallbackDiv) {
      fallbackDiv.style.display = 'flex';
    }
  }}
/>

                    {/* Content */}
                    <h3 className={`text-lg font-bold ${service.accentColor} group-hover:text-slate-800 transition-colors duration-300 mb-4 mt-2 leading-tight`}>
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    {/* <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div> */}

                    {/* Learn More Link */}
                    <Link 
                      href={service.link}
                      className={`inline-flex items-center space-x-2 ${service.accentColor} font-semibold group-hover:translate-x-1 transition-all duration-300 text-sm mt-auto`}
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${service.gradient} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center max-w-9xl mb-12 animate-in slide-in-from-bottom duration-1000 delay-1000">
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-10 overflow-hidden shadow-2xl border border-slate-700/50">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-yellow-300/5 rounded-full translate-x-40 -translate-y-40 animate-pulse animate-bounce"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-300/5 rounded-full -translate-x-32 translate-y-32 animate-pulse delay-1000 animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-slate-400/5 to-blue-400/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-950/30 to-transparent animate-pulse delay-500"></div>
              <div className="absolute top-20 left-20 w-4 h-4 bg-amber-400/30 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce delay-700"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-amber-500/30 transition-all duration-300">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Premium Legal Services</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 animate-fade-in text-center">
  Need Professional Legal Assistance?
</h3>

<p className="text-base sm:text-base md:text-lg text-blue-200 mb-6 sm:mb-7 lg:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200 text-center">
  Our experienced legal team is ready to help you navigate complex legal challenges with expertise, dedication, and a proven track record of success.
</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
  <button 
    onClick={() => {
      const phoneNumber = "919990733308"; 
      const message = "Good day! I would like to schedule a free consultation regarding my legal matter. When would be a convenient time for you? Thank you.";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    }}
    className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden w-full sm:w-auto"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <span className="relative flex items-center space-x-2 justify-center">
      <span>Schedule Free Consultation</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </button>

  <a 
    href="tel:+919990733308" 
    className="group border-2 border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-slate-900 px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden block w-full sm:w-auto"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/100 group-hover:to-amber-300/100 transition-all duration-300"></div>
    <span className="relative flex items-center justify-center space-x-2">
      <Phone className="w-4 h-4 group-hover:animate-pulse" />
      <span>Call +91-99907 33308</span>
    </span>
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}