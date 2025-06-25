
//api/videos/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { VideoService } from '@/lib/db';


async function checkAuth() {
  const session = await getServerSession();
  return session !== null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const video = await VideoService.getVideoById(params.id);
    if (!video) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }
    
    return NextResponse.json(video);
  } catch (error) {
    console.error('Error fetching video:', error);
    return NextResponse.json({ error: 'Failed to fetch video' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, url, thumbnail } = body;

    if (!title || !url) {
      return NextResponse.json(
        { error: 'Title and URL are required' }, 
        { status: 400 }
      );
    }

    const updatedVideo = await VideoService.updateVideo(params.id, { 
      title, 
      description: description || '', 
      url, 
      thumbnail: thumbnail || '' 
    });

    if (!updatedVideo) {
      return NextResponse.json(
        { error: 'Video not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedVideo);
  } catch (error) {
    console.error('Error updating video:', error);
    return NextResponse.json(
      { error: 'Failed to update video' }, 
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const success = await VideoService.deleteVideo(params.id);
    if (!success) {
      return NextResponse.json(
        { error: 'Video not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Video deleted successfully' }, 
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting video:', error);
    return NextResponse.json(
      { error: 'Failed to delete video' }, 
      { status: 500 }
    );
  }
}