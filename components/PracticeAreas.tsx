'use client'

import { 
  Scale, 
  Home, 
  Heart, 
  Building, 
  Users, 
  Briefcase, 
  Landmark, 
  CreditCard,
  Target,
  Shield,
  Globe,
  Merge,
  Leaf,
  Hammer,
  Sparkles,
  Star
} from 'lucide-react'

const practiceAreas = [
  {
    icon: Scale,
    title: 'Criminal Litigation',
    gradient: 'from-red-600 to-rose-700',
    cardGradient: 'from-red-50/70 via-white to-rose-50/50',
    shadowColor: 'hover:shadow-red-200/40'
  },
  {
    icon: Home,
    title: 'Property Disputes',
    gradient: 'from-green-600 to-emerald-700',
    cardGradient: 'from-green-50/70 via-white to-emerald-50/50',
    shadowColor: 'hover:shadow-green-200/40'
  },
  {
    icon: Heart,
    title: 'Matrimonial Disputes',
    gradient: 'from-pink-600 to-rose-700',
    cardGradient: 'from-pink-50/70 via-white to-rose-50/50',
    shadowColor: 'hover:shadow-pink-200/40'
  },
  {
    icon: Building,
    title: 'Insolvency & Bankruptcy',
    gradient: 'from-blue-600 to-indigo-700',
    cardGradient: 'from-blue-50/70 via-white to-indigo-50/50',
    shadowColor: 'hover:shadow-blue-200/40'
  },
  {
    icon: Users,
    title: 'Arbitration / ADR',
    gradient: 'from-purple-600 to-violet-700',
    cardGradient: 'from-purple-50/70 via-white to-violet-50/50',
    shadowColor: 'hover:shadow-purple-200/40'
  },
  {
    icon: Briefcase,
    title: 'Corporate & Commercial',
    gradient: 'from-indigo-600 to-blue-700',
    cardGradient: 'from-indigo-50/70 via-white to-blue-50/50',
    shadowColor: 'hover:shadow-indigo-200/40'
  },
  {
    icon: Landmark,
    title: 'Banking Laws & DRT',
    gradient: 'from-amber-600 to-yellow-700',
    cardGradient: 'from-amber-50/70 via-white to-yellow-50/50',
    shadowColor: 'hover:shadow-amber-200/40'
  },
  {
    icon: CreditCard,
    title: 'Recovery & Financial',
    gradient: 'from-teal-600 to-cyan-700',
    cardGradient: 'from-teal-50/70 via-white to-cyan-50/50',
    shadowColor: 'hover:shadow-teal-200/40'
  },
  {
    icon: Target,
    title: 'Competition Laws',
    gradient: 'from-cyan-600 to-blue-700',
    cardGradient: 'from-cyan-50/70 via-white to-blue-50/50',
    shadowColor: 'hover:shadow-cyan-200/40'
  },
  {
    icon: Shield,
    title: 'IT & Cyber Cases',
    gradient: 'from-slate-600 to-gray-700',
    cardGradient: 'from-slate-50/70 via-white to-gray-50/50',
    shadowColor: 'hover:shadow-slate-200/40'
  },
  {
    icon: Merge,
    title: 'Mergers & Acquisitions',
    gradient: 'from-violet-600 to-purple-700',
    cardGradient: 'from-violet-50/70 via-white to-purple-50/50',
    shadowColor: 'hover:shadow-violet-200/40'
  },
  {
    icon: Leaf,
    title: 'Environmental Law',
    gradient: 'from-lime-600 to-green-700',
    cardGradient: 'from-lime-50/70 via-white to-green-50/50',
    shadowColor: 'hover:shadow-lime-200/40'
  },
  {
    icon: Hammer,
    title: 'Labour & Industrial',
    gradient: 'from-orange-600 to-red-700',
    cardGradient: 'from-orange-50/70 via-white to-red-50/50',
    shadowColor: 'hover:shadow-orange-200/40'
  }
]

export default function PracticeAreasSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Sophisticated Layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-amber-50/30"></div>
        
        {/* Midnight blue touches */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-blue-900/10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-10 left-10 w-2 h-20 bg-gradient-to-b from-amber-400/60 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-16 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-24 bg-gradient-to-b from-slate-600/40 to-transparent rounded-full animate-pulse delay-500"></div>
        
        {/* Large background orbs */}
        <div className="absolute -top-40 -left-20 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-yellow-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-slate-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-slate-300/15 to-blue-200/25 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Geometric accent shapes */}
        <div className="absolute top-20 right-1/4 w-6 h-6 bg-amber-400/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-16 w-4 h-4 bg-blue-500/50 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-5 h-5 border-2 border-slate-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-8 mb-20 animate-in slide-in-from-top duration-1000">
        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-2xl border border-white/10 backdrop-blur-sm hover:shadow-3xl hover:scale-105 hover:from-blue-900 hover:via-slate-800 hover:to-blue-900 transition-all duration-300 ease-in-out cursor-pointer group animate-fade-in-up">
  <Scale className="w-5 h-5 text-amber-300 animate-pulse group-hover:text-amber-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
  <span className="tracking-wide group-hover:tracking-wider group-hover:text-blue-100 transition-all duration-300">Complete Legal Solutions</span>
  <Star className="w-4 h-4 text-amber-400 animate-spin group-hover:text-amber-300 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />
</div>

          
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Our Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-800 bg-clip-text text-transparent">
              Practice Areas
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We provide expert legal services across diverse practice areas, delivering tailored solutions 
            with deep industry knowledge and unwavering commitment to excellence.
          </p>
        </div>

        {/* Enhanced Practice Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-20">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className={`group relative bg-gradient-to-br ${area.cardGradient} rounded-3xl p-6 ${area.shadowColor} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 cursor-pointer border border-white/70 backdrop-blur-sm overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Multiple hover effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]"></div>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>
                
                {/* Corner accent */}
                <div className={`absolute top-3 right-3 w-2 h-2 bg-gradient-to-br ${area.gradient} rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative text-center space-y-4 z-10">
                  {/* Enhanced Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent"></div>
                    <Icon className="w-7 h-7 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Enhanced Title */}
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-slate-700 transition-colors duration-300 leading-tight">
                    {area.title}
                  </h3>
                </div>

                {/* Subtle bottom border effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-b-3xl`}></div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Why Choose Us Section */}
        <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-12 overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-1000 delay-500 border border-slate-700/50">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-400/15 to-yellow-300/10 rounded-full translate-x-40 -translate-y-40 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-indigo-300/10 rounded-full -translate-x-32 translate-y-32 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-slate-600/5 to-blue-600/10 rounded-full blur-3xl"></div>
            
            {/* Floating accent dots */}
            <div className="absolute top-8 right-16 w-2 h-2 bg-amber-400/60 rounded-full animate-ping"></div>
            <div className="absolute bottom-12 left-20 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-amber-400/20">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Why Choose Us</span>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  GCS Law Firm?
                </span>
              </h3>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-blue-200 text-lg leading-relaxed">
                  GCS Law Firm is a full-service law firm based in India, offering a cutting-edge blend of capabilities 
                  to corporations, individuals, and international entities across the globe. We are distinguished not only 
                  by the depth and scope of our legal advisory services, but also by unmatched experience and international 
                  exposure that enables us to handle deals and cases of any size and complexity.
                </p>
                <p className="text-blue-300 text-lg leading-relaxed">
                  Over the years, we have built a reputation for high-quality work, a positive outlook, and the highest 
                  standards of service and ethics. The Firm continues to expand and now, we have notably become the counsel of choice.
                </p>
              </div>
            </div>

            {/* Enhanced Key Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="w-18 h-18 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Globe className="w-9 h-9 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">Global Reach</h4>
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">International exposure and experience handling complex cross-border matters</p>
              </div>
              
              <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="w-18 h-18 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Scale className="w-9 h-9 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">Proven Excellence</h4>
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">High-quality work with the highest standards of service and ethics</p>
              </div>
              
              <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="w-18 h-18 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <Target className="w-9 h-9 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">Comprehensive Solutions</h4>
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">Full-service capabilities across diverse practice areas and industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}