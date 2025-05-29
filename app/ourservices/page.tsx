'use client'

import { 
  Shield, 
  Home, 
  Heart, 
  Building, 
  Scale, 
  Briefcase, 
  Landmark, 
  CreditCard,
  Trophy,
  Monitor,
  ArrowUpRight,
  Merge,
  TreePine,
  Users,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  Globe,
  Award
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    icon: Shield,
    title: 'Criminal Litigation',
    description: 'Expert representation in criminal matters across all courts with a proven track record of successful defense strategies and case outcomes.',
    features: ['High Court Appeals', 'Bail Applications', 'Trial Defense', 'Investigation Support'],
    gradient: 'from-red-600 to-rose-700',
    cardGradient: 'from-red-50/90 via-cream-50 to-rose-50/80',
    glowColor: 'shadow-red-200/40',
    image: 'criminal.png',
    accentColor: 'text-red-700',
    category: 'Litigation',
    route: '/criminal'
  },
  {
    icon: Home,
    title: 'Property Disputes',
    description: 'Comprehensive legal solutions for property ownership, possession disputes, and real estate matters with strategic litigation approach.',
    features: ['Title Disputes', 'Possession Rights', 'Real Estate Laws', 'Property Documentation'],
    image: 'property.png',
    gradient: 'from-emerald-600 to-green-700',
    cardGradient: 'from-emerald-50/90 via-cream-50 to-green-50/80',
    glowColor: 'shadow-emerald-200/40',
    accentColor: 'text-emerald-700',
    category: 'Property Law',
    route: '/property'
  },
  {
    icon: Heart,
    title: 'Matrimonial Disputes',
    description: 'Sensitive handling of family matters including divorce, custody, and matrimonial disputes with compassionate legal guidance.',
    features: ['Divorce Proceedings', 'Child Custody', 'Alimony Matters', 'Family Counseling'],
    image: 'matrimonial.png',
    gradient: 'from-pink-600 to-rose-700',
    cardGradient: 'from-pink-50/90 via-cream-50 to-rose-50/80',
    glowColor: 'shadow-pink-200/40',
    accentColor: 'text-pink-700',
    category: 'Family Law',
    route: '/matrimonial'
  },
  {
    icon: Building,
    title: 'Insolvency & Bankruptcy',
    description: 'Strategic assistance in complex insolvency matters for corporates, financial institutions, and stakeholders under IBC framework.',
    features: ['Corporate Insolvency', 'CIRP Process', 'Liquidation', 'Debt Restructuring'],
    image: 'insolvency.png',
    gradient: 'from-blue-600 to-indigo-700',
    cardGradient: 'from-blue-50/90 via-cream-50 to-indigo-50/80',
    glowColor: 'shadow-blue-200/40',
    accentColor: 'text-blue-700',
    category: 'Corporate Law',
    route: '/insolvency'
  },
  {
    icon: Scale,
    title: 'Arbitration / ADR',
    description: 'Alternative dispute resolution through arbitration, mediation, and conciliation for efficient conflict resolution.',
    features: ['Commercial Arbitration', 'International ADR', 'Mediation Services', 'Enforcement'],
    gradient: 'from-purple-600 to-violet-700',
    cardGradient: 'from-purple-50/90 via-cream-50 to-violet-50/80',
    glowColor: 'shadow-purple-200/40',
    accentColor: 'text-purple-700',
    image: 'arbitration.png',
    category: 'ADR',
    route: '/arbitration'
  },
  {
    icon: Briefcase,
    title: 'Corporate & Commercial',
    description: 'Comprehensive corporate legal services including compliance, contracts, and commercial transaction advisory.',
    features: ['Corporate Compliance', 'Contract Drafting', 'Joint Ventures', 'Business Advisory'],
    gradient: 'from-slate-600 to-gray-700',
    cardGradient: 'from-slate-50/90 via-cream-50 to-gray-50/80',
    glowColor: 'shadow-slate-200/40',
    accentColor: 'text-slate-700',
    image: 'corporate.png',
    category: 'Corporate Law',
    route: '/corporate'
  },
  {
    icon: Landmark,
    title: 'Banking Laws & DRT',
    description: 'Specialized representation in banking disputes, DRT matters, and financial recovery proceedings.',
    features: ['DRT Proceedings', 'SARFAESI Act', 'Banking Disputes', 'Loan Recovery'],
    gradient: 'from-amber-600 to-yellow-600',
    cardGradient: 'from-amber-50/90 via-cream-50 to-yellow-50/80',
    glowColor: 'shadow-amber-200/40',
    accentColor: 'text-amber-700',
    image: 'banking.png',
    category: 'Banking Law',
    route: '/banking'
  },
  {
    icon: CreditCard,
    title: 'Recovery & Financial',
    description: 'Efficient debt recovery and financial dispute resolution with strategic enforcement mechanisms.',
    features: ['Debt Recovery', 'Asset Attachment', 'Financial Disputes', 'Enforcement Actions'],
    gradient: 'from-teal-600 to-cyan-700',
    cardGradient: 'from-teal-50/90 via-cream-50 to-cyan-50/80',
    glowColor: 'shadow-teal-200/40',
    accentColor: 'text-teal-700',
    image: 'recovery.png',
    category: 'Financial Law',
    route: '/recovery'
  },
  {
    icon: Trophy,
    title: 'Competition Laws',
    description: 'Expert guidance on competition law compliance, anti-trust matters, and CCI proceedings.',
    features: ['Anti-Trust Laws', 'CCI Matters', 'Market Dominance', 'Competition Compliance'],
    gradient: 'from-orange-600 to-red-600',
    cardGradient: 'from-orange-50/90 via-cream-50 to-red-50/80',
    glowColor: 'shadow-orange-200/40',
    accentColor: 'text-orange-700',
    image: 'competition.png',
    category: 'Regulatory',
    route: '/competition'
  },
  {
    icon: Monitor,
    title: 'IT & Cyber Cases',
    description: 'Specialized legal services for information technology, cyber crimes, and digital law matters.',
    features: ['Cyber Crime Defense', 'Data Protection', 'IT Contracts', 'Digital Rights'],
    gradient: 'from-indigo-600 to-blue-600',
    cardGradient: 'from-indigo-50/90 via-cream-50 to-blue-50/80',
    glowColor: 'shadow-indigo-200/40',
    accentColor: 'text-indigo-700',
    image: 'cyber.png',
    category: 'Technology Law',
    route: '/cyber'
  },
  {
    icon: Merge,
    title: 'Mergers & Acquisitions',
    description: 'Strategic legal advisory for M&A transactions, due diligence, and corporate restructuring.',
    features: ['M&A Transactions', 'Due Diligence', 'Corporate Restructuring', 'Regulatory Approvals'],
    gradient: 'from-violet-600 to-purple-600',
    cardGradient: 'from-violet-50/90 via-cream-50 to-purple-50/80',
    glowColor: 'shadow-violet-200/40',
    accentColor: 'text-violet-700',
    image: 'mergers.png',
    category: 'Corporate Law',
    route: '/mergers'
  },
  {
    icon: TreePine,
    title: 'Environmental & NGT',
    description: 'Environmental law expertise including NGT matters, compliance, and green tribunal proceedings.',
    features: ['NGT Proceedings', 'Environmental Compliance', 'Green Clearances', 'Pollution Control'],
    gradient: 'from-green-600 to-emerald-600',
    cardGradient: 'from-green-50/90 via-cream-50 to-emerald-50/80',
    glowColor: 'shadow-green-200/40',
    accentColor: 'text-green-700',
    image: 'environment.png',
    category: 'Environmental Law',
    route: '/environment_law'
  },
  {
    icon: Users,
    title: 'Labour & Industrial Laws',
    description: 'Comprehensive employment law services including industrial disputes, labor compliance, and HR legal advisory.',
    features: ['Labor Disputes', 'Employment Contracts', 'Industrial Relations', 'HR Compliance'],
    gradient: 'from-cyan-600 to-blue-600',
    cardGradient: 'from-cyan-50/90 via-cream-50 to-blue-50/80',
    glowColor: 'shadow-cyan-200/40',
    accentColor: 'text-cyan-700',
    image: 'labour.png',
    category: 'Employment Law',
    route: '/labour'
  }
]

const stats = [
  { number: '500+', label: 'Cases Won', icon: Award },
  { number: '15+', label: 'Years Experience', icon: Star },
  { number: '98%', label: 'Success Rate', icon: CheckCircle },
  { number: '50+', label: 'Corporate Clients', icon: Globe }
]

export default function OurServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-200 via-blue-100 via-blue-50 via-orange-200 to-orange-300">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-100/30 rounded-full -translate-x-48 -translate-y-48 animate-pulse blur-3xl"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-yellow-100/40 rounded-full translate-x-40 animate-pulse delay-1000 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-cream-200/20 to-blue-100/30 rounded-full translate-y-36 animate-pulse delay-500 blur-3xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rotate-45 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-10 h-10 border-2 border-slate-400/30 rounded-full animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-2xl border border-white/10 backdrop-blur-sm hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse group-hover:text-amber-200 transition-all duration-300" />
              <span className="tracking-wide">Premium Legal Services</span>
              <div className="h-2 w-2 bg-amber-400 rounded-full animate-ping"></div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 bg-clip-text text-transparent">
                Legal Services
              </span>
            </h1>

            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive legal expertise across diverse practice areas, delivering exceptional results with unwavering commitment to client success.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-in slide-in-from-bottom duration-1000 delay-300">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-gradient-to-br from-white/80 to-cream-50/60 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 backdrop-blur-sm group-hover:scale-105">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-bold text-slate-900 mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Practice Areas &{' '}
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced legal team provides expert representation across multiple domains of law, ensuring comprehensive coverage for all your legal requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.route}
                  className="group relative block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative bg-gradient-to-br ${service.cardGradient} rounded-3xl p-6 hover:shadow-2xl ${service.glowColor} transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom border border-white/60 backdrop-blur-sm overflow-hidden h-full cursor-pointer`}>
                    {/* Background Effects */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

                    <div className="relative z-20 h-full flex flex-col">
                      {/* Category Badge */}
                      <div className="inline-flex items-center mb-4">
                        <span className="text-xs font-semibold text-slate-500 bg-white/60 px-3 py-1 rounded-full border border-slate-200/50">
                          {service.category}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 transition-all duration-500 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent z-10"></div>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        {/* Fallback Icon */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <Icon className="w-12 h-12 text-white drop-shadow-lg relative z-10" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      {/* Content */}
                      <h3 className={`text-xl font-bold ${service.accentColor} group-hover:text-slate-800 transition-colors duration-300 mb-4 leading-tight`}>
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300 flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-slate-500">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className={`inline-flex items-center space-x-2 ${service.accentColor} font-semibold group-hover:translate-x-1 transition-all duration-300 text-sm mt-auto`}>
                        <span>Learn More</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${service.gradient} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 rounded-3xl p-16 overflow-hidden shadow-2xl border border-blue-800/50">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-950/30 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-yellow-300/5 rounded-full translate-x-40 -translate-y-40 animate-bounce"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-300/5 rounded-full -translate-x-32 translate-y-32 animate-pulse delay-1000"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 px-6 py-3 rounded-full text-sm font-medium mb-8 hover:bg-amber-500/30 transition-all duration-300">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Ready to Get Started?</span>
              </div>

              <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                Expert Legal Representation
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                  When You Need It Most
                </span>
              </h3>

              <p className="text-blue-200 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Don't navigate complex legal challenges alone. Our experienced team is here to provide the expert guidance and representation you deserve.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center space-x-2">
                    <span>Get Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <a 
                  href="tel:+919990733308" 
                  className="group border-2 border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/100 group-hover:to-amber-300/100 transition-all duration-300"></div>
                  <span className="relative flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    <span>+91-99907 33308</span>
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-blue-800/50">
                <div className="flex items-center space-x-2 text-blue-200">
                  <Mail className="w-5 h-5" />
                  <span>contact@lawfirm.com</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <Globe className="w-5 h-5" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
