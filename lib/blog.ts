// lib/blog.ts
import fs from 'fs';
import path from 'path';
import { BlogPost, CreateBlogPost, UpdateBlogPost } from '@/types/blog';

const BLOG_DATA_PATH = path.join(process.cwd(), 'data', 'blogs.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  if (!fs.existsSync(BLOG_DATA_PATH)) {
    fs.writeFileSync(BLOG_DATA_PATH, JSON.stringify([], null, 2));
  }
};

export const getAllBlogs = (): BlogPost[] => {
  try {
    ensureDataDirectory();
    const data = fs.readFileSync(BLOG_DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
};

export const getBlogById = (id: string): BlogPost | null => {
  const blogs = getAllBlogs();
  return blogs.find(blog => blog.id === id) || null;
};

export const getPublishedBlogs = (): BlogPost[] => {
  return getAllBlogs()
    .filter(blog => blog.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const createBlog = (blogData: CreateBlogPost): BlogPost => {
  ensureDataDirectory();
  const blogs = getAllBlogs();
  
  const newBlog: BlogPost = {
    ...blogData,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  blogs.push(newBlog);
  fs.writeFileSync(BLOG_DATA_PATH, JSON.stringify(blogs, null, 2));
  
  return newBlog;
};

export const updateBlog = (updateData: UpdateBlogPost): BlogPost | null => {
  ensureDataDirectory();
  const blogs = getAllBlogs();
  const index = blogs.findIndex(blog => blog.id === updateData.id);
  
  if (index === -1) return null;
  
  const updatedBlog: BlogPost = {
    ...blogs[index],
    ...updateData,
    updatedAt: new Date().toISOString(),
  };
  
  blogs[index] = updatedBlog;
  fs.writeFileSync(BLOG_DATA_PATH, JSON.stringify(blogs, null, 2));
  
  return updatedBlog;
};

export const deleteBlog = (id: string): boolean => {
  ensureDataDirectory();
  const blogs = getAllBlogs();
  const filteredBlogs = blogs.filter(blog => blog.id !== id);
  
  if (filteredBlogs.length === blogs.length) return false;
  
  fs.writeFileSync(BLOG_DATA_PATH, JSON.stringify(filteredBlogs, null, 2));
  return true;
};

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};