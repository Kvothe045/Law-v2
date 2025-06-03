// app/media/magazines/page.tsx
'use client'

import { 
  BookOpen,
  Award,
  Star,
  Calendar,
  ExternalLink,
  Trophy,
  Sparkles,
  ArrowRight,
  Target,
  Crown,
  Eye,
  Users,
  Building2,
  FileText,
  Globe,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const magazineFeatures = [
  {
    year: '2017',
    magazine: 'Consultant Review',
    title: 'Featured Among Top 10 Most Promising Law Firms',
    description: 'CONSULTANT REVIEW, a leading business magazine, featured GCS Law Firm among 10 most promising law firms in India.',
    pageNumber: '32',
    link: 'http://gcsl.in/legal-grc-mergers-acquisitions-consultants.pdf',
    icon: Trophy,
    gradient: 'from-blue-600 to-indigo-700',
    accentColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    hoverGradient: 'hover:from-blue-700 hover:to-indigo-800'
  },
  {
    year: '2018',
    magazine: 'Business Connect',
    title: 'Consultant of the Year 2018',
    description: 'BUSINESS CONNECT, another leading business magazine, recognized GCS Law Firm as Consultant of the Year 2018.',
    pageNumber: null,
    link: 'https://businessconnectindia.in/grow-on-consultancy-services-gcs/',
    icon: Crown,
    gradient: 'from-amber-600 to-yellow-600',
    accentColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    hoverGradient: 'hover:from-amber-700 hover:to-yellow-700'
  }
]

const mediaStats = [
  {
    icon: Building2,
    number: '2',
    label: 'Major Publications',
    description: 'Featured in leading business magazines',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: Star,
    number: '10',
    label: 'Top Ranking',
    description: 'Among most promising law firms',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    icon: Calendar,
    number: '2017-18',
    label: 'Recognition Period',
    description: 'Consecutive years of excellence',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    icon: Globe,
    number: '100%',
    label: 'Client Satisfaction',
    description: 'Leading to media recognition',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
]

export default function MagazinesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50/30">
      <Header />
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
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
              <BookOpen className="w-5 h-5 animate-pulse group-hover:animate-spin" />
              <span className="tracking-wide">Media Coverage</span>
              <Star className="w-4 h-4 animate-spin group-hover:animate-pulse" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Magazine{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Features
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Recognition from leading business publications highlighting our excellence 
              and commitment to outstanding legal services
            </p>

            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl">
                <p className="text-lg text-white leading-relaxed italic">
                  "Our dedication to excellence has earned recognition from India's premier business magazines, 
                  validating our position among the most promising law firms in the country."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaStats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`group ${stat.bg} border-l-4 border-slate-800 p-6 rounded-r-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  borderLeftColor: stat.color.includes('blue') ? '#2563eb' : 
                                 stat.color.includes('amber') ? '#d97706' :
                                 stat.color.includes('green') ? '#059669' : '#7c3aed'
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Features Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Featured Publications</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Media{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading business magazines have recognized our excellence and featured GCS Law Firm 
              for our outstanding contributions to the legal industry
            </p>
          </div>

          <div className="space-y-12">
            {magazineFeatures.map((feature, index) => (
              <div 
                key={feature.year}
                className={`group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-700 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Left - Year and Icon */}
                    <div className="text-center lg:text-left">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl shadow-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <div className={`inline-block bg-gradient-to-r ${feature.gradient} text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl mb-4`}>
                        {feature.year}
                      </div>
                      
                      <div className={`${feature.bgColor} ${feature.accentColor} px-4 py-2 rounded-full text-sm font-semibold inline-block`}>
                        {feature.magazine}
                      </div>
                    </div>

                    {/* Center - Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                          {feature.description}
                        </p>
                        
                        {feature.pageNumber && (
                          <div className="flex items-center space-x-2">
                            <FileText className={`w-5 h-5 ${feature.accentColor}`} />
                            <span className="text-slate-600 font-medium">
                              Featured on Page {feature.pageNumber}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn inline-flex items-center space-x-3 bg-gradient-to-r ${feature.gradient} ${feature.hoverGradient} text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300`}
                        >
                          <span>Continue Reading</span>
                          <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </a>
                        
                        <div className="flex items-center space-x-2 text-slate-500">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">External Link</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-yellow-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Impact Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 via-blue-500 to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                  <Award className="w-4 h-4" />
                  <span>Industry Recognition</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Why Media{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Chooses Us
                  </span>
                </h2>
                
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p className="text-lg">
                    Our recognition in leading business magazines reflects our commitment to excellence 
                    and the trust clients place in our legal expertise.
                  </p>
                  <p>
                    These features validate our position as one of India's most promising law firms, 
                    highlighting our innovative approach and successful track record in delivering 
                    exceptional legal solutions.
                  </p>
                </div>
              </div>

              {/* Key Recognition Points */}
              <div className="space-y-4">
                {[
                  'Featured among Top 10 Most Promising Law Firms',
                  'Recognized as Consultant of the Year 2018',
                  'Highlighted for innovative legal solutions',
                  'Acknowledged for exceptional client service'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-white font-medium group-hover:text-amber-200 transition-colors duration-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">2017 Feature</h3>
                      <p className="text-blue-100 text-sm">Consultant Review Magazine</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-6 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-slate-900">
                      <Trophy className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Top 10 Ranking</h3>
                      <p className="text-slate-800 text-sm">Most Promising Law Firms</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mt-8">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-700 p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <Crown className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">2018 Award</h3>
                      <p className="text-purple-100 text-sm">Consultant of the Year</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Excellence</h3>
                      <p className="text-green-100 text-sm">Consistent Recognition</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Center floating element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white p-4 rounded-full shadow-2xl border-4 border-amber-400 animate-pulse">
                  <Award className="w-8 h-8 text-amber-500" />
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
              Experience Our{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Award-Winning Service
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the clients who have experienced the excellence that earned us recognition 
              from India's leading business publications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/about"
                className="group inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>Learn More</span>
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