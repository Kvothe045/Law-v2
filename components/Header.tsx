'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Scale, Download, Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-100 via-blue-100 to-amber-100 border-b border-amber-300/40 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-3">
      <div className="flex justify-between items-center h-20">
  {/* Logo Section */}
  <div className="flex items-center">
    <div className="relative group">
      <img
        src="/logo.png"
        alt="GCS Law Firm"
        className="h-16 w-auto transition-all duration-500 group-hover:scale-110 shadow-lg image-rendering-crisp"
        style={{
          imageRendering: 'crisp-edges',
          // imageRendering: '-webkit-optimize-contrast',
          // imageRendering: 'pixelated'
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
        }}
      />
      <div className="hidden items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Scale className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-black bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 bg-clip-text text-transparent">
          GCS Law
        </span>
      </div>
    </div>
  </div>

          {/* Center & Right Section */}
          <div className="flex items-center space-x-8">
            {/* Download Brochure - Premium Design */}
            <a
              href="/brochure.pdf"
              download
              className="group relative hidden md:flex items-center space-x-3 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 text-slate-800 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="relative flex items-center space-x-2">
                <Scale className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-bold tracking-wide">Download Brochure</span>
              </div>
            </a>

            {/* Social Links - Ultra Modern Design */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/yatish.goel"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5 relative z-10">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fyatishgoel"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5 relative z-10">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/company/gcsl-law-firm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5 relative z-10">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S.02 4.88.02 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.02 8h5v16h-5V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}