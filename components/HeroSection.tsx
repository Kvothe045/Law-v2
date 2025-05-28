'use client'

import { Scale, Users, Globe, Award, Phone, Mail } from 'lucide-react'
import Link from 'next/link';
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
                  <strong className="text-slate-900 font-bold">GCS LAW FIRM</strong> is a full-service law firm offering cutting-edge legal solutions to corporations, individuals, and international entities across the globe.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Based in Gurgaon with extensive experience in Criminal Law, Property Matters, Family Law, and Corporate affairs. Led by <strong className="text-slate-900">Advocate Yatish Kumar Goel</strong> and supported by a team of highly professional advocates.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919990733308"
                className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:from-slate-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl block"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get Legal Consultation</span>
                </span>
              </a>
              <Link href="/ourservices">
  <button className="bg-white/80 backdrop-blur-sm border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl">
    <span className="flex items-center justify-center space-x-2">
      <Mail className="w-5 h-5" />
      <span>Our Services</span>
    </span>
  </button>
</Link>
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
              {/* Main card with lawyer image - Enhanced with animations */}
              <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 ease-in-out group">
                
                {/* Lawyer Portrait with premium hover effects - Made bigger and centered */}
                <div className="relative flex items-center justify-center">
                  <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px] group/portrait">
                    {/* Animated background rings */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-amber-400/15 to-amber-600/15 rounded-full animate-reverse-spin"></div>
                    
                    {/* Main background with breathing effect */}
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-1 opacity-8 group-hover/portrait:rotate-3 group-hover/portrait:opacity-15 group-hover/portrait:scale-105 transition-all duration-1000 ease-out animate-pulse"></div>
                    
                    {/* Secondary depth layer */}
                    <div className="absolute inset-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl -rotate-1 opacity-5 group-hover/portrait:rotate-1 group-hover/portrait:opacity-12 group-hover/portrait:scale-102 transition-all duration-800 ease-out delay-150"></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-1 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                    
                    {/* Main image container with enhanced effects */}
                    <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-white/70 overflow-hidden group-hover/portrait:shadow-3xl group-hover/portrait:border-blue-200/80 group-hover/portrait:scale-102 transition-all duration-600 ease-out">
                      {/* Dynamic overlay with shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent opacity-0 group-hover/portrait:opacity-100 transition-all duration-700 rounded-2xl z-10 group-hover/portrait:animate-pulse"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover/portrait:opacity-100 group-hover/portrait:translate-x-full transition-all duration-1000 ease-out z-20"></div>
                      
                      <img 
                        src="man.png" 
                        alt="Advocate Yatish Kumar Goel" 
                        className="w-full h-full object-cover rounded-2xl group-hover/portrait:scale-103 group-hover/portrait:brightness-110 group-hover/portrait:contrast-105 transition-all duration-600 ease-out relative z-0"
                      />
                    </div>
                    
                    {/* Premium floating badge with glow */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-2xl group-hover/portrait:shadow-blue-500/25 group-hover/portrait:shadow-3xl group-hover/portrait:scale-110 group-hover/portrait:from-blue-800 group-hover/portrait:via-slate-800 group-hover/portrait:to-blue-800 transition-all duration-400 border border-white/20 group-hover/portrait:border-blue-300/50">
                      <span className="relative z-10 tracking-wide">Lead Advocate</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Enhanced floating particles */}
                    <div className="absolute top-6 left-6 w-2 h-2 bg-amber-400/50 rounded-full group-hover/portrait:scale-200 group-hover/portrait:bg-amber-400/80 transition-all duration-600 delay-100 animate-bounce"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-500/40 rounded-full group-hover/portrait:scale-150 group-hover/portrait:bg-blue-500/70 transition-all duration-700 delay-200 animate-pulse"></div>
                    <div className="absolute top-1/4 right-6 w-1.5 h-1.5 bg-slate-400/30 rounded-full group-hover/portrait:scale-175 group-hover/portrait:bg-slate-400/60 transition-all duration-500 delay-300 animate-ping"></div>
                    <div className="absolute bottom-1/3 right-8 w-2.5 h-2.5 bg-indigo-400/35 rounded-full group-hover/portrait:scale-125 group-hover/portrait:bg-indigo-400/65 transition-all duration-650 delay-150 animate-bounce"></div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-amber-300/60 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover/portrait:animate-spin group-hover/portrait:scale-150 transition-all duration-500" style={{transform: 'translate(-50%, -50%) translateX(140px)'}}>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes reverse-spin {
                    from {
                      transform: rotate(360deg);
                    }
                    to {
                      transform: rotate(0deg);
                    }
                  }
                  .animate-reverse-spin {
                    animation: reverse-spin 8s linear infinite;
                  }
                `}</style>
              </div>

              {/* Enhanced floating elements with more animations */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-r from-slate-400/20 to-slate-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-blue-500/40 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-1/3 -right-4 w-3 h-3 bg-slate-600/40 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/2 -right-12 w-6 h-6 bg-amber-400/30 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </section>
  )
}