"use client"
// components/PageBanner.tsx
import React from 'react';
import Image from 'next/image';

interface PageBannerProps {
  title: string;
  subtitle: string;
  imageName: string;
  description?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, imageName, description }) => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const seed1 = (i * 17 + 23) % 100;
            const seed2 = (i * 37 + 41) % 100;
            const seed3 = (i * 53 + 7) % 200;
            const seed4 = (i * 71 + 13) % 200;
            
            return (
              <div
                key={i}
                className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-pulse"
                style={{
                  top: `${seed1}%`,
                  left: `${seed2}%`,
                  animationDelay: `${seed3 / 100}s`,
                  animationDuration: `${2 + seed4 / 100}s`
                }}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-left md:text-left">
            <div className="space-y-2">
              <h2 className="text-amber-400 text-lg font-medium tracking-wide uppercase animate-fade-in-up">
                {subtitle}
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-cream-50 leading-tight animate-fade-in-up animation-delay-200">
                {title}
              </h1>
            </div>
            
            {description && (
              <p className="text-cream-100/80 text-lg leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
                {description}
              </p>
            )}

            <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-600">
              <div className="w-12 h-0.5 bg-amber-400"></div>
              <span className="text-cream-200 text-sm uppercase tracking-wider">
                Expert Legal Services
              </span>
            </div>
          </div>

          {/* Modern Image Section */}
          <div className="relative animate-fade-in-right animation-delay-300">
            <div className="relative w-full max-w-md mx-auto group">
              {/* Animated Background Cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-600/20 rounded-2xl transform rotate-3 scale-105 animate-pulse opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-slate-700/30 to-amber-500/20 rounded-2xl transform -rotate-2 scale-102 animate-pulse opacity-30 animation-delay-500"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-400/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 group-hover:shadow-amber-400/20">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/10 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
                
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] p-6">
                  <div className="relative w-full h-full bg-gradient-to-br from-cream-50/5 to-transparent rounded-xl overflow-hidden">
                    {/* Floating Geometric Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400/40 rounded-full animate-bounce animation-delay-300"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce animation-delay-700"></div>
                    <div className="absolute top-1/2 left-4 w-1 h-8 bg-gradient-to-b from-amber-400/20 to-transparent transform -rotate-12"></div>
                    
                    {/* Main Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={`/${getImageForPage(imageName)}`}
                          alt={`${title} - Legal Services`}
                          fill
                          className="object-contain filter brightness-110 contrast-110 drop-shadow-2xl"
                          sizes="(max-width: 768px) 300px, 400px"
                          priority
                        />
                      </div>
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10 pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-400/10 to-transparent"></div>
                
                {/* Animated Corner Elements */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-400/40 transform transition-all duration-300 group-hover:scale-110"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400/40 transform transition-all duration-300 group-hover:scale-110"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400/40 transform transition-all duration-300 group-hover:scale-110"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400/40 transform transition-all duration-300 group-hover:scale-110"></div>
              </div>
              
              {/* Floating Elements Around Container */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400/20 rounded-full blur-sm animate-ping animation-delay-1000"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-400/15 rounded-full blur animate-pulse animation-delay-1500"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-amber-400/25 transform rotate-45 animate-pulse animation-delay-800"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-12 text-cream-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.5 114.72 1200 0z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

// Helper function to get appropriate image for each page
const getImageForPage = (imageName: string): string => {
  // Image mapping based on your services array
  const imageMap: { [key: string]: string } = {
    'criminal': 'criminal.png',
    'crime': 'criminal.png',
    'property': 'property.png',
    'matrimonial': 'matrimonial.png',
    'insolvency': 'insolvency.png',
    'bankruptcy': 'insolvency.png',
    'arbitration': 'arbitration.png',
    'adr': 'arbitration.png',
    'corporate': 'corporate.png',
    'commercial': 'corporate.png',
    'banking': 'banking.png',
    'drt': 'banking.png',
    'recovery': 'recovery.png',
    'financial': 'recovery.png',
    'competition': 'competition.png',
    'cyber': 'cyber.png',
    'it': 'cyber.png',
    'mergers': 'mergers.png',
    'acquisitions': 'mergers.png',
    'environment': 'environment.png',
    'environmental': 'environment.png',
    'ngt': 'environment.png',
    'labour': 'labour.png',
    'labor': 'labour.png',
    'industrial': 'labour.png'
  };

  // Convert imageName to lowercase for matching
  const key = imageName.toLowerCase();
  
  // Return the mapped image or default to criminal.png
  return imageMap[key] || 'criminal.png';
};

export default PageBanner;