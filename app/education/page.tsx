'use client'

import { 
  BookOpen, 
  Play, 
  Users, 
  Award,
  Sparkles,
  ArrowRight,
  Scale,
  GraduationCap,
  Video,
  Tv,
  Calendar,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const educationStats = [
  { number: '500+', label: 'Training Sessions', icon: GraduationCap },
  { number: '10K+', label: 'Professionals Trained', icon: Users },
  { number: '15+', label: 'Legal Topics Covered', icon: BookOpen },
  { number: '50+', label: 'Corporate Partners', icon: Award }
]

const educationContent = [
  {
    id: 1,
    title: 'Legal Training on Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    subtitle: 'Commonly known as POSH LAW',
    instructor: 'Mr Yatish Kumar Goel, Advocate',
    type: 'Professional Training',
    youtubeId: 'qfgVSeDjYgw',
    description: 'Comprehensive training session on POSH Law compliance, implementation, and best practices for organizations.',
    topics: [
      'Understanding POSH Act 2013',
      'Workplace Compliance Requirements',
      'Prevention and Redressal Mechanisms',
      'Legal Obligations for Employers',
      'Case Studies and Best Practices'
    ],
    gradient: 'from-pink-600 to-rose-700',
    icon: Scale
  },
  {
    id: 2,
    title: 'Legal Awareness Session on Property Related Matters',
    subtitle: 'Featured on Haryana News TV Channel',
    instructor: 'Mr Yatish Kumar Goel, Advocate, GCS',
    type: 'TV Programme - Legal Point',
    youtubeId: 'v_DlcA1c-ZU',
    description: 'Expert insights on property law, real estate transactions, and legal safeguards for property buyers and sellers.',
    topics: [
      'Property Registration Process',
      'Due Diligence in Real Estate',
      'Legal Documentation Requirements',
      'Common Property Disputes',
      'Rights and Remedies'
    ],
    gradient: 'from-blue-600 to-indigo-700',
    icon: Tv
  }
]

export default function EducationPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getYouTubeEmbedUrl = (youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`
  }

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
          
          {/* Animated Background Shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-amber-300/30 backdrop-blur-sm hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <GraduationCap className="w-5 h-5 animate-bounce group-hover:animate-spin transition-all duration-300" />
              <span className="tracking-wide">Legal Education & Training</span>
              <Sparkles className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Legal{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Education
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Expert-led training sessions and legal awareness programs to empower 
              professionals and organizations with essential legal knowledge
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border border-amber-300/30"
              >
                <span>Book Training Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="#content"
                className="group relative inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>View Content</span>
                <Video className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {educationStats.map((stat, index) => (
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
      </section>

      {/* Main Content Section */}
      <section id="content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Educational Content</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Expert{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Legal Training
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch our comprehensive legal training sessions and awareness programs 
              led by experienced legal professionals
            </p>
          </div>

          <div className="space-y-16">
            {educationContent.map((content, index) => (
              <div 
                key={content.id}
                className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content Info */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-6">
                      <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${content.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        <content.icon className="w-4 h-4" />
                        <span>{content.type}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight mb-3">
                          {content.title}
                        </h3>
                        {content.subtitle && (
                          <p className="text-lg text-slate-600 font-medium mb-4">
                            {content.subtitle}
                          </p>
                        )}
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Star className="w-5 h-5 text-amber-500" />
                          <span className="font-semibold">by {content.instructor}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {content.description}
                      </p>
                    </div>

                    {/* Topics Covered */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <span>Topics Covered</span>
                      </h4>
                      <div className="grid gap-3">
                        {content.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative group">
                      <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        {activeVideo === content.id ? (
                          <div className="aspect-video">
                            <iframe
                              src={getYouTubeEmbedUrl(content.youtubeId)}
                              title={content.title}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <div 
                            className="relative aspect-video cursor-pointer group"
                            onClick={() => setActiveVideo(content.id)}
                          >
                            <img
                              src={getYouTubeThumbnail(content.youtubeId)}
                              alt={content.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 animate-pulse">
                                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                              </div>
                            </div>
                            
                            {/* Video Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                              <h4 className="text-white font-bold text-lg leading-tight line-clamp-2">
                                {content.title}
                              </h4>
                              <p className="text-white/80 text-sm mt-1">
                                Click to play video
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
              <Users className="w-4 h-4" />
              <span>Professional Training</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Need Customized{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Legal Training?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We offer tailored legal training sessions for organizations, corporates, 
              and professional groups on various legal topics and compliance requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 border border-amber-300/30"
              >
                <span>Schedule Training</span>
                <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/ourservices"
                className="group relative inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}