// app/about/mission/page.tsx
'use client'

import { 
  Target, 
  Compass, 
  Globe, 
  Shield,
  Sparkles,
  ArrowRight,
  Scale,
  Star,
  CheckCircle,
  Trophy,
  Briefcase,
  Heart,
  Users,
  Zap,
  Eye,
  Lightbulb,
  Award,
  Building
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const missionPillars = [
  {
    icon: Target,
    title: 'Excellence in Service',
    description: 'To provide cutting-edge blend of capabilities to corporations, individuals and international entities across the globe with unmatched experience',
    gradient: 'from-blue-600 to-indigo-700',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: Scale,
    title: 'Justice & Integrity',
    description: 'Maintaining highest degree of confidentiality and transparency while delivering justice through comprehensive legal solutions',
    gradient: 'from-green-600 to-emerald-700',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Making felt our presence across various countries through strategic partnerships and international legal expertise',
    gradient: 'from-purple-600 to-pink-700',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Striving to achieve results that exceed expectations through commitment to clients, adding maximum value to their business',
    gradient: 'from-amber-600 to-orange-700',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  }
]

const coreValues = [
  {
    icon: Eye,
    title: 'Visionary Thinking',
    description: 'Where people stop thinking, we start thinking therefrom - transcending conventional boundaries',
    stats: 'Beyond Limits'
  },
  {
    icon: Shield,
    title: 'Trust & Confidentiality',
    description: 'Maintaining absolute confidentiality and transparency in all client relationships and legal matters',
    stats: '100% Secure'
  },
  {
    icon: Zap,
    title: 'Innovation & Technology',
    description: 'Utilizing latest technology and software best available in the market for efficient service delivery',
    stats: 'Tech-Enabled'
  },
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description: 'Understanding needs of clients and providing research-based solutions best suited to their requirements',
    stats: 'Client First'
  },
  {
    icon: Lightbulb,
    title: 'Research Excellence',
    description: 'Carrying out comprehensive research to find the best solutions while educating clients about all possibilities',
    stats: 'Research-Based'
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description: 'Sincerity, Hard-Work, Timely and Efficient service have been our key to success across all practice areas',
    stats: 'Award-Winning'
  }
]

const commitments = [
  {
    title: 'Accessible & Responsive',
    description: 'Always remaining accessible, efficient, responsive and technologically sophisticated for our clients',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Comprehensive Solutions',
    description: 'Providing complete legal advice and services in all aspects of commercial, financial, legal and contractual matters',
    icon: Building,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    title: 'International Standards',
    description: 'Delivering services at par with top firms globally through our international exposure and expertise',
    icon: Globe,
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    title: 'Exceptional Results',
    description: 'Going beyond limits to help clients achieve outcomes that others are barely capable of delivering',
    icon: Trophy,
    gradient: 'from-amber-500 to-yellow-600'
  }
]

export default function MissionPage() {
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
          
          {/* Animated Patterns */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Target className="w-5 h-5 animate-pulse group-hover:animate-spin" />
              <span className="tracking-wide">Our Mission</span>
              <Compass className="w-4 h-4 animate-spin group-hover:animate-pulse" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Guiding{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Legal Excellence
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Committed to delivering exceptional legal solutions through innovation, integrity, 
              and unwavering dedication to client success
            </p>

            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl">
                <p className="text-lg text-white leading-relaxed italic">
                  Our mission is to provide cutting-edge legal capabilities to corporations, individuals, 
                  and international entities across the globe with unmatched experience and international exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Mission Pillars</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Foundation of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Our Purpose
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four core pillars that drive our mission to deliver exceptional legal services worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className={`group relative ${pillar.bg} border-l-4 border-slate-800 p-8 rounded-r-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  borderLeftColor: pillar.color.includes('blue') ? '#2563eb' : 
                                   pillar.color.includes('green') ? '#059669' :
                                   pillar.color.includes('purple') ? '#9333ea' : '#d97706'
                }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl opacity-50"></div>
                
                <div className="relative z-10 flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <Shield className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Core Values</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Values That{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Drive Us
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The fundamental principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-slate-100 hover:border-slate-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <value.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {value.stats}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl mb-6">
              <Heart className="w-4 h-4 animate-bounce" />
              <span>Our Commitment</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Promise of{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our unwavering dedication to delivering exceptional results and exceeding client expectations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div 
                key={commitment.title}
                className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transform transition-all duration-700 cursor-pointer overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 250}ms` }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${commitment.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10 flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${commitment.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <commitment.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                      {commitment.title}
                    </h3>
                    
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-600 via-blue-600 to-amber-600 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10 text-center space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                <Eye className="w-4 h-4 animate-pulse" />
                <span>Our Vision</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Transforming Legal{' '}
                <span className="bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  Landscapes
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-white/90 leading-relaxed">
                  To be recognized globally as the leading law firm that transcends conventional boundaries, 
                  providing innovative legal solutions that others are barely capable of delivering.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-lg text-amber-200 italic font-semibold">
                    "Where people stop thinking, we start thinking therefrom"
                  </p>
                  <p className="text-white/80 mt-4">
                    This vision drives us to continuously push the boundaries of legal excellence, 
                    ensuring we deliver solutions that exceed expectations and create lasting value for our clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Join Our{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the difference of working with a law firm that goes beyond conventional boundaries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/about/who-we-are"
                className="group inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>About Our Team</span>
                <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}