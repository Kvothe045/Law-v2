// app/international/page.tsx
'use client'

import { 
  Award,
  Globe,
  Trophy,
  Star,
  MapPin,
  Handshake,
  Users,
  Crown,
  ArrowRight,
  CheckCircle,
  Building,
  Scale,
  Eye,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cooperationAgreements = [
  { organization: 'Goldsmiths Lawyers', country: 'Australia' },
  { organization: 'Ladas & Ladas', country: 'Athens, Greece' },
  { organization: 'Tianjin E & T Law Firm', country: 'China' },
  { organization: 'Agereburu Partners', country: 'Togo' },
  { organization: 'Mohamed Taha Hamood & Co.', country: 'Yemen' },
  { organization: 'Mikhailvuk, Sorokolat & Partners, LLP', country: 'Ukraine' },
  { organization: 'Semuvaba, IGA & Co.', country: 'Uganda' },
  { organization: 'AI Hekook', country: 'Kuwait' },
  { organization: 'Bermudez, Burmudez & Bermudez', country: 'Bolivia' },
  { organization: 'Awad Ghazi & Associates', country: 'Syria' },
  { organization: 'Patentcorrect', country: 'Bulgaria' },
  { organization: 'Kim & Kim', country: 'Kyrgyz Republic' },
  { organization: 'Intellectual Property Associates', country: 'Sri Lanka' },
  { organization: 'Guini & Albarellos', country: 'Buenos Aires, Argentina' },
  { organization: 'Pyongyana Technical Trading Centre', country: 'DPR Korea' },
  { organization: 'International Law & Corporate Services (Pty)', country: 'Seychelles' },
  { organization: 'Law office of Abdullah A Abozaid', country: 'Sudan' },
  { organization: 'Patmark', country: 'Slovak Republic' },
  { organization: 'Estudio Alvarez Calderon', country: 'Peru' }
]

export default function InternationalPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <Header />
      <Navbar />
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
              <Globe className="w-5 h-5 animate-spin group-hover:animate-pulse" />
              <span className="tracking-wide">International Recognition</span>
              <Trophy className="w-4 h-4 animate-bounce group-hover:animate-spin" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Global{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              International recognition and global partnerships that showcase our commitment 
              to exceptional legal services worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Century International Gold Quality Era Award Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-col items-center text-center px-4 sm:px-6">
  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl mb-4">
    <Crown className="w-4 h-4" />
    <span>International Award</span>
  </div>

  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
    <span className="bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent">
      Century International
    </span>
    <br />
    Gold Quality Era Award
  </h2>
</div>

                
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p className="text-base">
                    Over the years, owing to its commitment to provide the best legal remedies and solutions to its clients, 
                    <span className="font-bold text-slate-800"> GCS</span> has gained International repute in the field of 
                    legal consultancy services.
                  </p>
                  
                  <div className="bg-gradient-to-br text-base from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-lg">
                    <p className="text-slate-700">
                      <span className="font-bold text-slate-800">GCS</span> was awarded the{' '}
                      <span className="font-bold text-amber-700">Century International Gold Quality Era Award</span> and{' '}
                      <span className="font-bold text-slate-800">Mr Jose E. Prieto</span>, Executive President of BID, 
                      Business Initiative Directions, presented in{' '}
                      <span className="font-bold text-blue-700">May 2003 in Geneva, Switzerland</span> in recognition 
                      of the outstanding commitment to quality and excellence.
                    </p>
                  </div>
                  
                  <p>
                    The award was received by <span className="font-bold text-slate-800">Mr Manish Goel</span> and{' '}
                    <span className="font-bold text-slate-800">Mr Yatish Kumar Goel</span> on behalf of{' '}
                    <span className="font-bold text-blue-700">GCS</span>.
                  </p>
                </div>
              </div>

              {/* Award Highlights */}
              <div className="space-y-4">
                {[
                  'Outstanding commitment to quality and excellence',
                  'International recognition in Geneva, Switzerland',
                  'Presented by Business Initiative Directions (BID)',
                  'Global repute in legal consultancy services'
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 text-base bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Award Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-xl mb-4">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">International Recognition</h3>
                    <p className="text-amber-700 font-semibold">Geneva, Switzerland - May 2003</p>
                  </div>
                  
                  {/* Award Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center overflow-hidden shadow-inner">
                    <div className="text-center space-y-2">
                      <Award className="w-16 h-16 text-amber-600 mx-auto" />
                      <p className="text-slate-600 font-medium">Award Certificate</p>
                      <p className="text-sm text-slate-500">award.png</p>
                    </div>
                    <Image 
                      src="/award.png" 
                      alt="Century International Gold Quality Era Award"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Star className="w-12 h-12 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse" style={{ animationDelay: '1s' }}>
                <Globe className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Cooperation Agreements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <Handshake className="w-4 h-4 text-amber-400" />
              <span>Global Partnerships</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              International{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Co-operation Agreements
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              <span className="font-bold text-slate-800">GCS</span> has entered into cooperation agreements 
              with various international law firms with respect to legal consultancy and advisory services
            </p>
          </div>

          {/* Cooperation Table */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-slate-800 to-blue-900 px-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <h3 className="text-white font-bold text-lg flex items-center">
                  <Building className="w-5 h-5 mr-2 text-amber-400" />
                  Name of Organization
                </h3>
                <h3 className="text-white font-bold text-lg flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-amber-400" />
                  Country
                </h3>
              </div>
            </div>
            
            <div className="divide-y divide-slate-200">
              {cooperationAgreements.map((agreement, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-2 gap-4 px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 transition-all duration-300 group ${index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Scale className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {agreement.organization}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-600 font-medium group-hover:text-slate-800 transition-colors duration-300">
                      {agreement.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{cooperationAgreements.length}+</h3>
              <p className="text-blue-100 font-medium">International Partners</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Global</h3>
              <p className="text-amber-100 font-medium">Network Coverage</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">2003</h3>
              <p className="text-green-100 font-medium">Since Geneva Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Connect with Our{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Global Network
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Leverage our international partnerships and award-winning expertise for your legal needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
              >
                <span>Get Global Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/about"
                className="group inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>About Our Firm</span>
                <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}