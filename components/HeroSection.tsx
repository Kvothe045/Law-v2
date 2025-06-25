'use client'

import { Scale, Users, Globe, Award, Phone, Mail } from 'lucide-react'
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background with translucent overlay */}
      <div className="absolute inset-0 h-screen lg:h-[85vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("b.png")',
          }}
        ></div>
        {/* Translucent overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/25 to-indigo-900/10 backdrop-blur-[1px]"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/law-pattern.svg')] opacity-3"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  GCS Law Firm
                </span>
              </h1>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/60">
  <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed mb-4 font-medium">
    <strong className="text-slate-900 font-bold">GCS Law Firm</strong> is a full-service firm providing legal solutions for individuals, businesses, and global clients.
  </p>
  
  <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
    Based in Gurgaon, we specialize in Criminal Law, Property, Family, and Corporate matters. Led by <strong className="text-slate-900">Advocate Yatish Kumar Goel</strong> and a team of experienced professionals.
  </p>
</div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-6">
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
            <div className="grid grid-cols-3 gap-6 pt-0">
              <div className="text-center bg-slate-900 rounded-2xl p-4 shadow-xl border border-amber-300/30">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">15+</div>
                <div className="text-sm font-medium text-amber-100 mt-1">Years Experience</div>
              </div>
              <div className="text-center bg-slate-900 rounded-2xl p-4 shadow-xl border border-amber-300/30">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm font-medium text-amber-100 mt-1">Cases Won</div>
              </div>
              <div className="text-center bg-slate-900 rounded-2xl p-4 shadow-xl border border-amber-300/30">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">A++</div>
                <div className="text-sm font-medium text-amber-100 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Clean Image Container */}
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300 flex justify-center">
            <div className="relative group/container">
              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
                {/* Main image frame */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-white/70 group-hover/container:shadow-3xl group-hover/container:border-blue-200/60 group-hover/container:scale-105 transition-all duration-500 ease-out overflow-hidden">
                  {/* Image */}
                  <img 
                    src="man.png" 
                    alt="Advocate Yatish Kumar Goel" 
                    className="w-full h-full object-cover rounded-full group-hover/container:scale-105 group-hover/container:brightness-110 transition-all duration-500 ease-out"
                  />
                  
                  {/* Professional badge */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-xl group-hover/container:from-blue-800 group-hover/container:to-slate-800 group-hover/container:scale-110 transition-all duration-300 border border-white/20">
                    <span className="tracking-wide">Lead Advocate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @media (max-width: 640px) {
          .group\\/container > div {
            width: 280px !important;
            height: 280px !important;
          }
        }
        
        @media (max-width: 480px) {
          .group\\/container > div {
            width: 240px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  )
}