
//api/videos/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { VideoService } from '@/lib/db';


async function checkAuth() {
  const session = await getServerSession();
  return session !== null;
}

export async function GET(request: NextRequest) {
  try {
    const videos = await VideoService.getAllVideos();
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, url, thumbnail } = body;

    if (!title || !url) {
      return NextResponse.json({ error: 'Title and URL are required' }, { status: 400 });
    }

    const newVideo = await VideoService.createVideo({ 
      title, 
      description: description || '', 
      url, 
      thumbnail: thumbnail || '' 
    });
    
    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    console.error('Error creating video:', error);
    return NextResponse.json({ error: 'Failed to create video' }, { status: 500 });
  }
}