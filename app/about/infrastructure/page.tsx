'use client'

import { 
  Building2, 
  BookOpen, 
  Shield, 
  Network,
  Sparkles,
  ArrowRight,
  Users,
  Award,
  CheckCircle,
  Monitor,
  Library,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const infrastructureStats = [
  { number: '1', label: 'Centralized Office', icon: Building2 },
  { number: '100%', label: 'IT Enabled', icon: Monitor },
  { number: '24/7', label: 'Secure Access', icon: Shield },
  { number: '∞', label: 'Legal Resources', icon: Library }
]

const infrastructureFeatures = [
  {
    icon: Building2,
    title: 'Modern Office Facility',
    description: 'Fully furnished and well-equipped centralized office in Gurgaon, Haryana with complete client confidentiality',
    gradient: 'from-blue-600 to-indigo-700',
    delay: '0ms'
  },
  {
    icon: Shield,
    title: 'Court Chambers',
    description: 'Dedicated chambers in major court premises for meetings and proper client access',
    gradient: 'from-indigo-600 to-purple-700',
    delay: '100ms'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Library',
    description: 'Illustrated library with best law books and access to all leading case journals',
    gradient: 'from-purple-600 to-pink-700',
    delay: '200ms'
  },
  {
    icon: Globe,
    title: 'Online Legal Resources',
    description: 'Reliable access to cutting-edge online legal databases and research platforms',
    gradient: 'from-amber-600 to-orange-700',
    delay: '300ms'
  }
]

const teamFeatures = [
  {
    icon: Users,
    title: 'Qualified Professionals',
    description: 'Diverse legal backgrounds with wide experience across practice areas',
    points: ['Expert department heads', 'Qualified staff and juniors', 'Comprehensive client service']
  },
  {
    icon: Network,
    title: 'Professional Network',
    description: 'Long-established network of associates for comprehensive legal solutions',
    points: ['Wide networking channels', 'Expert collaborations', 'Industry connections']
  },
  {
    icon: Award,
    title: 'Professional Memberships',
    description: 'Active memberships in various councils, associations and professional bodies',
    points: ['Community recognition', 'Access to experts', 'Professional acceptance']
  }
]

export default function InfrastructurePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
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
              <Building2 className="w-5 h-5 animate-bounce group-hover:animate-spin transition-all duration-300" />
              <span className="tracking-wide">Infrastructure & Resources</span>
              <Sparkles className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              State-of-the-Art{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Infrastructure
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Modern facilities, comprehensive resources, and professional networks 
              designed to deliver exceptional legal services
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border border-amber-300/30"
              >
                <span>Visit Our Office</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/about"
                className="group relative inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>About GCS</span>
                <Building2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-gradient-to-r from-orange-100 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureStats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center group transform transition-all duration-700 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:rotate-6">
                    <stat.icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Infrastructure Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-4">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Office Infrastructure</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Modern{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Legal Facilities
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Our centralized office in Gurgaon, Haryana features cutting-edge technology 
              and comprehensive resources to serve our clients effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {infrastructureFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative bg-gradient-to-br ${feature.gradient} p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden`}
                style={{ animationDelay: feature.delay }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Research Section */}
      <section className="py-20 bg-gradient-to-br from-amber-200 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Legal Research</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Research-Oriented{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </h2>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p className="text-base">
                    The firm believes in delivering research-oriented innovative solutions for its clients, 
                    whilst providing an updated view of Indian Law.
                  </p>
                  <p className="text-base">
                    Our illustrated library houses the best books on law and provides access to all journals 
                    containing leading cases. Interactive thinking and serious thoughts are expressed with 
                    a legal point of view after suitable deliberations.
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  'Comprehensive legal library with best law books',
                  'Access to all leading case journals and publications',
                  'Reliable online legal resources and databases',
                  'Research-oriented innovative client solutions'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-12 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <Library className="w-12 h-12 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Legal Research Excellence</h3>
                  <p className="text-blue-100">
                    Comprehensive resources and cutting-edge research methodologies 
                    to deliver innovative legal solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Network Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-4">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Professional Team & Network</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4">
              Qualified Professionals &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Networks
              </span>
            </h2>
            <p className="text-base text-slate-600 max-w-4xl mx-auto">
              Our approach rests on traditions of integrity and professionalism, 
              supported by diverse expertise and established networks
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="group bg-gradient-to-br from-slate-800 to-blue-900 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 text-white"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-slate-900" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-sm text-blue-100">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Experience Our{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              World-Class Infrastructure
            </span>
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Visit our modern facilities and experience the difference of working 
            with a technologically advanced legal firm
          </p>
          <Link 
            href="/contact"
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border border-amber-300/30"
          >
            <span>Schedule a Visit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}