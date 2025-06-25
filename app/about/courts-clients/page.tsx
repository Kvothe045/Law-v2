'use client'

import { 
  Scale, 
  Building, 
  Users, 
  Globe,
  Sparkles,
  ArrowRight,
  Gavel,
  Award,
  CheckCircle,
  Briefcase,
  Crown,
  Trophy,
  Factory
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const courtsStats = [
  { number: '7+', label: 'Court Types', icon: Scale },
  { number: '50+', label: 'Tribunal Cases', icon: Gavel },
  { number: '500+', label: 'Happy Clients', icon: Users },
  { number: '25+', label: 'Years Experience', icon: Award }
]

const courtTypes = [
  {
    icon: Crown,
    title: 'Supreme Court of India',
    description: 'Representing clients in the highest court of the land with constitutional and appellate matters',
    gradient: 'from-red-600 to-rose-700',
    delay: '0ms'
  },
  {
    icon: Scale,
    title: 'High Courts',
    description: 'Comprehensive representation across various High Courts throughout India',
    gradient: 'from-blue-600 to-indigo-700',
    delay: '100ms'
  },
  {
    icon: Gavel,
    title: 'District Courts',
    description: 'Local court representation for civil, criminal, and family matters',
    gradient: 'from-purple-600 to-pink-700',
    delay: '200ms'
  },
  {
    icon: Building,
    title: 'Specialized Tribunals',
    description: 'Expert representation in DRT, DRAT, NCLT, NCLAT, NGT and other specialized forums',
    gradient: 'from-amber-600 to-orange-700',
    delay: '300ms'
  }
]

const clientCategories = [
  {
    icon: Globe,
    title: 'Multinational Corporations',
    description: 'Global enterprises requiring comprehensive legal support across jurisdictions',
    clients: ['Fortune 500 Companies', 'International Subsidiaries', 'Cross-border Operations'],
    gradient: 'from-blue-600 to-cyan-700'
  },
  {
    icon: Factory,
    title: 'Indian Corporations',
    description: 'Domestic companies from startups to large enterprises across all sectors',
    clients: ['Public Companies', 'Private Enterprises', 'SMEs & Startups'],
    gradient: 'from-green-600 to-emerald-700'
  },
  {
    icon: Users,
    title: 'Individual Clients',
    description: 'Personal legal services for residents and non-resident Indians',
    clients: ['Indian Residents', 'NRIs & OCIs', 'High Net Worth Individuals'],
    gradient: 'from-purple-600 to-violet-700'
  },
  {
    icon: Briefcase,
    title: 'Business Entities',
    description: 'Various forms of business organizations and professional partnerships',
    clients: ['Partnership Firms', 'LLPs', 'Professional Associations'],
    gradient: 'from-orange-600 to-red-700'
  }
]

const tribunalsList = [
  'Debt Recovery Tribunal (DRT)',
  'Debt Recovery Appellate Tribunal (DRAT)',
  'National Company Law Tribunal (NCLT)',
  'National Company Law Appellate Tribunal (NCLAT)',
  'National Green Tribunal (NGT)',
  'Income Tax Appellate Tribunal (ITAT)',
  'Central Administrative Tribunal (CAT)',
  'Securities Appellate Tribunal (SAT)'
]

export default function CourtsClientsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50/30">
      <Header />
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
          
          {/* Animated Background Shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-amber-300/30 backdrop-blur-sm hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Scale className="w-5 h-5 animate-bounce group-hover:animate-spin transition-all duration-300" />
              <span className="tracking-wide">Courts & Clients</span>
              <Sparkles className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Legal Representation
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Representing diverse clients across all levels of courts, tribunals, 
              and specialized forums throughout India
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border border-amber-300/30"
              >
                <span>Get Legal Representation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/about"
                className="group relative inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>About GCS</span>
                <Building className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-100 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {courtsStats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center group transform transition-all duration-700 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:rotate-6">
                    <stat.icon className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Courts Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-4">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Courts of Practice</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Court Coverage
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Our firm represents clients across all levels of the Indian judicial system, 
              from the Supreme Court to specialized tribunals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {courtTypes.map((court, index) => (
              <div 
                key={court.title}
                className={`group relative bg-gradient-to-br ${court.gradient} p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden`}
                style={{ animationDelay: court.delay }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <court.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors duration-300">
                      {court.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {court.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tribunals List */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                Specialized Tribunals & Forums
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Expert representation in specialized judicial and quasi-judicial bodies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tribunalsList.map((tribunal, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium text-sm">{tribunal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Our Clients</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-2">
              Diverse{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Client Portfolio
              </span>
            </h2>
            <p className="text-base text-slate-600 max-w-4xl mx-auto">
              Serving a wide range of clients from multinational corporations 
              to individuals, partnerships, and professional associations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {clientCategories.map((category, index) => (
              <div 
                key={category.title}
                className={`group bg-gradient-to-br ${category.gradient} p-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 text-white overflow-hidden relative`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 group">
  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 backdrop-blur-sm">
    <category.icon className="w-6 h-6 text-white" />
  </div>

  <h3 className="text-2xl font-bold group-hover:text-yellow-100 transition-colors duration-300">
    {category.title}
  </h3>
</div>
                  
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.clients.map((client, clientIndex) => (
                      <div key={clientIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <span className="text-sm text-white/90 font-medium">{client}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Client Success</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Proven Track Record of{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    Legal Excellence
                  </span>
                </h2>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p className="text-base">
                    Our diverse clientele spans across industries and jurisdictions, 
                    reflecting our capability to handle complex legal matters with precision and expertise.
                  </p>
                  <p>
                    From high-stakes corporate litigation to personal legal matters, 
                    we maintain the same standard of excellence and commitment to client success.
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                {[
                  'Successfully represented Fortune 500 companies',
                  'Handled complex cross-border legal matters',
                  'Achieved favorable outcomes in Supreme Court',
                  'Expertise across multiple practice areas'
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Success Metrics */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-12 shadow-2xl">
                <div className="text-center space-y-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <Trophy className="w-12 h-12 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Client Satisfaction Excellence</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
                      <div className="text-blue-100 text-sm">Client Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
                      <div className="text-blue-100 text-sm">Cases Won</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">25+</div>
                      <div className="text-blue-100 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                      <div className="text-blue-100 text-sm">Client Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Satisfied Clients
            </span>
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience professional legal representation across all courts and tribunals. 
            Let us handle your legal matters with expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border border-amber-300/30"
            >
              <span>Get Legal Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/services"
              className="group relative inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            >
              <span>View Services</span>
              <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}