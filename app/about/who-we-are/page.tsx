// app/about/who-we-are/page.tsx
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
  Trophy,
  Briefcase,
  Heart,
  Shield,
  Zap,
  Crown,
  Eye
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const achievements = [
  {
    year: '2017',
    title: 'Featured Among Top 10',
    description: 'Consultant Review magazine featured GCS among 10 most promising law firms in India',
    icon: Trophy,
    gradient: 'from-amber-500 to-yellow-600'
  },
  {
    year: '2018',
    title: 'Consultant of the Year',
    description: 'Business Connect magazine awarded GCS as Consultant of the Year 2018',
    icon: Award,
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    year: 'Geneva',
    title: 'International Gold Award',
    description: 'Century International Gold Quality Era Award for outstanding client services',
    icon: Crown,
    gradient: 'from-blue-500 to-indigo-600'
  }
]

const expertise = [
  {
    icon: Scale,
    title: 'Criminal Law',
    description: 'Expert representation in criminal litigation with proven track record',
    color: 'text-red-600',
    bg: 'bg-red-50',
    href: '/criminal'
  },
  {
    icon: Building,
    title: 'Property Matters',
    description: 'Comprehensive property dispute resolution and land acquisition services',
    color: 'text-green-600',
    bg: 'bg-green-50',
    href: '/property'
  },
  {
    icon: Heart,
    title: 'Family Law',
    description: 'Sensitive handling of matrimonial and family disputes with care',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    href: '/matrimonial'
  },
  {
    icon: Briefcase,
    title: 'Corporate Matters',
    description: 'Strategic corporate legal solutions for businesses of all sizes',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    href: '/corporate'
  }
]

const principles = [
  {
    icon: Eye,
    title: 'Visionary Approach',
    tagline: 'Where people stop thinking, we start thinking therefrom',
    description: 'We transcend conventional boundaries to deliver solutions others cannot envision',
    gradient: 'from-indigo-600 to-purple-700'
  },
  {
    icon: Shield,
    title: 'Unwavering Ethics',
    tagline: 'Highest degree of confidentiality and transparency',
    description: 'Maintaining trust through absolute integrity and professional excellence',
    gradient: 'from-green-600 to-emerald-700'
  },
  {
    icon: Zap,
    title: 'Innovation Excellence',
    tagline: 'Cutting-edge blend of capabilities',
    description: 'Leveraging modern technology and international exposure for superior results',
    gradient: 'from-amber-600 to-orange-700'
  }
]

export default function WhoWeArePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50/30">
      <Header />
      <Navbar />

  {/* Hero Section */}
  <section className="relative py-12 overflow-hidden">
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
          <Users className="w-5 h-5 animate-pulse group-hover:animate-spin" />
          <span className="tracking-wide">Who We Are</span>
          <Star className="w-4 h-4 animate-spin group-hover:animate-pulse" />
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
          Meet{' '}
          <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
            GCS Law Firm
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
          A distinguished full-service law firm committed to delivering exceptional legal solutions 
          with unmatched expertise and international exposure
        </p>

        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl">
            <p className="text-lg text-white leading-relaxed italic">
              "Where people stop thinking, we start thinking therefrom" - Our tagline reflects our 
              commitment to finding solutions beyond conventional boundaries.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center space-y-4">
  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
    <Crown className="w-4 h-4 text-amber-400" />
    <span>Leadership</span>
  </div>

  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
    Led by{' '}
    <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
      Excellence
    </span>
  </h2>
</div>          
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-800 to-blue-900 p-8 rounded-2xl shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto shadow-xl mb-4">
                        <Scale className="w-10 h-10 text-slate-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Advocate Yatish Kumar Goel</h3>
                      <p className="text-amber-400 font-semibold">Founder & Senior Partner</p>
                    </div>
                    <p className="text-blue-100 text-center leading-relaxed">
                      With extensive experience and expertise spanning Criminal Law, Property Matters, 
                      Family Law, and Corporate matters, Advocate Goel leads our firm with vision and dedication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {expertise.map((item, index) => (
                <Link 
                  key={item.title}
                  href={item.href}
                  className={`group ${item.bg} border-l-4 border-slate-800 p-6 rounded-r-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer block`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    borderLeftColor: item.color.includes('red') ? '#dc2626' : 
                                   item.color.includes('green') ? '#059669' :
                                   item.color.includes('pink') ? '#db2777' : '#2563eb'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="py-12 bg-gradient-to-br from-orange-100 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Our Core Principles</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              What Makes Us{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Our unique approach and unwavering commitment to excellence set us apart in the legal landscape
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className={`group relative bg-gradient-to-br ${principle.gradient} p-8 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-700 cursor-pointer overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-100 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-amber-200 font-semibold text-sm italic mb-2">
                        "{principle.tagline}"
                      </p>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 via-blue-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl mb-6">
              <Trophy className="w-4 h-4 animate-bounce" />
              <span>Recognition & Awards</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Recognition for our commitment to excellence and outstanding client service
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transform transition-all duration-700 cursor-pointer overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 250}ms` }}
              >
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 inline-block">
                      <span className="text-amber-400 font-bold text-lg">{achievement.year}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-blue-100 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Our Team</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Strength in{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    Human Capital
                  </span>
                </h2>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p className="text-base">
                    With enterprising and dynamic personnel, GCS's strength lies in its human capital. 
                    Our team has extensive experience in all types of legal matters.
                  </p>
                  <p className="text-base">
                    The extensive training and experience enables us to advise quickly and efficiently 
                    on even the most complex legal issues. Our team members make sure that they deliver 
                    on commitments and promised solutions.
                  </p>
                </div>
              </div>

              {/* Key Strengths */}
              <div className="space-y-4 text-base">
                {[
                  'Highly professionalized junior advocates',
                  'Experience across different branches of law',
                  'Quick and efficient advisory on complex issues',
                  'Commitment to delivering promised solutions'
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">{strength}</span>
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
                      <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Professional Excellence</h3>
                      <p className="text-blue-100 text-sm">Delivering world-class legal services</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-6 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-slate-900">
                      <Target className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Client Focus</h3>
                      <p className="text-slate-800 text-sm">Exceeding expectations consistently</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mt-8">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-700 p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <Globe className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                      <p className="text-purple-100 text-sm">International exposure and expertise</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Trust & Ethics</h3>
                      <p className="text-green-100 text-sm">Highest standards of integrity</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Center floating element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white p-4 rounded-full shadow-2xl border-4 border-amber-400 animate-pulse">
                  <Star className="w-8 h-8 text-amber-500" />
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
              Ready to Experience{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Excellence?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Connect with our expert legal team and discover how we can help you achieve your goals
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
                href="/about/mission"
                className="group inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>Our Mission</span>
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}