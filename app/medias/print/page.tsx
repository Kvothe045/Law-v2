'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn, Download, ChevronLeft, ChevronRight, Grid3X3, RotateCcw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ============================================
// IMAGES CONFIGURATION - Easy to modify
// ============================================
const newspaperImages = [
  {
    src: '/award.png',
    alt: 'Award Recognition',
    title: 'Legal Excellence Award',
    category: 'Awards',
    date: '2024'
  },
  {
    src: '/criminal.png',
    alt: 'Criminal Law Coverage',
    title: 'Criminal Law Expertise',
    category: 'Legal Practice',
    date: '2024'
  }
  // Add more images here easily:
  // {
  //   src: '/images/corporate.png',
  //   alt: 'Corporate Law',
  //   title: 'Corporate Legal Services',
  //   category: 'Corporate',
  //   date: '2024'
  // }
]

interface ImageItem {
  src: string
  alt: string
  title: string
  category: string
  date: string
}

export default function NewspaperPage() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openFullscreen = (image: ImageItem, index: number) => {
    setSelectedImage(image)
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
    setSelectedIndex(-1)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedIndex === -1) return
    
    let newIndex = direction === 'next' 
      ? (selectedIndex + 1) % newspaperImages.length
      : selectedIndex === 0 
        ? newspaperImages.length - 1 
        : selectedIndex - 1
    
    setSelectedImage(newspaperImages[newIndex])
    setSelectedIndex(newIndex)
  }

  const handleImageLoad = (src: string) => {
    setImageLoaded(prev => ({ ...prev, [src]: true }))
  }

  // Close fullscreen with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFullscreen()
      if (e.key === 'ArrowLeft') navigateImage('prev')
      if (e.key === 'ArrowRight') navigateImage('next')
    }
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedImage, selectedIndex])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
          
          {/* Animated Background */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-amber-300/30 backdrop-blur-sm">
              <Grid3X3 className="w-5 h-5 animate-pulse" />
              <span className="tracking-wide">Media Gallery</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              News &{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Recognition
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our achievements, media coverage, and recognition in the legal industry
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
              <Grid3X3 className="w-4 h-4 text-amber-400" />
              <span>Media Gallery</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Media Coverage
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Browse through our collection of awards, recognitions, and media features
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newspaperImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openFullscreen(image, index)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {!imageLoaded[image.src] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover group-hover:scale-110 transition-transform duration-700 ${imageLoaded[image.src] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(image.src)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white">
                          <h3 className="font-bold text-sm mb-1 truncate">{image.title}</h3>
                          <p className="text-xs text-white/80">{image.category}</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ZoomIn className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                      {image.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{image.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-slate-600 text-sm">Click to view full size</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {newspaperImages.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Grid3X3 className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No Images Available</h3>
              <p className="text-slate-600">Check back later for updates to our media gallery.</p>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Controls */}
          <div className="absolute top-6 right-6 z-10 flex items-center space-x-3">
            <button
              onClick={() => navigateImage('prev')}
              disabled={newspaperImages.length <= 1}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              disabled={newspaperImages.length <= 1}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={closeFullscreen}
              className="w-12 h-12 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center text-white hover:bg-red-500/30 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              {selectedIndex + 1} of {newspaperImages.length}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
              <div className="flex items-center justify-center space-x-4 text-white/80">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                  {selectedImage.category}
                </span>
                <span className="text-sm">{selectedImage.date}</span>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeFullscreen}
          ></div>
        </div>
      )}

      <Footer />
    </div>
  )
}