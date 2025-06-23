import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { BlogService, initializeDatabase } from '@/lib/db';

// Initialize database on first request
let dbInitialized = false;

async function ensureDbInitialized() {
  if (!dbInitialized) {
    await initializeDatabase();
    dbInitialized = true;
  }
}

async function checkAuth(request: NextRequest) {
  // Check session token from cookies
  const session = await getServerSession();
  return session !== null;
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication for admin routes
    const isAuthenticated = await checkAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await ensureDbInitialized();
    const blogs = await BlogService.getAllBlogs();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const isAuthenticated = await checkAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await ensureDbInitialized();
    const body = await request.json();
    const { title, author, summary, content, image } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const blog = await BlogService.createBlog({
      title,
      author: author || 'By Yatish Kumar Goel, Advocate',
      // summary: summary || '',
      content,
      image: image || '',
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}