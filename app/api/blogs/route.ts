// app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOGS_DIR = path.join(process.cwd(), 'blogs');

// Ensure blogs directory exists
if (!fs.existsSync(BLOGS_DIR)) {
  fs.mkdirSync(BLOGS_DIR, { recursive: true });
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

function getBlogFilePath(id: string) {
  return path.join(BLOGS_DIR, `${id}.json`);
}

function generateSummary(content: string, maxLength: number = 200): string {
  // Remove HTML tags and get first few sentences
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  if (plainText.length <= maxLength) return plainText;
  
  const sentences = plainText.split(/[.!?]+/);
  let summary = '';
  
  for (const sentence of sentences) {
    if ((summary + sentence).length > maxLength) break;
    summary += sentence + '. ';
  }
  
  return summary.trim() || plainText.substring(0, maxLength) + '...';
}

export async function GET() {
  try {
    const files = fs.readdirSync(BLOGS_DIR).filter(file => file.endsWith('.json'));
    const blogs: BlogPost[] = [];

    for (const file of files) {
      try {
        const filePath = path.join(BLOGS_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const blog = JSON.parse(fileContent);
        blogs.push(blog);
      } catch (error) {
        console.error(`Error reading blog file ${file}:`, error);
      }
    }

    // Sort by createdAt (newest first)
    blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, author, content, image } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const id = `blog_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const blog: BlogPost = {
      id,
      title,
      author: author || 'By Yatish Kumar Goel, Advocate',
      summary: generateSummary(content),
      content,
      image: image || '/api/placeholder/600/400',
      createdAt: now,
      updatedAt: now,
    };

    const filePath = getBlogFilePath(id);
    fs.writeFileSync(filePath, JSON.stringify(blog, null, 2));

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}