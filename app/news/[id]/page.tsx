// app/news/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  UserIcon, 
  ShareIcon, 
  LinkIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  MessageCircleIcon,
  BookmarkIcon,
  ClockIcon,
  EyeIcon
} from "lucide-react";
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

export default function IndividualBlogPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [readingTime, setReadingTime] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchBlog(params.id as string);
    }
  }, [params.id]);

  useEffect(() => {
    if (blog) {
      // Calculate reading time (average 200 words per minute)
      const wordCount = blog.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
      setReadingTime(Math.ceil(wordCount / 200));
    }
  }, [blog]);

  const fetchBlog = async (id: string) => {
    try {
      const response = await fetch(`/api/blogs/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data);
      } else if (response.status === 404) {
        setError('Blog post not found');
      } else {
        setError('Failed to load blog post');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = blog?.title || '';
  const shareText = blog?.summary || blog?.title || '';

  const handleShare = async (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedText = encodeURIComponent(shareText);
  
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20${encodedTitle}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=Check%20out%20this%20article:%20${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=Check%20out%20this%20article`,
      whatsapp: `https://wa.me/?text=Check%20out%20this%20article:%20${encodedTitle}%20${encodedUrl}`,
      native: async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: `Check out this article: ${shareTitle}`,
              text: shareText,
              url: shareUrl
            });
          } catch (err) {
            console.log('Error sharing:', err);
          }
        }
      }
    };
  
    if (platform === 'native') {
      await shareUrls.native();
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls] as string, '_blank', 'width=600,height=400');
    }
    setShowShareModal(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-orange-100 flex flex-col">
        <div className="sticky top-0 z-50">
          <Header />
          <Navbar />
        </div>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-xl text-gray-700 font-medium">Loading blog post...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="sticky top-0 z-50">
          <Header />
          <Navbar />
        </div>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="text-6xl text-gray-300 mb-6">📄</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {error || 'Blog post not found'}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The blog post you're looking for might have been removed or doesn't exist.
            </p>
            <button
              onClick={() => router.push('/news')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-200 mx-auto shadow-lg"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Back to News</span>
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>

      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <div className="relative">
          {/* Hero Image with Better Overlay */}
          {blog.image && (
            <div className="relative h-[70vh] overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/api/placeholder/1200/400';
                }}
              />
              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
              
              {/* Floating Content Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="max-w-4xl mx-auto">
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                    {/* Category Tag */}
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-100 text-sm font-medium mb-4">
                      <span>Featured Article</span>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
                      {blog.title}
                    </h1>
                    
                    {/* Meta Info Row */}
                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                      <div className="flex items-center space-x-2">
                        <UserIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-sm">{formatDate(blog.createdAt)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm">{readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Back Button - Floating */}
          <div className="absolute top-6 left-6 z-20">
            <button
              onClick={() => router.push('/news')}
              className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white font-medium transition-all duration-200 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/50"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>

          {/* Action Buttons - Floating */}
          <div className="absolute top-6 right-6 z-20 flex space-x-3">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-200 shadow-lg hover:shadow-xl ${
                isBookmarked 
                  ? 'bg-blue-500 text-white border-blue-400' 
                  : 'bg-white/90 text-gray-800 border-white/50 hover:bg-white'
              }`}
            >
              <BookmarkIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white border border-white/50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ShareIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Title (if no hero image) */}
          {!blog.image && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {blog.title}
              </h1>
            </div>
          )}

          {/* Meta Information */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <UserIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Author</div>
                  <div className="font-semibold text-gray-900">{blog.author}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CalendarIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Published</div>
                  <div className="font-semibold text-gray-900">{formatDate(blog.createdAt)}</div>
                </div>
              </div>
              {blog.updatedAt !== blog.createdAt && (
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <CalendarIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Updated</div>
                    <div className="font-semibold text-gray-900">{formatDate(blog.updatedAt)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Blog Summary */}
          {blog.summary && (
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Summary</h3>
              <p className="text-blue-800 leading-relaxed">{blog.summary}</p>
            </div>
          )}

          {/* Blog Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:text-black prose-headings:font-bold
                prose-p:text-black prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-800 hover:prose-a:underline
                prose-strong:text-black prose-strong:font-semibold
                prose-ul:text-black prose-ol:text-black
                prose-li:mb-2 prose-li:text-black
                prose-blockquote:text-black prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:text-gray-100"
              style={{ color: '#000000' }}
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* Enhanced Share Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-full">
                <ShareIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="hidden sm:inline">Twitter</span>
              </button>
              
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden sm:inline">Facebook</span>
              </button>
              
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center justify-center space-x-2 bg-blue-700 text-white px-4 py-3 rounded-xl hover:bg-blue-800 transition-colors font-medium shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="hidden sm:inline">LinkedIn</span>
              </button>
              
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition-colors font-medium shadow-sm hover:shadow-md"
              >
                <MessageCircleIcon className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
            </div>

            <div className="pt-6 border-t border-blue-200">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={copyToClipboard}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    copySuccess 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>{copySuccess ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}