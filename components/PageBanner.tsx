"use client"
// components/PageBanner.tsx
import React from 'react';

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
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
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

          {/* Image Section */}
          <div className="relative animate-fade-in-right animation-delay-300">
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-amber-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-cream-200/20 rounded-full animate-pulse"></div>
              
              {/* Image Container */}
              <div className="absolute inset-8 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-cream-100/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-6xl text-amber-400 opacity-80">
                    {getIconForPage(imageName)}
                  </div>
                </div>
              </div>
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

// Helper function to get appropriate icon for each page
const getIconForPage = (imageName: string) => {
  switch (imageName.toLowerCase()) {
    case 'criminal':
    case 'crime':
      return '⚖️';
    case 'property':
      return '🏢';
    case 'matrimonial':
      return '💍';
    case 'insolvency':
    case 'bankruptcy':
      return '📊';
    default:
      return '⚖️';
  }
};

export default PageBanner;