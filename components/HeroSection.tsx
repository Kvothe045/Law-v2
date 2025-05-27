'use client'

import { Scale, Users, Globe, Award, Phone, Mail } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background with translucent overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("b.png")',
          }}
        ></div>
        {/* Translucent overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/35 to-indigo-900/45 backdrop-blur-[1px]"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/law-pattern.svg')] opacity-3"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-slate-700 px-5 py-3 rounded-full text-sm font-semibold shadow-xl border border-white/60">
                <Scale className="w-4 h-4 text-blue-600" />
                <span>Professional Legal Services</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  GCS Law Firm
                </span>
              </h1>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/60">
                <p className="text-xl text-slate-800 leading-relaxed mb-4 font-medium">
                  <strong className="text-slate-900 font-bold">Grow-On Consultancy Services (GCS)</strong> is a full-service law firm offering cutting-edge legal solutions to corporations, individuals, and international entities across the globe.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Based in Gurgaon with extensive experience in Criminal Law, Property Matters, Family Law, and Corporate affairs. Led by <strong className="text-slate-900">Advocate Yatish Kumar Goel</strong> and supported by a team of highly professional advocates.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:from-slate-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get Legal Consultation</span>
                </span>
              </button>
              <button className="bg-white/80 backdrop-blur-sm border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Our Services</span>
                </span>
              </button>
            </div>

            {/* Stats */}
<div className="grid grid-cols-3 gap-6 pt-8">
  <div className="text-center bg-slate-900 rounded-2xl p-4 shadow-xl border border-amber-300/30">
    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">15+</div>
    <div className="text-sm font-medium text-amber-100 mt-1">Years Experience</div>
  </div>
  <div className="text-center bg-slate-900 rounded-2xl p-4 shadow-xl border border-amber-300/30">
    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">500+</div>
    <div className="text-sm font-medium text-amber-100 mt-1">Cases Won</div>
  </div>
  <div className="text-center bg-slate-900 rounded-2xl p-4 shadow-xl border border-amber-300/30">
    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">98%</div>
    <div className="text-sm font-medium text-amber-100 mt-1">Success Rate</div>
  </div>
</div>

          </div>

          {/* Right Content - Enhanced Visual Elements */}
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative">
              {/* Main card with lawyer image */}
              <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                
                {/* Lawyer Portrait */}
                <div className="relative mb-8">
                  <div className="relative mx-auto w-72 h-72 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-6 opacity-20"></div>
                    <div className="relative bg-white rounded-3xl p-3 shadow-xl border border-white/60">
                      <img 
                        src="man.png" 
                        alt="Advocate Yatish Kumar Goel" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Lead Advocate
                    </div>
                  </div>
                </div>

                {/* Content below image */}
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl mx-auto shadow-lg">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Justice & Excellence</h3>
                    <p className="text-slate-600 leading-relaxed">Committed to delivering exceptional legal services with integrity and professionalism</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                      <Users className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                      <div className="text-xs font-semibold text-slate-600">Expert Team</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                      <Globe className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                      <div className="text-xs font-semibold text-slate-600">Global Reach</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                      <Award className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                      <div className="text-xs font-semibold text-slate-600">Recognized</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-r from-slate-400/20 to-slate-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-blue-500/40 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-1/3 -right-4 w-3 h-3 bg-slate-600/40 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </section>
  )
}