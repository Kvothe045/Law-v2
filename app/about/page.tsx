'use client'

import { 
  Users, 
  Award, 
  Globe, 
  Target,
  Sparkles,
  ArrowRight,
  Scale,
  Star,
  Building,
  CheckCircle,
  Trophy
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const stats = [
  { number: '25+', label: 'Years Experience', icon: Trophy },
  { number: '500+', label: 'Happy Clients', icon: Users },
  { number: '15+', label: 'Practice Areas', icon: Scale },
  { number: '3', label: 'International Awards', icon: Award }
]

const features = [
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'International partnerships and cross-border expertise',
    gradient: 'from-blue-600 to-indigo-700',
    delay: '0ms'
  },
  {
    icon: Scale,
    title: 'Expert Legal Team',
    description: 'Highly qualified professionals with diverse expertise',
    gradient: 'from-indigo-600 to-purple-700',
    delay: '100ms'
  },
  {
    icon: Target,
    title: 'Client-Centric Approach',
    description: 'Tailored solutions exceeding client expectations',
    gradient: 'from-purple-600 to-pink-700',
    delay: '200ms'
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized for outstanding client services globally',
    gradient: 'from-amber-600 to-orange-700',
    delay: '300ms'
  }
]

const submenuItems = [
  { name: 'Who We Are?', href: '/about/who-we-are', description: 'Learn about our story and expertise' },
  { name: 'Mission and Values', href: '/about/mission', description: 'Our commitment to excellence and integrity' },
  { name: 'Infrastructure', href: '/about/infrastructure', description: 'State-of-the-art facilities and resources' },
  { name: 'Courts and Clients', href: '/about/courts-clients', description: 'Our practice areas and client base' }
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
          
          {/* Animated Background Shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-amber-300/30 backdrop-blur-sm hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Users className="w-5 h-5 animate-bounce group-hover:animate-spin transition-all duration-300" />
              <span className="tracking-wide">About GCS Law Firm</span>
              <Sparkles className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Excellence in{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Legal Services
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-lg text-blue-100 max-w-5xl mx-auto leading-relaxed">
              A full-service law firm delivering cutting-edge legal solutions to corporations, individuals, and international entities worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link 
                href="/about/who-we-are"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border border-amber-300/30"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/contact"
                className="group relative inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>Get Consultation</span>
                <Scale className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-orange-100 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center group transform transition-all duration-700 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:rotate-6">
                    <stat.icon className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
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

      {/* Main Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
                  <Building className="w-4 h-4 text-amber-400" />
                  <span>About GCS Law Firm</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Full-Service{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    Legal Excellence
                  </span>
                </h2>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p className="text-base">
                    GCS Law Firm is a distinguished full-service law firm based in India, with headquarters 
                    in Gurgaon. We offer a cutting-edge blend of capabilities to corporations, individuals, 
                    and international entities across the globe.
                  </p>
                  <p className="text-base">
                    Led by Advocate Yatish Kumar Goel, who brings extensive experience in Criminal Law, 
                    Property Matters, Family Law, and Corporate matters, our firm is supported by a team 
                    of highly professionalized junior advocates with expertise across different branches of law.
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  'Comprehensive legal advisory services',
                  'International repute and recognition',
                  'Expert team with diverse specializations',
                  'Commitment to exceeding client expectations'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 group  text-base">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
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
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Explore More About{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                GCS Law Firm
              </span>
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Discover our comprehensive approach to legal excellence and client service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {submenuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transform transition-all duration-500 cursor-pointer overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}