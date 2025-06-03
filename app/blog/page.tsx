// app/blog/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { PlusIcon, EditIcon, TrashIcon, ImageIcon, SaveIcon, XIcon, CalendarIcon, UserIcon, EyeIcon } from "lucide-react";
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

export default function BlogAdminPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    author: 'By Yatish Kumar Goel, Advocate',
    summary: '',
    content: '',
    image: ''
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({ ...prev, image: data.imageUrl }));
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  // In your BlogAdminPage component, replace the handleSave function:

const handleSave = async () => {
  if (!formData.title.trim() || !formData.content.trim()) {
    alert('Title and content are required');
    return;
  }

  setSaving(true);
  try {
    // FIX: Use correct API endpoint for editing
    const url = editingBlog ? `/api/blogs/${editingBlog.id}` : '/api/blogs';
    const method = editingBlog ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      await fetchBlogs();
      resetForm();
      setShowEditor(false);
    } else {
      alert('Failed to save blog');
    }
  } catch (error) {
    console.error('Error saving blog:', error);
    alert('Failed to save blog');
  } finally {
    setSaving(false);
  }
};

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      author: blog.author,
      summary: blog.summary,
      content: blog.content,
      image: blog.image
    });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchBlogs();
      } else {
        alert('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      author: 'By Yatish Kumar Goel, Advocate',
      summary: '',
      content: '',
      image: ''
    });
    setEditingBlog(null);
  };

  const handleCancel = () => {
    resetForm();
    setShowEditor(false);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-cream-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <div className="text-xl text-blue-900 font-semibold">Loading Blog Management...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-cream-50 to-blue-50 flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>

      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">Blog Management</h1>
              <p className="text-slate-600 text-lg">Create, edit, and manage your legal news articles</p>
            </div>
            <button
              onClick={() => setShowEditor(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <PlusIcon className="w-6 h-6" />
              <span>New Article</span>
            </button>
          </div>

          {/* Blog Editor Modal */}
          {showEditor && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-900">
                    {editingBlog ? 'Edit Article' : 'Create New Article'}
                  </h2>
                  <button
                    onClick={handleCancel}
                    className="p-3 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <XIcon className="w-6 h-6 text-slate-600" />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">
                      Article Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800 text-lg"
                      placeholder="Enter a compelling title for your article..."
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">
                      Author
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800"
                    />
                  </div>

                  {/* Summary */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">
                      Article Summary
                    </label>
                    <textarea
                      value={formData.summary}
                      onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                      rows={3}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800 resize-vertical"
                      placeholder="Write a brief summary of your article..."
                    />
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">
                      Header Image
                    </label>
                    <div className="flex items-center space-x-6">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleImageUpload(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex items-center space-x-3 px-6 py-3 border-2 border-amber-300 rounded-xl cursor-pointer hover:bg-amber-50 transition-colors text-blue-900 font-medium"
                      >
                        <ImageIcon className="w-5 h-5" />
                        <span>{uploading ? 'Uploading...' : 'Upload Image'}</span>
                      </label>
                      {formData.image && (
                        <div className="relative">
                          <img
                            src={formData.image}
                            alt="Preview"
                            className="w-24 h-24 object-cover rounded-xl border-2 border-amber-200 shadow-md"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">
                      Article Content
                    </label>
                    <div className="text-xs text-slate-600 mb-3 bg-blue-50 p-3 rounded-lg">
                      You can use HTML formatting: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;blockquote&gt;, etc.
                    </div>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      rows={20}
                      className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-vertical text-slate-800 font-mono text-sm"
                      placeholder="Write your full article content here..."
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end space-x-4 pt-6 border-t border-amber-200">
                    <button
                      onClick={handleCancel}
                      className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving || uploading}
                      className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:from-blue-800 hover:to-blue-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      <SaveIcon className="w-5 h-5" />
                      <span>{saving ? 'Saving...' : 'Save Article'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog List */}
          <div className="grid gap-8">
            {blogs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl shadow-lg border border-amber-200">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PlusIcon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">No Articles Yet</h3>
                <p className="text-slate-600 text-lg mb-8">Get started by creating your first legal news article.</p>
                <button
                  onClick={() => setShowEditor(true)}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Create First Article
                </button>
              </div>
            ) : (
              blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-3xl shadow-lg p-8 border border-amber-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-blue-700">
                          <UserIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="text-sm">{new Date(blog.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4 leading-tight">{blog.title}</h3>
                      
                      {blog.summary && (
                        <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                          {truncateText(blog.summary, 150)}
                        </p>
                      )}
                      
                      <p className="text-slate-500 mb-6 leading-relaxed">
                        {truncateText(blog.content.replace(/<[^>]*>/g, ''), 200)}
                      </p>
                      
                      <div className="text-sm text-slate-400 mb-6">
                        <span>Created: {new Date(blog.createdAt).toLocaleDateString()}</span>
                        {blog.updatedAt !== blog.createdAt && (
                          <span className="ml-4">Updated: {new Date(blog.updatedAt).toLocaleDateString()}</span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`/news/${blog.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 text-blue-700 hover:bg-blue-50 rounded-xl transition-colors font-semibold border border-blue-200"
                        >
                          <EyeIcon className="w-4 h-4" />
                          <span>Preview</span>
                        </a>
                        <button
                          onClick={() => handleEdit(blog)}
                          className="flex items-center space-x-2 px-6 py-3 text-amber-700 hover:bg-amber-50 rounded-xl transition-colors font-semibold border border-amber-200"
                        >
                          <EditIcon className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="flex items-center space-x-2 px-6 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-semibold border border-red-200"
                        >
                          <TrashIcon className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>

                    {/* Image Section */}
                    {blog.image && (
                      <div className="lg:w-80 flex-shrink-0">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 lg:h-64 object-cover rounded-2xl border border-amber-200 shadow-md"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}