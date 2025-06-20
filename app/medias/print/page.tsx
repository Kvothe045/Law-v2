"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ZoomIn,
  Download,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newspaperImages, ImageItem } from "@/data/newspaperImages";

export default function NewspaperPage() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openFullscreen = (image: ImageItem, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedIndex === -1) return;
    let newIndex =
      direction === "next"
        ? (selectedIndex + 1) % newspaperImages.length
        : selectedIndex === 0
        ? newspaperImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(newspaperImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({ ...prev, [src]: true }));
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [selectedImage, selectedIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-bold shadow-2xl border border-amber-300/30 backdrop-blur-sm">
              <Grid3X3 className="w-5 h-5 animate-pulse" />
              <span className="tracking-wide">Media Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              News &{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Recognition
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our achievements, media coverage, and recognition in the legal industry
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold shadow-xl mb-5 sm:mb-6">
              <Grid3X3 className="w-4 h-4 text-amber-400" />
              <span>Media Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Media Coverage
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Dive into our collection of impactful news coverage, legal breakthroughs, and public recognition through authentic press clippings.
            </p>
          </div>

          {/* Image section */}
          <div className="space-y-16 sm:space-y-20">
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn {
                animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              }
              .news-card:hover .news-image {
                transform: scale(1.05);
              }
            `}</style>

            {newspaperImages.map((image, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={image.src}
                  className={`news-card group grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 rounded-xl bg-[#fffaf0] shadow-2xl border border-gray-200 ${
                    isVisible ? "animate-fadeIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image Section */}
                  <div className={`relative w-full h-64 sm:h-72 lg:h-[28rem] overflow-hidden ${isEven ? "order-1" : "lg:order-2"}`}>
                    {!imageLoaded[image.src] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-[3px] border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="news-image object-cover rounded-xl shadow-md transition-transform duration-700"
                      onLoad={() => handleImageLoad(image.src)}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text Section */}
                  <div className={`relative px-4 sm:px-6 lg:px-10 py-6 sm:py-8 ${isEven ? "lg:order-2" : "order-1"}`}>
                    <div className="absolute top-0 left-2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-sm">
                        {image.category}
                      </span>
                      <span className="text-xs text-gray-500">{image.date}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {image.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                      {image.description || "Brief description goes here..."}
                    </p>
                    <button
                      className="text-sm text-blue-600 font-medium flex items-center group hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        openFullscreen(image, index);
                      }}
                    >
                      Read full story
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Controls */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => navigateImage("prev")}
              disabled={newspaperImages.length <= 1}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateImage("next")}
              disabled={newspaperImages.length <= 1}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={closeFullscreen}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center text-white hover:bg-red-500/30 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Counter */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm font-medium">
              {selectedIndex + 1} of {newspaperImages.length}
            </div>
          </div>

          {/* Image Display */}
          <div className="relative max-w-full max-h-[90vh] w-full h-full flex items-center justify-center">
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

          {/* Click Outside */}
          <div className="absolute inset-0 -z-10" onClick={closeFullscreen}></div>
        </div>
      )}

      <Footer />
    </div>
  );
}
