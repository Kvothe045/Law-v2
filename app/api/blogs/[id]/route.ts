// app/api/blogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { BlogPost } from '../route';

const BLOGS_DIR = path.join(process.cwd(), 'blogs');

function getBlogFilePath(id: string) {
  return path.join(BLOGS_DIR, `${id}.json`);
}

function generateSummary(content: string, maxLength: number = 200): string {
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = getBlogFilePath(params.id);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const blog = JSON.parse(fileContent);

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = getBlogFilePath(params.id);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const body = await request.json();
    const { title, author, content, image } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const existingContent = fs.readFileSync(filePath, 'utf-8');
    const existingBlog = JSON.parse(existingContent);

    const updatedBlog: BlogPost = {
      ...existingBlog,
      title,
      author: author || 'By Yatish Kumar Goel, Advocate',
      summary: generateSummary(content),
      content,
      image: image || existingBlog.image,
      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(filePath, JSON.stringify(updatedBlog, null, 2));

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = getBlogFilePath(params.id);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}