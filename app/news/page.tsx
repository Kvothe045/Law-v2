// app/news/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarIcon, UserIcon, ArrowRightIcon, Sparkles, BookOpen, TrendingUp, Star } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export default function NewsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchBlogs();
    setIsVisible(true);
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      } else {
        setError('Failed to load blog posts');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex flex-col">
        <div className="sticky top-0 z-50">
          <Header />
          <Navbar />
        </div>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-200 border-t-amber-500 mx-auto shadow-lg"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 blur-xl animate-pulse"></div>
            </div>
            <div className="text-2xl text-slate-700 font-bold mb-2">Loading Latest News</div>
            <div className="text-slate-500">Fetching the most recent articles...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex flex-col">
        <div className="sticky top-0 z-50">
          <Header />
          <Navbar />
        </div>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Unable to Load News</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
            >
              <span>Try Again</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative py-2 overflow-hidden">
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
              <BookOpen className="w-5 h-5 animate-bounce group-hover:animate-spin transition-all duration-300" />
              <span className="tracking-wide">Latest News & Insights</span>
              <Sparkles className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Stay{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Informed
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our latest articles, legal insights, and industry updates to stay ahead 
              in the ever-evolving world of law and business
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-20 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{(blogs.length)}+</div>
                <div className="text-blue-100 text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">50K+</div>
                <div className="text-blue-100 text-sm">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">Weekly</div>
                <div className="text-blue-100 text-sm">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <TrendingUp className="w-16 h-16 text-slate-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">No Articles Available</h3>
              <p className="text-slate-600 text-lg">Check back soon for the latest news and insights</p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-6">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span>Featured Articles</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Latest{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    Legal Insights
                  </span>
                </h2>
              </div>

              {/* Articles Grid */}
              <div className="space-y-8">
                {blogs.map((blog, index) => (
                  <article
                    key={blog.id}
                    className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden cursor-pointer transform hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => router.push(`/news/${blog.id}`)}
                  >
                    {/* Background Gradient */}
                    <div className="group relative z-10 overflow-hidden rounded-xl shadow-sm">
  {/* Background gradient hover effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

  <div className="relative z-10 flex flex-col lg:flex-row">
    {/* Image Section */}
    <div className="lg:w-2/5 relative overflow-hidden">
      <div className="relative h-64 sm:h-80 lg:h-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/api/placeholder/600/400';
          }}
        />
        {/* Top dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md backdrop-blur-sm">
          Latest
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="lg:w-3/5 p-4 sm:p-6 lg:p-10 flex flex-col justify-between bg-white">
      {/* Title & Summary */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors duration-300 leading-snug">
          {blog.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed break-words line-clamp-3 sm:line-clamp-none">
          {blog.summary}
        </p>
      </div>

      {/* detail Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between mt-6 pt-6 border-t border-slate-100">
        {/* Author & Date */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {/* Author */}
          <div className="flex items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-md">
              <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="ml-2 sm:ml-3">
              <div className="text-sm font-semibold text-slate-800">{blog.author}</div>
              <div className="text-xs text-slate-500">Author</div>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
              <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="ml-2 sm:ml-3">
              <div className="text-sm font-semibold text-slate-800">{formatDate(blog.createdAt)}</div>
              <div className="text-xs text-slate-500">Published</div>
            </div>
          </div>
        </div>

        {/* Read Article CTA */}
        <div className="flex items-center justify-end sm:justify-start">
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <span className="text-sm sm:text-base text-amber-400 font-semibold group-hover:text-amber-600 transition-colors duration-300">
              Read Article
            </span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-500 group-hover:from-amber-500 group-hover:to-yellow-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                    
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}